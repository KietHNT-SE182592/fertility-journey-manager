
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/Breadcrumb";

const BlogPage = () => {
  const blogPosts = [
    {
      id: "ivf-guide",
      title: "Understanding IVF: A Complete Guide for First-Time Patients",
      excerpt: "Everything you need to know about the IVF process, from initial consultation to embryo transfer and beyond.",
      author: "Dr. Sarah Johnson",
      authorRole: "Reproductive Endocrinologist",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Treatment Guide",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      featured: true
    },
    {
      id: "emma-success-story",
      title: "Success Story: Emma's Journey to Motherhood After 3 Years",
      excerpt: "Read about Emma's inspiring fertility journey and how our personalized treatment approach helped her achieve her dream.",
      author: "FertileCare Team",
      authorRole: "Patient Success Stories",
      date: "March 12, 2024",
      readTime: "5 min read",
      category: "Success Story",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=250&fit=crop"
    },
    {
      id: "nutrition-fertility",
      title: "Nutrition and Fertility: Foods That Support Reproductive Health",
      excerpt: "Discover how proper nutrition can improve fertility outcomes and support your body during treatment.",
      author: "Dr. Emily Rodriguez",
      authorRole: "Fertility Specialist",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop"
    },
    {
      id: "managing-stress",
      title: "Managing Stress During Fertility Treatment: Tips from Our Counselors",
      excerpt: "Learn effective strategies for managing stress and maintaining emotional wellbeing throughout your fertility journey.",
      author: "Dr. Michael Chen",
      authorRole: "Fertility Counselor",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Mental Health",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      id: "male-fertility",
      title: "Male Fertility: Common Issues and Treatment Options",
      excerpt: "Understanding male factor infertility and the various treatment options available for men.",
      author: "Dr. James Wilson",
      authorRole: "Male Fertility Specialist",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Male Fertility",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=250&fit=crop"
    },
    {
      id: "egg-freezing-guide",
      title: "Egg Freezing: Preserving Your Future Family Options",
      excerpt: "Learn about egg freezing technology, who it's for, and what to expect during the process.",
      author: "Dr. Sarah Johnson",
      authorRole: "Reproductive Endocrinologist",
      date: "March 3, 2024",
      readTime: "10 min read",
      category: "Fertility Preservation",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=250&fit=crop"
    }
  ];

  const breadcrumbItems = [
    { label: "Blog" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BreadcrumbNav items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, success stories, and expert advice from our fertility specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                <Heart className="w-12 h-12 text-blue-600" />
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-teal-500 text-white text-xs">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                    <p className="text-gray-600 text-xs">{post.date}</p>
                  </div>
                </div>
                
                <Link to={`/blog/${post.id}`}>
                  <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
