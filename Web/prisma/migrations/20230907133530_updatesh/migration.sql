/*
  Warnings:

  - Added the required column `orderOn` to the `couresContent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderOn` to the `lessons` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `courescontent` ADD COLUMN `orderOn` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `lessons` ADD COLUMN `orderOn` INTEGER NOT NULL;
