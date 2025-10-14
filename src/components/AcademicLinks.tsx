import { ExternalLink, BookOpen, GraduationCap, Library, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AcademicLinks = () => {
  const links = [
    { 
      icon: BookOpen, 
      title: "P.K.R. Academy (CA/SAI)", 
      description: "Career guidance and skill development",
      url: "#"
    },
    { 
      icon: GraduationCap, 
      title: "Bharathiar University", 
      description: "Affiliated university portal",
      url: "#"
    },
    { 
      icon: Library, 
      title: "Digital Library", 
      description: "Access e-books and journals",
      url: "#"
    },
    { 
      icon: FileText, 
      title: "Exam Results", 
      description: "Check semester results",
      url: "#"
    },
    { 
      icon: BookOpen, 
      title: "E-Learning Portal", 
      description: "Online course materials",
      url: "#"
    },
    { 
      icon: FileText, 
      title: "Student Portal", 
      description: "Access student services",
      url: "#"
    }
  ];

  return (
    <Card className="h-full">
      <CardHeader className="bg-accent text-accent-foreground">
        <CardTitle className="flex items-center text-lg">
          <ExternalLink className="mr-2 h-5 w-5" />
          Academic Links
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-3 max-h-[400px] overflow-y-auto">
          {links.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start h-auto py-3 hover:bg-accent/10 hover:border-accent transition-colors"
              asChild
            >
              <a href={link.url}>
                <link.icon className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm">{link.title}</div>
                  <div className="text-xs text-muted-foreground">{link.description}</div>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AcademicLinks;
