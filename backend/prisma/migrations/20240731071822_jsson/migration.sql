/*
  Warnings:

  - The primary key for the `Author` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Author` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `authorId` on the `Book` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_authorId_fkey`;

-- AlterTable
ALTER TABLE `Author` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Book` MODIFY `authorId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
