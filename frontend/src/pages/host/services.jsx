import * as React from 'react';
import { HostServicesHeader } from '../../components/hostservices/layout/HostServicesHeader';
import { HostServicesBanner } from '../../components/hostservices/layout/HostServicesBanner';
import { FindTeam } from '../../components/hostservices/layout/FindTeam';

const services = () => {
  return (
    <>
      <HostServicesHeader />
      <HostServicesBanner />
      <FindTeam />
    </>
  );
};

export default services;
