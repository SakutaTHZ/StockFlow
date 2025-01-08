import React from "react";

interface SalesCommentBoxProps {
  customClass?: string;
  data?:string;
}

const SalesCommentBox: React.FC<SalesCommentBoxProps> = ({
  customClass,
}) => {
  

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      
    </div>
  );
};

export default SalesCommentBox;
