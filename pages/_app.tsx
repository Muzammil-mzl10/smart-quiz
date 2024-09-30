import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";

// Create a query client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap the entire app with QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
