import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import CreateNew from './pages/CreateNew/CreateNew';
import VendorRiskManagement from './pages/Solutions/VendorRiskManagement';
import ExternalAttackSurfaceManagement from './pages/Solutions/ExternalAttackSurfaceManagement';
import ThreatIntelligence from './pages/Solutions/ThreatIntelligence';
import VulnerabilityManagement from './pages/Solutions/VulnerabilityManagement';
import ExecutiveMonitoring from './pages/Solutions/ExecutiveMonitoring';
import ThirdPartyRiskManagement from './pages/Products/ThirdPartyRiskManagement';
import BrandReputation from './pages/Products/ThirdPartyRiskManagement/BrandReputation';
import OperationalRisk from './pages/Products/ThirdPartyRiskManagement/OperationalRisk';
import DarkWebSurveillance from './pages/Products/ThirdPartyRiskManagement/DarkWebSurveillance';
import CyberInsurance from './pages/Products/ThirdPartyRiskManagement/CyberInsurance';
import AutonomousPentesting from './pages/Products/AutonomousPentesting';
import Partners from './pages/Partners/Partners';
import Industries from './pages/Industries/Industries';
import './App.css';

function App() {
  const location = useLocation();
  const isCreateNewPage = location.pathname === '/create-new';
  const isPartnersPage = location.pathname === '/partners';
  const hideNavbar = isCreateNewPage || isPartnersPage;

  return (
    <div className="app-container">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/create-new" element={<CreateNew />} />
        <Route path="/solutions/vendor-risk-management" element={<VendorRiskManagement />} />
        <Route path="/solutions/external-attack-surface-management" element={<ExternalAttackSurfaceManagement />} />
        <Route path="/solutions/threat-intelligence" element={<ThreatIntelligence />} />
        <Route path="/solutions/vulnerability-management" element={<VulnerabilityManagement />} />
        <Route path="/solutions/executive-monitoring" element={<ExecutiveMonitoring />} />
        <Route path="/products/third-party-risk-management" element={<ThirdPartyRiskManagement />} />
        <Route path="/products/third-party-risk-management/brand-reputation" element={<BrandReputation />} />
        <Route path="/products/third-party-risk-management/operational-risk" element={<OperationalRisk />} />
        <Route path="/products/third-party-risk-management/dark-web" element={<DarkWebSurveillance />} />
        <Route path="/products/third-party-risk-management/cyber-insurance" element={<CyberInsurance />} />
        <Route path="/products/autonomous-pentesting" element={<AutonomousPentesting />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/industries" element={<Navigate to="/industries/technology" replace />} />
        <Route path="/industries/:industryId" element={<Industries />} />
      </Routes>
    </div>
  );
}

export default App;
