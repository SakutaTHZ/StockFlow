import React from "react";

interface CommentBoxProps {
  customClass?: string;
  data?:string;
}

const CommentBox: React.FC<CommentBoxProps> = ({
  customClass,
}) => {
  

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      
    </div>
  );
};

export default CommentBox;
