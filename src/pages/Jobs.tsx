import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  Building, 
  Calendar, 
  DollarSign, 
  Clock,
  Briefcase,
  ExternalLink,
  Heart,
  Filter
} from "lucide-react";

// Mock jobs data
const jobsData = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Microsoft",
    location: "Seattle, WA",
    type: "Full-time",
    experience: "5-7 years",
    salary: "$150,000 - $200,000",
    posted: "2 days ago",
    domain: "Technology",
    skills: ["React", "Node.js", "Azure", "TypeScript"],
    description: "Join our team to build next-generation cloud applications using cutting-edge technologies.",
    remote: true,
    companyLogo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=80&h=80&fit=crop"
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "Netflix",
    location: "Los Gatos, CA",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$130,000 - $180,000",
    posted: "1 day ago",
    domain: "Data Science",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    description: "Help us personalize content recommendations for millions of users worldwide.",
    remote: false,
    companyLogo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=80&h=80&fit=crop"
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Stripe",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "4-6 years",
    salary: "$140,000 - $190,000",
    posted: "3 days ago",
    domain: "Product",
    skills: ["Product Strategy", "Analytics", "API Design", "Fintech"],
    description: "Lead product development for our payment infrastructure serving millions of businesses.",
    remote: true,
    companyLogo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop"
  },
  {
    id: 4,
    title: "AI/ML Research Scientist",
    company: "OpenAI",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "PhD + 2 years",
    salary: "$200,000 - $300,000",
    posted: "5 days ago",
    domain: "AI/ML",
    skills: ["Deep Learning", "PyTorch", "NLP", "Computer Vision"],
    description: "Research and develop breakthrough AI technologies that benefit humanity.",
    remote: false,
    companyLogo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=80&h=80&fit=crop"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "Docker",
    location: "Remote",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$120,000 - $160,000",
    posted: "1 week ago",
    domain: "DevOps",
    skills: ["Kubernetes", "Docker", "AWS", "Terraform"],
    description: "Build and maintain infrastructure for containerized applications at scale.",
    remote: true,
    companyLogo: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=80&h=80&fit=crop"
  },
  {
    id: 6,
    title: "UX Designer",
    company: "Figma",
    location: "New York, NY",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$100,000 - $140,000",
    posted: "4 days ago",
    domain: "Design",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    description: "Design intuitive interfaces that empower teams to create amazing products.",
    remote: true,
    companyLogo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop"
  }
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");
  const [showRemoteOnly, setShowRemoteOnly] = useState(false);

  const domains = ["all", ...new Set(jobsData.map(job => job.domain))];
  const types = ["all", ...new Set(jobsData.map(job => job.type))];
  const experiences = ["all", ...new Set(jobsData.map(job => job.experience))];

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDomain = selectedDomain === "all" || job.domain === selectedDomain;
    const matchesType = selectedType === "all" || job.type === selectedType;
    const matchesExperience = selectedExperience === "all" || job.experience === selectedExperience;
    const matchesRemote = !showRemoteOnly || job.remote;

    return matchesSearch && matchesDomain && matchesType && matchesExperience && matchesRemote;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Job Portal
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover exclusive opportunities from top companies hiring our alumni
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
              Search & Filter Jobs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              {/* Search */}
              <div className="relative lg:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, company, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Domain Filter */}
              <Select value={selectedDomain} onValueChange={setSelectedDomain}>
                <SelectTrigger>
                  <SelectValue placeholder="Domain" />
                </SelectTrigger>
                <SelectContent>
                  {domains.map(domain => (
                    <SelectItem key={domain} value={domain}>
                      {domain === "all" ? "All Domains" : domain}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Experience Filter */}
              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  {experiences.map(exp => (
                    <SelectItem key={exp} value={exp}>
                      {exp === "all" ? "All Levels" : exp}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Remote Toggle */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remote-only"
                checked={showRemoteOnly}
                onChange={(e) => setShowRemoteOnly(e.target.checked)}
                className="rounded border-border"
              />
              <label htmlFor="remote-only" className="text-sm text-foreground">
                Remote jobs only
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredJobs.length} of {jobsData.length} jobs
          </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map(job => (
            <Card key={job.id} className="hover:shadow-elevated transition-all duration-300 hover-lift">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  {/* Job Info */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <img
                        src={job.companyLogo}
                        alt={job.company}
                        className="w-16 h-16 rounded-lg object-cover border border-border"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {job.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <Building className="h-4 w-4 mr-1" />
                          {job.company}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                            {job.remote && <Badge variant="secondary" className="ml-2 text-xs">Remote</Badge>}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Posted {job.posted}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Experience Required:</p>
                        <p className="text-sm text-muted-foreground">{job.experience}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">Salary Range:</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {job.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Required Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map(skill => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {job.domain}
                      </Badge>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-2 lg:ml-6 lg:flex-shrink-0">
                    <Button variant="default" className="w-full lg:w-auto">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline" className="w-full lg:w-auto">
                      <Heart className="h-4 w-4 mr-2" />
                      Save Job
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No jobs found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or filters to find more opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}