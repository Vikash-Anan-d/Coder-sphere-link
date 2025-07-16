import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Heart, 
  MessageSquare, 
  Users, 
  Calendar,
  Code2,
  Star,
  GitBranch,
  Clock,
  ExternalLink
} from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const projects = [
    {
      id: 1,
      title: "AI-Powered Code Review Assistant",
      description: "An intelligent code review tool that uses machine learning to identify bugs, security issues, and suggest improvements automatically.",
      author: "Sarah Chen",
      authorAvatar: "SC",
      tech: ["Python", "TensorFlow", "React", "Node.js"],
      status: "seeking-collaborators",
      difficulty: "Advanced",
      collaborators: 3,
      likes: 45,
      comments: 12,
      createdAt: "2 days ago",
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Decentralized Social Media Platform",
      description: "Building a blockchain-based social media platform that gives users control over their data and content.",
      author: "Alex Rodriguez",
      authorAvatar: "AR",
      tech: ["Solidity", "React", "Web3.js", "IPFS"],
      status: "active",
      difficulty: "Expert",
      collaborators: 8,
      likes: 72,
      comments: 28,
      createdAt: "1 week ago",
      category: "Blockchain"
    },
    {
      id: 3,
      title: "Real-time Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing real-time data streams with customizable charts and analytics.",
      author: "Maria Garcia",
      authorAvatar: "MG",
      tech: ["D3.js", "React", "Python", "WebSocket"],
      status: "planning",
      difficulty: "Intermediate",
      collaborators: 2,
      likes: 38,
      comments: 15,
      createdAt: "3 days ago",
      category: "Data Science"
    },
    {
      id: 4,
      title: "Mobile Fitness Tracking App",
      description: "Cross-platform mobile app for fitness tracking with social features and AI-powered workout recommendations.",
      author: "David Kim",
      authorAvatar: "DK",
      tech: ["React Native", "Firebase", "Python", "ML"],
      status: "seeking-collaborators",
      difficulty: "Intermediate",
      collaborators: 4,
      likes: 29,
      comments: 8,
      createdAt: "5 days ago",
      category: "Mobile"
    },
    {
      id: 5,
      title: "Open Source Learning Management System",
      description: "Building a comprehensive LMS for educational institutions with modern features and accessibility focus.",
      author: "Emily Johnson",
      authorAvatar: "EJ",
      tech: ["Vue.js", "PHP", "MySQL", "Docker"],
      status: "active",
      difficulty: "Intermediate",
      collaborators: 12,
      likes: 91,
      comments: 34,
      createdAt: "1 week ago",
      category: "Education"
    },
    {
      id: 6,
      title: "Cybersecurity Threat Detection Tool",
      description: "Advanced threat detection system using machine learning to identify and prevent cyber attacks in real-time.",
      author: "Michael Brown",
      authorAvatar: "MB",
      tech: ["Python", "Scikit-learn", "Django", "PostgreSQL"],
      status: "completed",
      difficulty: "Expert",
      collaborators: 6,
      likes: 156,
      comments: 45,
      createdAt: "2 weeks ago",
      category: "Security"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'seeking-collaborators': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'planning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-orange-500/20 text-orange-400';
      case 'Expert': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = selectedTech === 'all' || project.tech.some(tech => 
      tech.toLowerCase().includes(selectedTech.toLowerCase()));
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesSearch && matchesTech && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                <GitBranch className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Discover Projects</h1>
                <p className="text-gray-300">Find exciting projects to collaborate on</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
              Create Project
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Search and Filters */}
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search projects..."
                  className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedTech} onValueChange={setSelectedTech}>
                <SelectTrigger className="w-full md:w-48 bg-white/5 border-white/20 text-white">
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">All Technologies</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="node">Node.js</SelectItem>
                  <SelectItem value="blockchain">Blockchain</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full md:w-48 bg-white/5 border-white/20 text-white">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="seeking-collaborators">Seeking Collaborators</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                      {project.authorAvatar}
                    </div>
                    <div>
                      <p className="text-white font-medium">{project.author}</p>
                      <p className="text-gray-400 text-sm">{project.createdAt}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-white text-lg leading-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-white/10 text-white text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="bg-white/10 text-gray-400 text-xs">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                      {formatStatus(project.status)}
                    </Badge>
                    <Badge className={`text-xs ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex items-center space-x-4 text-gray-400">
                    <span className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-1" />
                      {project.collaborators}
                    </span>
                    <span className="flex items-center text-sm">
                      <Heart className="h-4 w-4 mr-1" />
                      {project.likes}
                    </span>
                    <span className="flex items-center text-sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {project.comments}
                    </span>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                    Join Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardContent className="p-12 text-center">
              <Code2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                Create New Project
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Projects;
