import { getDevice } from "@/utils/get-device";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
});

const App = () => {
  const device = getDevice();

  if (device === "desktop") {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <p>Ops! This app is not compatible with your device yet</p>
        <p>Try in a mobile device</p>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
