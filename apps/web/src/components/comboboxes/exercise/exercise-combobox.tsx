import { Exercise } from "@/domain";
import { Combobox } from "@/components/ui/combobox/combobox";
import { useExerciseCombobox } from "./exercise-combobox.hook";

export const ExerciseCombobox = ({
  selected,
  placeholder,
  mode = "multiple",
  onSelect,
}: {
  selected?: Exercise[];
  placeholder?: string;
  mode?: "single" | "multiple";
  onSelect: (selected: Exercise[]) => void;
}) => {
  const {
    data,
    handleEndReached,
    handleSearch,
    isLoading,
    search,
    selectedExercise,
    totalCount,
  } = useExerciseCombobox({ selected });

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
        (placeholder ?? mode === "multiple") ? "Exercises..." : "Exercise..."
      }
      searchValue={search}
      selected={selectedExercise || []}
      totalCount={totalCount}
      valueKey="exerciseId"
    />
  );
};
