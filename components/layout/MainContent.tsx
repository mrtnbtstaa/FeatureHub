"use client";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

const MainContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4 ml-2">{children}</div>;
    </QueryClientProvider>
  )
};

export default MainContent;
