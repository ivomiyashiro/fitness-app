import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  useTrainingPlanPut,
  useTrainingPlanPost,
} from "@/hooks/use-training-plan";

import {
  TrainingPlanPostScheme,
  TrainingPlanPutScheme,
} from "@/lib/schemes/training-plan.schemes";

import { TrainingPlanFormData } from "./training-plans.page.hook";

type TrianingPlanFormScheme =
  | z.infer<typeof TrainingPlanPutScheme>
  | z.infer<typeof TrainingPlanPostScheme>;

export const useTrainingPlanForm = ({
  defaultValues,
  onClose,
}: {
  defaultValues: TrainingPlanFormData;
  onClose: () => void;
}) => {
  const form = useForm<TrianingPlanFormScheme>({
    resolver: defaultValues.trainingPlanId
      ? zodResolver(TrainingPlanPutScheme)
      : zodResolver(TrainingPlanPostScheme),
    values: defaultValues,
  });

  const handleSuccess = () => {
    form.reset({
      description: "",
      name: "",
    });
    onClose();
  };

  const { mutate: updateTrainingPlan, isPending: isUpdatePending } =
    useTrainingPlanPut({
      onSuccess: handleSuccess,
    });
  const { mutate: createTrainingPlan, isPending: isCreatePending } =
    useTrainingPlanPost({
      onSuccess: handleSuccess,
    });

  const onSubmit = async (data: TrianingPlanFormScheme) => {
    if (defaultValues.trainingPlanId) {
      updateTrainingPlan({
        trainingPlanId: (data as z.infer<typeof TrainingPlanPutScheme>)
          .trainingPlanId,
        data: {
          name: data.name,
          description: data.description,
        },
      });
    } else {
      createTrainingPlan({
        name: data.name,
        description: data.description,
        weeks: (data as z.infer<typeof TrainingPlanPostScheme>).weeks,
      });
    }
  };

  return {
    form,
    isLoading: isCreatePending || isUpdatePending,
    onSubmit,
  };
};
