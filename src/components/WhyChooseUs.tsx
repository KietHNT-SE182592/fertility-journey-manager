
import { Heart, Shield, Users, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Comprehensive Care",
      description: "Personalized treatment plans tailored to your unique fertility journey with compassionate support every step of the way."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Expert Specialists",
      description: "Board-certified fertility doctors with decades of combined experience and cutting-edge medical expertise."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Support Network",
      description: "Comprehensive emotional and medical support system to guide you through your fertility treatment journey."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Proven Success",
      description: "Industry-leading success rates with state-of-the-art technology and advanced fertility treatment protocols."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tại sao nên chọn chúng tôi?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why families trust us with their fertility journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Representative Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Medical professionals providing fertility care"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full opacity-20"></div>
          </div>

          {/* Right side - 4 Components */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
