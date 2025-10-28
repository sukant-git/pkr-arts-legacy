import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPkr from "./pages/AboutPkr";
import Admissions from "./pages/Admissions";
import Departments from "./pages/Departments";
import Research from "./pages/Research";
import CampusLife from "./pages/CampusLife";
import Resources from "./pages/Resources";
import Alumni from "./pages/Alumni";
import Gallery from "./pages/Gallery";
import Iqac from "./pages/Iqac";
import Payment from "./pages/Payment";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPkr />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/research" element={<Research />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/iqac" element={<Iqac />} />
          </Route>
          <Route path="/payment" element={<Payment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;