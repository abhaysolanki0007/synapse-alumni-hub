import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Calendar, 
  Briefcase, 
  Heart, 
  MessageCircle, 
  BarChart3,
  ArrowRight,
  Sparkles,
  Target,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export function FeaturesSection() {
  const features = [
    {
      icon: Users,
      title: "Alumni Directory",
      description: "Connect with fellow alumni across industries and generations. Find mentors, collaborators, and lifelong friends.",
      gradient: "alumni-gradient",
      link: "/alumni",
      benefits: ["Advanced search filters", "LinkedIn integration", "Professional networking"]
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Discover exclusive job openings, internships, and career advancement opportunities within our network.",
      gradient: "hero-gradient",
      link: "/jobs",
      benefits: ["Exclusive job postings", "Career mentorship", "Skills development"]
    },
    {
      icon: Calendar,
      title: "Events & Webinars",
      description: "Attend reunions, professional development workshops, and industry-focused webinars on AI, Data Science, and more.",
      gradient: "bg-accent",
      link: "/events",
      benefits: ["Industry workshops", "Networking events", "Expert speakers"]
    },
    {
      icon: Heart,
      title: "Give Back",
      description: "Support scholarship programs, campus development, and initiatives that shape the future of education.",
      gradient: "donation-gradient",
      link: "/donations",
      benefits: ["Scholarship funds", "Campus development", "Student programs"]
    },
    {
      icon: MessageCircle,
      title: "Mentorship Program",
      description: "Share your expertise with current students or get guidance from experienced professionals in your field.",
      gradient: "bg-secondary",
      link: "/mentorship",
      benefits: ["1-on-1 mentoring", "Group sessions", "Career guidance"]
    },
    {
      icon: BarChart3,
      title: "Impact Analytics",
      description: "Track your contributions and see the collective impact of our alumni community on education and society.",
      gradient: "bg-warning",
      link: "/analytics",
      benefits: ["Donation tracking", "Community metrics", "Impact reports"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-medium text-primary uppercase tracking-wide">
              Platform Features
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stay Connected
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform brings together all the tools you need to maintain 
            meaningful connections, advance your career, and give back to your alma mater.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover-lift bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl ${feature.gradient} text-white mr-4`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button asChild variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Link to={feature.link} className="flex items-center justify-center">
                    Explore Feature
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border/50">
            <Target className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of alumni who are already using AlumniHub to network, 
              grow their careers, and give back to future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/register">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/demo">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}