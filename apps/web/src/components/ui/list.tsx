import { useState } from "react";
import {
  ChevronRightIcon,
  CopyIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "lucide-react";
import { useSwipeable } from "react-swipeable";

import { cn } from "@/lib/utils";

import { Card } from "@/components/ui/card";
import { Button } from "./button";

// Get nested value from object
const getNestedValue = (obj: Record<string, unknown>, path: string): string => {
  return path.split(".").reduce((acc: unknown, part: string) => {
    if (
      acc &&
      typeof acc === "object" &&
      part in (acc as Record<string, unknown>)
    ) {
      return (acc as Record<string, unknown>)[part];
    }
    return "";
  }, obj) as string;
};

const useListItem = ({
  data,
  displayExpr,
}: {
  data: Record<string, unknown>;
  displayExpr?: string;
}) => {
  const [isSwiped, setIsSwiped] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsSwiped(false),
    onSwipedRight: () => setIsSwiped(true),
    trackMouse: true,
  });

  const displayValue =
    typeof data === "string"
      ? data
      : displayExpr && typeof data === "object"
        ? getNestedValue(data, displayExpr)
        : "";

  const handlerSwiped = (value: boolean) => setIsSwiped(value);

  return {
    displayValue,
    handlers,
    handlerSwiped,
    isSwiped,
  };
};

type ItemProps<T> = {
  allowDeleting?: boolean;
  allowEditing?: boolean;
  allowCopy?: boolean;
  data: T;
  displayExpr?: string;
  label?: string;
  keyExpr?: string;
  itemIcon?: React.ElementType;
  onItemClick?: (data: T) => void;
  onEditClick?: (data: T) => void;
  onDeleteClick?: (data: T) => void;
  onCopyClick?: (data: T) => void;
};

export const ListItem = <T extends Record<string, unknown>>({
  allowDeleting = false,
  allowEditing = false,
  allowCopy = false,
  data,
  displayExpr,
  itemIcon: Icon,
  label,
  onItemClick,
  onEditClick,
  onDeleteClick,
  onCopyClick,
}: ItemProps<T>) => {
  const { displayValue, handlers, handlerSwiped, isSwiped } = useListItem({
    data,
    displayExpr,
  });

  return (
    <li
      tabIndex={0}
      className={cn(
        "hover:bg-muted hover:text-muted-foreground relative flex items-center border-b",
      )}
      {...handlers}
    >
      <div
        className={cn("grid items-center transition-all last:border-none", {
          "translate-x-0": isSwiped,
        })}
        style={{
          transform: !isSwiped
            ? `translateX(-${
                (Number(allowDeleting) +
                  Number(allowEditing) +
                  Number(allowCopy)) *
                48
              }px)`
            : undefined,
          gridTemplateColumns: `${Array(
            Number(allowDeleting) + Number(allowEditing) + Number(allowCopy),
          )
            .fill("3rem")
            .join(" ")} 55rem`,
        }}
      >
        {allowDeleting && (
          <button
            className="bg-destructive text-destructive-foreground flex w-12 justify-center py-4"
            onClick={() => {
              handlerSwiped(false);
              onDeleteClick?.(data);
            }}
          >
            <TrashIcon className="size-4" />
          </button>
        )}
        {allowEditing && (
          <button
            className="text-destructive-foreground flex w-12 justify-center bg-blue-500 py-4"
            onClick={() => {
              handlerSwiped(false);
              onEditClick?.(data);
            }}
          >
            <PencilIcon className="size-4" />
          </button>
        )}
        {allowCopy && (
          <button
            className="text-destructive-foreground flex w-12 justify-center bg-green-500 py-4"
            onClick={() => {
              handlerSwiped(false);
              onCopyClick?.(data);
            }}
          >
            <CopyIcon className="size-4" />
          </button>
        )}
        <div
          className="flex items-center gap-2 px-4"
          onClick={() => onItemClick?.(data)}
        >
          {Icon && <Icon className="text-muted-foreground size-4" />}
          <p>
            {label && <span className="mr-2">{label}</span>}
            {displayValue}
          </p>
        </div>
      </div>
      <ChevronRightIcon className="absolute right-4 size-4" />
    </li>
  );
};

type ListProps = {
  allowAdding?: boolean;
  addButtonText?: string;
  className?: string;
  isPending?: boolean;
  onAddNew?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const List = ({
  allowAdding = false,
  addButtonText = "Add new",
  className,
  children,
  onAddNew,
}: ListProps) => {
  return (
    <Card
      className={cn(
        "outline-border overflow-hidden border-none outline-1",
        className,
      )}
    >
      <ul>
        {allowAdding && (
          <li
            className="text-primary hover:bg-muted hover:text-muted-foreground border-b last:border-none"
            onClick={() => onAddNew?.()}
          >
            <Button
              variant="ghost"
              className="flex h-[48px] w-full items-center justify-start gap-2 p-4"
            >
              <PlusIcon className="size-4" />
              <span>{addButtonText}</span>
            </Button>
          </li>
        )}
        {children}
      </ul>
    </Card>
  );
};
