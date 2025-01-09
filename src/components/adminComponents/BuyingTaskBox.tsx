import React, { useState } from "react";
import { MdStar } from "react-icons/md";
import TaskEditor from "./TaskEditor";
import StatusState from "./StausState";

interface Task {
  name: string;
  status: string;
}

interface BuyingTaskBoxProps {
  customClass?: string;
}

const BuyingTaskBox: React.FC<BuyingTaskBoxProps> = ({ customClass }) => {
  const [showTaskEditor, setShowTaskEditor] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSaveTasks = (updatedTasks: string[]) => {
    // Map the task names into task objects with default "Pending" status
    const newTasks = updatedTasks.map((task) => ({
      name: task,
      status: "Pending",
    }));
    setTasks(newTasks); // Update the task list
    setShowTaskEditor(false); // Close the editor
  };

  const handleStatusChange = (index: number, newStatus: string) => {
    // Update the status of the task at the specified index
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  return (
    <>
      {showTaskEditor && (
        <TaskEditor
          onSave={handleSaveTasks}
          isOpen={showTaskEditor}
          onClose={() => setShowTaskEditor(false)}
          title="Add Task"
          customClass="w-10/12"
          data={tasks.map((task) => task.name)}
        />
      )}

      <div
        className={`relative inline-block w-1/2 border p-4 rounded-md bg-white ${customClass}`}
      >
        <div className="head flex justify-between items-center">
          <p className="font-bold text-xl">Yard Task</p>
          <button
            className="flex items-center gap-1 font-semibold text-[#997435]"
            onClick={() => setShowTaskEditor(true)}
          >
            <MdStar />
            Add Task
          </button>
        </div>

        <div className="statuses bg-gray-50 p-4 flex flex-col gap-2 mt-4">
          <ul className="ml-4 list-disc">
            {tasks.map((task, index) => (
              <StatusState
                key={index}
                data={task.name}
                status={task.status}
                onStatusChange={(newStatus) => handleStatusChange(index, newStatus)}
              />
            ))}
          </ul>
        </div>

        <textarea
          rows={3}
          className="w-full resize-none border rounded-md mt-4 p-2"
          placeholder="Comment"
        ></textarea>

        <div className="flex justify-end mt-4">
          <button className="font-semibold py-2 px-4 bg-[#FFC158] hover:bg-[#FFCD79] rounded-md">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default BuyingTaskBox;
