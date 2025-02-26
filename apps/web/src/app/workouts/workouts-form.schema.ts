import z from "zod";

export const WorkoutFormSchema = z.object({
  trainingPlanWeekId: z.string(),
  name: z.string().min(1, { message: "Name is required" }).max(50, {
    message: "Name must not exceed 50 characters",
  }),
  exercises: z.array(
    z.object({
      exerciseId: z.string().min(1, { message: "Exercise is required" }),
      name: z
        .string()
        .min(1, { message: "Exercise name is required" })
        .max(50, { message: "Exercise name must not exceed 50 characters" }),
    }),
  ),
});
