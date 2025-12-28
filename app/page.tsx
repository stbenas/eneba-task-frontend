import SearchInput from "@/src/components/elements/SearchInput";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16sm:items-start">
        <div className="relative w-full flex-1">
          <h1 className="text-2xl text-center mb-4"><b>Search for games to get started</b></h1>
          <form action="/search" method="get">
            <SearchInput />
          </form>
        </div>
      </main>
    </div>
  );
}
