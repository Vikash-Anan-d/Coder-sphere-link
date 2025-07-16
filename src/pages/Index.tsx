import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, Users, GitBranch, MessageSquare, Search, Star, ArrowRight, Github, Globe, Trophy, 
  Zap, Shield, Rocket, Clock, Award, Target, TrendingUp, CheckCircle, PlayCircle,
  BookOpen, Coffee, Lightbulb, Heart, ChevronRight, Quote, MapPin, Calendar,
  BarChart3, PieChart, LineChart, Database, Server, Smartphone, Monitor,
  Cpu, HardDrive, Network, Wifi, Lock, Eye, UserCheck, FileText, Settings,
  Layers, Package, Gauge, Activity, Fingerprint, Sparkles, RefreshCw
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const mainFeatures = [
    {
      icon: Users,
      title: "Global Developer Network",
      description: "Connect with 10,000+ skilled developers across 50+ countries, building the future together",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Code2,
      title: "Smart Project Matching",
      description: "AI-powered algorithm matches you with projects that align perfectly with your skills and interests",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: MessageSquare,
      title: "Real-time Collaboration",
      description: "Built-in code editor, video calls, and instant messaging for seamless team collaboration",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: GitBranch,
      title: "Version Control Integration",
      description: "Seamless GitHub integration with automated project tracking and contribution analytics",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const advancedFeatures = [
    { icon: Zap, title: "Lightning Fast", description: "Optimized performance with 99.9% uptime" },
    { icon: Shield, title: "Enterprise Security", description: "Bank-level encryption and data protection" },
    { icon: Rocket, title: "AI-Powered Insights", description: "Smart recommendations and analytics" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock technical assistance" },
    { icon: Award, title: "Quality Assurance", description: "Verified developers and projects only" },
    { icon: Target, title: "Goal Tracking", description: "Set and achieve development milestones" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Full Stack Developer",
      company: "Google",
      image: "👩‍💻",
      quote: "DevConnect transformed how I collaborate. Found my dream team for a startup that's now valued at $50M!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "AI Engineer",
      company: "OpenAI",
      image: "👨‍💻",
      quote: "The quality of developers here is exceptional. Built 3 successful products through connections made on DevConnect.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Blockchain Developer",
      company: "ConsenSys",
      image: "👩‍🔬",
      quote: "From idea to deployment in 6 weeks. The collaboration tools are game-changing for remote teams.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50,500+", label: "Active Developers", icon: Users },
    { number: "13,000", label: "Projects Completed", icon: CheckCircle },
    { number: "3,300+", label: "Successful Teams", icon: Award },
    { number: "97%", label: "Success Rate", icon: TrendingUp }
  ];

  const techCategories = [
    {
      category: "Frontend",
      techs: ["React.js", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-400 to-blue-600"
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "Java", "Go", "PHP", "Ruby"],
      color: "from-green-400 to-green-600"
    },
    {
      category: "Database",
      techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "Supabase"],
      color: "from-purple-400 to-purple-600"
    },
    {
      category: "DevOps",
      techs: ["Docker", "Kubernetes", "AWS", "GCP", "Jenkins", "Terraform"],
      color: "from-orange-400 to-orange-600"
    },
    {
      category: "Mobile",
      techs: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
      color: "from-pink-400 to-pink-600"
    },
    {
      category: "Emerging",
      techs: ["Web3", "AI/ML", "Blockchain", "IoT", "AR/VR", "Quantum"],
      color: "from-cyan-400 to-cyan-600"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for beginners",
      features: [
        "Connect with up to 10 developers",
        "Join 3 projects per month",
        "Basic messaging",
        "Community support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29/month",
      description: "For serious developers",
      features: [
        "Unlimited connections",
        "Join unlimited projects",
        "Advanced collaboration tools",
        "Priority support",
        "AI-powered matching",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For teams and organizations",
      features: [
        "Everything in Professional",
        "Team management",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const faqs = [
    {
      question: "How does the matching algorithm work?",
      answer: "Our AI analyzes your skills, interests, project history, and collaboration style to suggest the most compatible developers and projects."
    },
    {
      question: "Is my code and data secure?",
      answer: "Yes, we use enterprise-grade encryption, SOC 2 compliance, and never share your private repositories without explicit permission."
    },
    {
      question: "Can I use DevConnect for commercial projects?",
      answer: "Absolutely! Many successful startups and products have been built through DevConnect collaborations. You retain full IP rights."
    },
    {
      question: "What if I'm new to development?",
      answer: "Perfect! We have mentorship programs, beginner-friendly projects, and a supportive community to help you grow."
    }
  ];

  const developerQuotes = [
    { quote: "The best way to get a project done faster is to start sooner.", author: "Jim Highsmith" },
    { quote: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { quote: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
    { quote: "The most important property of a program is whether it accomplishes the intention of its user.", author: "C.A.R. Hoare" },
    { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
    { quote: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { quote: "It's not a bug – it's an undocumented feature.", author: "Anonymous" },
    { quote: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
    { quote: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { quote: "Make it work, make it right, make it fast.", author: "Kent Beck" },
    { quote: "Code never lies, comments sometimes do.", author: "Ron Jeffries" },
    { quote: "Debugging is twice as hard as writing the code in the first place.", author: "Brian Kernighan" },
    { quote: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
    { quote: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard" },
    { quote: "Good code is its own best documentation.", author: "Steve McConnell" },
    { quote: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
    { quote: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { quote: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
    { quote: "Software is a great combination between artistry and engineering.", author: "Bill Gates" },
    { quote: "The function of good software is to make the complex appear to be simple.", author: "Grady Booch" },
    { quote: "There are only two hard things in Computer Science: cache invalidation and naming things.", author: "Phil Karlton" },
    { quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.", author: "Patrick McKenzie" },
    { quote: "The best way to learn is to do; the worst way to teach is to talk.", author: "Paul Halmos" },
    { quote: "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.", author: "Bill Gates" },
    { quote: "Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime.", author: "David Leinweber" },
    { quote: "Code is read more often than it is written.", author: "Guido van Rossum" },
    { quote: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
    { quote: "In programming, the hard part isn't solving problems, but deciding what problems to solve.", author: "Paul Graham" }
  ].sort(() => Math.random() - 0.5); // Randomize the quotes

  const [currentQuote, setCurrentQuote] = useState(0);
  const [showFAQ, setShowFAQ] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % developerQuotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleShowFAQ = () => {
    navigate('/faq');
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-hero)' }}>
      {/* Enhanced Header */}
      <header className="relative z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="p-3 rounded-xl" style={{ background: 'var(--gradient-primary)' }}>
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-3xl font-bold text-white">DevConnect</span>
                <div className="text-xs text-blue-200 font-medium">Where Code Meets Collaboration</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a>
              <a href="#developers" className="text-white/80 hover:text-white transition-colors">Developers</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 font-medium hidden sm:flex"
                onClick={() => navigate('/auth')}
              >
                Sign In
              </Button>
              <Button 
                className="font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ background: 'var(--gradient-primary)' }}
                onClick={() => navigate('/auth')}
              >
                Get Started
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="text-sm text-white/90 mr-2">🎉 Join 50,000+ developers worldwide</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-400/30">
                Live
              </Badge>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Build The 
              <span className="relative">
                <span style={{ background: 'var(--gradient-secondary)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  {" "}Future
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              </span>
              <br />Together
            </h1>
            
            <p className="text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              The world's most advanced platform for developers to connect, collaborate, and create revolutionary software. 
              Join the community that's building tomorrow's technology today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-12 py-4 text-xl font-semibold shadow-2xl hover:shadow-xl transition-all duration-300 group"
                onClick={() => navigate('/auth')}
              >
                Join DevConnect Now
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-12 py-4 text-xl font-semibold backdrop-blur-sm transition-all duration-300"
                onClick={() => navigate('/projects')}
              >
                <Github className="mr-3 h-6 w-6" />
                View on GitHub
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 sparkle-container overflow-hidden">
                      <stat.icon className="h-6 w-6 text-white relative z-10" />
                      <div className="absolute inset-0 sparkle-effect"></div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 animate-bounce delay-1000 opacity-30">
          <div className="relative p-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 sparkle-container overflow-hidden">
            <Code2 className="h-8 w-8 text-white relative z-10" />
            <div className="absolute inset-0 sparkle-effect"></div>
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-2000 opacity-30">
          <div className="relative p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 sparkle-container overflow-hidden">
            <GitBranch className="h-8 w-8 text-white relative z-10" />
            <div className="absolute inset-0 sparkle-effect"></div>
          </div>
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce delay-3000 opacity-30">
          <div className="relative p-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 sparkle-container overflow-hidden">
            <Star className="h-8 w-8 text-white relative z-10" />
            <div className="absolute inset-0 sparkle-effect"></div>
          </div>
        </div>
        <div className="absolute top-60 right-10 animate-bounce delay-4000 opacity-30">
          <div className="relative p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 sparkle-container overflow-hidden">
            <Rocket className="h-8 w-8 text-white relative z-10" />
            <div className="absolute inset-0 sparkle-effect"></div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section id="features" className="py-32 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Core Features
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to Collaborate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to streamline development workflow and foster meaningful connections between talented developers worldwide.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden cursor-pointer" onClick={() => navigate('/connect')}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                      <Button 
                        variant="outline" 
                        className="bg-gradient-to-r from-gray-50 to-white border-gray-200 hover:border-gray-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate('/connect');
                        }}
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-white/10 text-white border-white/20">
              Technology Ecosystem
            </Badge>
            <h2 className="text-5xl font-bold text-white mb-6">
              Master Every Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with experts across all major technologies and frameworks. From traditional web development to cutting-edge emerging technologies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/tech/${category.category.toLowerCase()}`)}
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                      <Package className="h-5 w-5 text-white" />
                    </div>
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.techs.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/tech/${category.category.toLowerCase()}`);
                    }}
                  >
                    Learn & Take Quiz
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="developers" className="py-32 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Success Stories
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Loved by Developers Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how DevConnect has transformed careers and enabled breakthrough innovations across the globe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{testimonial.image}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-blue-500 mb-4" />
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 text-lg font-medium"
              onClick={() => navigate('/developers')}
            >
              Meet Our Community
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Developer Quotes Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 shadow-2xl relative overflow-hidden">
              <CardContent className="p-12 text-center relative">
                <Quote className="h-20 w-20 text-blue-400 mx-auto mb-8" />
                
                <div className="transition-all duration-500 ease-in-out">
                  <blockquote className="text-2xl md:text-3xl font-medium text-yellow-400 mb-6 leading-relaxed">
                    "{developerQuotes[currentQuote].quote}"
                  </blockquote>
                  
                  <p className="text-lg text-purple-300 font-medium">
                    {developerQuotes[currentQuote].author}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Simple Pricing
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start for free and scale as you grow. No hidden fees, no long-term contracts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl h-full flex flex-col ${plan.popular ? 'border-2 border-blue-500 transform scale-105' : 'border border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardContent className={`p-8 flex-1 flex flex-col ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                        : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900'
                    }`}
                    onClick={() => navigate('/auth')}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Show only when help is needed */}
      {showFAQ && (
        <section id="faq-section" className="py-32 px-6 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-20">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                FAQ
              </Badge>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about DevConnect
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setShowFAQ(false)}
                className="px-8 py-3"
              >
                Close FAQ
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced CTA Section */}
      <section className="py-32 px-6" style={{ background: 'var(--gradient-dark)' }}>
        <div className="container mx-auto">
          <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl overflow-hidden">
            <CardContent className="p-16 text-center relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"></div>
              
              <Trophy className="h-20 w-20 text-yellow-400 mx-auto mb-8" />
              <h2 className="text-6xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
                Join 50,000+ developers who are already collaborating and creating the future of technology. 
                Your next breakthrough is just one connection away.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="px-12 py-4 text-xl font-semibold shadow-2xl hover:shadow-xl transition-all duration-300 group"
                  style={{ background: 'var(--gradient-primary)' }}
                  onClick={() => navigate('/auth')}
                >
                  Join DevConnect Now
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-12 py-4 text-xl font-semibold backdrop-blur-sm"
                >
                  <Github className="mr-3 h-6 w-6" />
                  View on GitHub
                </Button>
              </div>
              
              {/* Quick Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all group">
                  <CardContent className="p-8 text-center">
                    <Users className="h-12 w-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-white mb-3">Find Developers</h3>
                    <p className="text-gray-300 mb-6">Connect with skilled developers worldwide</p>
                    <Button 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 w-full shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => navigate('/auth')}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all group">
                  <CardContent className="p-8 text-center">
                    <GitBranch className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-white mb-3">Browse Projects</h3>
                    <p className="text-gray-300 mb-6">Discover exciting projects to collaborate on</p>
                    <Button 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 w-full shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => navigate('/projects')}
                    >
                      Explore Projects
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all group">
                  <CardContent className="p-8 text-center">
                    <MessageSquare className="h-12 w-12 text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold text-white mb-3">Start Collaborating</h3>
                    <p className="text-gray-300 mb-6">Join real-time collaboration rooms</p>
                    <Button 
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 w-full shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => navigate('/auth')}
                    >
                      Sign In
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Help Button */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                  onClick={handleShowFAQ}
                >
                  Need Help? View FAQ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-6 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border-t border-slate-700">
        <div className="container mx-auto">
          <div className="border-t border-slate-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-gray-300">
                <p className="text-yellow-400 font-semibold">
                  © 2024 DevConnect by Vikash Anand
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span>Built with</span>
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>using React, TypeScript & AI • Made in India 🇮🇳</span>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:items-end gap-2 text-gray-300 text-sm">
                <p className="text-white font-medium">
                  "Transforming development through intelligent collaboration"
                </p>
                <div className="flex items-center gap-4">
                  <span>Open for collaborations & innovative projects</span>
                  <a 
                    href="mailto:vikashanandmail@gmail.com" 
                    className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                  >
                    vikashanandmail@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;