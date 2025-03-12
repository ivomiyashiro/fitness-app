"use client";
import { ChevronsUpDownIcon, SearchIcon, XIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

import { useCombobox } from "./combobox.hook";
import { ComboboxContent } from "./combobox-content";
import { ComboboxProps } from "./combobox.types";

export type { ComboboxProps } from "./combobox.types";

export function Combobox<T>({
  data,
  isLoading = false,
  labelKey,
  mode = "multiple",
  onEndReached,
  onSearchChange,
  onSelect,
  placeholder = "Select...",
  searchValue = "",
  selected,
  totalCount,
  valueKey,
}: ComboboxProps<T>) {
  const {
    handleKeyDown,
    handleRemoveItem,
    handleSearch,
    handleSelect,
    highlightedIndex,
    isItemSelected,
    open,
    setOpen,
  } = useCombobox({
    data,
    mode,
    onSearchChange,
    onSelect,
    selected,
    valueKey,
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="w-full">
        <Button
          aria-expanded={open}
          disabled={data.length === 0}
          role="combobox"
          variant="outline"
          className="h-auto justify-between"
        >
          <div className="flex flex-wrap gap-1">
            {selected.length > 0 ? (
              selected.map((item: T) => (
                <Badge
                  key={String(item[valueKey])}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {String(item[labelKey])}
                  <XIcon
                    className="h-3 w-3 cursor-pointer"
                    onClick={(e) => handleRemoveItem(e, item)}
                  />
                </Badge>
              ))
            ) : (
              <span>{placeholder}</span>
            )}
          </div>
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="pointer-events-auto! z-50 p-0">
        <div className="flex items-center border-b p-2 py-1">
          <SearchIcon className="h-4 w-4" />
          <Input
            placeholder={placeholder}
            value={searchValue}
            className="h-10 w-full rounded-md border-none bg-transparent py-3 text-sm shadow-none outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </div>
        <ComboboxContent
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
      </PopoverContent>
    </Popover>
  );
}
