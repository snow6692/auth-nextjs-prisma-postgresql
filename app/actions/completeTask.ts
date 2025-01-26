"use server";

import prisma from "@/lib/db";

export async function CompleteToggleTask(id: string, completed: boolean) {
  try {
    await prisma.task.update({
      where: { id },
      data: { completed },
    });
  } catch (error) {
    console.error("Error updating task:", error);
    throw new Error("Failed to update the task.");
  }
}
