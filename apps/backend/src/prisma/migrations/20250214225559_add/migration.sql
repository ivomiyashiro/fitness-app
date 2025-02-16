/*
  Warnings:

  - You are about to alter the column `name` on the `TrainingPlan` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `description` on the `TrainingPlan` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[name]` on the table `TrainingPlan` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "TrainingPlan" ALTER COLUMN "name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "TrainingPlanWeek" (
    "id" TEXT NOT NULL,
    "trainingPlanId" TEXT NOT NULL,
    "weekNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingPlanWeek_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TrainingPlan_name_key" ON "TrainingPlan"("name");

-- AddForeignKey
ALTER TABLE "TrainingPlanWeek" ADD CONSTRAINT "TrainingPlanWeek_trainingPlanId_fkey" FOREIGN KEY ("trainingPlanId") REFERENCES "TrainingPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
