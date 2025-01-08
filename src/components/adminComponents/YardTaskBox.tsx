// YardTaskBox

import React from "react";

interface YardTaskBoxProps {
  customClass?: string;
  data?:string;
}

const YardTaskBox: React.FC<YardTaskBoxProps> = ({
  customClass,
}) => {
  

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      
    </div>
  );
};

export default YardTaskBox;