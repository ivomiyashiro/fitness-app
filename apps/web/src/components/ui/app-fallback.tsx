import { Spinner } from "./spinner";

export const AppFallback = () => {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
      <Spinner size="lg" />
    </div>
  );
};
