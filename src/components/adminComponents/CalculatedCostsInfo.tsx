// CalculatedCostsInfo

import React from "react";

interface CalculatedCostsInfoProps {
  customClass?: string;
  data?:string;
}

const CalculatedCostsInfo: React.FC<CalculatedCostsInfoProps> = ({
  customClass,
}) => {
  

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      
    </div>
  );
};

export default CalculatedCostsInfo;