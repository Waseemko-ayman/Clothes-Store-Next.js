import React from 'react';

const FilteringBadge = ({ text, filter }: { text?: string; filter: string }) => {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-md">
      {text} {filter}
    </span>
  );
};

export default FilteringBadge;
