import { Link } from "react-router-dom";
import { GraduationCap, Heart, Users, Calendar, Briefcase } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">AlumniHub</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Connecting alumni, fostering growth, and building a stronger community through 
              meaningful relationships, professional opportunities, and impactful contributions.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                to="/alumni"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Users className="h-4 w-4 mr-2" />
                Alumni Directory
              </Link>
              <Link
                to="/events"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Events
              </Link>
              <Link
                to="/jobs"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Briefcase className="h-4 w-4 mr-2" />
                Job Portal
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <div className="space-y-2">
              <Link
                to="/donations"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Heart className="h-4 w-4 mr-2" />
                Make a Donation
              </Link>
              <Link
                to="/help"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                Help Center
              </Link>
              <Link
                to="/feedback"
                className="text-muted-foreground hover:text-primary transition-colors block"
              >
                Send Feedback
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} AlumniHub. All rights reserved. Built with 💙 for our amazing alumni community.
          </p>
        </div>
      </div>
    </footer>
  );
}