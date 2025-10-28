import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NewsEvents = () => {
  const events = [
    {
      date: "25 Jan 2025",
      title: "IQAC Meeting - 2024-25",
      description: "Quarterly review and quality assessment meeting"
    },
    {
      date: "15 Feb 2025",
      title: "Alumni Meet 2025",
      description: "Annual gathering of PKR alumni across all batches"
    },
    {
      date: "05 Mar 2025",
      title: "Women's Day Celebration",
      description: "Special events and seminars celebrating women empowerment"
    },
    {
      date: "20 Mar 2025",
      title: "Science Exhibition",
      description: "Student projects and innovations showcase"
    },
    {
      date: "10 Apr 2025",
      title: "Annual Day Celebration",
      description: "Cultural programs and award ceremony"
    }
  ];

  return (
    <Card className="h-full">
      <CardHeader className="bg-primary text-white">
        <CardTitle className="flex items-center text-lg">
          <Calendar className="mr-2 h-5 w-5" />
          News & Events
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="border-l-4 border-accent pl-4 py-2 hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="bg-accent text-accent-foreground rounded-md px-3 py-1 text-xs font-semibold mb-1 sm:mb-0 sm:mr-3 whitespace-nowrap self-start">
                  {event.date}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{event.title}</h4>
                  <p className="text-xs text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsEvents;
