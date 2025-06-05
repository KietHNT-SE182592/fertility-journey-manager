
import { Heart, Shield, Users, Award, Target, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Compassionate Care",
      description: "We understand the emotional journey of fertility treatment and provide empathetic support throughout your experience."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Medical Excellence",
      description: "Our team of board-certified specialists uses the latest technology and evidence-based treatments for optimal outcomes."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Personalized Approach",
      description: "Every treatment plan is tailored to your unique medical history, needs, and family planning goals."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Timely Support",
      description: "We provide prompt responses and flexible scheduling to accommodate your busy lifestyle and urgent needs."
    }
  ];

  const stats = [
    { number: "95%", label: "Success Rate" },
    { number: "2000+", label: "Happy Families" },
    { number: "15+", label: "Years Experience" },
    { number: "8", label: "Expert Specialists" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                About FertileCare
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are dedicated to helping families achieve their dreams of parenthood through 
                advanced fertility treatments, compassionate care, and unwavering support.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience and a team of renowned fertility specialists, 
                we have helped thousands of families welcome their precious children into the world.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our fertility clinic"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class fertility treatments with personalized care, advanced technology, 
                and emotional support, helping individuals and couples achieve their dream of starting or 
                expanding their families.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading fertility center recognized for our innovative treatments, 
                exceptional success rates, and compassionate patient care, making parenthood 
                dreams accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
