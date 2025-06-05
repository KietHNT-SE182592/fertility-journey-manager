
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
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
      stats: { success: "95%", families: "500+", experience: "15+" }
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Expert IVF & IUI Treatments",
      subtitle: "State-of-the-art laboratory with highest success rates",
      stats: { success: "92%", cycles: "1000+", specialists: "8+" }
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Comprehensive Fertility Solutions",
      subtitle: "From assessment to successful pregnancy journey",
      stats: { success: "88%", patients: "2000+", years: "20+" }
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
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url(${currentSlideData.image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center">
          <div className="max-w-2xl text-white">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {currentSlideData.title}
                </h1>
                <p className="text-xl leading-relaxed opacity-90">
                  {currentSlideData.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8"
                  onClick={() => handleBookingClick('consultation')}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Link to="/services">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white bg-white/10 text-lg px-8 w-full"
                  >
                    Service
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{currentSlideData.stats.success}</div>
                  <div className="text-sm text-white/80">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{currentSlideData.stats.families || currentSlideData.stats.cycles || currentSlideData.stats.patients}</div>
                  <div className="text-sm text-white/80">{currentSlideData.stats.families ? 'Happy Families' : currentSlideData.stats.cycles ? 'Successful Cycles' : 'Satisfied Patients'}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{currentSlideData.stats.experience || currentSlideData.stats.specialists || currentSlideData.stats.years}</div>
                  <div className="text-sm text-white/80">{currentSlideData.stats.experience ? 'Years Experience' : currentSlideData.stats.specialists ? 'Expert Specialists' : 'Years Serving'}</div>
                </div>
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
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/40'
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
