import React from 'react'

function TaskCard(props) {
  return (
      <div className="border p-5">
          <p className="text-xl font-medium">{props.title}</p>
          <div>
              {props.card === 'pending' && <p>Due on :{props.Due}</p>}
              {props.card === 'done' && <p>Completed on :{props.completed}</p>}
              Assignee: {props.Assignee}
          </div>
    </div>
  )
}

export default TaskCard