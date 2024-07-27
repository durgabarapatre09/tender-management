import React from 'react';

interface Tender {
  key: string;
  title: string;
  minAmount: number;
  maxAmount: number;
  location: string;
}

const data: Tender[] = [
  {
    key: '1',
    title: 'Tender 1',
    minAmount: 1000,
    maxAmount: 5000,
    location: 'New York',
  },
  {
    key: '2',
    title: 'Tender 2',
    minAmount: 2000,
    maxAmount: 6000,
    location: 'London',
  },
  {
    key: '3',
    title: 'Tender 3',
    minAmount: 3000,
    maxAmount: 7000,
    location: 'Sydney',
  },
];

const AdminDashboard: React.FC = () => (
  <table>
    <thead className='p-2 border-red-500'>
      <tr>
        <th>Title</th>
        <th>Min Amount</th>
        <th>Max Amount</th>
        <th>Location</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {data.map((tender) => (
        <tr key={tender.key}>
          <td>{tender.title}</td>
          <td>{tender.minAmount}</td>
          <td>{tender.maxAmount}</td>
          <td>{tender.location}</td>
          <td>
            <a href="#">View {tender.title}</a> | <a href="#">Delete</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default AdminDashboard;