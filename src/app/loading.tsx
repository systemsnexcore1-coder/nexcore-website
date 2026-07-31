export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="w-full">
        <div className="h-3 w-32 rounded-lg bg-muted" />
        <div className="mt-6 h-10 max-w-2xl rounded-lg bg-muted" />
        <div className="mt-4 h-10 max-w-xl rounded-lg bg-muted" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="h-32 rounded-lg bg-muted" />
          <div className="h-32 rounded-lg bg-muted" />
          <div className="h-32 rounded-lg bg-muted" />
        </div>
      </div>
    </div>
  );
}
