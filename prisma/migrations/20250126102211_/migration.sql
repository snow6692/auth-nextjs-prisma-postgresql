-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_familyId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "familyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "Family"("id") ON DELETE SET NULL ON UPDATE CASCADE;
