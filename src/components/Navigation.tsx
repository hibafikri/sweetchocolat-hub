import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: "/", label: "Accueil" },
    { path: "/smq", label: "SMQ" },
    { path: "/direction", label: "Direction" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Sweetchocolat Logo" 
              className="h-12 w-12 transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Sweetchocolat</span>
              <span className="text-xs text-muted-foreground">L'Excellence du Chocolat</span>
            </div>
          </Link>

          <div className="flex gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-6 py-2 rounded-lg font-medium transition-all",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
