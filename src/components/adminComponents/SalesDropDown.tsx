// SalesDropDown

import React from "react";

interface SalesDropDownProps {
  customClass?: string;
  data?:string;
}

const SalesDropDown: React.FC<SalesDropDownProps> = ({
  customClass,
}) => {
  

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      
    </div>
  );
};

export default SalesDropDown;