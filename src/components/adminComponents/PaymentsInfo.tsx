import React from "react";

interface PaymentInfoProps {
  customClass?: string;
  data?:string;
}

const PaymentInfo: React.FC<PaymentInfoProps> = ({
  customClass,
}) => {
  

  return (
    <div className={`relative inline-block w-full text-left ${customClass}`}>
      
    </div>
  );
};

export default PaymentInfo;