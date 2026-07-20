import React, { createContext, useContext, useState, useEffect } from "react";

interface NavigationContextType {
  currentPath: string;
  currentHash: string;
  navigate: (path: string, options?: { scroll?: boolean }) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("popstate", handleLocationChange);
    // Custom event to handle programmatic navigation without popstate
    window.addEventListener("pushstate-changed", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("pushstate-changed", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const navigate = (path: string, options: { scroll?: boolean } = { scroll: true }) => {
    // Separate path and hash
    const [pathPart, hashPart] = path.split("#");
    const targetHash = hashPart ? `#${hashPart}` : "";

    // If it's a different path or different hash
    if (window.location.pathname !== pathPart || window.location.hash !== targetHash) {
      window.history.pushState(null, "", pathPart + targetHash);
      
      // Dispatch custom event to trigger popstate-like behavior
      const event = new Event("pushstate-changed");
      window.dispatchEvent(event);

      // Scroll behavior
      if (options.scroll) {
        if (targetHash) {
          // If there is a hash, wait a tiny bit for the component to render, then scroll to it
          setTimeout(() => {
            const el = document.getElementById(hashPart);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else if (targetHash) {
      // Just a hash change on the same page
      const el = document.getElementById(hashPart);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPath, currentHash, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useRouter must be used within a NavigationProvider");
  }
  return context;
}

export const useNavigation = useRouter;

// Helper component for accessible SEO-crawlable Link
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, ...props }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Allow modifier keys (cmd/ctrl click to open in new tab)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
