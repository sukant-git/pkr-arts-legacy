import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import collegeLogo from "@/assets/college-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: "Home", href: "/" },
    { 
      label: "About PKR", 
      href: "/about",
      dropdown: [
        { label: "Vision & Mission", href: "/about/vision-mission" },
        { label: "Management", href: "/about/management" },
        { label: "Principal's Desk", href: "/about/principals-desk" },
        { label: "History", href: "/about/history" }
      ]
    },
    { 
      label: "Admissions", 
      href: "/admissions",
      dropdown: [
        { label: "How to Apply", href: "/admissions/how-to-apply" },
        { label: "Eligibility", href: "/admissions/eligibility" },
        { label: "Fee Structure", href: "/admissions/fee-structure" },
        { label: "Scholarships", href: "/admissions/scholarships" }
      ]
    },
    { 
      label: "Departments", 
      href: "/departments",
      dropdown: [
        { label: "Arts", href: "/departments/arts" },
        { label: "Science", href: "/departments/science" },
        { label: "Commerce", href: "/departments/commerce" },
        { label: "Computer Science", href: "/departments/computer-science" }
      ]
    },
    { 
      label: "Research", 
      href: "/research",
      dropdown: [
        { label: "Research Advisory", href: "/research/advisory" },
        { label: "Research Ethics", href: "/research/ethics" },
        { label: "Research Cell", href: "/research/cell" },
        { label: "Research Projects", href: "/research/projects" }
      ]
    },
    { label: "Campus Life", href: "/campus-life" },
    { 
      label: "Resources", 
      href: "/resources",
      dropdown: [
        { label: "Library", href: "/resources/library" },
        { label: "E-Resources", href: "/resources/e-resources" },
        { label: "Laboratory", href: "/resources/laboratory" }
      ]
    },
    { label: "Alumni", href: "/alumni" },
    { label: "Gallery", href: "/gallery" },
    { label: "IQAC", href: "/iqac" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b-2 border-primary-foreground/20">
      {/* Top Bar with Logo and College Info */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo and College Name */}
            <div className="flex items-center space-x-3">
              <img src={collegeLogo} alt="PKR Arts College Logo" className="h-12 w-12 md:h-16 md:w-16" />
              <div>
                <h1 className="text-white font-bold text-base md:text-lg leading-tight">P.K.R. ARTS COLLEGE FOR WOMEN</h1>
                <p className="text-accent text-xs font-medium">Autonomous Institution | NAAC 'A' Grade</p>
              </div>
            </div>

            {/* Online Payment Button - Desktop */}
            <div className="hidden md:block">
              <Link to="/payment">
                <Button 
                  variant="default" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6"
                >
                  Online Payment
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 rounded-md hover:bg-primary-foreground/10"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="hidden md:block bg-primary/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-1 py-2">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="text-white px-4 py-2.5 text-sm font-medium hover:bg-white/10 rounded transition-all flex items-center whitespace-nowrap"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="ml-1 h-3.5 w-3.5" />}
                </Link>
                
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-xl py-2 z-[100] border border-border">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-accent/10 hover:text-primary transition-colors font-medium"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/20">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[70vh] overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="text-white block px-3 py-2.5 rounded-md text-base font-medium hover:bg-primary-foreground/10"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="text-white/80 block px-3 py-2 rounded-md text-sm hover:bg-primary-foreground/10"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link to="/payment">
                <Button 
                  variant="default" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  Online Payment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;