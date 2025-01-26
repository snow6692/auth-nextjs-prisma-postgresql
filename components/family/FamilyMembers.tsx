import { User } from "@prisma/client";
import Image from "next/image";
import React from "react";
import FamilyTasks from "./FamilyTasks";

function FamilyMembers({
  familyMembers,
}: {
  familyMembers: (User & {
    tasks: { id: string; name: string; completed: boolean }[];
  })[];
}) {


  return (
    <div className="space-y-4">
      {familyMembers.map((member) => (
        <div className="border p-4 rounded   gap-5" key={member.id}>
          <div className="flex  items-center gap-5 mb-5 ">
            <Image
              alt={member.name!}
              src={member.image!}
              width={50}
              height={50}
              className=" rounded-full"
            />
            <h1 className="text-xl font-semibold">{member.name}</h1>
          </div>

          <FamilyTasks tasks={member.tasks} />
        </div>
      ))}
    </div>
  );
}

export default FamilyMembers;
