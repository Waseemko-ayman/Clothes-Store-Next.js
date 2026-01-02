/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Edit2, Trash2, Search, Hash } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ar } from 'date-fns/locale';
import { usePathname } from 'next/navigation';
import useIsMobile from '@/Hooks/useIsMobile';
import { PATHS } from '@/mock/paths';
import { API_URL } from '@/config/api';
import Button from '@/components/atoms/Button';
import ResponsiveDialogDrawer from '@/components/organism/ResponsiveDialogDrawer';
import { DeleteWarningContent } from '../DeleteWarningContent';
import Loading from '@/components/atoms/Loading';
import { DataTableBodyProps } from '@/interfaces';
const DynamicImage = dynamic(() => import('next/image'), {
  loading: () => <Loading spinnerSize={25} showText={false} />,
  ssr: false,
});

function formatHeader(key: string) {
  if (key.startsWith('user_')) {
    const parts = key.split('_');
    const keyVar = parts[1] ?? '';
    return keyVar
      ? `User ${keyVar.charAt(0).toUpperCase() + keyVar.slice(1)}`
      : 'User';
  }

  return key.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

const DataTableBody = <T extends { id: string | number }>({
  columns,
  data,
  onEdit,
  onDelete,
  searchTerm,
  showEdit,
  showActionsColumn = true,
  // onRowPatched,
  deleteLocation,
}: DataTableBodyProps<T>) => {
  // Delete DialogDrawer
  const [openDeleteId, setOpenDeleteId] = useState<string | null>(null);

  const isMobile = useIsMobile();

  const pathname = usePathname();
  const isOrdersPage = pathname?.includes('/dashboard/orders');
  const isCustomerPage = pathname?.includes('/dashboard/customers');
  const isEmployeePage = pathname?.includes('/dashboard/employees');

  const filteredColumns = columns.filter((col) => {
    if (col === 'shipping_method') {
      return !data.some((row) =>
        ['account_id', 'multi_id', 'access'].includes((row as any)[col])
      );
    }
    return true;
  });

  // === visibleColumns ===
  const visibleColumns = filteredColumns.reduce<(keyof T | string)[]>(
    (acc, col) => {
      if (
        col === 'updated_at' ||
        col === 'user_id' ||
        col === 'slug' ||
        col === 'quantity' ||
        col === 'ratings'
      )
        return acc;

      const sampleValue = data.find((item) => item[col] != null)?.[col];

      if (col === 'user' && sampleValue && typeof sampleValue === 'object') {
        return [
          ...acc,
          ...Object.keys(sampleValue).map((key) => `user_${key}`),
        ];
      }

      // If the value is object and it contains ar/en → we separate it
      if (
        sampleValue &&
        typeof sampleValue === 'object' &&
        ('ar' in sampleValue || 'en' in sampleValue)
      ) {
        return [...acc, `${String(col)}_ar`, `${String(col)}_en`];
      }

      return [...acc, col];
    },
    []
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-center">
        <thead className="bg-gray-50">
          <tr className="truncate whitespace-nowrap overflow-hidden">
            {visibleColumns.map((col) => (
              <th
                key={String(col)}
                className="px-6 py-3 text-sm font-medium text-gray-500"
              >
                {formatHeader(String(col))}
              </th>
            ))}
            {showActionsColumn && (onEdit || onDelete) && (
              <th className="px-6 py-3 text-sm font-medium text-gray-500">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((row) => {
              const rowLink = isOrdersPage
                ? PATHS.DASHBOARD.ORDERS.ITEM.replace(':id', String(row.id))
                : undefined;

              return (
                <tr
                  key={row.id}
                  className={`hover:bg-gray-50 ${
                    isOrdersPage ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => rowLink && (window.location.href = rowLink)}
                >
                  {visibleColumns.map((col) => {
                    const columnKey = String(col);

                    if (columnKey === 'status') {
                      return (
                        <td
                          key={columnKey}
                          className="px-6 py-4 max-w-xs truncate whitespace-nowrap overflow-hidden "
                        >
                          <div className="flex items-center justify-center gap-1 p-2 rounded-xl">
                            {/* {isOrdersPage
                              ? getStatusIcon(String(row[col]))
                              : isTicketsPage &&
                                getTicketStatusIcon(String(row[col]))} */}
                            <span>{String(row[col])}</span>
                          </div>
                        </td>
                      );
                    }

                    if (
                      columnKey === 'gallery' &&
                      Array.isArray((row as any)[col])
                    ) {
                      const images = (row as any)[col] as {
                        id: number;
                        image: string;
                      }[];
                      return (
                        <td
                          key={columnKey}
                          className="px-6 py-4 min-w-xs whitespace-nowrap overflow-hidden"
                        >
                          {images.length > 0 ? (
                            images.length > 1 ? (
                              <div className="flex items-center flex-wrap gap-1 justify-center">
                                {images.map((img, idx) => (
                                  <DynamicImage
                                    key={idx}
                                    src={
                                      img.image
                                        ? // ? `${API_URL}${img.image}`
                                          `/assets/products/${img.image}.jpg`
                                        : '/assets/no-image-available.webp'
                                    }
                                    alt={`image-${idx}`}
                                    width={80}
                                    height={80}
                                    className="w-18 h-18 object-cover rounded-md border border-gray-200"
                                    onError={(e) => {
                                      (
                                        e.currentTarget as HTMLImageElement
                                      ).style.display = 'none';
                                    }}
                                  />
                                ))}
                              </div>
                            ) : (
                              <DynamicImage
                                src={
                                  images[0].image
                                    ? `${API_URL}${images[0].image}`
                                    : '/assets/no-image-available.webp'
                                }
                                alt={`image`}
                                width={100}
                                height={100}
                                className="mx-auto rounded-md border border-gray-200"
                                onError={(e) => {
                                  (
                                    e.currentTarget as HTMLImageElement
                                  ).style.display = 'none';
                                }}
                              />
                            )
                          ) : (
                            'unavailable'
                          )}
                        </td>
                      );
                    }

                    if (
                      (columnKey === 'image' || columnKey === 'photo') &&
                      typeof (row as any)[col] === 'string'
                    ) {
                      return (
                        <td key={columnKey}>
                          <DynamicImage
                            src={
                              // `${API_URL}${(row as any)[col]}` ||
                              `/assets/products/${(row as any)[col]}.jpg` ||
                              '/assets/no-image-available.webp'
                            }
                            alt={columnKey}
                            width={100}
                            height={100}
                            className="w-20 h-20 object-cover rounded-md border border-gray-200"
                            onError={(e) => {
                              (
                                e.currentTarget as HTMLImageElement
                              ).style.display = 'none';
                            }}
                          />
                        </td>
                      );
                    }

                    // === التعديل هنا ===
                    const rawValue = (row as any)[col];

                    const cellValue =
                      rawValue === null ||
                      rawValue === undefined ||
                      rawValue === ''
                        ? 'unavailable'
                        : Array.isArray(rawValue)
                        ? rawValue.join(', ') // لو القيمة مصفوفة، نجمعها كنص
                        : String(rawValue);

                    return (
                      <td
                        key={columnKey}
                        className="px-6 py-4 max-w-xs truncate whitespace-nowrap overflow-hidden"
                        title={String(cellValue)}
                      >
                        {col === 'icon' && cellValue ? (
                          <div className="flex justify-center">
                            <DynamicImage
                              src={
                                `${API_URL}${cellValue}` ||
                                '/assets/no-image-available.webp'
                              }
                              alt={String(col)}
                              width={80}
                              height={80}
                              className="w-16 h-16 object-contain"
                              onError={(e) => {
                                (
                                  e.currentTarget as HTMLImageElement
                                ).style.display = 'none';
                              }}
                            />
                          </div>
                        ) : [
                            'price',
                            'price_before',
                            'final_price',
                            'discount',
                          ].includes(String(col)) &&
                          cellValue &&
                          typeof cellValue === 'object' ? (
                          `${(cellValue as any).amount ?? ''} ${
                            (cellValue as any).currency ?? ''
                          }`
                        ) : cellValue != null ? (
                          col === 'created_at' ? (
                            formatDistanceToNow(new Date(cellValue), {
                              addSuffix: true,
                              locale: ar,
                            })
                          ) : col === 'user' ? (
                            String((cellValue as any).name ?? 'unavailable')
                          ) : (
                            String(cellValue)
                          )
                        ) : (
                          'unavailable'
                        )}
                      </td>
                    );
                  })}

                  {showActionsColumn && (onEdit || onDelete) && (
                    <td className="px-2 space-x-1 whitespace-nowrap">
                      {onEdit && showEdit !== false ? (
                        <Button
                          handleClick={() => onEdit(row.id)}
                          otherClassName="!px-4 text-gray-400 bg-transparent hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                      ) : (
                        isCustomerPage ||
                        (isEmployeePage && <p>UserPermissionsDrawer</p>)
                      )}
                      {onDelete && (
                        <ResponsiveDialogDrawer
                          trigger={
                            <Button
                              handleClick={() =>
                                setOpenDeleteId(String(row.id))
                              }
                              otherClassName="!px-4 text-gray-400 bg-transparent hover:text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          }
                          open={openDeleteId === String(row.id)}
                          setOpen={(val) =>
                            setOpenDeleteId(val ? String(row.id) : null)
                          }
                          isMobile={isMobile}
                        >
                          <DeleteWarningContent
                            deleteLocation={deleteLocation}
                            item={row?.name || row?.title || `#${row.id}`}
                            onCancel={() => setOpenDeleteId(null)}
                            onDelete={() => {
                              onDelete(row.id);
                              setOpenDeleteId(null);
                            }}
                          />
                        </ResponsiveDialogDrawer>
                      )}
                    </td>
                  )}
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={visibleColumns.length + (onEdit || onDelete ? 1 : 0)}
                className="px-6 py-12 text-center text-gray-500"
              >
                {searchTerm ? (
                  <div>
                    <Search className="mx-auto h-8 w-8 text-gray-300 mb-2" />
                    <p>No items found matching {searchTerm}</p>
                  </div>
                ) : (
                  <div>
                    <Hash className="mx-auto h-8 w-8 text-gray-300 mb-2" />
                    <p>No items available</p>
                  </div>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableBody;
