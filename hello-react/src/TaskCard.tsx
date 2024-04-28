import React from 'react'
interface TaskCardProps {
  title: string;
  dueDate?: Date| null;
  completedAtDate?:Date | null; 
  assigneeName: string;
  card: string;
}
const TaskCard: React.FC<TaskCardProps> = ({title,dueDate,completedAtDate,assigneeName,card}) => {
  return (
      <div className="border p-5">
          <p className="text-xl font-medium">{title}</p>
          <div>
              {card === 'pending' && <p>Due on: DATE</p>}
              {card === 'done' && <p>Completed on: DATE</p>}
              Assignee: NAME
          </div>
    </div>
  )
}

export default TaskCard