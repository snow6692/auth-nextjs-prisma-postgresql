import { auth } from "@/auth";
import prisma from "./db";

export const getCurrentUser = async () => {
  const session = await auth();
  const user = await session?.user;
  return await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
    include: {
      tasks: true,
      _count: true,
    },
  });
};

