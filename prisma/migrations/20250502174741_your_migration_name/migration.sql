/*
  Warnings:

  - You are about to drop the column `Name` on the `Users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Email]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Email` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_Name_key";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "Name",
ADD COLUMN     "Email" VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Users_Email_key" ON "Users"("Email");
