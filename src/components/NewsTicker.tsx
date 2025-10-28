import { Megaphone } from "lucide-react";

const NewsTicker = () => {
  const newsItems = [
    "International Seminar on Decoding the Relevance of Ethic Standards Executions, Chief Guest, Dr Pratibha Hariharan Riding at USA",
    "Annual Sports Day 2025 - Registration Open",
    "NAAC Peer Team Visit Scheduled - January 2025",
    "New Computer Lab Inauguration - State-of-the-art facilities for students",
    "Alumni Meet 2025 - Save the Date: February 15, 2025"
  ];

  return (
    <div className="bg-accent py-3 overflow-hidden">
      <div className="flex items-center">
        <div className="flex items-center bg-primary px-3 sm:px-6 py-2">
          <Megaphone className="h-5 w-5 text-white mr-2" />
          <span className="text-white font-semibold text-sm whitespace-nowrap">News</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="ticker-animation whitespace-nowrap">
            <span className="text-primary font-medium text-sm">
              {newsItems.join(" • ")} • {newsItems.join(" • ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
