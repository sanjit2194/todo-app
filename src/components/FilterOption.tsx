import React from 'react';

enum Filter {
  All,
  Completed,
  Incomplete
}

interface FilterOptionProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterOption: React.FC<FilterOptionProps> = ({ filter, setFilter }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(Number(event.target.value));
  };

  return (
    <div style={{ marginTop: '15px' }}>
      <label htmlFor="filter">Filter:</label>
      <select style={{ marginLeft: '15px' }} id="filter" value={filter} onChange={handleFilterChange}>
        <option value={Filter.All}>All</option>
        <option value={Filter.Completed}>Completed</option>
        <option value={Filter.Incomplete}>Incomplete</option>
      </select>
    </div>
  );
};

export default FilterOption;
