import z from "zod";

const nameValidation = z
  .string()
  .min(1, { message: "Name is required" })
  .max(50, { message: "Name must not exceed 50 characters" });

const descriptionValidation = z
  .string()
  .max(250, { message: "Description must not exceed 250 characters" })
  .optional();

export const TrainingPlanPostScheme = z.object({
  name: nameValidation,
  description: descriptionValidation,
  weeks: z.number().min(1, { message: "Weeks is required" }).max(12, {
    message: "Weeks must not exceed 12",
  }),
});

export const TrainingPlanPutScheme = z.object({
  trainingPlanId: z.string(),
  name: nameValidation,
  description: descriptionValidation,
});
