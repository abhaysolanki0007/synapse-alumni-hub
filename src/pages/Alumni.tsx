import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Building, 
  Calendar, 
  Linkedin, 
  Mail, 
  Filter,
  Users,
  Briefcase,
  GraduationCap
} from "lucide-react";

// Mock alumni data
const alumniData = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    company: "Microsoft",
    position: "Senior Software Engineer",
    location: "Seattle, WA",
    batch: "2018",
    industry: "Technology",
    skills: ["React", "Azure", "Machine Learning"],
    linkedIn: "https://linkedin.com/in/sarahjohnson",
    email: "sarah.johnson@example.com"
  },
  {
    id: 2,
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    company: "Google",
    position: "Product Manager",
    location: "Mountain View, CA",
    batch: "2016",
    industry: "Technology",
    skills: ["Product Strategy", "Analytics", "AI/ML"],
    linkedIn: "https://linkedin.com/in/davidchen",
    email: "david.chen@example.com"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    company: "Goldman Sachs",
    position: "Investment Analyst",
    location: "New York, NY",
    batch: "2019",
    industry: "Finance",
    skills: ["Financial Modeling", "Risk Analysis", "Python"],
    linkedIn: "https://linkedin.com/in/emilyrodriguez",
    email: "emily.rodriguez@example.com"
  },
  {
    id: 4,
    name: "Michael Kim",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    company: "Tesla",
    position: "Data Scientist",
    location: "Austin, TX",
    batch: "2017",
    industry: "Automotive",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    linkedIn: "https://linkedin.com/in/michaelkim",
    email: "michael.kim@example.com"
  },
  {
    id: 5,
    name: "Lisa Wang",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    company: "McKinsey & Company",
    position: "Management Consultant",
    location: "Chicago, IL",
    batch: "2015",
    industry: "Consulting",
    skills: ["Strategy", "Operations", "Digital Transformation"],
    linkedIn: "https://linkedin.com/in/lisawang",
    email: "lisa.wang@example.com"
  },
  {
    id: 6,
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    company: "Accenture",
    position: "Technology Lead",
    location: "Dallas, TX",
    batch: "2014",
    industry: "Consulting",
    skills: ["Cloud Computing", "DevOps", "Agile"],
    linkedIn: "https://linkedin.com/in/jameswilson",
    email: "james.wilson@example.com"
  }
];

export default function Alumni() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedBatch, setSelectedBatch] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");

  const industries = ["all", ...new Set(alumniData.map(alumni => alumni.industry))];
  const batches = ["all", ...new Set(alumniData.map(alumni => alumni.batch))].sort();
  const companies = ["all", ...new Set(alumniData.map(alumni => alumni.company))].sort();

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesIndustry = selectedIndustry === "all" || alumni.industry === selectedIndustry;
    const matchesBatch = selectedBatch === "all" || alumni.batch === selectedBatch;
    const matchesCompany = selectedCompany === "all" || alumni.company === selectedCompany;

    return matchesSearch && matchesIndustry && matchesBatch && matchesCompany;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Alumni Directory
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with {alumniData.length}+ fellow alumni across industries and locations
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Search & Filter Alumni
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, company, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Industry Filter */}
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>
                      {industry === "all" ? "All Industries" : industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Batch Filter */}
              <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Batch" />
                </SelectTrigger>
                <SelectContent>
                  {batches.map(batch => (
                    <SelectItem key={batch} value={batch}>
                      {batch === "all" ? "All Batches" : `Class of ${batch}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Company Filter */}
              <Select value={selectedCompany} onValueChange={setSelectedCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map(company => (
                    <SelectItem key={company} value={company}>
                      {company === "all" ? "All Companies" : company}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAlumni.length} of {alumniData.length} alumni
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map(alumni => (
            <Card key={alumni.id} className="hover:shadow-elevated transition-all duration-300 hover-lift">
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={alumni.avatar} alt={alumni.name} />
                    <AvatarFallback>{alumni.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{alumni.name}</h3>
                    <p className="text-muted-foreground">{alumni.position}</p>
                  </div>
                </div>

                {/* Company and Location */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Building className="h-4 w-4 mr-2" />
                    {alumni.company}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {alumni.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Class of {alumni.batch}
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {alumni.skills.slice(0, 3).map(skill => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {alumni.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{alumni.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(alumni.linkedIn, '_blank')}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(`mailto:${alumni.email}`, '_blank')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No alumni found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters to find more alumni.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}