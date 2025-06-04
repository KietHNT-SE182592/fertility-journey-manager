
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, Clock, Heart, TestTube, Users } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import PaymentModal from "@/components/PaymentModal";

const GuestDashboard = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      id: 1,
      name: "IUI Treatment",
      price: 1500,
      description: "Intrauterine Insemination - Initial consultation and procedure",
      duration: "2-3 weeks",
      type: "consultation"
    },
    {
      id: 2,
      name: "IVF Treatment",
      price: 10000,
      description: "In Vitro Fertilization - Complete treatment package",
      duration: "4-6 weeks",
      type: "treatment"
    },
    {
      id: 3,
      name: "Fertility Test Package",
      price: 800,
      description: "Comprehensive fertility testing for both partners",
      duration: "1-2 weeks",
      type: "test"
    }
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Reproductive Endocrinology",
      rating: 4.9,
      reviews: 127,
      experience: 15,
      available: true
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Fertility & IUI Specialist",
      rating: 4.8,
      reviews: 94,
      experience: 12,
      available: true
    }
  ];

  const handleBookService = (service: any) => {
    setSelectedService(service);
    setShowBooking(true);
  };

  const handleBookingSubmit = (bookingData: any) => {
    console.log('Booking submitted:', bookingData);
    setShowBooking(false);
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Fertility Services</h1>
          <p className="text-gray-600">Book consultations and treatments with our expert team</p>
        </div>

        {/* Services Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Available Services</h2>
            <div className="space-y-4">
              {services.map((service) => (
                <Card key={service.id} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">${service.price}</div>
                        <Badge variant="outline">{service.duration}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      onClick={() => handleBookService(service)}
                      className="w-full bg-gradient-to-r from-blue-600 to-teal-600"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Doctors Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Doctors</h2>
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        <CardDescription className="text-blue-600">{doctor.specialty}</CardDescription>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{doctor.rating}</span>
                            <span className="text-gray-500">({doctor.reviews})</span>
                          </div>
                          <Badge variant="outline">{doctor.experience} years</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Preview */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Latest Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-blue-600" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Understanding Fertility Treatment {i}</CardTitle>
                  <CardDescription>Learn about the latest advances in fertility care...</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 text-blue-600">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showBooking && (
        <BookingModal
          service={selectedService}
          onClose={() => setShowBooking(false)}
          onSubmit={handleBookingSubmit}
        />
      )}

      {showPayment && (
        <PaymentModal
          service={selectedService}
          onClose={() => setShowPayment(false)}
          onSuccess={() => {
            setShowPayment(false);
            setSelectedService(null);
          }}
        />
      )}
    </div>
  );
};

export default GuestDashboard;
