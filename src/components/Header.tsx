import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [onlinePlayers, setOnlinePlayers] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Simulate fetching online players count
  useEffect(() => {
    const fetchOnlinePlayers = () => {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        const randomPlayers = Math.floor(Math.random() * 25) + 5;
        setOnlinePlayers(randomPlayers);
        setIsLoading(false);
      }, 1000);
    };
    
    fetchOnlinePlayers();
    const interval = setInterval(fetchOnlinePlayers, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary/90 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="7 Days to Die Server Logo" 
                className="h-10 w-10 rounded-full bg-accent/10 p-1.5 border border-accent/20"
              />
              <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-secondary"></div>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">
              Zombie <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Apocalypse</span>
            </span>
          </div>

          {/* Server Status Badge */}
          <div className="hidden md:flex items-center">
            <Badge variant="outline" className="bg-secondary/50 border-primary/20 px-2 mr-4">
              <Globe className="h-3.5 w-3.5 text-primary mr-1.5" />
              <span className="text-xs font-medium">185.73.215.131:26900</span>
            </Badge>
            <Badge variant="outline" className="bg-secondary/50 border-primary/20 px-2">
              <Users className="h-3.5 w-3.5 text-accent mr-1.5" />
              {isLoading ? (
                <span className="text-xs font-medium">Загрузка...</span>
              ) : (
                <span className="text-xs font-medium">{onlinePlayers}/32 онлайн</span>
              )}
            </Badge>
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
              className="hidden md:inline-flex border-accent/50 text-accent hover:bg-accent/10 hover:text-accent gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
              </svg>
              Discord
            </Button>
            <Button className="hidden md:inline-flex bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Играть
            </Button>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-secondary/95 backdrop-blur-md border-primary/20">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img 
                      src="/placeholder.svg" 
                      alt="7 Days to Die Server Logo" 
                      className="h-16 w-16 rounded-full bg-accent/10 p-2 border border-accent/20"
                    />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-secondary"></div>
                  </div>
                </div>
                
                <div className="flex justify-center gap-2 mb-6">
                  <Badge variant="outline" className="bg-secondary/50 border-primary/20 px-2">
                    <Globe className="h-3.5 w-3.5 text-primary mr-1.5" />
                    <span className="text-xs font-medium">185.73.215.131:26900</span>
                  </Badge>
                  <Badge variant="outline" className="bg-secondary/50 border-primary/20 px-2">
                    <Users className="h-3.5 w-3.5 text-accent mr-1.5" />
                    {isLoading ? (
                      <span className="text-xs font-medium">Загрузка...</span>
                    ) : (
                      <span className="text-xs font-medium">{onlinePlayers}/32 онлайн</span>
                    )}
                  </Badge>
                </div>
                
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#" className="text-foreground hover:text-primary transition-colors py-2 border-b border-primary/10">
                    Главная
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10">
                    О сервере
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10">
                    Правила
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10">
                    Вайп
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors py-2 border-b border-primary/10">
                    Контакты
                  </a>
                  <div className="flex flex-col gap-2 mt-4">
                    <Button variant="outline" className="w-full border-accent/50 text-accent hover:bg-accent/10 hover:text-accent gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                      </svg>
                      Discord
                    </Button>
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                      Играть
                    </Button>
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
