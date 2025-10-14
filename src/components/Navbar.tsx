import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import collegeLogo from "@/assets/college-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: "Home", href: "#" },
    { 
      label: "About PKR", 
      href: "#",
      dropdown: ["Vision & Mission", "Management", "Principal's Desk", "History"]
    },
    { 
      label: "Admissions", 
      href: "#",
      dropdown: ["How to Apply", "Eligibility", "Fee Structure", "Scholarships"]
    },
    { 
      label: "Departments", 
      href: "#",
      dropdown: ["Arts", "Science", "Commerce", "Computer Science"]
    },
    { 
      label: "Research", 
      href: "#",
      dropdown: ["Research Advisory", "Research Ethics", "Research Cell", "Research Projects"]
    },
    { label: "Campus Life", href: "#" },
    { 
      label: "Resources", 
      href: "#",
      dropdown: ["Library", "E-Resources", "Laboratory"]
    },
    { label: "Alumni", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "IQAC", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and College Name */}
          <div className="flex items-center space-x-4">
            <img src={collegeLogo} alt="PKR Arts College Logo" className="h-14 w-14" />
            <div className="hidden md:block">
              <h1 className="text-white font-bold text-lg leading-tight">P.K.R. ARTS COLLEGE FOR WOMEN</h1>
              <p className="text-accent text-xs">Autonomous Institution | NAAC 'A' Grade</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-white px-3 py-2 text-sm font-medium hover:bg-primary-foreground/10 rounded transition-colors flex items-center"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>
                
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Online Payment Button */}
          <div className="hidden lg:block">
            <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Online Payment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-md hover:bg-primary-foreground/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground/10"
                >
                  {item.label}
                </a>
                {item.dropdown && (
                  <div className="pl-4">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="text-white/80 block px-3 py-2 rounded-md text-sm hover:bg-primary-foreground/10"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button variant="default" className="w-full mt-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              Online Payment
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
