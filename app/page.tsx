import { SparklesCore } from "@/components/ui";
import { HeroContainer } from "./HeroContainer";
export default function Home() {
  return (
    <div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.3}
        />
      </div>
      <HeroContainer />
    </div>
  );
}
