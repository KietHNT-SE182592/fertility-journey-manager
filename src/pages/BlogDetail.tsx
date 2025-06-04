
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogDetail = () => {
  const { id } = useParams();

  const blogData = {
    "ivf-guide": {
      title: "Understanding IVF: A Complete Guide for First-Time Patients",
      content: `In Vitro Fertilization (IVF) is one of the most effective fertility treatments available today. This comprehensive guide will walk you through everything you need to know about the IVF process.

## What is IVF?

IVF is a process where eggs are retrieved from the ovaries and fertilized with sperm in a laboratory. The resulting embryos are then transferred back to the uterus.

## The IVF Process Step by Step

### 1. Ovarian Stimulation
Your doctor will prescribe fertility medications to stimulate your ovaries to produce multiple eggs instead of the single egg that normally develops each month.

### 2. Egg Retrieval
When the eggs are ready, they are retrieved through a minor surgical procedure performed under sedation.

### 3. Fertilization
The retrieved eggs are combined with sperm in the laboratory. This can be done through conventional insemination or ICSI (Intracytoplasmic Sperm Injection).

### 4. Embryo Development
The fertilized eggs (now embryos) are monitored as they develop in the laboratory for 3-5 days.

### 5. Embryo Transfer
One or more healthy embryos are transferred to the uterus through a simple procedure that doesn't require anesthesia.

## Success Rates

IVF success rates vary depending on several factors including age, cause of infertility, and clinic expertise. Generally, success rates range from 40-60% per cycle for women under 35.`,
      author: "Dr. Sarah Johnson",
      authorRole: "Reproductive Endocrinologist",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Treatment Guide",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    "emma-success-story": {
      title: "Success Story: Emma's Journey to Motherhood After 3 Years",
      content: `Emma's journey to motherhood wasn't easy, but with determination and the right medical support, she achieved her dream of becoming a mother.

## The Beginning of the Journey

Emma and her husband started trying to conceive when she was 32. After a year of trying naturally without success, they decided to seek medical help.

## Initial Assessment

Our fertility assessment revealed that Emma had mild endometriosis and her husband had slightly low sperm count. This combination was affecting their ability to conceive naturally.

## Treatment Plan

We started with 3 cycles of IUI (Intrauterine Insemination) combined with fertility medications. While these cycles didn't result in pregnancy, they provided valuable information about Emma's response to treatment.

## Moving to IVF

After the unsuccessful IUI cycles, we recommended IVF. Emma was understandably nervous, but our team provided comprehensive support throughout the process.

## Success at Last

Emma's first IVF cycle resulted in 8 high-quality embryos. We transferred one embryo, and Emma became pregnant! Nine months later, she welcomed a healthy baby boy.

## Emma's Advice

"Don't give up hope. The journey is difficult, but having the right medical team makes all the difference. Trust the process and take care of your mental health along the way."`,
      author: "FertileCare Team",
      authorRole: "Patient Success Stories",
      date: "March 12, 2024",
      readTime: "5 min read",
      category: "Success Story",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  };

  const post = blogData[id as keyof typeof blogData];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-blue-100 text-blue-700">{post.category}</Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-teal-500 text-white">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-gray-600 text-sm">{post.authorRole}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              return <p key={index} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>;
            })}
          </div>
        </article>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogDetail;
