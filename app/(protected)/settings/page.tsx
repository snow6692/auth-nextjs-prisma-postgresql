import { auth } from "@/auth";
import SingOutButton from "@/components/auth/SingOutButtonServer";
import prisma from "@/lib/db";

export default async function SettingsPage() {
  const session = await auth();
  const user = await session?.user;
  const currentUser = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    include: {
      tasks: true,
      _count: true,
    },
  });


  return (
    <div>
      {<SingOutButton />}
      {JSON.stringify(currentUser)}
    </div>
  );
}
