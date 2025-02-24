-- CreateTable
CREATE TABLE "Workout" (
    "workoutId" TEXT NOT NULL,
    "trainingPlanWeekId" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("workoutId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Workout_name_key" ON "Workout"("name");

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_trainingPlanWeekId_fkey" FOREIGN KEY ("trainingPlanWeekId") REFERENCES "TrainingPlanWeek"("trainingPlanWeekId") ON DELETE CASCADE ON UPDATE CASCADE;
