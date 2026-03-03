export default function Loading() {
  return (
    <div className="min-h-screen bg-twc-charcoal flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="flex items-baseline gap-0 justify-center">
          <span className="text-4xl font-bold tracking-tight text-[#2C2824]">twc</span>
          <span className="w-2.5 h-2.5 bg-[#FF2B2B] rounded-full ml-0.5 animate-pulse" />
        </div>
        <div className="w-24 h-px bg-[#2C2824]/20 mx-auto overflow-hidden">
          <div className="w-full h-full bg-twc-red animate-[loading_1.5s_ease-in-out_infinite] origin-left" />
        </div>
      </div>
    </div>
  );
}
