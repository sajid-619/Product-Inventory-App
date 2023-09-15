import React from 'react';
import Statistic from 'antd/es/statistic/Statistic';
import useTotalValue from '../hooks/useTotalValue';

const TotalValue: React.FC = () => {
  const calculateTotalValue = useTotalValue();

  return (
    <div>
      <Statistic title="Total Value" value={calculateTotalValue()} />
    </div>
  );
};

export default TotalValue;
