import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  removeTasks,
  updateTasks,
} from "../../redux/features/tasks/TasksSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  let updateStatus;
  if (task.status === "pending") {
    updateStatus = "running";
  } else if (task.status === "running") {
    updateStatus = "done";
  } else {
    updateStatus = "archive";
  }
  return (
    <div className="p-5 rounded-md bg-secondary/10">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === "high" ? "text-red-500" : ""
        } ${task.priority === "medium" ? "text-yellow-500" : ""} ${
          task.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTasks(task.id))} title="Delete">
            <TrashIcon className="w-5 h-5 text-red-500" />
          </button>
          <button
            onClick={() =>
              dispatch(updateTasks({ id: task.id, status: updateStatus }))
            }
            title="Update status"
          >
            <ArrowRightIcon className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
