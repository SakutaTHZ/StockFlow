import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import DropDown from "../DropDown";
import { status, tasks } from "../../data/generateData";

interface TaskEditorProps {
  isOpen: boolean;
  title?: string;
  customClass?: string;
  onClose: () => void;
  onSave: (tasks: string[]) => void;
  data: string[];
}

// RETURN THE TASKLIST TO THE MAIN COMPONENT
const TaskEditor: React.FC<TaskEditorProps> = ({
  isOpen,
  title = "Title",
  customClass,
  onClose,
  onSave,
  data = [],
}) => {
  interface Task {
    task: string;
    status: string;
    expectedDate?: string;
    comment?: string;
  }

  const [taskList, setTaskList] = useState<Task[]>(data.map(task => ({ task, status: status[0] })));
  const lastTaskRef = useRef<HTMLTableRowElement | null>(null);
  const taskContainerRef = useRef<HTMLDivElement | null>(null);

  const addNewTask = (newTask: string): void => {
    setTaskList(prev => [...prev, { task: newTask, status: status[0] }]);
  };

  useEffect(() => {
    if (lastTaskRef.current) {
      lastTaskRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [taskList]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const tableColumnClass = "text-left p-3";

  return (
    <div
      className="fixed inset-0 bg-gray-800 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-[100]"
      onClick={handleBackgroundClick}
    >
      <div
        className={`flex flex-col animate-slideUp h-fit min-h-64 max-h-[80dvh] bg-white p-8 md:p-12 py-8 rounded-lg shadow-lg relative min-w-96 ${customClass}`}
      >
        <div className="w-full flex items-center justify-between mb-4">
          <p className="text-2xl font-bold">{title}</p>

          <div className="flex gap-2">
            <button
              className="p-2 px-4 font-bold bg-gray-100 hover:bg-gray-200 rounded-md"
              onClick={() => addNewTask(tasks[0])}
            >
              Add New Task
            </button>
            <button
              className="p-2 px-4 font-bold bg-[#FFC158] hover:bg-[#FFCD79] rounded-md"
              onClick={() => onSave(taskList.map(task => task.task))}
            >
              Save
            </button>
            <button
              className="text-lg flex items-center justify-center w-10 aspect-square bg-gray-100 hover:bg-gray-200 text-gray-800 p-1 rounded-full transition-all"
              onClick={onClose}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
        <div ref={taskContainerRef} className="h-[90%] custom-scrollbar overflow-y-auto">
          <table className="w-full border">
            <thead className="bg-gray-100 sticky top-0 z-20">
              <tr>
                <th className={`${tableColumnClass}`}>Task</th>
                <th className={`${tableColumnClass}`}>Status</th>
                <th className={`${tableColumnClass}`}>Created</th>
                <th className={`${tableColumnClass}`}>Sent</th>
                <th className={`${tableColumnClass}`}>Expected Completed Date</th>
                <th className={`${tableColumnClass}`}>Completed</th>
                <th className={`${tableColumnClass}`}>Comment</th>
                <th className={`${tableColumnClass}`}>Action</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task, index) => (
                <tr key={index} ref={index === taskList.length - 1 ? lastTaskRef : null}>
                  <td className={`${tableColumnClass}`}>
                    <DropDown
                      options={tasks}
                      selected={task.task}
                      optionBoxClass="md:w-full h-fit overflow-y-auto right-0 z-50"
                      buttonClass="py-1"
                      onSelectionChange={(selected) => {
                        const updatedTaskList = [...taskList];
                        updatedTaskList[index] = { ...updatedTaskList[index], task: selected };
                        setTaskList(updatedTaskList);
                      }}
                    />
                  </td>
                  <td className={`${tableColumnClass}`}>
                    <DropDown
                      options={status}
                      selected={task.status}
                      optionBoxClass="md:w-full h-fit overflow-y-auto right-0 z-50"
                      buttonClass="py-1"
                      onSelectionChange={(selected) => {
                        const updatedTaskList = [...taskList];
                        updatedTaskList[index] = { ...updatedTaskList[index], status: selected };
                        setTaskList(updatedTaskList);
                      }}
                    />
                  </td>
                  <td className={`${tableColumnClass}`}>
                    <p>12/12/2021 6:04</p>
                    <p>Trustfall AB</p>
                  </td>
                  <td className={`${tableColumnClass}`}>
                    <p>12/12/2021 6:04</p>
                    <p>Trustfall AB</p>
                  </td>
                  <td className={`${tableColumnClass}`}>
                    <input
                      type="date"
                      className="border border-gray-300 p-1 px-3 rounded-md shadow-sm"
                      onChange={(e) => {
                        const updatedTaskList = [...taskList];
                        updatedTaskList[index] = { ...updatedTaskList[index], expectedDate: e.target.value };
                        setTaskList(updatedTaskList);
                      }}
                    />
                  </td>
                  <td className={`${tableColumnClass}`}>
                    <p>12/12/2021 6:04</p>
                    <p>Trustfall AB</p>
                  </td>
                  <td className={`${tableColumnClass}`}>
                    <input
                      type="text"
                      className="border border-gray-300 p-1 px-3 rounded-md shadow-sm"
                      onChange={(e) => {
                        const updatedTaskList = [...taskList];
                        updatedTaskList[index] = { ...updatedTaskList[index], comment: e.target.value };
                        setTaskList(updatedTaskList);
                      }}
                    />
                  </td>
                  <td className={`${tableColumnClass}`}>
                    <button
                      className="p-2 px-4 font-bold bg-red-500 hover:bg-red-400 text-white rounded-md"
                      onClick={() => {
                        const updatedTaskList = taskList.filter((_, i) => i !== index);
                        setTaskList(updatedTaskList);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskEditor;
