import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewsTicker from "@/components/NewsTicker";
import NewsEvents from "@/components/NewsEvents";
import AcademicCalendar from "@/components/AcademicCalendar";
import AcademicLinks from "@/components/AcademicLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <NewsTicker />
        
        {/* Main Content Sections */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <NewsEvents />
            <AcademicCalendar />
            <AcademicLinks />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
