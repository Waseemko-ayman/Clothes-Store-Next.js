/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { ar } from 'date-fns/locale';

export const renderCell = (col: any, row: any) => {
  const columnKey = String(col);
  const rawValue = row[col];

  if (columnKey === 'status') {
    return (
      <div className="flex items-center justify-center gap-1 p-2 rounded-xl">
        {String(rawValue)}
      </div>
    );
  }

  if (columnKey === 'gallery' && Array.isArray(rawValue)) {
    if (rawValue.length === 0) return 'unavailable';
    return rawValue.length > 1 ? (
      <div className="flex items-center flex-wrap gap-1 justify-center">
        {rawValue.map((img: string, idx: number) => (
          <Image
            key={idx}
            src={img || '/assets/no-image-available.webp'}
            alt={`image-${idx}`}
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-cover rounded-md border border-gray-200"
            onError={(e) =>
              ((e.currentTarget as HTMLImageElement).style.display = 'none')
            }
            unoptimized
          />
        ))}
      </div>
    ) : (
      <Image
        src={rawValue[0] || '/assets/no-image-available.webp'}
        alt="image"
        width={100}
        height={100}
        className="mx-auto rounded-md border border-gray-200"
      />
    );
  }

  if (
    (columnKey === 'image' ||
      columnKey === 'photo' ||
      columnKey === 'avatar_url') &&
    typeof rawValue === 'string'
  ) {
    return (
      <Image
        src={rawValue || '/assets/no-image-available.webp'}
        alt={columnKey}
        width={100}
        height={100}
        className={`w-[100px] h-[100px] object-cover border border-gray-200 ${columnKey === 'avatar_url' ? 'mx-auto rounded-full' : 'rounded-md'}`}
      />
    );
  }

  const cellValue =
    rawValue == null || rawValue === ''
      ? 'unavailable'
      : Array.isArray(rawValue)
        ? rawValue.join(', ')
        : rawValue;

  if (columnKey === 'created_at' || columnKey === 'last_sign_in_at') {
    return formatDistanceToNow(new Date(cellValue), {
      addSuffix: true,
      locale: ar,
    });
  }

  return String(cellValue);
};
