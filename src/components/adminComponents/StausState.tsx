import React from "react";

interface StatusStateProps {
  data?: string;
  status: string;
  onStatusChange: (newStatus: string) => void;
}

const StatusState: React.FC<StatusStateProps> = ({ data, status, onStatusChange }) => {
  const statusList = [
    { name: "Pending", style: "text-blue-500 font-semibold" },
    { name: "In Progress", style: "text-black font-semibold" },
    { name: "Completed", style: "text-green-400 font-semibold" },
    { name: "Cancelled", style: "text-green-600 font-semibold line-through" },
  ];

  const currentStatusIndex = statusList.findIndex((s) => s.name === status);
  const handleStatusChange = () => {
    const newIndex = (currentStatusIndex + 1) % statusList.length;
    const newStatus = statusList[newIndex].name;
    onStatusChange(newStatus);
  };

  return (
    <li
      className={`cursor-pointer ${statusList[currentStatusIndex].style}`}
      onClick={handleStatusChange}
    >
      {status !== "Pending" ? `${data} 済` : `${data}`}
    </li>
  );
};

export default StatusState;
