import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, Code2, MessageSquare, GitBranch, ArrowRight, Globe, 
  Video, MessageCircle, Github, Zap, Shield, Clock, Award,
  Star, CheckCircle, TrendingUp, Sparkles, Network, Cpu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Connect = () => {
  const navigate = useNavigate();

  const mainFeatures = [
    {
      icon: Users,
      title: "Global Developer Network",
      description: "Connect with 10,000+ skilled developers across 50+ countries, building the future together",
      features: [
        "Access to verified developers worldwide",
        "Skill-based matching algorithms",
        "Real-time developer availability",
        "Cross-timezone collaboration tools"
      ],
      gradient: "from-blue-500 to-purple-600",
      stats: { developers: "10,000+", countries: "50+", success: "97%" }
    },
    {
      icon: Code2,
      title: "Smart Project Matching",
      description: "AI-powered algorithm matches you with projects that align perfectly with your skills and interests",
      features: [
        "AI-driven skill assessment",
        "Project compatibility scoring",
        "Interest-based recommendations",
        "Success prediction analytics"
      ],
      gradient: "from-purple-500 to-pink-600",
      stats: { matches: "95%", accuracy: "89%", satisfaction: "94%" }
    },
    {
      icon: MessageSquare,
      title: "Real-time Collaboration",
      description: "Built-in code editor, video calls, and instant messaging for seamless team collaboration",
      features: [
        "Integrated code editor with syntax highlighting",
        "HD video conferencing up to 50 participants",
        "Real-time document collaboration",
        "Screen sharing and remote assistance"
      ],
      gradient: "from-green-500 to-blue-600",
      stats: { uptime: "99.9%", latency: "<50ms", users: "Active 24/7" }
    },
    {
      icon: GitBranch,
      title: "Version Control Integration",
      description: "Seamless GitHub integration with automated project tracking and contribution analytics",
      features: [
        "One-click GitHub repository sync",
        "Automated commit tracking",
        "Code review workflows",
        "Contribution analytics dashboard"
      ],
      gradient: "from-orange-500 to-red-600",
      stats: { repos: "50,000+", commits: "1M+", reviews: "Active" }
    }
  ];

  const collaborationTools = [
    { 
      icon: Video, 
      title: "HD Video Calls", 
      description: "Crystal clear video conferencing with up to 50 participants",
      color: "text-blue-500"
    },
    { 
      icon: MessageCircle, 
      title: "Instant Messaging", 
      description: "Real-time chat with file sharing and code snippets",
      color: "text-green-500"
    },
    { 
      icon: Github, 
      title: "Code Editor", 
      description: "Collaborative IDE with syntax highlighting and IntelliSense",
      color: "text-purple-500"
    },
    { 
      icon: Network, 
      title: "Project Rooms", 
      description: "Dedicated spaces for each project with organized workflows",
      color: "text-orange-500"
    }
  ];

  const benefits = [
    { icon: Zap, title: "Lightning Fast", value: "< 50ms latency" },
    { icon: Shield, title: "Secure", value: "Bank-level encryption" },
    { icon: Clock, title: "24/7 Available", value: "Global support" },
    { icon: Award, title: "Quality Assured", value: "Verified developers" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="py-6 px-6 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Cpu className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">DevConnect</h1>
          </div>
          <Button 
            variant="outline" 
            className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            onClick={() => navigate('/')}
          >
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-6 px-6 py-3 text-lg bg-white/10 text-white border-white/20">
            <Sparkles className="h-5 w-5 mr-2" />
            Connect & Collaborate
          </Badge>
          <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
            Connect with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Developers </span>
            Worldwide
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Join the largest global network of skilled developers and experience the future of collaborative development
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful Features for Modern Development
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to connect, collaborate, and create amazing projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all group">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-white mb-3">{feature.title}</CardTitle>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 p-4 bg-black/20 rounded-lg">
                    {Object.entries(feature.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Tools */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Built-in Collaboration Tools
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need for seamless teamwork, all in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationTools.map((tool, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all group text-center">
                <CardContent className="p-8">
                  <tool.icon className={`h-12 w-12 ${tool.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-semibold text-white mb-3">{tool.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border-white/10">
            <CardContent className="p-12">
              <Star className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Connect?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers who are already building the future together
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
                  onClick={() => navigate('/auth')}
                >
                  Start Connecting Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                  onClick={() => navigate('/projects')}
                >
                  Explore Projects
                </Button>
              </div>
              
              <div className="mt-8 flex justify-center items-center gap-2 text-gray-300">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Free to join • No credit card required</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/20 border-t border-white/10">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-2 text-gray-300 mb-4">
            <span>Built with</span>
            <span className="text-red-500">❤️</span>
            <span>by developers, for developers</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 DevConnect. Transforming development through intelligent collaboration.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Connect;