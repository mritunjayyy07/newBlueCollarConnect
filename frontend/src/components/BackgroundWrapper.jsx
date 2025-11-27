// components/BackgroundWrapper.jsx
import { Spotlight } from "./Spotlight.jsx"

export default function BackgroundWrapper({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased">
      <div className="absolute inset-0 pointer-events-none bg-transparent" />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      {children}
    </div>
  );
}
