
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Calendar, Clock, Users, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/Breadcrumb";

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
      candidacy: [
        "Unexplained infertility",
        "Cervical factor infertility",
        "Mild male factor infertility",
        "Ovulation disorders"
      ],
      detailedDescription: "IUI is often recommended as a first-line treatment for couples with unexplained infertility or mild fertility issues. The procedure involves careful timing with the woman's natural cycle or with fertility medications to enhance the chances of conception. Our clinic uses advanced sperm washing techniques to concentrate the healthiest sperm, which are then placed directly into the uterus through a thin catheter. This process bypasses potential cervical barriers and places sperm closer to the fallopian tubes where fertilization occurs.",
      procedureSteps: [
        { step: 1, procedure: "Initial Consultation", cost: "$200" },
        { step: 2, procedure: "Fertility Medications", cost: "$300-500" },
        { step: 3, procedure: "Ultrasound Monitoring", cost: "$150" },
        { step: 4, procedure: "Sperm Preparation", cost: "$200" },
        { step: 5, procedure: "IUI Procedure", cost: "$400" },
        { step: 6, procedure: "Pregnancy Test", cost: "$50" }
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
      candidacy: [
        "Blocked or damaged fallopian tubes",
        "Severe male factor infertility",
        "Advanced maternal age",
        "Multiple failed IUI cycles"
      ],
      detailedDescription: "IVF is one of the most effective fertility treatments available today. The process begins with ovarian stimulation using fertility medications to produce multiple eggs. These eggs are then retrieved through a minimally invasive procedure and fertilized with sperm in our state-of-the-art laboratory. The resulting embryos are cultured for 3-5 days, allowing us to select the highest quality embryo for transfer. Our clinic offers advanced technologies such as ICSI (Intracytoplasmic Sperm Injection) and PGT (Preimplantation Genetic Testing) to maximize success rates.",
      procedureSteps: [
        { step: 1, procedure: "Initial Consultation & Testing", cost: "$500" },
        { step: 2, procedure: "Fertility Medications", cost: "$3,000-5,000" },
        { step: 3, procedure: "Monitoring Ultrasounds", cost: "$600" },
        { step: 4, procedure: "Egg Retrieval", cost: "$2,500" },
        { step: 5, procedure: "Laboratory Fertilization", cost: "$1,500" },
        { step: 6, procedure: "Embryo Transfer", cost: "$1,000" },
        { step: 7, procedure: "Pregnancy Test & Monitoring", cost: "$200" }
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
      candidacy: [
        "Couples trying to conceive for 6+ months",
        "Women over 35 trying for 6+ months",
        "History of pregnancy loss",
        "Irregular menstrual cycles"
      ],
      detailedDescription: "Our comprehensive fertility assessment is designed to identify any underlying factors that may be affecting your ability to conceive. The evaluation includes detailed testing for both partners, including hormone levels, ovarian reserve testing, semen analysis, and anatomical assessments. This thorough approach allows us to develop a personalized treatment plan based on your specific needs and circumstances.",
      procedureSteps: [
        { step: 1, procedure: "Initial Consultation", cost: "$200" },
        { step: 2, procedure: "Female Hormone Panel", cost: "$300" },
        { step: 3, procedure: "Pelvic Ultrasound", cost: "$150" },
        { step: 4, procedure: "Semen Analysis", cost: "$100" },
        { step: 5, procedure: "Additional Testing (if needed)", cost: "$200-400" },
        { step: 6, procedure: "Results Consultation", cost: "$150" }
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
      candidacy: [
        "Women wanting to delay childbearing",
        "Cancer patients before treatment",
        "Women with family history of early menopause",
        "Career or education priorities"
      ],
      detailedDescription: "Egg freezing offers women the opportunity to preserve their fertility at a younger age when egg quality is optimal. The process involves stimulating the ovaries to produce multiple eggs, which are then retrieved and frozen using advanced vitrification technology. This flash-freezing method ensures high survival rates when the eggs are thawed for future use. Our clinic provides comprehensive support throughout the process and offers flexible storage plans.",
      procedureSteps: [
        { step: 1, procedure: "Initial Consultation & Testing", cost: "$400" },
        { step: 2, procedure: "Fertility Medications", cost: "$2,500-4,000" },
        { step: 3, procedure: "Monitoring Appointments", cost: "$500" },
        { step: 4, procedure: "Egg Retrieval", cost: "$2,000" },
        { step: 5, procedure: "Egg Freezing Process", cost: "$800" },
        { step: 6, procedure: "Annual Storage Fee", cost: "$500" }
      ]
    }
  };

  const service = serviceData[id as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <BreadcrumbNav items={[{ label: "Services", href: "/services" }, { label: "Service Not Found" }]} />
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

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: service.name }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BreadcrumbNav items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/services">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="h-full">
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-full object-cover rounded-lg shadow-lg min-h-[400px]"
            />
          </div>
          
          <div className="h-full flex flex-col justify-between min-h-[400px]">
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
            </div>
            
            <div className="mt-auto">
              <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 mb-16">
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

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Information</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 leading-relaxed text-lg">{service.detailedDescription}</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Procedure Steps & Costs</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24">Step</TableHead>
                  <TableHead>Procedure</TableHead>
                  <TableHead className="text-right">Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {service.procedureSteps.map((step, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                        {step.step}
                      </div>
                    </TableCell>
                    <TableCell>{step.procedure}</TableCell>
                    <TableCell className="text-right font-semibold text-blue-600">{step.cost}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
