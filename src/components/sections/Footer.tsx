"use client";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 pt-8 text-sm text-white/40">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-white/60">
          <span className="text-base font-semibold text-white">
            Roya Studio
          </span>
          <span className="h-1 w-1 rounded-full bg-white/30" />
          <span>Creating amazing digital content for your business.</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <span>© {new Date().getFullYear()} Roya Studio</span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 md:inline-block" />
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
