import React from "react"
import TaskCard from "./TaskCard"
function App() {
  return (
    <>
      <div>
        <h2 className="text-center text-xl font-bold">
          Smater Tasks
        </h2>
        <p className="text-center"><b>Project: </b> Graduation final Year Project(Revamp college Website)</p>
        <div className="flex justify-center gap-5 mt-4">
          <div className="border p-3 rounded flex flex-col gap-2">
            <h3 className="text-xl font-bold p-2 text-center">Pending</h3>
            <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohith" card="pending" />
            <TaskCard title="Add a blog" dueDate="20th April" assigneeName="Rohith s" card="pending" />
          </div>
          <div className="border p-3 rounded flex flex-col gap-2">
            <h3 className="text-xl font-bold p-2 text-center">Done</h3>
            <TaskCard title="Design the mockup" completedAtDate="10th March" assigneeName="Sindhu M" card="done" />
            <TaskCard title="Get permission from Principal" completedAtDate="15th March"  assigneeName="Sindhu R" card="done"/>
          </div>
         </div>
      </div>
    </>
  )
}

export default App
