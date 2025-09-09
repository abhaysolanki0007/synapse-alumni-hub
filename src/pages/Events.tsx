import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Video, 
  Star,
  ExternalLink,
  CheckCircle
} from "lucide-react";

// Mock events data
const eventsData = [
  {
    id: 1,
    title: "AI & Machine Learning in Modern Business",
    type: "webinar",
    date: "2024-12-15",
    time: "2:00 PM EST",
    duration: "90 minutes",
    location: "Virtual",
    speaker: "Dr. Sarah Chen, AI Research Director at Google",
    description: "Explore how AI and ML are transforming industries and learn practical applications for your business.",
    attendees: 245,
    maxAttendees: 500,
    price: "Free",
    category: "Technology",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop"
  },
  {
    id: 2,
    title: "Annual Alumni Reunion 2024",
    type: "event",
    date: "2024-12-20",
    time: "6:00 PM EST",
    duration: "4 hours",
    location: "University Campus Center",
    speaker: "Multiple Alumni Speakers",
    description: "Join us for an evening of networking, memories, and celebrating our community's achievements.",
    attendees: 156,
    maxAttendees: 300,
    price: "$45",
    category: "Networking",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=200&fit=crop"
  },
  {
    id: 3,
    title: "Data Science Career Panel",
    type: "webinar",
    date: "2024-12-10",
    time: "7:00 PM EST",
    duration: "2 hours",
    location: "Virtual",
    speaker: "Senior Data Scientists from Netflix, Spotify, Uber",
    description: "Learn about career paths in data science, required skills, and tips for landing your dream job.",
    attendees: 189,
    maxAttendees: 400,
    price: "Free",
    category: "Career",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
  },
  {
    id: 4,
    title: "Entrepreneurship Workshop",
    type: "workshop",
    date: "2024-11-28",
    time: "10:00 AM EST",
    duration: "6 hours",
    location: "Innovation Hub, Downtown",
    speaker: "Mark Rodriguez, Founder of TechStart Inc.",
    description: "Hands-on workshop covering business plan development, funding strategies, and startup essentials.",
    attendees: 45,
    maxAttendees: 50,
    price: "$75",
    category: "Business",
    status: "completed",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop"
  },
  {
    id: 5,
    title: "Cloud Computing & DevOps Seminar",
    type: "seminar",
    date: "2024-12-18",
    time: "3:00 PM EST",
    duration: "3 hours",
    location: "Virtual",
    speaker: "AWS Solutions Architects & DevOps Engineers",
    description: "Deep dive into cloud architecture, containerization, and modern DevOps practices.",
    attendees: 178,
    maxAttendees: 350,
    price: "$25",
    category: "Technology",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop"
  }
];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(eventsData.map(event => event.category))];
  
  const filteredEvents = eventsData.filter(event => 
    selectedCategory === "all" || event.category === selectedCategory
  );

  const upcomingEvents = filteredEvents.filter(event => event.status === "upcoming");
  const completedEvents = filteredEvents.filter(event => event.status === "completed");

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case "webinar":
        return Video;
      case "workshop":
        return Users;
      case "seminar":
        return Star;
      default:
        return Calendar;
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "webinar":
        return "bg-primary";
      case "workshop":
        return "bg-secondary";
      case "seminar":
        return "bg-accent";
      default:
        return "bg-muted";
    }
  };

  const EventCard = ({ event }: { event: any }) => {
    const TypeIcon = getEventTypeIcon(event.type);
    const isCompleted = event.status === "completed";
    
    return (
      <Card className="hover:shadow-elevated transition-all duration-300 hover-lift overflow-hidden">
        {/* Event Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className={`${getEventTypeColor(event.type)} text-white capitalize`}>
              <TypeIcon className="h-3 w-3 mr-1" />
              {event.type}
            </Badge>
          </div>
          {isCompleted && (
            <div className="absolute top-4 right-4">
              <Badge variant="secondary">
                <CheckCircle className="h-3 w-3 mr-1" />
                Completed
              </Badge>
            </div>
          )}
          <div className="absolute bottom-4 right-4">
            <Badge variant="outline" className="bg-white/90 text-foreground">
              {event.price}
            </Badge>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Event Title and Category */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2">
              {event.title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {event.category}
            </Badge>
          </div>

          {/* Event Details */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(event.date).toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              {event.time} • {event.duration}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              {event.location}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-2" />
              {event.attendees} / {event.maxAttendees} attendees
            </div>
          </div>

          {/* Speaker */}
          <div className="mb-4">
            <p className="text-sm font-medium text-foreground mb-1">Speaker:</p>
            <p className="text-sm text-muted-foreground">{event.speaker}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
            {event.description}
          </p>

          {/* Attendance Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Registration Progress</span>
              <span className="text-foreground font-medium">
                {Math.round((event.attendees / event.maxAttendees) * 100)}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            {isCompleted ? (
              <>
                <Button variant="outline" className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Recording
                </Button>
                <Button variant="secondary" className="flex-1">
                  Materials
                </Button>
              </>
            ) : (
              <>
                <Button variant="default" className="flex-1">
                  Register Now
                </Button>
                <Button variant="outline" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Events & Webinars
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join professional development sessions, networking events, and industry-focused webinars
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category === "all" ? "All Events" : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="upcoming" className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Upcoming Events ({upcomingEvents.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Past Events ({completedEvents.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            {upcomingEvents.length === 0 && (
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No upcoming events</h3>
                <p className="text-muted-foreground">
                  Check back soon for new events and webinars.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
            {completedEvents.length === 0 && (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No past events</h3>
                <p className="text-muted-foreground">
                  Past events will appear here once completed.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}