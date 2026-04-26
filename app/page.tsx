"use client";

export default function GamePage() {
  return (
    <div className="w-full h-screen bg-black overflow-hidden relative font-mono">
      <iframe src="/game.html" className="w-full h-full border-none" />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-cyan-500/50 pointer-events-none text-sm uppercase tracking-widest hidden sm:block">
        Running in Next.js Server Preview Loop
      </div>
    </div>
  )
}
