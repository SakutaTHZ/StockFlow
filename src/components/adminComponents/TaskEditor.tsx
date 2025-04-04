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
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  const lastTaskRef = useRef<HTMLTableRowElement | null>(null);
  const taskContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
  
      setTaskList(prev => {
        const newTask = { task: tasks[0], status: status[0] };
  
        // Ensure at least one sample task if no tasks exist
        if (prev.length === 0 && data.length === 0) {
          return [newTask]; // Only one sample task
        }
  
        // If there are existing tasks, add only ONE extra row at the top
        if (prev.length === data.length) {
          return [newTask, ...prev];
        }
  
        return prev; // Avoid adding multiple rows unnecessarily
      });
  
      setHighlightIndex(data.length);
      setTimeout(() => setHighlightIndex(null), 2000);
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, data]);
  
  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Scroll to last task when added
  useEffect(() => {
    if (lastTaskRef.current) {
      lastTaskRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [taskList]);

  if (!isOpen) return null;

  const tableColumnClass = "text-left p-3";

  return (
    <div
      className="fixed inset-0 bg-gray-800 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-[100]"
      onClick={(e) => e.target === e.currentTarget && handleBackgroundClick(e)}
    >
      <div className={`flex flex-col animate-slideUp h-fit min-h-64 max-h-[80dvh] bg-white p-8 md:p-12 py-8 rounded-lg shadow-lg relative min-w-96 ${customClass}`}>
        <div className="w-full flex items-center justify-between mb-4">
          <p className="text-2xl font-bold">{title}</p>

          <div className="flex gap-2">
            <button
              className="p-2 px-4 font-bold bg-gray-100 hover:bg-gray-200 rounded-md"
              onClick={() => {
                setTaskList(prev => {
                  const newTask = { task: tasks[0], status: status[0] };
                  return [...prev, newTask];
                });
                setHighlightIndex(taskList.length);
                setTimeout(() => setHighlightIndex(null), 2000);
              }}
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
                <th className={`${tableColumnClass}`}>Expected Completed Date</th>
                <th className={`${tableColumnClass}`}>Comment</th>
                <th className={`${tableColumnClass}`}>Action</th>
              </tr>
            </thead>
            <tbody>
              {taskList.map((task, index) => (
                <tr
                  key={index}
                  ref={index === taskList.length - 1 ? lastTaskRef : null}
                  className={`transition-all duration-500 ${index === highlightIndex ? "bg-green-100" : ""}`}
                >
                  <td className="p-3">
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
                  <td className="p-3">
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
                  <td className="p-3">
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
                  <td className="p-3">
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
                  <td className="p-3">
                    <button
                      className="p-2 px-4 font-bold bg-red-500 hover:bg-red-400 text-white rounded-md"
                      onClick={() => {
                        setTaskList(taskList.filter((_, i) => i !== index));
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
