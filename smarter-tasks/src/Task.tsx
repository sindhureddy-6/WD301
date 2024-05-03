import "./TaskCard.css";
import { TaskItem } from "./types";
interface TaskProps extends TaskItem {
  id: string;
  deleteTask: (task: TaskItem) => void;
}
const Task = (props: TaskProps) => {
  const handleDelete = () => {
    props.deleteTask(props);
  };
  return (
    <li className="TaskItem shadow-md border border-slate-100 list-none">
      <a href={`/tasks/${props.id || ""}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </a>
      <p className="text-sm text-slate-500">{props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button
        type="submit"
        onClick={handleDelete}
        className="mt-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 deleteTaskButton"
      >
        Delete item
      </button>
    </li>
  );
};

export default Task;
