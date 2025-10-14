import { Calendar as CalendarIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const AcademicCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const importantDates = [
    { date: "15 Jan 2025", event: "Semester Exams Begin" },
    { date: "15 Feb 2025", event: "Alumni Meet" },
    { date: "08 Mar 2025", event: "Women's Day" },
    { date: "20 Mar 2025", event: "Science Exhibition" },
    { date: "10 Apr 2025", event: "Annual Day" }
  ];

  return (
    <Card className="h-full">
      <CardHeader className="bg-primary text-white">
        <CardTitle className="flex items-center text-lg">
          <CalendarIcon className="mr-2 h-5 w-5" />
          Academic Calendar
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex justify-center mb-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className="mt-4 space-y-2">
          <h4 className="font-semibold text-sm mb-2">Upcoming Events:</h4>
          {importantDates.map((item, index) => (
            <div key={index} className="text-xs border-l-2 border-accent pl-2 py-1">
              <span className="font-semibold text-accent">{item.date}</span>
              <p className="text-muted-foreground">{item.event}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicCalendar;
