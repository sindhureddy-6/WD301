import React from "react";

import { TaskItem } from "./types";
interface TaskFormProps {
   addTask: (task: TaskItem) => void;
}
interface TaskFormState {
     title: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: ""
    }
  }
    
 addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();
  const newTask = {
    title: this.state.title,
  };
  this.props.addTask(newTask);
  this.setState({ title: "" });
};
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  console.log(`${event.target.value}`);
  this.setState({ title: event.target.value });
  };
  render(){
    return (
      <form onSubmit={this.addTask}>
        <div className="flex flex-row justify-start gap-14">
          <label  className="font-medium p-2" htmlFor="todoTitle">Title :</label>
          <input className="border rounded p-1" id="todoTitle" type="text" value={this.state.title} onChange={this.titleChanged} required/>
        </div>
        <div className="flex flex-row justify-start gap-1 m-1">
          <label className="font-medium p-2" htmlFor="todoDescription">Description :</label>
        <textarea className="border rounded p-1" name="description" id="todoDescription" cols={25} rows={2} required></textarea>
        </div>
        <div className="flex flex-row justify-start gap-10 m-1">
          <label className="font-medium p-2" htmlFor="todoDueDate">Due Date :</label>
          <input className="border rounded p-1" type="Date" id="todoDueDate" required/>
        </div>
        <div>
        <button className="border p-1 bg-gray-300 rounded mt-3" id="addTaskButton" type="submit">Add item</button>
        </div>
      </form>
    )
  }
}
 export default TaskForm;