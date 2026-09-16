import React from 'react';
import LiquidComparisonTable from '../../components/ui/LiquidComparisonTable/LiquidComparisonTable';
import './Comparison.css'; // Optional: for page-specific styles if needed later

const ComparisonPage = () => {
  return (
    <div className="comparison-page-wrapper">
      <div className="comparison-page-header">
        <h1 className="comparison-page-title">Legacy vs Continuous Assurance</h1>
        <p className="comparison-page-subtitle">See why modern security teams are moving away from point-in-time reviews.</p>
      </div>
      <LiquidComparisonTable />
    </div>
  );
};

export default ComparisonPage;
