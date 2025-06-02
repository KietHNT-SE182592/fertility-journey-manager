
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, ArrowRight, Heart, BookOpen } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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

  const categories = ["All", "Treatment Guide", "Success Story", "Lifestyle", "Mental Health", "Male Fertility", "Fertility Preservation"];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Knowledge & Experience Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest insights, success stories, and expert advice 
            from our fertility specialists and patient community.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" 
                ? "bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700" 
                : "border-blue-200 text-blue-700 hover:bg-blue-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-teal-50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <Badge className="bg-gradient-to-r from-blue-600 to-teal-600 text-white mb-4">
                  Featured Article
                </Badge>
                <CardTitle className="text-3xl lg:text-4xl text-gray-900 mb-4 leading-tight">
                  {blogPosts[0].title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </CardDescription>
                
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-teal-500 text-white">
                      {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-900">{blogPosts[0].author}</p>
                    <p className="text-gray-600 text-sm">{blogPosts[0].authorRole}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-gray-600 mb-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <span>{blogPosts[0].date}</span>
                </div>

                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="lg:h-full min-h-[300px] bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600">Featured Article Image</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
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
                
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Our Newsletter
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get the latest fertility insights, success stories, and expert tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
