/*
  Warnings:

  - You are about to drop the `video` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `reviewsId` to the `enrollments` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `video` DROP FOREIGN KEY `video_couresContentId_fkey`;

-- AlterTable
ALTER TABLE `enrollments` ADD COLUMN `reviewsId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `video`;

-- CreateTable
CREATE TABLE `lessons` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `video` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `couresContentId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lessons` ADD CONSTRAINT `lessons_couresContentId_fkey` FOREIGN KEY (`couresContentId`) REFERENCES `couresContent`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `enrollments` ADD CONSTRAINT `enrollments_reviewsId_fkey` FOREIGN KEY (`reviewsId`) REFERENCES `reviews`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
