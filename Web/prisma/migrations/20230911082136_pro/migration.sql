/*
  Warnings:

  - You are about to alter the column `duration` on the `lessons` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `lessons` MODIFY `duration` INTEGER NOT NULL;
