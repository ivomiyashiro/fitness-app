import { QueryClient, useQueryClient } from "@tanstack/react-query";
import {
  ActionFunction,
  LoaderFunction,
  RouterProvider,
  createBrowserRouter,
} from "react-router";

import { AppLayout } from "@/components/layouts/app/app.layout";
import { AppFallback } from "@/components/ui/app-fallback";

interface RouteModule {
  default: React.ComponentType;
  clientLoader?: (queryClient: QueryClient) => LoaderFunction;
  clientAction?: (queryClient: QueryClient) => ActionFunction;
}

const convert =
  (queryClient: QueryClient) =>
  (
    m: unknown,
  ): {
    loader?: LoaderFunction;
    action?: ActionFunction;
    Component: React.ComponentType;
  } => {
    const module = m as Partial<RouteModule>;

    return {
      loader: module.clientLoader?.(queryClient),
      action: module.clientAction?.(queryClient),
      Component: module.default ?? (() => null),
    };
  };

const createAppRouter = (queryClient: QueryClient) => {
  return createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      hydrateFallbackElement: <AppFallback />,
      children: [
        {
          hydrateFallbackElement: <AppFallback />,
          path: "/training-plans",
          lazy: () =>
            import("./training-plans/training-plans.page").then(
              convert(queryClient),
            ),
        },
        {
          hydrateFallbackElement: <AppFallback />,
          path: "/training-plans/:trainingPlanId/weeks",
          lazy: () =>
            import("./training-plan-weeks/training-plan-weeks.page").then(
              convert(queryClient),
            ),
        },
        {
          hydrateFallbackElement: <AppFallback />,
          path: "/training-plans/:trainingPlanId/weeks/:trainingPlanWeekId/workouts",
          lazy: () =>
            import("./workouts/workouts.page").then(convert(queryClient)),
        },
        {
          path: "/training-plans/:trainingPlanId/weeks/:trainingPlanWeekId/workouts/:workoutId/exercises",
          hydrateFallbackElement: <AppFallback />,
          lazy: () =>
            import("./workout-exercises/workout-exercises.page").then(
              convert(queryClient),
            ),
        },
        {
          path: "*",
          lazy: () =>
            import("./not-found/not-found.page").then(convert(queryClient)),
        },
      ],
    },
  ]);
};

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = createAppRouter(queryClient);

  return <RouterProvider router={router} />;
};
