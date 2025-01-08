// BuyingTaskBox

import React from "react";

interface BuyingTaskBoxProps {
  customClass?: string;
  data?:string;
}

const BuyingTaskBox: React.FC<BuyingTaskBoxProps> = ({
  customClass,
}) => {
  

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      
    </div>
  );
};

export default BuyingTaskBox;