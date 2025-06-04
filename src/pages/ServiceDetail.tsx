
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Users, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServiceDetail = () => {
  const { id } = useParams();

  const serviceData = {
    "iui": {
      name: "IUI Treatment",
      price: "$1,200 - $2,500",
      description: "Intrauterine Insemination (IUI) is a fertility treatment that involves placing sperm directly into a woman's uterus to facilitate fertilization.",
      successRate: "15-20%",
      duration: "2-3 weeks per cycle",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      process: [
        "Initial consultation and assessment",
        "Ovulation monitoring with ultrasounds",
        "Sperm preparation in the laboratory",
        "Insemination procedure (5-10 minutes)",
        "Post-treatment monitoring"
      ],
      benefits: [
        "Less invasive than IVF",
        "Lower cost compared to other treatments",
        "Can be combined with fertility medications",
        "Shorter treatment cycle"
      ],
      candidacy: [
        "Unexplained infertility",
        "Cervical factor infertility",
        "Mild male factor infertility",
        "Ovulation disorders"
      ]
    },
    "ivf": {
      name: "IVF Treatment",
      price: "$8,000 - $15,000",
      description: "In Vitro Fertilization (IVF) is an advanced reproductive technology where eggs are fertilized outside the body in a laboratory setting.",
      successRate: "40-60%",
      duration: "4-6 weeks per cycle",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      process: [
        "Ovarian stimulation with medications",
        "Egg retrieval procedure",
        "Sperm collection and preparation",
        "Fertilization in the laboratory",
        "Embryo development monitoring",
        "Embryo transfer"
      ],
      benefits: [
        "Highest success rates",
        "Genetic testing available",
        "Multiple embryo options",
        "Suitable for various conditions"
      ],
      candidacy: [
        "Blocked or damaged fallopian tubes",
        "Severe male factor infertility",
        "Advanced maternal age",
        "Multiple failed IUI cycles"
      ]
    },
    "assessment": {
      name: "Fertility Assessment",
      price: "$500 - $1,200",
      description: "A comprehensive fertility assessment provides a thorough evaluation of both partners to identify potential fertility issues.",
      successRate: "Diagnostic",
      duration: "1-2 weeks",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      process: [
        "Medical history review",
        "Physical examination",
        "Hormone testing",
        "Ultrasound examination",
        "Semen analysis (male partner)",
        "Results consultation"
      ],
      benefits: [
        "Identifies fertility issues early",
        "Personalized treatment planning",
        "Comprehensive evaluation",
        "Both partners assessed"
      ],
      candidacy: [
        "Couples trying to conceive for 6+ months",
        "Women over 35 trying for 6+ months",
        "History of pregnancy loss",
        "Irregular menstrual cycles"
      ]
    },
    "egg-freezing": {
      name: "Egg Freezing",
      price: "$5,000 - $8,000",
      description: "Egg freezing (oocyte cryopreservation) allows women to preserve their eggs for future use, maintaining fertility options.",
      successRate: "85-95% survival",
      duration: "2-3 weeks",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      process: [
        "Initial consultation and planning",
        "Ovarian stimulation protocol",
        "Monitoring with blood tests and ultrasounds",
        "Egg retrieval procedure",
        "Egg freezing and storage",
        "Long-term storage management"
      ],
      benefits: [
        "Preserves fertility for the future",
        "High egg survival rates",
        "Flexible timing for family planning",
        "Peace of mind"
      ],
      candidacy: [
        "Women wanting to delay childbearing",
        "Cancer patients before treatment",
        "Women with family history of early menopause",
        "Career or education priorities"
      ]
    }
  };

  const service = serviceData[id as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
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
          <Link to="/services">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.name}</h1>
            <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
            <p className="text-lg text-gray-600 mb-6">{service.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{service.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{service.successRate}</span>
              </div>
            </div>
            
            <div className="space-y-2 mb-8">
              <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Download Information Brochure
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Treatment Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.process.map((step, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="bg-blue-100 text-blue-600 text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                Good Candidates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.candidacy.map((candidate, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {candidate}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
