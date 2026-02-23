/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { useToast } from '@/lib/toast';
import { useUpdateContent } from '@/context/updateContentContext';
import useAPI from '@/Hooks/useAPI';
import SettingsTab from '../molecules/SettingsTab';
import { DataTable } from '../molecules/DataTable';
import { GenericAllProps } from '@/interfaces';

const GenericAllTable = ({
  value,
  title,
  description,
  tableName,
  createTabValue,
  placeholder,
  onEditIdChange,
  onTabChange,
  showEdit,
  showActionsColumn,
  refreshKeyProp,
  customFilter,
  filterOptions,
  onFilterChange,
  deleteLocation,
}: GenericAllProps) => {
  // --- Filter State ---
  const [filter, setFilter] = useState('all');
  const [rows, setRows] = useState<any[]>([]);

  const { showToast } = useToast();

  const { refreshFlags } = useUpdateContent();
  const refreshKey = refreshKeyProp || tableName || 'default';

  const { get, data, isLoading, error } = useAPI<any>(tableName || '');
  const { del } = useAPI(tableName || '');

  const handleEdit = (id: string | number) => {
    onEditIdChange?.(id);
    if (createTabValue && onTabChange) {
      onTabChange(createTabValue);
    }
  };

  const handleDelete = async (id: string | number) => {
    if (!tableName) return;

    try {
      const res = await del(id);
      showToast('Deleted successfully');

      // Instead of get(), we delete the row directly from rows
      setRows((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      const apiError = (err as any)?.response?.message;
      showToast(apiError, 'error');
    }
  };

  useEffect(() => {
    // const list = Array.isArray(data?.items)
    //   ? data.items
    //   : Array.isArray(data?.data)
    //   ? data.data
    //   : Array.isArray(data)
    //   ? data
    //   : [];
    const list = Array.isArray(data) ? data : [];
    setRows(list);
  }, [data]);

  const patchRow = (id: string | number, patch: Partial<any>) => {
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const filteredRows = useMemo(() => {
    if (customFilter) return customFilter(rows, filter);
    if (filter === 'all') return rows;
    return rows; // بدون فلترة إذا لم يتم تمرير customFilter
  }, [rows, filter, customFilter]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    // استدعاء الدالة الممررة من المكون الأب إذا كانت موجودة
    if (onFilterChange) {
      onFilterChange(newFilter);
    }
  };

  useEffect(() => {
    get();
  }, [tableName, refreshFlags[refreshKey]]);

  return (
    <SettingsTab
      value={value}
      title={title}
      description={description}
      cardContentClassName="!p-0"
    >
      <DataTable
        placeholder={placeholder}
        data={filteredRows}
        onRowPatched={patchRow}
        onEdit={handleEdit}
        onDelete={tableName ? handleDelete : undefined}
        showEdit={showEdit}
        showActionsColumn={showActionsColumn}
        filter={filter}
        setFilter={handleFilterChange}
        filterOptions={filterOptions}
        isLoading={isLoading}
        error={error}
        deleteLocation={deleteLocation}
      />
    </SettingsTab>
  );
};

export default GenericAllTable;
