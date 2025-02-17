import React, { useState } from "react";

interface StatusStateProps {
  customClass?: string;
  data?: string;
  status: string;
  onStatusChange?: (newStatus: string) => void;
}

const StatusState: React.FC<StatusStateProps> = ({ customClass, data, status, onStatusChange }) => {
  const statusList = [
    { name: "Pending", style: "text-blue-500 font-semibold" },
    { name: "In Progress", style: "text-black font-semibold" },
    { name: "Completed", style: "text-green-400 font-semibold" },
    { name: "Cancelled", style: "text-green-600 font-semibold line-through" },
  ];

  const [tempStatus, setTempStatus] = useState(status); // Initialize state with status

  const currentStatusIndex = statusList.findIndex((s) => s.name === tempStatus); // Use tempStatus instead of status

  const handleStatusChange = () => {
    const newIndex = (currentStatusIndex + 1) % statusList.length;
    const newStatus = statusList[newIndex].name;
    setTempStatus(newStatus); // Update state correctly
    if (onStatusChange) {
      onStatusChange(newStatus);
    }
  };

  return (
    <li
      className={`cursor-pointer ${customClass} ${statusList[currentStatusIndex]?.style || ""}`}
      onClick={handleStatusChange}
    >
      {tempStatus !== "Pending" ? `${data} 済` : `${data}`}
    </li>
  );
};

export default StatusState;
