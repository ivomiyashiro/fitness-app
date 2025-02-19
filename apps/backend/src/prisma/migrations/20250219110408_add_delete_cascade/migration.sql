-- DropForeignKey
ALTER TABLE "TrainingPlanWeek" DROP CONSTRAINT "TrainingPlanWeek_trainingPlanId_fkey";

-- AlterTable
ALTER TABLE "TrainingPlan" ALTER COLUMN "description" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TrainingPlanWeek" ADD CONSTRAINT "TrainingPlanWeek_trainingPlanId_fkey" FOREIGN KEY ("trainingPlanId") REFERENCES "TrainingPlan"("trainingPlanId") ON DELETE CASCADE ON UPDATE CASCADE;
