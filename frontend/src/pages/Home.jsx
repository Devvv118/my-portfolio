import { useTheme } from "../hooks/useTheme";
import Nav from "../sections/Nav";
import Hero from "../sections/Hero";
import Categories from "../sections/Categories";
import Work from "../sections/Work";
import Process from "../sections/Process";
import Contact from "../sections/Contact";

// Light by default; the toggle in the Nav switches to dark. The choice is shared with the project pages.
export default function Home() {
  const [dark, toggleTheme] = useTheme();

  return (
    <div className={dark ? "dark" : ""}>
      <div className="relative bg-cream text-warm-ink dark:bg-navy-deep dark:text-cream">
        <Nav dark={dark} onToggle={toggleTheme} />
        <Hero />
        <Categories />
        <Work />
        <Process />
        <Contact />
      </div>
    </div>
  );
}
