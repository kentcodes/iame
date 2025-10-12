"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Server,
  Code,
  Mail,
  Shield,
  Cloud,
  Database,
  Palette,
  Smartphone,
  TrendingUp,
  Users,
  Settings,
  BarChart3,
  Workflow,
  Calendar,
} from "lucide-react"
import { AnimatedName } from "@/components/animated-name"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-slate-800 hover:scale-105 transition-transform duration-200">
              <AnimatedName name="Kent Locop" />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="hidden md:flex space-x-4 lg:space-x-6">
                <a
                  href="#about"
                  className="text-sm lg:text-base text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105 relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#expertise"
                  className="text-sm lg:text-base text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105 relative group"
                >
                  Expertise
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#services"
                  className="text-sm lg:text-base text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105 relative group"
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#portfolio"
                  className="text-sm lg:text-base text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105 relative group"
                >
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="text-sm lg:text-base text-slate-600 hover:text-slate-800 transition-all duration-300 hover:scale-105 relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <img
              src="/images/kent-locop-profile.jpg"
              alt="Kent Locop"
              className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto mb-4 sm:mb-6 border-4 border-white shadow-lg hover:scale-110 transition-transform duration-500 animate-float object-cover"
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 animate-slide-up px-4">
              <AnimatedName
                name="Kent Locop"
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              />
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-4 sm:mb-6 max-w-3xl mx-auto animate-slide-up animation-delay-200 px-4">
              Airtable Expert • Integration Specialist • Custom Web Apps Developer
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-slide-up animation-delay-400 px-4">
              <Badge
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:scale-105 transition-transform duration-200 animate-bounce-in animation-delay-500 bg-slate-200 text-slate-800"
              >
                <Database className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Airtable
              </Badge>
              <Badge
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:scale-105 transition-transform duration-200 animate-bounce-in animation-delay-700 bg-slate-200 text-slate-800"
              >
                <Workflow className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Integrations
              </Badge>
              <Badge
                variant="secondary"
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm hover:scale-105 transition-transform duration-200 animate-bounce-in animation-delay-900 bg-slate-200 text-slate-800"
              >
                <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Automation
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-slide-up animation-delay-600 px-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white hover:scale-105 transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                onClick={() => window.open("https://calendar.app.google/KPdzsQWUKcLAHbKRA", "_blank")}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-slate-800 border-slate-300 hover:bg-slate-100 hover:scale-105 transition-all duration-300 hover:shadow-lg bg-transparent text-sm sm:text-base"
                onClick={() => (window.location.href = "mailto:officialkentlocop@gmail.com")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-800 animate-fade-in-up">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-slate-600 mb-4 sm:mb-6 leading-relaxed animate-fade-in-up animation-delay-200 px-4">
              I build reliable integrations, advanced Airtable systems, and custom web apps that automate operations and
              turn messy data into clean, decision-ready dashboards. My work spans hospitality, education, and
              e-commerce—serving 2,000+ daily guests, scheduling hundreds of classes, and unifying support, billing, and
              analytics.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Best Section */}
      <section id="expertise" className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-800 animate-fade-in-up">
            What I Do Best
          </h2>
          <div className="max-w-5xl mx-auto grid gap-4 sm:gap-6">
            {/* Airtable Expert */}
            <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-200">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800">Airtable Expert</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Automations (triggers, scripting, webhooks), Scripting (JS), Interfaces, Extensions/Apps (React
                      SDK), external syncs, Base schema design, performance tuning, and governance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Integrations */}
            <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-300">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Workflow className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800">
                      API Integrations & ETL
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      REST/Webhooks, retries/idempotency, Supabase/Postgres pipelines, QuickBooks mappings
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Apps */}
            <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-400">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800">
                      Custom Apps (React/Node)
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Next.js, Supabase/Auth, Prisma, Tailwind, shadcn/ui; admin portals & customer portals
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scheduling Systems */}
            <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-500">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800">Scheduling Systems</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Acuity/SimplyBook + Google Calendar/Meet; seat logic, round-robin, notifications
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support & Telephony */}
            <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-600">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800">
                      Support & Telephony
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Zendesk omnichannel, 3CX IVR, AI bot → human handoff
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Apps & Dashboards */}
            <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up animation-delay-700">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800">
                      Data Apps & Dashboards
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      Airtable/Retool/Looker Studio, audit-ready reporting
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-800 animate-fade-in-up">
            Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* IT Infrastructure */}
            <Card className="h-full bg-white border-slate-200 hover:bg-slate-50 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 hover:rotate-12 transition-transform duration-300">
                  <Server className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl hover:text-blue-600 transition-colors duration-300">
                  IT Infrastructure
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Enterprise-grade infrastructure solutions for scalability and security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 mb-4">
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <Cloud className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                    Cloud Architecture (AWS, Azure, GCP)
                  </li>
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                    Security Implementation
                  </li>
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <Database className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                    Database Design & Optimization
                  </li>
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <Server className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-blue-500 flex-shrink-0" />
                    DevOps & CI/CD Pipelines
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-slate-800 border-slate-300 hover:bg-slate-100 hover:scale-105 transition-all duration-300 bg-transparent text-sm"
                  onClick={() => window.open("https://calendar.app.google/KPdzsQWUKcLAHbKRA", "_blank")}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>

            {/* Web Development */}
            <Card className="h-full bg-white border-slate-200 hover:bg-slate-50 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-400">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 hover:rotate-12 transition-transform duration-300">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl hover:text-green-600 transition-colors duration-300">
                  Web Development & Design
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Modern, responsive web applications with exceptional user experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 mb-4">
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <Code className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-green-500 flex-shrink-0" />
                    Full-Stack Development
                  </li>
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <Palette className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-green-500 flex-shrink-0" />
                    UI/UX Design
                  </li>
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <Smartphone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-green-500 flex-shrink-0" />
                    Responsive Design
                  </li>
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-green-500 flex-shrink-0" />
                    Performance Optimization
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-slate-800 border-slate-300 hover:bg-slate-100 hover:scale-105 transition-all duration-300 bg-transparent text-sm"
                  onClick={() => window.open("https://calendar.app.google/KPdzsQWUKcLAHbKRA", "_blank")}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>

            {/* Email Marketing */}
            <Card className="h-full bg-white border-slate-200 hover:bg-slate-50 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-600">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 hover:rotate-12 transition-transform duration-300">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg sm:text-xl hover:text-purple-600 transition-colors duration-300">
                  Email Deliverability
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Maximize email performance with advanced deliverability strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 sm:space-y-3 mb-4">
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-purple-500 flex-shrink-0" />
                    Deliverability Optimization
                  </li>
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-purple-500 flex-shrink-0" />
                    Authentication Setup
                  </li>
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-purple-500 flex-shrink-0" />
                    Campaign Performance
                  </li>
                  <li className="flex items-center hover:translate-x-2 transition-transform duration-200 text-sm sm:text-base">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-purple-500 flex-shrink-0" />
                    List Management
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-slate-800 border-slate-300 hover:bg-slate-100 hover:scale-105 transition-all duration-300 bg-transparent text-sm"
                  onClick={() => window.open("https://calendar.app.google/KPdzsQWUKcLAHbKRA", "_blank")}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-800 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="overflow-hidden bg-white border-slate-200 hover:scale-105 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up animation-delay-200">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300"></div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl group-hover:text-blue-600 transition-colors duration-300">
                  Enterprise Cloud Migration
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Led complete infrastructure overhaul for Fortune 500 company
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                  Migrated legacy systems to AWS, reducing costs by 40% and improving performance by 300%.
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    AWS
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    Kubernetes
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    Terraform
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-slate-800 border-slate-300 hover:bg-slate-100 hover:scale-105 transition-all duration-300 bg-transparent text-sm"
                  onClick={() => window.open("https://calendar.app.google/KPdzsQWUKcLAHbKRA", "_blank")}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white border-slate-200 hover:scale-105 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up animation-delay-400">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-green-500 to-green-600 group-hover:from-green-400 group-hover:to-green-500 transition-all duration-300"></div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl group-hover:text-green-600 transition-colors duration-300">
                  E-commerce Platform
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Full-stack development of modern e-commerce solution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                  Built scalable e-commerce platform handling 10M+ monthly visitors with 99.9% uptime.
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    Next.js
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    Node.js
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-slate-800 border-slate-300 hover:bg-slate-100 hover:scale-105 transition-all duration-300 bg-transparent text-sm"
                  onClick={() => window.open("https://calendar.app.google/KPdzsQWUKcLAHbKRA", "_blank")}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white border-slate-200 hover:scale-105 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up animation-delay-600">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-500 to-purple-600 group-hover:from-purple-400 group-hover:to-purple-500 transition-all duration-300"></div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl group-hover:text-purple-600 transition-colors duration-300">
                  Email Campaign Optimization
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Improved deliverability rates for SaaS company
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                  Increased email deliverability from 72% to 98% and engagement rates by 150%.
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    DMARC
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    SPF
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    DKIM
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-slate-800 border-slate-300 hover:bg-slate-100 hover:scale-105 transition-all duration-300 bg-transparent text-sm"
                  onClick={() => window.open("https://calendar.app.google/KPdzsQWUKcLAHbKRA", "_blank")}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white border-slate-200 hover:scale-105 hover:shadow-2xl transition-all duration-500 group animate-fade-in-up animation-delay-800">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-orange-500 to-orange-600 group-hover:from-orange-400 group-hover:to-orange-500 transition-all duration-300"></div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl group-hover:text-orange-600 transition-colors duration-300">
                  Healthcare Dashboard
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  HIPAA-compliant patient management system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                  Designed secure, intuitive dashboard serving 50+ healthcare providers.
                </p>
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    React
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    HIPAA
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs sm:text-sm hover:scale-110 transition-transform duration-200"
                  >
                    Security
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-slate-800 border-slate-300 hover:bg-slate-100 hover:scale-105 transition-all duration-300 bg-transparent text-sm"
                  onClick={() => window.open("https://calendar.app.google/KPdzsQWUKcLAHbKRA", "_blank")}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-800 animate-fade-in-up">
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="animate-fade-in-up animation-delay-200">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-800">Infrastructure & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-300">
                  AWS
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-400">
                  Azure
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-500">
                  GCP
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-600">
                  Docker
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-700">
                  Kubernetes
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-800">
                  Terraform
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-900">
                  Jenkins
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-blue-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-1000">
                  GitLab CI
                </Badge>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-400">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-800">Development & Design</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-green-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-300">
                  React
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-green-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-400">
                  Next.js
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-green-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-500">
                  Node.js
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-green-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-600">
                  TypeScript
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-green-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-700">
                  Python
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-green-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-800">
                  PostgreSQL
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-green-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-900">
                  Figma
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-green-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-1000">
                  Tailwind CSS
                </Badge>
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-600">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-800">Email & Marketing</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-purple-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-300">
                  Mailgun
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-purple-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-400">
                  SendGrid
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-purple-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-500">
                  Postmark
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-purple-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-600">
                  DMARC
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-purple-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-700">
                  SPF/DKIM
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-purple-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-800">
                  Campaign Monitor
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-purple-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-900">
                  Analytics
                </Badge>
                <Badge className="text-xs sm:text-sm hover:scale-110 hover:bg-purple-600 hover:text-white transition-all duration-300 animate-bounce-in animation-delay-1000">
                  A/B Testing
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 bg-slate-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 animate-fade-in-up">Let's Work Together</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 px-4">
            Ready to transform your infrastructure, build exceptional web experiences, or optimize your email campaigns?
            Let's discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in-up animation-delay-400 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-slate-800 hover:bg-slate-100 hover:scale-110 transition-all duration-300 text-sm sm:text-base"
              onClick={() => window.open("https://calendar.app.google/KPdzsQWUKcLAHbKRA", "_blank")}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Schedule a Call
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-slate-800 hover:scale-110 transition-all duration-300 bg-transparent text-sm sm:text-base"
              onClick={() => (window.location.href = "mailto:officialkentlocop@gmail.com")}
            >
              <Mail className="w-4 h-4 mr-2" />
              officialkentlocop@gmail.com
            </Button>
          </div>
          <Separator className="my-6 sm:my-8 bg-slate-700" />
          <p className="text-sm sm:text-base text-slate-400 animate-fade-in-up animation-delay-600">
            © 2025 Kent Locop. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  )
}
