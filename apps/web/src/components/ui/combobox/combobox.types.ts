export type ComboboxProps<T> = {
  data: T[];
  isLoading?: boolean;
  labelKey: keyof T;
  mode?: "single" | "multiple";
  onEndReached?: () => void;
  onSearchChange?: (value: string) => void;
  onSelect: (selected: T[]) => void;
  placeholder?: string;
  searchValue?: string;
  selected: T[];
  totalCount?: number;
  valueKey: keyof T;
};

export type ComboboxContentProps<T> = {
  data: T[];
  emptyMessage?: string;
  handleSelect: (item: T) => void;
  highlightedIndex: number;
  isItemSelected: (item: T) => boolean;
  isLoading: boolean;
  labelKey: keyof T;
  onEndReached?: () => void;
  totalCount?: number;
  valueKey: keyof T;
};
