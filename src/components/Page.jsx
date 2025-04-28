import { Header } from "./Header";
import { ThemeToggleButton } from "./ThemeToggleButton";

export default function Page() {
  return (
    <div>
      <Header />
      <ThemeToggleButton />
      <p>This page changes based on the selected theme.</p>
    </div>
  );
}
