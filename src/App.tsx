import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages";

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
