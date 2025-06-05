
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, TestTube, Microscope, Shield, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/Breadcrumb";

const ServicesPage = () => {
  const services = [
    {
      id: "iui",
      name: "IUI Treatment",
      price: "$1,200 - $2,500",
      description: "Intrauterine Insemination - A gentle fertility treatment where prepared sperm is placed directly into the uterus.",
      icon: <Heart className="w-8 h-8" />,
      features: ["Minimal invasive", "Lower cost option", "Natural cycle support", "3-6 cycles recommended"],
      duration: "2-3 weeks per cycle",
      successRate: "15-20%",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ivf",
      name: "IVF Treatment",
      price: "$8,000 - $15,000",
      description: "In Vitro Fertilization - Advanced fertility treatment with eggs fertilized outside the body in our state-of-the-art lab.",
      icon: <TestTube className="w-8 h-8" />,
      features: ["Highest success rates", "Genetic screening available", "Frozen embryo transfer", "Personalized protocols"],
      duration: "4-6 weeks per cycle",
      successRate: "40-60%",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "assessment",
      name: "Fertility Assessment",
      price: "$500 - $1,200",
      description: "Comprehensive evaluation including hormone testing, ultrasounds, and fertility analysis for both partners.",
      icon: <Microscope className="w-8 h-8" />,
      features: ["Complete hormone panel", "Ovarian reserve testing", "Semen analysis", "Ultrasound imaging"],
      duration: "1-2 weeks",
      successRate: "Diagnostic",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "egg-freezing",
      name: "Egg Freezing",
      price: "$5,000 - $8,000",
      description: "Preserve your fertility for the future with our advanced egg freezing technology.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Fertility preservation", "Long-term storage", "High survival rates", "Peace of mind"],
      duration: "2-3 weeks",
      successRate: "85-95% survival",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const breadcrumbItems = [
    { label: "Services" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BreadcrumbNav items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fertility treatments tailored to your unique journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-gray-900">
                    {service.successRate}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="text-blue-600">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.name}</CardTitle>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Duration: {service.duration}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link to={`/services/${service.id}`} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
