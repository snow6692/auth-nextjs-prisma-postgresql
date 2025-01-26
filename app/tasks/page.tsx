import TasksItem from "@/components/tasks/TasksItem";
import { getCurrentUser } from "@/lib/helpers";
import React from "react";

async function page() {
  const currentUser = await getCurrentUser();
  return (
    <div>
      {currentUser?.tasks.map((task) => (
        <TasksItem key={task.id} task={task} />
        
      ))}
    </div>
  );
}

export default page;
