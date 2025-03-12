import { useState, useEffect } from "react";
import { ComboboxProps } from "./combobox.types";

export function useCombobox<T>({
  valueKey,
  mode = "multiple",
  selected,
  onSelect,
  onSearchChange,
  data,
}: Pick<
  ComboboxProps<T>,
  "valueKey" | "mode" | "selected" | "onSelect" | "onSearchChange" | "data"
>) {
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Reset highlighted index when data changes or popover closes
  useEffect(() => {
    setHighlightedIndex(-1);
  }, [data, open]);

  function isItemSelected(item: T) {
    return selected.some(
      (selectedItem) => selectedItem[valueKey] === item[valueKey],
    );
  }

  function handleSelect(item: T) {
    const isSelected = isItemSelected(item);

    if (mode === "multiple") {
      if (isSelected) {
        onSelect(
          selected.filter(
            (selectedItem) => selectedItem[valueKey] !== item[valueKey],
          ),
        );
        return;
      }

      onSelect([...selected, item]);
    } else {
      onSelect(isSelected ? [] : [item]);
      setOpen(false);
    }
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    onSearchChange?.(e.target.value);
  }

  function handleRemoveItem(e: React.MouseEvent, item: T) {
    e.stopPropagation();
    handleSelect(item);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < data.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < data.length) {
          handleSelect(data[highlightedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        break;
    }
  }

  return {
    open,
    setOpen,
    isItemSelected,
    handleSelect,
    handleSearch,
    handleRemoveItem,
    highlightedIndex,
    handleKeyDown,
  };
}
