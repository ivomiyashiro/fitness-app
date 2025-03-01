export type TrainingPlan = {
  trainingPlanId: string;
  name: string;
  description: string;
  trainingPlanWeeks: TrainingPlanWeek[];
};

export type TrainingPlanWeek = {
  trainingPlanWeekId: string;
  trainingPlanId: string;
  weekNumber: number;
  workouts: Workout[];
};

export type Workout = {
  workoutId: string;
  name: string;
  order: number;
  trainingPlanWeekId: string;
  exercises: WorkoutExercise[];
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
  sets: Set[];
};

export type Set = {
  setId: string;
  reps: number;
  rir: number;
};
