import React from 'react';
import { useTable } from '@tanstack/react-table';
import { tenders, bids } from '../mockData';

const AdminDashboard: React.FC = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Min Amount',
        accessor: 'minAmount',
      },
      {
        Header: 'Max Amount',
        accessor: 'maxAmount',
      },
      {
        Header: 'Location',
        accessor: 'location',
      },
    ],
    []
  );

  const data = React.useMemo(() => tenders, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="p-4">
      <table {...getTableProps()} className="min-w-full leading-normal">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
