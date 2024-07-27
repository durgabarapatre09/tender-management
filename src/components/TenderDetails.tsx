import React from 'react';
import { useParams } from 'react-router-dom';
import { tenders } from '../mockData';

const TenderDetails: React.FC = () => {
  const { tenderId } = useParams<{ tenderId: string }>();
  const tender = tenders.find(t => t.id === parseInt(tenderId || '', 10));

  if (!tender) {
    return <div>Tender not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{tender.title}</h1>
      <p>{tender.description}</p>
      <p>Min Amount: {tender.minAmount}</p>
      <p>Max Amount: {tender.maxAmount}</p>
      <p>Type: {tender.type}</p>
      <p>Location: {tender.location}</p>
      <p>Start Time: {tender.startTime}</p>
      <p>End Time: {tender.endTime}</p>
    </div>
  );
};

export default TenderDetails;
