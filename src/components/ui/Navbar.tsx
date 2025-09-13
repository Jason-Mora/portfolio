import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
  return (
    
    <header className="p-6 shadow-md sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur z-50">
      <nav className="max-w-5xl mx-auto flex justify-evenly items-center">
        <a href="/" className="text-xl font-bold">
          JM
        </a>
        <ul className="flex gap-6">
          <li><a href="/aboutme" className="hover:text-blue-600 dark:hover:text-blue-400">Chi sono</a></li>
          <li><a href="/experiences" className="hover:text-blue-600 dark:hover:text-blue-400">Esperienze</a></li>
          <li><a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Progetti</a></li>
          <li><a href="/contacts" className="hover:text-blue-600 dark:hover:text-blue-400">Contatti</a></li>
        </ul>
        {/* Pulsante Dark Mode */}
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
