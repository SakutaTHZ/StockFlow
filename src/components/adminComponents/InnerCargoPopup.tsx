// InnerCargoPopup

import React from "react";

interface InnerCargoPopupProps {
  customClass?: string;
  data?:string;
}

const InnerCargoPopup: React.FC<InnerCargoPopupProps> = ({
  customClass,
}) => {
  

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      
    </div>
  );
};

export default InnerCargoPopup;