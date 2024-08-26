import React from 'react';
import Header from '../../src/components/header_v2';
import { HeaderProvider } from '../../src/components/header_v2/components/context';
import InMemoryCache from '../../src/utils/InMemoryCache';
import InMemoryCacheContext from '../../src/utils/InMemoryCacheContext';
import './sox-styles.scss'
import RoleAccessGuard from '../../src/components/role-access-guard/role-access-guard';
import SoxAlertsManipulation from './components/SoxAlertsManipulation';

const SoxAlertsView = () => {
  return (
    <InMemoryCacheContext.Provider value={InMemoryCache}>
      <HeaderProvider>
        <Header />
        <RoleAccessGuard showError={true} collectionId="vcg-security-metrics-access">
          <SoxAlertsManipulation />
        </RoleAccessGuard>
      </HeaderProvider>
    </InMemoryCacheContext.Provider>
  );
};

export default SoxAlertsView;

.sox-alert-container {
  max-width: 1200px;
  margin: 0 auto;
  font-size: 30px;
  font-weight: 700;
}

import React from 'react';
import '../sox-styles.scss';

const SoxAlertsManipulation = () => {
  return <div className="sox-alert-container">SoxAlertsManipulation</div>;
};

export default SoxAlertsManipulation;
