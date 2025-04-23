import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to change header style on scroll
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary/90 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/placeholder.svg" 
              alt="7 Days to Die Server Logo" 
              className="h-10 w-10"
            />
            <span className="font-bold text-xl hidden sm:inline-block">
              Zombie <span className="text-primary">Apocalypse</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              О сервере
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Правила
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Вайп
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              variant="outline"
              className="hidden md:inline-flex border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
            >
              Discord
            </Button>
            <Button className="hidden md:inline-flex">
              Играть
            </Button>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#" className="text-foreground hover:text-primary transition-colors py-2 border-b border-muted">
                    Главная
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2 border-b border-muted">
                    О сервере
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2 border-b border-muted">
                    Правила
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2 border-b border-muted">
                    Вайп
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2 border-b border-muted">
                    Контакты
                  </a>
                  <div className="flex flex-col gap-2 mt-4">
                    <Button variant="outline" className="w-full">Discord</Button>
                    <Button className="w-full">Играть</Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
