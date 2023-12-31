import { useForm } from "react-hook-form";
import Modal from "../Ui/Modal";
import { useDispatch } from "react-redux";
import { addTasks } from "../../redux/features/tasks/TasksSlice";

const AddTasksModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTasks(data));
    console.log(data);
    onCancel();
  };

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="pro">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="flex mt-3" htmlFor="title">
              {" "}
              Title
            </label>
            <input
              className="w-full mt-3 rounded-md"
              id="title"
              type="text"
              placeholder="Title"
              {...register("title")}
            />
            <label className="flex mt-3" htmlFor="description">
              {" "}
              Description
            </label>
            <textarea
              className="w-full mt-3 rounded-md"
              name="description"
              id="description"
              {...register("description")}
            ></textarea>
            <label className="flex mt-3" htmlFor="deadline">
              Deadline
            </label>
            <input
              className="w-full mt-3 rounded-md"
              type="date"
              name="deadline"
              id="deadline"
              {...register("date")}
            />
            <label className="flex mt-3" htmlFor="assign">
              {" "}
              Assign to
            </label>
            <select
              className="w-full mt-3 rounded-md"
              name="assign"
              id="assign"
              {...register("assignedTo")}
            >
              <option value="Anik">Anik</option>
              <option value="Shahriar Rahman Anik">Shahriar Rahman Anik</option>
              <option value="Tofael">Tofael</option>
              <option value="Al Amin">Al Amin</option>
              <option value="Alvee">Alvee</option>
            </select>
            <label className="flex mt-3" htmlFor="property">
              {" "}
              Property
            </label>
            <select
              className="w-full mt-3 rounded-md"
              name="priority"
              id="priority"
              {...register("priority")}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => onCancel()}
              className="px-5 py-2 my-5 text-base font-semibold rounded-md btn-danger"
              type="submit"
            >
              {" "}
              cancel
            </button>
            <button
              className="px-5 py-2 my-5 text-base font-semibold rounded-md btn-primary"
              type="submit"
            >
              {" "}
              submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTasksModal;
