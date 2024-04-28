import React from 'react'
interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}
const TaskCard: React.FC<TaskCardProps> = ({title,dueDate,completedAtDate,assigneeName}) => {
  return (
      <div className="border p-5">
          <p className="text-xl font-medium">{title}</p>
      <div>
            <p>{(dueDate) ? `Due on: ${dueDate}` : `Completed on: ${completedAtDate}`}</p>
       
              Assignee: {assigneeName}
          </div>
    </div>
  )
}

export default TaskCard