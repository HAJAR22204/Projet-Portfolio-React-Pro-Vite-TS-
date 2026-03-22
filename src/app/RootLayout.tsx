import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 border-b backdrop-blur bg-background/80 z-10">
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4">
          <NavLink to="/" className="font-bold text-lg">
            Hajar Zegour
          </NavLink>
          <div className="flex items-center gap-6 text-sm">
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? "font-semibold underline" : "hover:underline"}
            >
              Projets
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) => isActive ? "font-semibold underline" : "hover:underline"}
            >
              Experience
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) => isActive ? "font-semibold underline" : "hover:underline"}
            >
              Formation
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? "font-semibold underline" : "hover:underline"}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        {new Date().getFullYear()} Hajar Zegour — Tous droits reserves
      </footer>
    </div>
  );
}