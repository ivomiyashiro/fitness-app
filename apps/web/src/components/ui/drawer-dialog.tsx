import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "./drawer";
import { Button } from "./button";

type Props = {
  description?: string;
  disabled?: boolean;
  onCancel?: (data?: unknown) => void;
  onClose: (data?: unknown) => void;
  onConfirm?: (data?: unknown) => void;
  open: boolean;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  title: string;
  type?: "destructive" | "default";
};

export const DrawerDialog = ({
  description,
  disabled = false,
  onCancel,
  onClose,
  onConfirm,
  open,
  primaryButtonText = "Delete",
  secondaryButtonText = "Cancel",
  showPrimaryButton = true,
  showSecondaryButton = true,
  title,
  type = "default",
}: Props) => {
  const handlePrimaryButtonClick = () => {
    onConfirm?.();
  };

  const handleSeconaryButtonClick = () => {
    onCancel?.();
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>
        <DrawerDescription>{description}</DrawerDescription>
        <DrawerFooter>
          {showPrimaryButton && (
            <Button
              variant={type === "destructive" ? "destructive" : "default"}
              disabled={disabled}
              onClick={handlePrimaryButtonClick}
            >
              {primaryButtonText}
            </Button>
          )}
          {showSecondaryButton && (
            <Button
              variant="secondary"
              disabled={disabled}
              onClick={handleSeconaryButtonClick}
            >
              {secondaryButtonText}
            </Button>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
