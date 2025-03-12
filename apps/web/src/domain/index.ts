export type TrainingPlan = {
  trainingPlanId: string;
  name: string;
  description: string;
  trainingPlanWeeks: Omit<TrainingPlanWeek, "trainingPlanId">[];
};

export type TrainingPlanWeek = {
  trainingPlanWeekId: string;
  trainingPlanId: string;
  weekNumber: number;
  workouts: Omit<Workout, "trainingPlanWeekId">[];
};

export type Workout = {
  workoutId: string;
  name: string;
  order: number;
  trainingPlanWeekId: string;
  workoutExercises: Omit<WorkoutExercise, "workoutId">[];
};

export type Exercise = {
  exerciseId: string;
  name: string;
};

export type WorkoutExercise = {
  workoutExerciseId: string;
  order: number;
  workout: {
    workoutId: string;
    name: string;
  };
  exercise: {
    exerciseId: string;
    name: string;
  };
  sets: Omit<Set, "workoutExerciseId">[];
};

export type Set = {
  setId: string;
  reps: number;
  rir: number;
};
