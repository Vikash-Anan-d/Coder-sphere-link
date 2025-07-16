import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  Code2, 
  Star, 
  Trophy, 
  CheckCircle, 
  Clock,
  BookOpen,
  Play,
  RotateCcw
} from 'lucide-react';

interface Skill {
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
}

interface Quiz {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const techStackData = {
  frontend: {
    title: 'Frontend Development',
    description: 'Build beautiful, responsive user interfaces with modern frontend technologies',
    color: 'from-blue-400 to-blue-600',
    skills: [
      {
        name: 'React.js',
        description: 'A JavaScript library for building user interfaces with component-based architecture',
        difficulty: 'Intermediate' as const,
        topics: ['Components', 'JSX', 'State Management', 'Hooks', 'Props', 'Virtual DOM']
      },
      {
        name: 'TypeScript',
        description: 'Typed superset of JavaScript that compiles to plain JavaScript',
        difficulty: 'Intermediate' as const,
        topics: ['Types', 'Interfaces', 'Generics', 'Decorators', 'Type Guards', 'Modules']
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapidly building custom designs',
        difficulty: 'Beginner' as const,
        topics: ['Utility Classes', 'Responsive Design', 'Flexbox', 'Grid', 'Animations', 'Dark Mode']
      }
    ],
    quiz: [
      {
        question: 'What is the Virtual DOM in React?',
        options: [
          'A copy of the real DOM kept in memory',
          'A faster version of the DOM',
          'A new browser API',
          'A CSS framework'
        ],
        correct: 0,
        explanation: 'The Virtual DOM is a copy of the real DOM kept in memory and synced with the real DOM by a library such as ReactDOM.'
      },
      {
        question: 'Which TypeScript feature helps catch errors at compile time?',
        options: [
          'Runtime checking',
          'Static type checking',
          'Dynamic typing',
          'Loose typing'
        ],
        correct: 1,
        explanation: 'TypeScript provides static type checking which helps catch errors during compilation before the code runs.'
      },
      {
        question: 'What does the "utility-first" approach in Tailwind CSS mean?',
        options: [
          'Using JavaScript utilities',
          'Building components first',
          'Using small, single-purpose classes',
          'Creating utility functions'
        ],
        correct: 2,
        explanation: 'Utility-first means building designs using small, single-purpose classes that can be composed together.'
      }
    ]
  },
  backend: {
    title: 'Backend Development',
    description: 'Build robust server-side applications and APIs with modern backend technologies',
    color: 'from-green-400 to-green-600',
    skills: [
      {
        name: 'Node.js',
        description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side development',
        difficulty: 'Intermediate' as const,
        topics: ['Event Loop', 'Modules', 'NPM', 'Express.js', 'Async/Await', 'Streams']
      },
      {
        name: 'Python',
        description: 'High-level programming language perfect for web development, AI, and data science',
        difficulty: 'Beginner' as const,
        topics: ['Syntax', 'Django/Flask', 'REST APIs', 'ORM', 'Testing', 'Deployment']
      },
      {
        name: 'Go',
        description: 'Fast, statically typed language designed for building scalable backend services',
        difficulty: 'Advanced' as const,
        topics: ['Goroutines', 'Channels', 'Interfaces', 'Packages', 'HTTP Server', 'Concurrency']
      }
    ],
    quiz: [
      {
        question: 'What makes Node.js non-blocking?',
        options: [
          'Multi-threading',
          'Event-driven architecture',
          'Faster CPU',
          'More memory'
        ],
        correct: 1,
        explanation: 'Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.'
      },
      {
        question: 'Which Python framework is known for "batteries included" philosophy?',
        options: [
          'Flask',
          'FastAPI',
          'Django',
          'Pyramid'
        ],
        correct: 2,
        explanation: 'Django follows the "batteries included" philosophy, providing many built-in features out of the box.'
      },
      {
        question: 'What are Goroutines in Go?',
        options: [
          'Error handling functions',
          'Lightweight threads managed by Go runtime',
          'Package managers',
          'Testing utilities'
        ],
        correct: 1,
        explanation: 'Goroutines are lightweight threads managed by the Go runtime, making concurrent programming easier.'
      }
    ]
  },
  database: {
    title: 'Database Technologies',
    description: 'Master data storage, retrieval, and management with modern database systems',
    color: 'from-purple-400 to-purple-600',
    skills: [
      {
        name: 'MongoDB',
        description: 'NoSQL document database designed for modern application developers',
        difficulty: 'Intermediate' as const,
        topics: ['Documents', 'Collections', 'Aggregation', 'Indexing', 'Sharding', 'Replication']
      },
      {
        name: 'PostgreSQL',
        description: 'Advanced open-source relational database with robust feature set',
        difficulty: 'Intermediate' as const,
        topics: ['SQL Queries', 'ACID Properties', 'Indexes', 'Views', 'Triggers', 'JSON Support']
      },
      {
        name: 'Redis',
        description: 'In-memory data structure store used as database, cache, and message broker',
        difficulty: 'Advanced' as const,
        topics: ['Data Types', 'Persistence', 'Clustering', 'Pub/Sub', 'Lua Scripts', 'Streams']
      }
    ],
    quiz: [
      {
        question: 'What type of database is MongoDB?',
        options: [
          'Relational',
          'Graph',
          'Document-oriented NoSQL',
          'Key-value store'
        ],
        correct: 2,
        explanation: 'MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents.'
      },
      {
        question: 'What does ACID stand for in database systems?',
        options: [
          'Atomicity, Consistency, Isolation, Durability',
          'Authentication, Consistency, Integration, Data',
          'Automatic, Concurrent, Indexed, Distributed',
          'Advanced, Consistent, Integrated, Durable'
        ],
        correct: 0,
        explanation: 'ACID stands for Atomicity, Consistency, Isolation, and Durability - key properties of database transactions.'
      },
      {
        question: 'What is Redis primarily used for?',
        options: [
          'File storage',
          'In-memory caching and data structures',
          'Image processing',
          'Email services'
        ],
        correct: 1,
        explanation: 'Redis is primarily used as an in-memory data structure store for caching, session storage, and real-time applications.'
      }
    ]
  },
  devops: {
    title: 'DevOps & Cloud',
    description: 'Automate deployment, scaling, and management of applications in the cloud',
    color: 'from-orange-400 to-orange-600',
    skills: [
      {
        name: 'Docker',
        description: 'Platform for developing, shipping, and running applications using containerization',
        difficulty: 'Intermediate' as const,
        topics: ['Containers', 'Images', 'Dockerfile', 'Docker Compose', 'Volumes', 'Networks']
      },
      {
        name: 'Kubernetes',
        description: 'Container orchestration platform for automating deployment and scaling',
        difficulty: 'Advanced' as const,
        topics: ['Pods', 'Services', 'Deployments', 'ConfigMaps', 'Secrets', 'Ingress']
      },
      {
        name: 'AWS',
        description: 'Comprehensive cloud computing platform with 200+ services',
        difficulty: 'Intermediate' as const,
        topics: ['EC2', 'S3', 'Lambda', 'RDS', 'VPC', 'CloudFormation']
      }
    ],
    quiz: [
      {
        question: 'What is the main benefit of containerization with Docker?',
        options: [
          'Faster internet',
          'Consistent environment across different systems',
          'Better graphics',
          'Automatic coding'
        ],
        correct: 1,
        explanation: 'Docker provides consistent environments across different systems, solving the "it works on my machine" problem.'
      },
      {
        question: 'In Kubernetes, what is a Pod?',
        options: [
          'A container registry',
          'The smallest deployable unit that can contain one or more containers',
          'A monitoring tool',
          'A database'
        ],
        correct: 1,
        explanation: 'A Pod is the smallest deployable unit in Kubernetes that can contain one or more containers.'
      },
      {
        question: 'What does AWS EC2 stand for?',
        options: [
          'Elastic Compute Cloud',
          'Enhanced Container Control',
          'Easy Code Compilation',
          'Extended Cloud Computing'
        ],
        correct: 0,
        explanation: 'EC2 stands for Elastic Compute Cloud, providing resizable compute capacity in the cloud.'
      }
    ]
  },
  mobile: {
    title: 'Mobile Development',
    description: 'Create native and cross-platform mobile applications for iOS and Android',
    color: 'from-pink-400 to-pink-600',
    skills: [
      {
        name: 'React Native',
        description: 'Framework for building native mobile apps using React and JavaScript',
        difficulty: 'Intermediate' as const,
        topics: ['Components', 'Navigation', 'State Management', 'Native Modules', 'Styling', 'Debugging']
      },
      {
        name: 'Flutter',
        description: 'Google\'s UI toolkit for building natively compiled applications from a single codebase',
        difficulty: 'Intermediate' as const,
        topics: ['Widgets', 'Dart Language', 'State Management', 'Animations', 'Platform Channels', 'Testing']
      },
      {
        name: 'Swift',
        description: 'Powerful programming language for iOS, macOS, watchOS, and tvOS development',
        difficulty: 'Advanced' as const,
        topics: ['Syntax', 'UIKit', 'SwiftUI', 'Core Data', 'Networking', 'App Store Guidelines']
      }
    ],
    quiz: [
      {
        question: 'What is the main advantage of React Native?',
        options: [
          'Better performance than native apps',
          'Write once, run on multiple platforms',
          'Smaller app size',
          'Better graphics'
        ],
        correct: 1,
        explanation: 'React Native allows you to write code once and run it on both iOS and Android platforms.'
      },
      {
        question: 'What programming language does Flutter use?',
        options: [
          'JavaScript',
          'Java',
          'Dart',
          'Swift'
        ],
        correct: 2,
        explanation: 'Flutter uses Dart, a programming language developed by Google specifically for UI development.'
      },
      {
        question: 'What is SwiftUI?',
        options: [
          'A database framework',
          'A declarative UI framework for Swift',
          'A testing tool',
          'A web framework'
        ],
        correct: 1,
        explanation: 'SwiftUI is Apple\'s declarative UI framework that allows building user interfaces across all Apple platforms.'
      }
    ]
  },
  emerging: {
    title: 'Emerging Technologies',
    description: 'Explore cutting-edge technologies shaping the future of software development',
    color: 'from-cyan-400 to-cyan-600',
    skills: [
      {
        name: 'Web3',
        description: 'Decentralized web technologies including blockchain, DeFi, and smart contracts',
        difficulty: 'Advanced' as const,
        topics: ['Blockchain', 'Smart Contracts', 'DApps', 'Cryptocurrency', 'NFTs', 'DeFi']
      },
      {
        name: 'AI/ML',
        description: 'Artificial Intelligence and Machine Learning for intelligent applications',
        difficulty: 'Advanced' as const,
        topics: ['Neural Networks', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP']
      },
      {
        name: 'AR/VR',
        description: 'Augmented and Virtual Reality for immersive user experiences',
        difficulty: 'Advanced' as const,
        topics: ['3D Graphics', 'Unity', 'WebXR', 'Spatial Computing', 'Hand Tracking', 'Mixed Reality']
      }
    ],
    quiz: [
      {
        question: 'What is a smart contract in Web3?',
        options: [
          'A legal document',
          'Self-executing code on the blockchain',
          'A mobile app',
          'A database query'
        ],
        correct: 1,
        explanation: 'A smart contract is self-executing code that runs on the blockchain with the terms directly written into the code.'
      },
      {
        question: 'What is the difference between supervised and unsupervised learning?',
        options: [
          'Speed of execution',
          'Programming language used',
          'Availability of labeled training data',
          'Hardware requirements'
        ],
        correct: 2,
        explanation: 'Supervised learning uses labeled training data, while unsupervised learning finds patterns in data without labels.'
      },
      {
        question: 'What does AR stand for?',
        options: [
          'Artificial Reality',
          'Augmented Reality',
          'Advanced Rendering',
          'Automated Response'
        ],
        correct: 1,
        explanation: 'AR stands for Augmented Reality, which overlays digital information onto the real world.'
      }
    ]
  }
};

const TechStack = () => {
  const { stack } = useParams<{ stack: string }>();
  const navigate = useNavigate();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const stackData = stack ? techStackData[stack as keyof typeof techStackData] : null;

  if (!stackData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tech Stack Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const handleQuizStart = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < stackData.quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === stackData.quiz[index].correct ? 1 : 0);
    }, 0);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Button>
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${stackData.color}`}></div>
              <h1 className="text-2xl font-bold text-gray-900">{stackData.title}</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Overview Section */}
        <div className="mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader className={`bg-gradient-to-r ${stackData.color} text-white rounded-t-lg`}>
              <CardTitle className="text-3xl flex items-center space-x-3">
                <Code2 className="h-8 w-8" />
                <span>{stackData.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-gray-600 mb-6">{stackData.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <BookOpen className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="font-semibold">Skills</h3>
                  <p className="text-2xl font-bold text-blue-600">{stackData.skills.length}</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold">Quiz Questions</h3>
                  <p className="text-2xl font-bold text-yellow-600">{stackData.quiz.length}</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Star className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="font-semibold">Difficulty Range</h3>
                  <p className="text-sm text-purple-600">Beginner to Advanced</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-blue-500" />
              <span>Core Skills</span>
            </h2>
            <div className="space-y-6">
              {stackData.skills.map((skill, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{skill.name}</CardTitle>
                      <Badge className={getDifficultyColor(skill.difficulty)}>
                        {skill.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quiz Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <span>Knowledge Quiz</span>
            </h2>

            {!quizStarted ? (
              <Card className="border-0 shadow-lg">
                <CardHeader className={`bg-gradient-to-r ${stackData.color} text-white rounded-t-lg`}>
                  <CardTitle className="text-2xl">Test Your Knowledge</CardTitle>
                </CardHeader>
                <CardContent className="p-8 text-center">
                  <p className="text-gray-600 mb-6">
                    Take our {stackData.quiz.length}-question quiz to test your understanding of {stackData.title.toLowerCase()}.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{stackData.quiz.length}</div>
                      <div className="text-sm text-gray-500">Questions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">~5</div>
                      <div className="text-sm text-gray-500">Minutes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">Mixed</div>
                      <div className="text-sm text-gray-500">Difficulty</div>
                    </div>
                  </div>
                  <Button onClick={handleQuizStart} size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <Play className="mr-2 h-5 w-5" />
                    Start Quiz
                  </Button>
                </CardContent>
              </Card>
            ) : showResults ? (
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <Trophy className="h-6 w-6" />
                    <span>Quiz Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {calculateScore()}/{stackData.quiz.length}
                    </div>
                    <div className="text-lg text-gray-600">
                      {Math.round((calculateScore() / stackData.quiz.length) * 100)}% Correct
                    </div>
                  </div>
                  
                  <Progress value={(calculateScore() / stackData.quiz.length) * 100} className="mb-6" />
                  
                  {calculateScore() === stackData.quiz.length ? (
                    <div className="text-center mb-6">
                      <div className="text-green-600 font-semibold">🎉 Perfect Score!</div>
                      <p className="text-gray-600">You have excellent knowledge of {stackData.title.toLowerCase()}!</p>
                    </div>
                  ) : calculateScore() >= stackData.quiz.length * 0.7 ? (
                    <div className="text-center mb-6">
                      <div className="text-blue-600 font-semibold">✨ Great Job!</div>
                      <p className="text-gray-600">You have a solid understanding of the concepts.</p>
                    </div>
                  ) : (
                    <div className="text-center mb-6">
                      <div className="text-orange-600 font-semibold">📚 Keep Learning!</div>
                      <p className="text-gray-600">Review the concepts and try again to improve your score.</p>
                    </div>
                  )}
                  
                  <Button onClick={handleRestartQuiz} variant="outline" className="mr-4">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Retake Quiz
                  </Button>
                  <Button onClick={() => navigate('/')}>
                    Back to Home
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">
                      Question {currentQuestion + 1} of {stackData.quiz.length}
                    </CardTitle>
                    <Badge variant="outline">
                      <Clock className="mr-1 h-3 w-3" />
                      {currentQuestion + 1}/{stackData.quiz.length}
                    </Badge>
                  </div>
                  <Progress value={((currentQuestion + 1) / stackData.quiz.length) * 100} />
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    {stackData.quiz[currentQuestion].question}
                  </h3>
                  <div className="space-y-3">
                    {stackData.quiz[currentQuestion].options.map((option, index) => (
                      <Button
                        key={index}
                        variant={selectedAnswers[currentQuestion] === index ? "default" : "outline"}
                        className="w-full text-left justify-start h-auto py-3 px-4"
                        onClick={() => handleAnswerSelect(index)}
                      >
                        <span className="mr-3 font-semibold">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        {option}
                      </Button>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Button 
                      onClick={handleNextQuestion}
                      disabled={selectedAnswers[currentQuestion] === undefined}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                      {currentQuestion === stackData.quiz.length - 1 ? 'Finish Quiz' : 'Next Question'}
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;