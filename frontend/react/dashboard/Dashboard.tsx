import React from 'react';

type Props = {
  data: any;
};

const Dashboard = ({ data }: Props) => {
  return <div>Dashboard {JSON.stringify(data)}</div>;
};

export default Dashboard;
