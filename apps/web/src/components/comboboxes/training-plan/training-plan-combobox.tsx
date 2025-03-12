import { TrainingPlan } from "@/domain";
import { Combobox } from "@/components/ui/combobox/combobox";
import { useTrainingPlanCombobox } from "./training-plan-combobox.hook";

export const TrainingPlanCombobox = ({
  selected,
  placeholder,
  mode = "multiple",
  onSelect,
}: {
  selected?: TrainingPlan[];
  placeholder?: string;
  mode?: "single" | "multiple";
  onSelect: (selected: TrainingPlan[]) => void;
}) => {
  const {
    data,
    handleEndReached,
    handleSearch,
    isLoading,
    search,
    selectedTrainingPlan,
    totalCount,
  } = useTrainingPlanCombobox({ selected });

  return (
    <Combobox
      data={data || []}
      isLoading={isLoading}
      labelKey="name"
      mode={mode}
      onEndReached={handleEndReached}
      onSearchChange={handleSearch}
      onSelect={onSelect}
      placeholder={
        (placeholder ?? mode === "multiple")
          ? "Training Plans..."
          : "Training Plan..."
      }
      searchValue={search}
      selected={selectedTrainingPlan || []}
      totalCount={totalCount}
      valueKey="trainingPlanId"
    />
  );
};
