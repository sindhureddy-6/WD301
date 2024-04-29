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
        <input className="mr-3 border p-2" type="text" value={this.state.title} onChange={this.titleChanged}/>
        <button className="border p-1 bg-gray-300 rounded"type="submit">Add item</button>
      </form>
    )
  }
}
 export default TaskForm;