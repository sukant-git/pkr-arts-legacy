import HeroSection from "@/components/HeroSection";
import NewsTicker from "@/components/NewsTicker";
import NewsEvents from "@/components/NewsEvents";
import AcademicCalendar from "@/components/AcademicCalendar";
import AcademicLinks from "@/components/AcademicLinks";
import InfoCard from "@/components/InfoCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import ExcelTab from "@/components/ExcelTab";
import React from "react";


const Index = () => {
  const [tab, setTab] = React.useState("tab1");
  const tabListRef = React.useRef<HTMLDivElement>(null);

  const handleNextTab = () => {
    setTab("tab2");
    setTimeout(() => {
      tabListRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <HeroSection />
      <NewsTicker />

      {/* Responsive Tabs Section */}
      <section className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList ref={tabListRef} className="w-full flex justify-center mb-4">
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">OBE Excel Data</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div className="flex flex-col items-center gap-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-stretch">
                <NewsEvents />
                <AcademicCalendar />
                <AcademicLinks />
              </div>
              <div className="mt-8 flex justify-center w-full">
                <InfoCard 
                  title="Our Mission"
                  description="Empowering women through education."
                  content="To provide quality education and foster an environment of academic excellence, personal growth, and social responsibility for women."
                />
              </div>
              <Button onClick={handleNextTab} className="mt-6 w-full sm:w-auto">View OBE Excel Data</Button>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <ExcelTab />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default Index;
