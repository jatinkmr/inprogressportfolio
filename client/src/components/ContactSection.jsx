import { useState } from "react";
import { Mail, Linkedin, Github, Twitter, Instagram, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data) => apiRequest('POST', '/api/contact', data),
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a href="mailto:kumar.jatin873@gmail.com" className="text-primary hover:text-secondary transition-colors">
                    kumar.jatin873@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                  <Linkedin className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/jatinkumarkamboj/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                    /in/jatinkumarkamboj
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                  <Github className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-white">GitHub</h4>
                  <a href="https://www.github.com/jatinkmr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
                    github.com/jatinkmr
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://twitter.com/jatinkrkamboj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-300">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/ijatinkrkamb0j/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-300">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/jatin.kamboj.37" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 text-gray-300">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-600">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">Subject</label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion / Job opportunity / General inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full gradient-bg text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                disabled={contactMutation.isPending}
              >
                <Send className="w-4 h-4 mr-2" />
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
