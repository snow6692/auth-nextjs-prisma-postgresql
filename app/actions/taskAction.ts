"use server";
import { auth } from "@/auth";
import prisma from "@/lib/db";
import { TaskType } from "@/schemas";

// Server action to handle task creation
export async function addTaskAction(values: TaskType) {
  try {
    const session = await auth(); // Auth should be server-side here
    const user = await session?.user;

    if (!user) {
      throw new Error("User not authenticated");
    }

    const currentUser = await prisma.user.findUnique({
      where: { id: user.id },
      include: { tasks: true, _count: true },
    });

    if (currentUser?.role === "USER") return;
    if (!currentUser?.familyId) return;

    // Create the new task
    const newTask = await prisma.task.create({
      data: {
        name: values.name,
        completed: false,
        familyId: currentUser.familyId,
        userId: values.memberId,
      },
    });

    return newTask; // Return the created task
  } catch (error) {
    throw new Error("Error creating task");
  }
}

export async function deleteTaskAction(taskId: string) {
  try {
    const session = await auth(); // Auth should be server-side here
    const user = await session?.user;

    if (!user) {
      throw new Error("User not authenticated");
    }

    const currentUser = await prisma.user.findUnique({
      where: { id: user.id },
      include: { tasks: true, _count: true },
    });

    if (currentUser?.role === "USER") return;
    if (!currentUser?.familyId) return;

    // Create the new task
    const newTask = await prisma.task.delete({
      where: { id: taskId },
    });

    return newTask; // Return the created task
  } catch (error) {
    throw new Error("Error creating task");
  }
}
