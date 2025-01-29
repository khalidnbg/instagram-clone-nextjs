import SearchForm from "@/components/SearchForm";
import SearchResults from "@/components/SearchResults";
import { Suspense } from "react";

export default async function SearchPage({
  searchParams: { query },
}: {
  searchParams: { query: string };
}) {
  return (
    <div className="w-full">
      <div className="max-w-sm mx-auto">
        <SearchForm />

        <Suspense fallback="Loading...">
          <SearchResults query={query} />
        </Suspense>
      </div>
    </div>
  );
}
