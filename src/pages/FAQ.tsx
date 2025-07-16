import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageSquare, Shield, Code2, Users, Lightbulb, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How does the matching algorithm work?",
      answer: "Our AI analyzes your skills, interests, project history, and collaboration style to suggest the most compatible developers and projects. The algorithm considers factors like programming languages, experience level, time zones, and project preferences to create optimal matches.",
      icon: Code2
    },
    {
      question: "Is my code and data secure?",
      answer: "Yes, we use enterprise-grade encryption, SOC 2 compliance, and never share your private repositories without explicit permission. All data is encrypted in transit and at rest, with regular security audits and penetration testing.",
      icon: Shield
    },
    {
      question: "Can I use DevConnect for commercial projects?",
      answer: "Absolutely! Many successful startups and products have been built through DevConnect collaborations. You retain full IP rights to your work, and we provide clear collaboration agreements to protect all parties involved.",
      icon: Users
    },
    {
      question: "What if I'm new to development?",
      answer: "Perfect! We have mentorship programs, beginner-friendly projects, and a supportive community to help you grow. Our platform includes learning resources, code review opportunities, and guided project suggestions for new developers.",
      icon: Lightbulb
    },
    {
      question: "How do project payments work?",
      answer: "DevConnect offers secure escrow services for paid projects. Payments are held in escrow until project milestones are met, ensuring fair compensation for all parties. We support multiple payment methods and currencies.",
      icon: MessageSquare
    },
    {
      question: "Can I work on multiple projects simultaneously?",
      answer: "Yes! There's no limit to the number of projects you can participate in (except on the free plan). Our dashboard helps you manage multiple collaborations and track progress across all your active projects.",
      icon: HelpCircle
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-hero)' }}>
      {/* Header */}
      <header className="relative z-50 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10 font-medium"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="p-2 rounded-xl" style={{ background: 'var(--gradient-primary)' }}>
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">FAQ</span>
            </div>
          </div>
        </div>
      </header>

      {/* FAQ Content */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked 
              <span className="relative">
                <span style={{ background: 'var(--gradient-secondary)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  {" "}Questions
                </span>
              </span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Get answers to common questions about DevConnect and how it can help you build amazing projects.
            </p>
          </div>

          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-start gap-4 text-white">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex-shrink-0">
                      <faq.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg">{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200 leading-relaxed ml-12">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8">
              <div className="flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-blue-300 mr-3" />
                <h3 className="text-2xl font-bold text-white">Still have questions?</h3>
              </div>
              <p className="text-gray-200 mb-6">
                Can't find what you're looking for? Our support team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  onClick={() => navigate('/connect')}
                >
                  Contact Support
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => navigate('/auth')}
                >
                  Join Community
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;