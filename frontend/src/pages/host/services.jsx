import * as React from 'react';
import { HostServicesHeader } from '../../components/hostservices/layout/HostServicesHeader';
import { HostServicesBanner } from '../../components/hostservices/layout/HostServicesBanner';
import { FindTeam } from '../../components/hostservices/layout/FindTeam';
import { GetStarted } from '../../components/hostservices/layout/GetStarted';
import { PeaceOfMind } from '../../components/hostservices/layout/PeaceOfMind';
import { QuestionsAnswered } from '../../components/hostservices/layout/QuestionsAnswered';
import { ReadyConnect } from '../../components/hostservices/layout/ReadyConnect';

const services = () => {
  return (
    <>
      <HostServicesHeader />
      <HostServicesBanner />
      <FindTeam />
      <GetStarted />
      <PeaceOfMind />
      <QuestionsAnswered />
      <ReadyConnect />
    </>
  );
};

export default services;
