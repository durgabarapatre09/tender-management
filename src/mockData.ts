export const users = [
    {
      id: 1,
      companyName: 'Construction Co',
      address: '123 Main St, New York, NY',
      userType: 'user',
      email: 'user@example.com',
      password: 'userpassword', // Note: In real apps, never store passwords in plain text
      phoneNumber: '123-456-7890',
      experience: 5,
      completedProjects: 10,
    },
    {
      id: 2,
      companyName: 'Admin Co',
      address: '456 Elm St, New York, NY',
      userType: 'admin',
      email: 'admin@example.com',
      password: 'adminpassword', // Note: In real apps, never store passwords in plain text
      phoneNumber: '987-654-3210',
      experience: 10,
      completedProjects: 50,
    },
    // Add more users as needed
  ];
  
  export const tenders = [
    {
      id: 1,
      title: 'Road Construction',
      description: 'Construction of a new highway',
      minAmount: 100000,
      maxAmount: 500000,
      startTime: '2024-07-01',
      endTime: '2024-08-01',
      type: 'Construction',
      location: 'New York',
    },
    // Add more tenders as needed
  ];
  
  export const bids = [
    {
      userId: 1,
      tenderId: 1,
      amount: 150000,
      specialServices: '24/7 work',
    },
    // Add more bids as needed
  ];
  