import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlumniDistributionChart } from "@/components/analytics/AlumniDistributionChart";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Heart, 
  Calendar,
  Briefcase,
  GraduationCap,
  Building
} from 'lucide-react';

// Mock data for various charts
const donationData = [
  { month: 'Jan', amount: 45000, donors: 89 },
  { month: 'Feb', amount: 52000, donors: 103 },
  { month: 'Mar', amount: 38000, donors: 76 },
  { month: 'Apr', amount: 67000, donors: 134 },
  { month: 'May', amount: 84000, donors: 168 },
  { month: 'Jun', amount: 73000, donors: 145 },
];

const eventParticipationData = [
  { name: 'Webinars', participants: 450, events: 12 },
  { name: 'Workshops', participants: 280, events: 8 },
  { name: 'Networking', participants: 320, events: 6 },
  { name: 'Reunions', participants: 180, events: 3 },
  { name: 'Career Fairs', participants: 220, events: 4 },
];

const mentorshipData = [
  { month: 'Jan', sessions: 45, matches: 12 },
  { month: 'Feb', sessions: 52, matches: 15 },
  { month: 'Mar', sessions: 67, matches: 18 },
  { month: 'Apr', sessions: 84, matches: 23 },
  { month: 'May', sessions: 91, matches: 27 },
  { month: 'Jun', sessions: 98, matches: 31 },
];

const domainDistributionData = [
  { name: 'Technology', value: 385, color: 'hsl(214, 84%, 56%)' },
  { name: 'Finance', value: 186, color: 'hsl(160, 84%, 39%)' },
  { name: 'Healthcare', value: 142, color: 'hsl(262, 83%, 58%)' },
  { name: 'Education', value: 98, color: 'hsl(48, 96%, 53%)' },
  { name: 'Consulting', value: 156, color: 'hsl(142, 76%, 36%)' },
  { name: 'Startup', value: 73, color: 'hsl(38, 92%, 50%)' },
];

const keyMetrics = [
  {
    title: "Total Alumni",
    value: "5,247",
    change: "+12%",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "Active Donors",
    value: "1,234",
    change: "+8%",
    icon: Heart,
    color: "text-donation-green"
  },
  {
    title: "Events This Year",
    value: "127",
    change: "+25%",
    icon: Calendar,
    color: "text-accent"
  },
  {
    title: "Job Placements",
    value: "456",
    change: "+18%",
    icon: Briefcase,
    color: "text-secondary"
  }
];

export default function Analytics() {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-elevated">
          <p className="font-medium text-foreground">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Analytics Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track alumni engagement, donations, and community impact metrics
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {metric.value}
                    </p>
                    <p className={`text-sm font-medium ${metric.color} flex items-center mt-1`}>
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {metric.change} from last month
                    </p>
                  </div>
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="alumni" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="alumni" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Alumni
            </TabsTrigger>
            <TabsTrigger value="donations" className="flex items-center">
              <Heart className="h-4 w-4 mr-2" />
              Donations
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              Events
            </TabsTrigger>
            <TabsTrigger value="mentorship" className="flex items-center">
              <GraduationCap className="h-4 w-4 mr-2" />
              Mentorship
            </TabsTrigger>
          </TabsList>

          {/* Alumni Analytics */}
          <TabsContent value="alumni">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building className="h-5 w-5 mr-2" />
                    Alumni by Company
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AlumniDistributionChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Alumni by Domain
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={domainDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {domainDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {domainDistributionData.map((entry, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div 
                          className="w-3 h-3 rounded-full mr-2" 
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-muted-foreground">
                          {entry.name}: {entry.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Donations Analytics */}
          <TabsContent value="donations">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Donation Amount</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={donationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="amount" fill="hsl(var(--donation-green))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Number of Donors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={donationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Line 
                        type="monotone" 
                        dataKey="donors" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Events Analytics */}
          <TabsContent value="events">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Event Participation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={eventParticipationData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" width={80} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="participants" fill="hsl(var(--accent))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Event Types & Count</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={eventParticipationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="events" fill="hsl(var(--secondary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Mentorship Analytics */}
          <TabsContent value="mentorship">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mentorship Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mentorshipData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Line 
                        type="monotone" 
                        dataKey="sessions" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--accent))", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>New Mentor-Student Matches</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={mentorshipData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="matches" fill="hsl(var(--secondary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}