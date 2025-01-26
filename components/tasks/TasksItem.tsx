"use client";
import { toast } from "sonner";
import { Task } from "@prisma/client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { CompleteToggleTask } from "@/app/actions/completeTask";

function TasksItem({ task }: { task: Task }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [loading, setLoading] = useState(false);

  const handleToggle = async () => {
    if (loading) return; // Prevent multiple clicks
    setLoading(true);

    try {
      setIsCompleted((prev) => !prev);
      await CompleteToggleTask(task.id, !isCompleted);
      toast.success("Task changed successfully");
    } catch (error) {
      setIsCompleted(task.completed); // Revert to original state on failure
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 border-b">
      <Checkbox
        id={task.id}
        className="bg-white cursor-pointer"
        checked={isCompleted}
        onCheckedChange={handleToggle}
      />
      <Label
        htmlFor={task.id}
        className={`${isCompleted ? "line-through text-gray-500" : ""}`}
      >
        {task.name}
      </Label>
    </div>
  );
}

export default TasksItem;
