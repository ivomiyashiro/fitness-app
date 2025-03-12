import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { ComboboxContentProps } from "./combobox.types";

import { Spinner } from "@/components/ui/spinner";

import { useComboboxContent } from "./combobox-content.hook";

export function ComboboxContentList<T>({
  data,
  handleSelect,
  highlightedIndex,
  isItemSelected,
  isLoading,
  labelKey,
  onEndReached,
  totalCount,
  valueKey,
}: ComboboxContentProps<T>) {
  const { loadMoreRef, ulRef } = useComboboxContent({
    highlightedIndex,
    onEndReached,
    data,
  });

  return (
    <div className="flex max-h-[300px] flex-col overflow-hidden">
      {totalCount !== undefined && (
        <div className="text-muted-foreground border-b px-2 py-1 text-xs">
          Showing {data.length} of {totalCount} results
        </div>
      )}
      <ul ref={ulRef} className="flex-grow overflow-y-auto">
        {data.map((item, index) => (
          <li
            key={String(item[valueKey])}
            onClick={() => handleSelect(item)}
            className={cn(
              "flex cursor-pointer items-center p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800",
              highlightedIndex === index ? "bg-gray-100 dark:bg-gray-800" : "",
            )}
          >
            <CheckIcon
              className={cn(
                "mr-2 h-4 w-4 text-gray-500",
                isItemSelected(item) ? "opacity-100" : "opacity-0",
              )}
            />
            {String(item[labelKey])}
          </li>
        ))}

        {onEndReached && (
          <li
            ref={loadMoreRef}
            className={cn("flex items-center justify-center", {
              "h-10": isLoading,
            })}
          >
            {isLoading && <Spinner size="xs" />}
          </li>
        )}
      </ul>
    </div>
  );
}

export function ComboboxContent<T>({
  data,
  emptyMessage = "No results found.",
  handleSelect,
  highlightedIndex,
  isItemSelected,
  isLoading,
  labelKey,
  onEndReached,
  totalCount,
  valueKey,
}: ComboboxContentProps<T>) {
  if (isLoading && data.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Spinner size="sm" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <p className="text-muted-foreground text-center text-sm">
        {emptyMessage}
      </p>
    );
  }

  return (
    <ComboboxContentList
      data={data}
      handleSelect={handleSelect}
      highlightedIndex={highlightedIndex}
      isItemSelected={isItemSelected}
      isLoading={isLoading}
      labelKey={labelKey}
      onEndReached={onEndReached}
      totalCount={totalCount}
      valueKey={valueKey}
    />
  );
}
