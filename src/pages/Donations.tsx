import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Target, 
  Users, 
  TrendingUp,
  GraduationCap,
  Building,
  Lightbulb,
  Award,
  DollarSign,
  Calendar
} from "lucide-react";

// Mock campaigns data
const campaignsData = [
  {
    id: 1,
    title: "Scholarship Fund for Underprivileged Students",
    description: "Help provide quality education to students who cannot afford tuition fees. Your contribution directly impacts a student's future.",
    category: "Education",
    goal: 500000,
    raised: 347500,
    donors: 156,
    daysLeft: 45,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "New Science Laboratory Equipment",
    description: "Modernize our science labs with cutting-edge equipment to enhance hands-on learning experiences for current students.",
    category: "Infrastructure",
    goal: 250000,
    raised: 189000,
    donors: 89,
    daysLeft: 28,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop",
    featured: false
  },
  {
    id: 3,
    title: "Alumni Mentorship Program Expansion",
    description: "Expand our mentorship program to connect more students with industry professionals for career guidance.",
    category: "Programs",
    goal: 75000,
    raised: 42300,
    donors: 67,
    daysLeft: 62,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop",
    featured: false
  },
  {
    id: 4,
    title: "Campus Library Digital Transformation",
    description: "Transform our library into a modern digital learning hub with e-books, online resources, and collaborative spaces.",
    category: "Technology",
    goal: 150000,
    raised: 95000,
    donors: 134,
    daysLeft: 38,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    featured: true
  }
];

const impactStats = [
  {
    icon: GraduationCap,
    title: "Students Supported",
    value: "1,247",
    description: "Scholarships awarded this year"
  },
  {
    icon: Building,
    title: "Projects Completed",
    value: "23",
    description: "Infrastructure improvements"
  },
  {
    icon: Users,
    title: "Active Donors",
    value: "3,456",
    description: "Alumni contributing regularly"
  },
  {
    icon: TrendingUp,
    title: "Total Raised",
    value: "$2.8M",
    description: "This academic year"
  }
];

export default function Donations() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(campaignsData.map(campaign => campaign.category))];
  
  const filteredCampaigns = campaignsData.filter(campaign => 
    selectedCategory === "all" || campaign.category === selectedCategory
  );

  const featuredCampaigns = filteredCampaigns.filter(campaign => campaign.featured);
  const allCampaigns = filteredCampaigns;

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Education":
        return GraduationCap;
      case "Infrastructure":
        return Building;
      case "Technology":
        return Lightbulb;
      case "Programs":
        return Award;
      default:
        return Heart;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Education":
        return "bg-primary";
      case "Infrastructure":
        return "bg-secondary";
      case "Technology":
        return "bg-accent";
      case "Programs":
        return "bg-donation-green";
      default:
        return "bg-muted";
    }
  };

  const CampaignCard = ({ campaign }: { campaign: any }) => {
    const CategoryIcon = getCategoryIcon(campaign.category);
    const progressPercentage = getProgressPercentage(campaign.raised, campaign.goal);
    
    return (
      <Card className="hover:shadow-elevated transition-all duration-300 hover-lift overflow-hidden">
        {/* Campaign Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={campaign.image} 
            alt={campaign.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className={`${getCategoryColor(campaign.category)} text-white`}>
              <CategoryIcon className="h-3 w-3 mr-1" />
              {campaign.category}
            </Badge>
          </div>
          {campaign.featured && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-alumni-gold text-alumni-gold-foreground">
                <Award className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-6">
          {/* Campaign Title */}
          <h3 className="font-semibold text-lg text-foreground mb-3 line-clamp-2">
            {campaign.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
            {campaign.description}
          </p>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">
                {formatCurrency(campaign.raised)} raised
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2 mb-2" />
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Goal: {formatCurrency(campaign.goal)}</span>
              <span>{campaign.donors} donors</span>
            </div>
          </div>

          {/* Time Left */}
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <Calendar className="h-4 w-4 mr-2" />
            {campaign.daysLeft} days left
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button variant="donation" className="flex-1">
              <Heart className="h-4 w-4 mr-2" />
              Donate Now
            </Button>
            <Button variant="outline" size="icon">
              <TrendingUp className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="donation-gradient text-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Make a Difference
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Support future generations and help build a stronger educational foundation
            </p>
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              <DollarSign className="h-5 w-5 mr-2" />
              Start Donating
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Impact Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Your Impact in Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-card">
                <CardContent className="p-6">
                  <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="font-medium text-foreground mb-1">
                    {stat.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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
                {category === "all" ? "All Campaigns" : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Campaigns Tabs */}
        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="featured" className="flex items-center">
              <Award className="h-4 w-4 mr-2" />
              Featured Campaigns ({featuredCampaigns.length})
            </TabsTrigger>
            <TabsTrigger value="all" className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              All Campaigns ({allCampaigns.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCampaigns.map(campaign => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
            {featuredCampaigns.length === 0 && (
              <div className="text-center py-12">
                <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No featured campaigns</h3>
                <p className="text-muted-foreground">
                  Check back soon for featured donation campaigns.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCampaigns.map(campaign => (
                <CampaignCard key={campaign.id} campaign={campaign} />
              ))}
            </div>
            {allCampaigns.length === 0 && (
              <div className="text-center py-12">
                <Target className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No campaigns found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your category filter to find campaigns.
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Every Contribution Matters
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether it's $10 or $10,000, your donation helps create opportunities, 
                build infrastructure, and support the next generation of leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  <Heart className="h-5 w-5 mr-2" />
                  Make a One-Time Donation
                </Button>
                <Button variant="outline" size="lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  Set Up Monthly Giving
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}