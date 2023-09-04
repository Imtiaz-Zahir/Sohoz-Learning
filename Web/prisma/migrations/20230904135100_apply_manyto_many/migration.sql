/*
  Warnings:

  - Added the required column `image` to the `blogs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blogs` ADD COLUMN `image` VARCHAR(191) NOT NULL,
    MODIFY `views` INTEGER NOT NULL DEFAULT 0;
