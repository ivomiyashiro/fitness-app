export type WorkoutExerciseResponse = {
  workoutExerciseId: string;
  order: number;
  exercise: {
    exerciseId: string;
    name: string;
  };
  workout: {
    workoutId: string;
    name: string;
  };
  sets: {
    setId: string;
    reps: number;
    rir: number;
  }[];
};

export type WorkoutExerciseCreateRequest = {
  exerciseId: string;
  workoutId: string;
  sets: {
    reps: number;
    rir: number;
  }[];
};

export type WorkoutExerciseUpdateRequest = {
  exerciseId: string;
  order?: number;
  sets: {
    setId: string;
    reps: number;
    rir: number;
  }[];
};
