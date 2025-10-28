import { Button } from "@/components/ui/button";
import heroImage from "@/assets/Se3-Group-s-e1528365728866.jpg";

const HeroSection = () => {
  const handleOpenExcel = () => {
    window.open("/CO_ASS_144P80_QUELv230719_1_JOTHI.xlsx", "_blank");
  };

  return (
    <section className="relative mt-[72px] md:mt-[138px]">
      {/* Hero Image */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src={heroImage} 
          alt="Students working on computers at PKR Arts College" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        
        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 leading-tight font-serif">
                Accredited by NAAC with 'A' Grade
              </h2>
              <p className="text-white text-base sm:text-lg md:text-xl mb-4 sm:mb-6">
                Promoting knowledge and skills of learner
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* OBE Button */}
      <div className="bg-gradient-to-r from-accent to-accent/90 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <Button
            onClick={handleOpenExcel}
            className="bg-white text-primary hover:bg-white/90 font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-lg transform transition-all hover:scale-105"
          >
            OBE CO/BO Course Attainment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
