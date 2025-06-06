
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Your Journey to Parenthood Starts Here",
      subtitle: "Advanced fertility treatments with personalized care",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Expert IVF & IUI Treatments",
      subtitle: "State-of-the-art laboratory with highest success rates",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Comprehensive Fertility Solutions",
      subtitle: "From assessment to successful pregnancy journey",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleBookingClick = (serviceType: string) => {
    setSelectedService({ 
      name: serviceType === 'consultation' ? 'General Consultation' : 'Doctor Appointment', 
      price: serviceType === 'consultation' ? 'Free' : 'Contact for pricing' 
    });
    setShowBookingModal(true);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url(${currentSlideData.image})` }}
        >
          {/* Soft gradient overlay using new palette */}
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="max-w-2xl text-gray-800 drop-shadow-lg">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-md text-gray-800">
                  {currentSlideData.title}
                </h1>
                <p className="text-xl leading-relaxed drop-shadow-md text-gray-700">
                  {currentSlideData.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="btn-primary text-lg px-8 drop-shadow-lg border-none"
                  onClick={() => handleBookingClick('consultation')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                
                <Link to="/services">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="btn-secondary text-lg px-8 w-full drop-shadow-lg"
                  >
                    Services
                  </Button>
                </Link>

                <Button 
                  size="lg" 
                  className="btn-contact text-lg px-8 drop-shadow-lg border-none"
                  onClick={() => {
                    // You can add contact functionality here
                    console.log('Contact button clicked');
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors drop-shadow-lg ${
                currentSlide === index ? 'bg-purple-light' : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

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
    </>
  );
};

export default Hero;
