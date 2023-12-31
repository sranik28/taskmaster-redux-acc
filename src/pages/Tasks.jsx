import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MyTasks from "../components/tasks/MyTasks";
import TaskCard from "../components/tasks/TaskCard";
import { useState } from "react";
import AddTasksModal from "../components/tasks/AddTasksModal";
import { useSelector } from "react-redux";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { tasks } = useSelector((state) => state.tasksSlice);

  const pendingStatus = tasks.filter((item) => item.status === "pending");
  const runningStatus = tasks.filter((item) => item.status === "running");
  const doneStatus = tasks.filter((item) => item.status === "done");

  return (
    <div className="grid h-screen grid-cols-12">
      <div className="col-span-9 px-10 pt-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Tasks</h1>
          </div>
          <div className="flex gap-5">
            <button className="grid w-10 h-10 transition-all border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl place-content-center text-secondary hover:text-white">
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
            <button className="grid w-10 h-10 transition-all border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl place-content-center text-secondary hover:text-white">
              <BellIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-primary"
            >
              Add Task
            </button>
            <AddTasksModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="w-10 h-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Up Next</h1>
              <p className="grid w-6 h-6 text-white rounded-md bg-primary place-content-center">
                {pendingStatus.length}
              </p>
            </div>
            <div className="space-y-3">
              {pendingStatus?.map((item) => (
                <TaskCard key={item.id} task={item} />
              ))}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>In Progress</h1>
              <p className="grid w-6 h-6 text-white rounded-md bg-primary place-content-center">
                {runningStatus.length}
              </p>
            </div>
            <div className="space-y-3">
              {runningStatus?.map((item) => (
                <TaskCard key={item.id} task={item} />
              ))}
            </div>
          </div>
          <div className="relative h-[800px] overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1>Complete</h1>
              <p className="grid w-6 h-6 text-white rounded-md bg-primary place-content-center">
                {doneStatus.length}
              </p>
            </div>
            <div className="space-y-3">
              {doneStatus?.map((item) => (
                <TaskCard key={item.id} task={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 px-10 pt-10 border-l-2 border-secondary/20">
        <div>
          <h1 className="text-xl">Members</h1>
          <div className="flex gap-3 mt-3">
            <div className="w-10 h-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
            <div className="w-10 h-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
            <div className="w-10 h-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
            <div className="w-10 h-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
            <div className="w-10 h-10 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </div>
        <MyTasks />
      </div>
    </div>
  );
};

export default Tasks;
