import AddTaskForm from "@/components/tasks/AddTaskForm";
import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/helpers";
import { redirect } from "next/navigation";
import React from "react";

async function page() {
  const user = await getCurrentUser();

  if (!user?.familyId) return redirect("/");
  if (user?.role === "USER") return redirect("/");

  const family = await prisma.family.findUnique({
    where: {
      id: user.familyId,
    },
    // include: {
    //   users: true,
    // },
    select: {
      users: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });
  console.log(family?.users);
  const familyMembers = family?.users || [];

  return <AddTaskForm familyMembers={familyMembers} />;
}

export default page;
