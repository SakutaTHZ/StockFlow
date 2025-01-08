// SupplierInfo

import React from "react";

interface SupplierInfoProps {
  customClass?: string;
  data?:string;
}

const SupplierInfo: React.FC<SupplierInfoProps> = ({
  customClass,
}) => {
  

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      
    </div>
  );
};

export default SupplierInfo;
