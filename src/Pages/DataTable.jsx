import React, { useState } from 'react';

const DataTable = ({ data, columns, filterKey }) => {
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });
  const [filter, setFilter] = useState('');

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    item[filterKey].toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder={`Filter by ${filterKey}`}
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
      />
      <table className="table table-bordered w-100">
        <thead className="thead-light">
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                onClick={() => requestSort(column)}
                className="cursor-pointer"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{item[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
