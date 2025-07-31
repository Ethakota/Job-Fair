"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  MapPin,
  Calendar,
  Clock,
  Users,
  Building2,
  Briefcase,
  Star,
  Filter,
  Heart,
  Share2,
  Shield,
  Globe,
  GraduationCap,
  Award,
  FileText,
  CheckCircle,
} from "lucide-react"

export default function GovtPrivateJobFair() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Job Fair 2024</h1>
                <p className="text-sm text-gray-600">Government & Private Sector Job Fair</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Saved (12)
              </Button>
              <Button variant="outline" size="sm">
                <FileText className="w-4 h-4 mr-2" />
                My Applications
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Users className="w-4 h-4 mr-2" />
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Your Gateway to <span className="text-blue-600">Government</span> &{" "}
              <span className="text-green-600">Private</span> Careers
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore opportunities across public service and private enterprise. Connect with top employers from both
              sectors.
            </p>

            {/* Search Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input placeholder="Job title or keyword..." className="pl-10 h-12" />
                </div>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                    <SelectItem value="both">Both Sectors</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="washington">Washington, DC</SelectItem>
                    <SelectItem value="newyork">New York, NY</SelectItem>
                    <SelectItem value="california">California</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  size="lg"
                  className="h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Jobs
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/80 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">85+</div>
                <div className="text-sm text-gray-600">Government Jobs</div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-600">200+</div>
                <div className="text-sm text-gray-600">Private Companies</div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-600">15,000+</div>
                <div className="text-sm text-gray-600">Open Positions</div>
              </div>
              <div className="bg-white/80 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-600">3 Days</div>
                <div className="text-sm text-gray-600">Virtual Event</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="employers" className="w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
              <TabsList className="grid w-full lg:w-auto grid-cols-4">
                <TabsTrigger value="employers">Employers</TabsTrigger>
                <TabsTrigger value="jobs">All Jobs</TabsTrigger>
                <TabsTrigger value="government">Government</TabsTrigger>
                <TabsTrigger value="private">Private</TabsTrigger>
              </TabsList>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filters
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Event Schedule
                </Button>
              </div>
            </div>

            <TabsContent value="employers" className="space-y-8">
              {/* Featured Government Jobs */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Featured Government Jobs</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Department of Defense",
                      logo: "DOD",
                      type: "Federal Jobs",
                      employees: "50,000+",
                      openings: 450,
                      benefits: ["Security Clearance", "Federal Benefits", "Pension"],
                      sector: "government",
                    },
                    {
                      name: "Department of Health",
                      logo: "DOH",
                      type: "Federal Jobs",
                      employees: "25,000+",
                      openings: 320,
                      benefits: ["Healthcare", "Work-Life Balance", "Public Service"],
                      sector: "government",
                    },
                    {
                      name: "NASA",
                      logo: "NASA",
                      type: "Federal Jobs",
                      employees: "17,000+",
                      openings: 180,
                      benefits: ["Innovation", "Research", "Space Missions"],
                      sector: "government",
                    },
                  ].map((org, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-12 h-12">
                              <AvatarFallback className="bg-blue-600 text-white font-bold text-xs">
                                {org.logo}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{org.name}</CardTitle>
                              <CardDescription className="flex items-center gap-1">
                                <Shield className="w-3 h-3" />
                                {org.type}
                              </CardDescription>
                            </div>
                          </div>
                          <Badge className="bg-blue-100 text-blue-700">Government</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="w-4 h-4" />
                            {org.employees} employees
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Briefcase className="w-4 h-4" />
                            {org.openings} open positions
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {org.benefits.map((benefit, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2 pt-2">
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                              View Notifications
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
              </div>

              {/* Featured Private Companies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="w-6 h-6 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Featured Private Companies</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Microsoft",
                      logo: "MS",
                      type: "Technology",
                      employees: "200,000+",
                      openings: 850,
                      benefits: ["Stock Options", "Remote Work", "Innovation"],
                      sector: "private",
                    },
                    {
                      name: "Johnson & Johnson",
                      logo: "J&J",
                      type: "Healthcare",
                      employees: "140,000+",
                      openings: 620,
                      benefits: ["Healthcare", "Global Impact", "R&D"],
                      sector: "private",
                    },
                    {
                      name: "Goldman Sachs",
                      logo: "GS",
                      type: "Financial Services",
                      employees: "45,000+",
                      openings: 280,
                      benefits: ["High Compensation", "Career Growth", "Finance"],
                      sector: "private",
                    },
                  ].map((org, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="w-12 h-12">
                              <AvatarFallback className="bg-green-600 text-white font-bold text-xs">
                                {org.logo}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-lg">{org.name}</CardTitle>
                              <CardDescription className="flex items-center gap-1">
                                <Globe className="w-3 h-3" />
                                {org.type}
                              </CardDescription>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-700">Private</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Users className="w-4 h-4" />
                            {org.employees} employees
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Briefcase className="w-4 h-4" />
                            {org.openings} open positions
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {org.benefits.map((benefit, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2 pt-2">
                            <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                              View Positions
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
              </div>
            </TabsContent>

            <TabsContent value="jobs" className="space-y-6">
              <div className="space-y-4">
                {[
                  {
                    title: "Cybersecurity Analyst",
                    company: "Department of Defense",
                    location: "Washington, DC",
                    type: "Full-time",
                    salary: "$85k - $120k",
                    clearance: "Secret Required",
                    skills: ["Security+", "CISSP", "Network Security"],
                    sector: "government",
                    benefits: ["Security Clearance", "Federal Benefits", "Pension"],
                  },
                  {
                    title: "Senior Software Engineer",
                    company: "Microsoft",
                    location: "Seattle, WA / Remote",
                    type: "Full-time",
                    salary: "$150k - $220k",
                    clearance: null,
                    skills: ["C#", ".NET", "Azure", "React"],
                    sector: "private",
                    benefits: ["Stock Options", "Remote Work", "Health Insurance"],
                  },
                  {
                    title: "Public Health Specialist",
                    company: "Department of Health",
                    location: "Atlanta, GA",
                    type: "Full-time",
                    salary: "$75k - $95k",
                    clearance: "Public Trust",
                    skills: ["Epidemiology", "Data Analysis", "Public Health"],
                    sector: "government",
                    benefits: ["Healthcare", "Work-Life Balance", "Public Service"],
                  },
                  {
                    title: "Financial Analyst",
                    company: "Goldman Sachs",
                    location: "New York, NY",
                    type: "Full-time",
                    salary: "$120k - $180k",
                    clearance: null,
                    skills: ["Financial Modeling", "Excel", "Bloomberg", "SQL"],
                    sector: "private",
                    benefits: ["High Compensation", "Bonus", "Career Growth"],
                  },
                ].map((job, index) => (
                  <Card
                    key={index}
                    className={`hover:shadow-md transition-shadow border-l-4 ${job.sector === "government" ? "border-l-blue-500" : "border-l-green-500"}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                              <p className="text-lg text-gray-700 mb-2">{job.company}</p>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge
                                  className={
                                    job.sector === "government"
                                      ? "bg-blue-100 text-blue-700"
                                      : "bg-green-100 text-green-700"
                                  }
                                >
                                  {job.sector === "government" ? (
                                    <>
                                      <Shield className="w-3 h-3 mr-1" />
                                      Government
                                    </>
                                  ) : (
                                    <>
                                      <Globe className="w-3 h-3 mr-1" />
                                      Private
                                    </>
                                  )}
                                </Badge>
                                {job.clearance && (
                                  <Badge variant="outline" className="text-red-600 border-red-200">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    {job.clearance}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </div>
                            <div className="font-semibold text-gray-900">{job.salary}</div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <p className="text-sm font-medium text-gray-700 mb-2">Required Skills:</p>
                              <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, skillIndex) => (
                                  <Badge key={skillIndex} variant="secondary">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <p className="text-sm font-medium text-gray-700 mb-2">Benefits:</p>
                              <div className="flex flex-wrap gap-2">
                                {job.benefits.map((benefit, benefitIndex) => (
                                  <Badge key={benefitIndex} variant="outline" className="text-xs">
                                    {benefit}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full lg:w-auto">
                          <Button
                            className={`w-full lg:w-auto ${job.sector === "government" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"}`}
                          >
                            Apply Now
                          </Button>
                          <Button variant="outline" size="sm" className="w-full lg:w-auto bg-transparent">
                            <Heart className="w-4 h-4 mr-2" />
                            Save Job
                          </Button>
                          <Button variant="outline" size="sm" className="w-full lg:w-auto bg-transparent">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="government" className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Government Career Benefits</h3>
                    <p className="text-gray-600">Serve your country while building a rewarding career</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <Award className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold mb-1">Job Security</h4>
                    <p className="text-sm text-gray-600">Stable employment with excellent benefits</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <GraduationCap className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold mb-1">Training & Development</h4>
                    <p className="text-sm text-gray-600">Continuous learning and skill development</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <Heart className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold mb-1">Public Service</h4>
                    <p className="text-sm text-gray-600">Make a meaningful impact on society</p>
                  </div>
                </div>
              </div>

              {/* Government jobs would be filtered here */}
              <div className="text-center py-8">
                <p className="text-gray-600">Government positions filtered from main job listings...</p>
              </div>
            </TabsContent>

            <TabsContent value="private" className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Private Sector Advantages</h3>
                    <p className="text-gray-600">Innovation, growth, and competitive compensation</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <Star className="w-6 h-6 text-green-600 mb-2" />
                    <h4 className="font-semibold mb-1">Innovation</h4>
                    <p className="text-sm text-gray-600">Work with cutting-edge technology</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <Briefcase className="w-6 h-6 text-green-600 mb-2" />
                    <h4 className="font-semibold mb-1">Career Growth</h4>
                    <p className="text-sm text-gray-600">Rapid advancement opportunities</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <Award className="w-6 h-6 text-green-600 mb-2" />
                    <h4 className="font-semibold mb-1">Compensation</h4>
                    <p className="text-sm text-gray-600">Competitive salaries and equity</p>
                  </div>
                </div>
              </div>

              {/* Private jobs would be filtered here */}
              <div className="text-center py-8">
                <p className="text-gray-600">Private sector positions filtered from main job listings...</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">CareerConnect 2024</h3>
                  <p className="text-sm text-gray-400">Bridging Public & Private Careers</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Browse Jobs</li>
                <li>Career Resources</li>
                <li>Resume Builder</li>
                <li>Interview Tips</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Post Jobs</li>
                <li>Employer Branding</li>
                <li>Recruitment Tools</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Event Info</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Schedule</li>
                <li>Speakers</li>
                <li>Networking</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 CareerConnect. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
