/*
  Warnings:

  - Added the required column `paymentMethod` to the `enrollments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `enrollments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trxId` to the `enrollments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `enrollments` ADD COLUMN `paymentMethod` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `trxId` VARCHAR(191) NOT NULL;
