"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, MapPin, Calendar, Clock, Users, Building2, Briefcase, Star, Filter, Heart, Share2 } from "lucide-react"

export default function JobFairPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TechConnect 2024</h1>
                <p className="text-sm text-gray-600">Virtual Job Fair</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Saved Jobs
              </Button>
              <Button size="sm">
                <Users className="w-4 h-4 mr-2" />
                Join Event
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect with Top Tech Companies</h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover your next career opportunity at the largest virtual tech job fair
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search jobs, companies, or skills..." className="pl-10 h-12 text-lg" />
              </div>
              <Button size="lg" className="h-12 px-8">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info */}
      <section className="py-8 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-purple-600" />
              <div>
                <p className="font-semibold text-gray-900">March 15-17, 2024</p>
                <p className="text-sm text-gray-600">3 Days Event</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">9:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-600">EST Timezone</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-green-600" />
              <div>
                <p className="font-semibold text-gray-900">150+ Companies</p>
                <p className="text-sm text-gray-600">Participating</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-orange-600" />
              <div>
                <p className="font-semibold text-gray-900">10,000+ Jobs</p>
                <p className="text-sm text-gray-600">Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="companies" className="w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <TabsList className="grid w-full sm:w-auto grid-cols-3">
                <TabsTrigger value="companies">Companies</TabsTrigger>
                <TabsTrigger value="jobs">Jobs</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            <TabsContent value="companies" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "TechCorp",
                    logo: "TC",
                    industry: "Software Development",
                    employees: "1,000-5,000",
                    openings: 25,
                    featured: true,
                  },
                  {
                    name: "DataFlow Inc",
                    logo: "DF",
                    industry: "Data Analytics",
                    employees: "500-1,000",
                    openings: 18,
                    featured: false,
                  },
                  {
                    name: "CloudNine",
                    logo: "CN",
                    industry: "Cloud Computing",
                    employees: "100-500",
                    openings: 12,
                    featured: true,
                  },
                  {
                    name: "AI Solutions",
                    logo: "AI",
                    industry: "Artificial Intelligence",
                    employees: "50-100",
                    openings: 8,
                    featured: false,
                  },
                  {
                    name: "CyberShield",
                    logo: "CS",
                    industry: "Cybersecurity",
                    employees: "200-500",
                    openings: 15,
                    featured: true,
                  },
                  {
                    name: "MobileFirst",
                    logo: "MF",
                    industry: "Mobile Development",
                    employees: "100-200",
                    openings: 10,
                    featured: false,
                  },
                ].map((company, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-lg transition-shadow ${company.featured ? "ring-2 ring-purple-200" : ""}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold">
                              {company.logo}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-lg">{company.name}</CardTitle>
                            <CardDescription>{company.industry}</CardDescription>
                          </div>
                        </div>
                        {company.featured && (
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          {company.employees} employees
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Briefcase className="w-4 h-4" />
                          {company.openings} open positions
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button size="sm" className="flex-1">
                            View Jobs
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="jobs" className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Senior Frontend Developer",
                    company: "TechCorp",
                    location: "Remote",
                    type: "Full-time",
                    salary: "$120k - $150k",
                    skills: ["React", "TypeScript", "Next.js"],
                  },
                  {
                    title: "Data Scientist",
                    company: "DataFlow Inc",
                    location: "New York, NY",
                    type: "Full-time",
                    salary: "$130k - $160k",
                    skills: ["Python", "Machine Learning", "SQL"],
                  },
                  {
                    title: "Cloud Architect",
                    company: "CloudNine",
                    location: "San Francisco, CA",
                    type: "Full-time",
                    salary: "$140k - $180k",
                    skills: ["AWS", "Kubernetes", "Docker"],
                  },
                  {
                    title: "AI Engineer",
                    company: "AI Solutions",
                    location: "Remote",
                    type: "Full-time",
                    salary: "$125k - $155k",
                    skills: ["TensorFlow", "PyTorch", "Python"],
                  },
                ].map((job, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                          <p className="text-lg text-gray-700 mb-3">{job.company}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </div>
                            <div className="font-semibold text-green-600">{job.salary}</div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full sm:w-auto">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                          <Button variant="outline" size="sm" className="w-full sm:w-auto bg-transparent">
                            <Heart className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {["Day 1 - March 15", "Day 2 - March 16", "Day 3 - March 17"].map((day, dayIndex) => (
                  <Card key={dayIndex}>
                    <CardHeader>
                      <CardTitle className="text-lg">{day}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { time: "9:00 AM", event: "Opening Keynote", type: "keynote" },
                          { time: "10:30 AM", event: "Company Presentations", type: "presentation" },
                          { time: "12:00 PM", event: "Networking Break", type: "break" },
                          { time: "1:00 PM", event: "Panel Discussion", type: "panel" },
                          { time: "3:00 PM", event: "1-on-1 Interviews", type: "interview" },
                          { time: "5:00 PM", event: "Closing Remarks", type: "closing" },
                        ].map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                            <div className="text-sm font-semibold text-gray-600 min-w-[70px]">{item.time}</div>
                            <div className="flex-1">
                              <p className="font-medium text-gray-900">{item.event}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
