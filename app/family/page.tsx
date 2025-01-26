import FamilyMembers from "@/components/family/FamilyMembers";
import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/helpers";
import { redirect } from "next/navigation";
async function page() {
  const user = await getCurrentUser();

  if (!user?.familyId) return redirect("/");
  if (user?.role === "USER") return redirect("/");

  const family = await prisma.family.findUnique({
    where: {
      id: user?.familyId,
    },
    include: {
      users: {
        include: {
          tasks: true,
        },
      },
      tasks: true,
    },
  });

  if (user?.role === "ADMIN") {
    return (
      <div className="w-full h-screen grid grid-cols-2">
        <FamilyMembers familyMembers={family?.users || []} />
      </div>
    );
  }
}

export default page;
