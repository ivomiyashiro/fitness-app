/*
  Warnings:

  - The primary key for the `TrainingPlan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `TrainingPlan` table. All the data in the column will be lost.
  - The primary key for the `TrainingPlanWeek` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `TrainingPlanWeek` table. All the data in the column will be lost.
  - The required column `trainingPlanId` was added to the `TrainingPlan` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `trainingPlanWeekId` was added to the `TrainingPlanWeek` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "TrainingPlanWeek" DROP CONSTRAINT "TrainingPlanWeek_trainingPlanId_fkey";

-- AlterTable
ALTER TABLE "TrainingPlan" DROP CONSTRAINT "TrainingPlan_pkey",
DROP COLUMN "id",
ADD COLUMN     "trainingPlanId" TEXT NOT NULL,
ADD CONSTRAINT "TrainingPlan_pkey" PRIMARY KEY ("trainingPlanId");

-- AlterTable
ALTER TABLE "TrainingPlanWeek" DROP CONSTRAINT "TrainingPlanWeek_pkey",
DROP COLUMN "id",
ADD COLUMN     "trainingPlanWeekId" TEXT NOT NULL,
ADD CONSTRAINT "TrainingPlanWeek_pkey" PRIMARY KEY ("trainingPlanWeekId");

-- AddForeignKey
ALTER TABLE "TrainingPlanWeek" ADD CONSTRAINT "TrainingPlanWeek_trainingPlanId_fkey" FOREIGN KEY ("trainingPlanId") REFERENCES "TrainingPlan"("trainingPlanId") ON DELETE RESTRICT ON UPDATE CASCADE;
