import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Heart, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  const stats = [
    { icon: Users, label: "Active Alumni", value: "5,000+" },
    { icon: Calendar, label: "Events This Year", value: "120+" },
    { icon: Heart, label: "Donations Raised", value: "$2.5M+" },
    { icon: Briefcase, label: "Job Placements", value: "850+" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Connect.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Grow.
            </span>{" "}
            Impact.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join a thriving community of alumni making a difference. Network with peers, 
            give back to future generations, and advance your career through meaningful connections.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/register">
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/alumni">Explore Alumni Directory</Link>
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:shadow-elevated transition-all duration-300 hover-lift"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 lg:h-32"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--muted))"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}