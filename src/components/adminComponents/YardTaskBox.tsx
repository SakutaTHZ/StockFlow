import React, { useState, useRef, useEffect } from "react";
import { MdStar } from "react-icons/md";
import TaskEditor from "./TaskEditor";
import StatusState from "./StausState";
import { tasks } from "../../data/generateData";

interface Task {
  name: string;
  status: string;
}

interface YardTaskBoxProps {
  customClass?: string;
}

const YardTaskBox: React.FC<YardTaskBoxProps> = ({ customClass }) => {
  const [showTaskEditor, setShowTaskEditor] = useState(false);
  const [myTasks, setTasks] = useState<Task[]>([]);

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
    const updatedTasks = [...myTasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <>
      {showTaskEditor && (
        <TaskEditor
          onSave={handleSaveTasks}
          isOpen={showTaskEditor}
          onClose={() => setShowTaskEditor(false)}
          title="Add Task"
          customClass="w-8/12"
          data={myTasks.map((task) => task.name)}
        />
      )}

      <div
        className={`relative inline-block w-1/2 border p-4 rounded-md bg-white ${customClass}`}
      >
        <div className="relative head flex justify-between items-center">
          <p className="font-bold text-xl">Yard Task</p>
          <button className="flex items-center gap-1 font-semibold text-[#997435]">
            <MdStar onClick={() => setShowTaskEditor(true)} />
            <p onClick={() => setDropdownOpen(true)}>Add Task</p>
          </button>
          {dropdownOpen && (
            <div
              className="absolute right-0 top-8 flex flex-col items-end border rounded-md bg-white shadow-md"
              ref={dropdownRef}
            >
              {/* <button
                className="w-full p-2 px-4 hover:bg-gray-100"
                onClick={() => {
                  setShowTaskEditor(true);
                  setDropdownOpen(false);
                }}
              >
                Add Task
              </button> */}
              {tasks.map((task, index) => (
                <button
                  className="w-full p-2 px-4 hover:bg-gray-100"
                  key={index}
                  onClick={() => {
                    setTasks((prev) => {
                      const newTask = { name: task, status: "Pending" };
                      return [...prev, newTask];
                    });
                    setDropdownOpen(false);
                  }}
                >
                  {task}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="statuses bg-gray-50 p-4 flex flex-col gap-2 mt-4">
          <ul className="ml-4 list-disc">
            {myTasks.map((task, index) => (
              <StatusState
                key={index}
                data={task.name}
                status={task.status}
                onStatusChange={(newStatus) =>
                  handleStatusChange(index, newStatus)
                }
              />
            ))}
          </ul>
        </div>

        <textarea
          rows={3}
          className="w-full resize-none border rounded-md mt-4 p-2"
          placeholder="Comment"
        ></textarea>

        <div className="flex justify-end mt-4 footer">
          <button className="font-semibold py-2 px-4 bg-[#FFC158] hover:bg-[#FFCD79] rounded-md">
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default YardTaskBox;
