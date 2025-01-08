// ExtraCostsInfo

import React from "react";

interface ExtraCostsInfoProps {
  customClass?: string;
  data?:string;
}

const ExtraCostsInfo: React.FC<ExtraCostsInfoProps> = ({
  customClass,
}) => {
  

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      
    </div>
  );
};

export default ExtraCostsInfo;