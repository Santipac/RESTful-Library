/*
  Warnings:

  - You are about to drop the column `nacionality` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `edition` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Book` table. All the data in the column will be lost.
  - Made the column `floor` on table `Address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `apartment` on table `Address` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `nationality` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_profileId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "floor" SET NOT NULL,
ALTER COLUMN "apartment" SET NOT NULL;

-- AlterTable
ALTER TABLE "Author" DROP COLUMN "nacionality",
ADD COLUMN     "nationality" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "edition",
DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
