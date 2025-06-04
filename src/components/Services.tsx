
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Microscope, Calendar, TestTube, Users, Shield } from "lucide-react";
import { useState } from "react";
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
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

        {/* Services with Alternating Layout */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const isOdd = index % 2 === 0; // 0-indexed, so first item (index 0) is "odd"
            
            return (
              <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-12 ${!isOdd ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-blue-50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center text-white">
                            {service.icon}
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-gray-900">{service.name}</CardTitle>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                                {service.successRate}
                              </Badge>
                              <Badge variant="outline" className="border-teal-200 text-teal-700">
                                {service.duration}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                        </div>
                      </div>
                      <CardDescription className="text-gray-600 text-base leading-relaxed mt-4">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex space-x-3 pt-4">
                          <Button 
                            className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                            onClick={() => handleBooking(service)}
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            Book Consultation
                          </Button>
                          <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                            Learn More
                          </Button>
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
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-12">
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
