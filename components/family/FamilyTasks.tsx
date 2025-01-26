"use client";

import React, { useState } from "react";
import { XIcon } from "lucide-react";
import { deleteTaskAction } from "@/app/actions/taskAction";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function FamilyTasks({
  tasks,
}: {
  tasks: { id: string; name: string; completed: boolean }[];
}) {
  const [taskList, setTaskList] = useState(tasks);
  const [isPending, setIsPending] = useState(false); // Track the loading state for deletion
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null); // Track the task to delete

  const handleDelete = async (taskId: string) => {
    setIsPending(true); // Set loading state

    try {
      await deleteTaskAction(taskId); // Delete task via the API
      toast.success("Task deleted!");
      setTaskList((prev) => prev.filter((task) => task.id !== taskId)); // Remove task from UI
      setTaskToDelete(null); // Reset the task to delete
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsPending(false); // Reset loading state
    }
  };

  const handleCancelDelete = () => {
    setTaskToDelete(null); // Reset the task to delete if the user cancels
  };

  return (
    <ul>
      {taskList.map((task) => (
        <li key={task.id} className="flex justify-between items-center">
          <p className={`${task.completed ? "line-through" : ""}`}>
            {task.name}
          </p>
          <AlertDialog
            open={taskToDelete === task.id}
            onOpenChange={(open) => (open ? null : handleCancelDelete())}
          >
            <AlertDialogTrigger asChild>
              <button
                type="button"
                onClick={() => setTaskToDelete(task.id)} // Set task to delete when the button is clicked
                disabled={isPending}
              >
                <XIcon className="text-red-500 cursor-pointer" />
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action will permanently delete the task and cannot be
                  undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  className=" text-black"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  className=" bg-red-500 text-white hover:bg-red-600 "
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </li>
      ))}
    </ul>
  );
}

export default FamilyTasks;
