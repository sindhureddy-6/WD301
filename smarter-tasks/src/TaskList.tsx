import Task from "./Task";
import { TaskItem } from "./types";
interface Props {
  tasks: TaskItem[];
  deleteTask: (task: TaskItem) => void;
}
const TaskList = (props: Props) => {
  return props.tasks.map((task, idx) => (
    <Task
      key={idx}
      id={task.id}
      title={task.title}
      description={task.description}
      dueDate={task.dueDate}
      deleteTask={() => props.deleteTask(task)}
    />
  ));
};
export default TaskList;
