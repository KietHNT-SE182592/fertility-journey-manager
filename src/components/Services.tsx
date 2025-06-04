
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Microscope, Calendar, TestTube, Users, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

const Services = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      name: "IUI Treatment",
      price: "$1,200 - $2,500",
      description: "Intrauterine Insemination - A gentle fertility treatment where prepared sperm is placed directly into the uterus.",
      icon: <Heart className="w-8 h-8" />,
      features: ["Minimal invasive", "Lower cost option", "Natural cycle support", "3-6 cycles recommended"],
      duration: "2-3 weeks per cycle",
      successRate: "15-20%",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailLink: "/services/iui"
    },
    {
      id: 2,
      name: "IVF Treatment",
      price: "$8,000 - $15,000",
      description: "In Vitro Fertilization - Advanced fertility treatment with eggs fertilized outside the body in our state-of-the-art lab.",
      icon: <TestTube className="w-8 h-8" />,
      features: ["Highest success rates", "Genetic screening available", "Frozen embryo transfer", "Personalized protocols"],
      duration: "4-6 weeks per cycle",
      successRate: "40-60%",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailLink: "/services/ivf"
    },
    {
      id: 3,
      name: "Fertility Assessment",
      price: "$500 - $1,200",
      description: "Comprehensive evaluation including hormone testing, ultrasounds, and fertility analysis for both partners.",
      icon: <Microscope className="w-8 h-8" />,
      features: ["Complete hormone panel", "Ovarian reserve testing", "Semen analysis", "Ultrasound imaging"],
      duration: "1-2 weeks",
      successRate: "Diagnostic",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailLink: "/services/assessment"
    },
    {
      id: 4,
      name: "Egg Freezing",
      price: "$5,000 - $8,000",
      description: "Preserve your fertility for the future with our advanced egg freezing technology.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Fertility preservation", "Long-term storage", "High survival rates", "Peace of mind"],
      duration: "2-3 weeks",
      successRate: "85-95% survival",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      detailLink: "/services/egg-freezing"
    }
  ];

  const handleBooking = (service) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Fertility Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fertility treatments tailored to your unique journey. 
            Our expert team provides the latest technologies with compassionate care.
          </p>
        </div>

        {/* Services with Balanced Alternating Layout */}
        <div className="space-y-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 1; // 0-indexed, so second item (index 1) is "even"
            
            return (
              <div key={service.id} className={`flex flex-col lg:flex-row items-stretch gap-0 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Section - Equal Height */}
                <div className="flex-1 relative group overflow-hidden rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl lg:rounded-r-none">
                  <div className="h-96 lg:h-full relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                            {service.icon}
                          </div>
                          <div>
                            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 mb-2">
                              {service.successRate}
                            </Badge>
                            <p className="text-white/90 font-medium">{service.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section - Equal Height */}
                <div className="flex-1">
                  <Card className="h-full border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl lg:rounded-l-none">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="space-y-2">
                          <CardTitle className="text-3xl text-gray-900 mb-2">{service.name}</CardTitle>
                          <div className="text-3xl font-bold text-blue-600">{service.price}</div>
                        </div>
                      </div>
                      <CardDescription className="text-gray-600 text-lg leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 text-lg">What's Included:</h4>
                          <div className="grid grid-cols-1 gap-3">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 flex-shrink-0"></div>
                                <span className="text-base">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3 pt-6">
                          <Button 
                            className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-base py-6"
                            onClick={() => handleBooking(service)}
                          >
                            <Calendar className="w-5 h-5 mr-2" />
                            Book Consultation
                          </Button>
                          <Link to={service.detailLink} className="flex-1">
                            <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 text-base py-6">
                              <ArrowRight className="w-5 h-5 mr-2" />
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Treatment is Right for You?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our fertility specialists will help you understand your options and create a personalized treatment plan.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8"
            onClick={() => handleBooking({ name: "General Consultation", price: "Free" })}
          >
            <Users className="w-5 h-5 mr-2" />
            Schedule Free Consultation
          </Button>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <BookingModal
          service={selectedService}
          onClose={() => setShowBookingModal(false)}
          onSubmit={(bookingData) => {
            console.log('Booking submitted:', bookingData);
            setShowBookingModal(false);
          }}
        />
      )}
    </section>
  );
};

export default Services;
