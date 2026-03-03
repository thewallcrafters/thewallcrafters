export default function Loading() {
  return (
    <div className="min-h-screen bg-twc-charcoal">
      <div className="relative h-[70vh] bg-twc-warm/5 animate-pulse" />
      <div className="container-wide py-16">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-3 space-y-4">
            <div className="h-4 bg-twc-warm/10 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-twc-warm/10 rounded w-1/2 animate-pulse" />
          </div>
          <div className="lg:col-span-9 space-y-6">
            <div className="h-6 bg-twc-warm/10 rounded w-2/3 animate-pulse" />
            <div className="h-4 bg-twc-warm/10 rounded w-full animate-pulse" />
            <div className="h-4 bg-twc-warm/10 rounded w-5/6 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
