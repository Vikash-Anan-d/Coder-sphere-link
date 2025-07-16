import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Users, 
  GitBranch, 
  MessageSquare, 
  Plus, 
  Search,
  Bell,
  Settings,
  Star,
  ExternalLink,
  Clock,
  TrendingUp
} from 'lucide-react';

const Dashboard = () => {
  const userStats = [
    { label: "Projects", value: "12", icon: GitBranch, change: "+2 this month" },
    { label: "Connections", value: "156", icon: Users, change: "+15 this week" },
    { label: "Collaborations", value: "8", icon: Code2, change: "3 active" },
    { label: "Messages", value: "24", icon: MessageSquare, change: "5 unread" }
  ];

  const recentProjects = [
    {
      id: 1,
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration using React and Node.js",
      tech: ["React", "Node.js", "OpenAI", "Socket.io"],
      collaborators: 3,
      status: "active",
      lastUpdate: "2 hours ago"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Express", "MongoDB", "Stripe"],
      collaborators: 5,
      status: "completed",
      lastUpdate: "1 day ago"
    },
    {
      id: 3,
      title: "Task Management Tool",
      description: "Collaborative task management with real-time updates",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      collaborators: 2,
      status: "planning",
      lastUpdate: "3 days ago"
    }
  ];

  const activeCollaborations = [
    {
      project: "DevConnect Mobile App",
      collaborator: "Sarah Chen",
      role: "Frontend Developer",
      avatar: "SC",
      lastActivity: "Online now"
    },
    {
      project: "Blockchain Wallet",
      collaborator: "Alex Johnson",
      role: "Blockchain Developer",
      avatar: "AJ",
      lastActivity: "2 hours ago"
    },
    {
      project: "Data Analytics Dashboard",
      collaborator: "Maria Garcia",
      role: "Data Scientist",
      avatar: "MG",
      lastActivity: "1 day ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'planning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Welcome back, Developer!</h1>
                <p className="text-gray-300">Let's build something amazing today</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-300 mb-2">{stat.label}</div>
                <div className="text-xs text-green-400">{stat.change}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Projects Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">Recent Projects</CardTitle>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {recentProjects.map((project) => (
                  <div key={project.id} className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                          <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-white/10 text-white text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {project.collaborators} collaborators
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {project.lastUpdate}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-400 hover:bg-blue-500/20">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Collaborations */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Active Collaborations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeCollaborations.map((collab, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                      {collab.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium truncate">{collab.collaborator}</p>
                      <p className="text-gray-400 text-xs truncate">{collab.project}</p>
                      <p className="text-gray-500 text-xs">{collab.lastActivity}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-white/5 hover:bg-white/10 text-white border-white/20" variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Find Developers
                </Button>
                <Button className="w-full justify-start bg-white/5 hover:bg-white/10 text-white border-white/20" variant="outline">
                  <GitBranch className="h-4 w-4 mr-2" />
                  Browse Projects
                </Button>
                <Button className="w-full justify-start bg-white/5 hover:bg-white/10 text-white border-white/20" variant="outline">
                  <Star className="h-4 w-4 mr-2" />
                  Explore Skills
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
