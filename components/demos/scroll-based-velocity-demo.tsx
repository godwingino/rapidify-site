import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="Rapidify"
      default_velocity={2}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black-400 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}
