import React from 'react';
import Clients from '../clients/Clients';
import Sidebar from './SideBar';

const Dashboard = () => {
  return (
    <div className='row'>
      <div className='col-md-10'>
        <Clients></Clients>
      </div>
      <div className='col-md-2'>
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
