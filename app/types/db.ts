import { Prisma } from "@prisma/client";

export type userRelations = Prisma.UserGetPayload<{
  include: {
    tasks: true;
    _count: true;
    family: true;
    
  };
}>;

export type familyRelations = Prisma.FamilyGetPayload<{
  include: {
    tasks: true;
    user: true;
    users: true;
    _count: true;
  };
}>;
