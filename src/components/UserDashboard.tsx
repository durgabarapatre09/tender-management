import React from 'react';
import { tenders } from '../mockData';
import Card from './Card';

const UserDashboard: React.FC = () => (
  <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {tenders.map(tender => (
      <Card
        key={tender.id}
        title={tender.title}
        description={tender.description}
        onClick={() => console.log(`View details for ${tender.id}`)}
      />
    ))}
  </div>
);

export default UserDashboard;
