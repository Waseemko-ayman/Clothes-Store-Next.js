'use client';

import React, { useState } from 'react';
import Profile from './Sections/Profile';
import Orders from './Sections/Orders';
import Addresses from './Sections/Addresses';
import Settings from './Sections/Settings';
import AccountSidebar from './Sections/AccountSidebar';
import Layer from '@/components/atoms/Layer';
import Container from '@/components/atoms/Container';

const MyAccountPage = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <Layer>
      <Container>
        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Profile Tab */}
          {activeTab === 'profile' && <Profile />}

          {/* Orders Tab */}
          {activeTab === 'orders' && <Orders />}

          {/* Addresses Tab */}
          {activeTab === 'addresses' && <Addresses />}

          {/* Settings Tab */}
          {activeTab === 'settings' && <Settings />}
        </div>
      </Container>
    </Layer>
  );
};

export default MyAccountPage;
