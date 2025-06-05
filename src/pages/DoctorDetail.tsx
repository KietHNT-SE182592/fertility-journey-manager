import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Calendar, Star, Award, MapPin, GraduationCap, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/Breadcrumb";

const DoctorDetail = () => {
  const { id } = useParams();

  const doctorData = {
    "sarah-johnson": {
      name: "Dr. Sarah Johnson",
      specialty: "Reproductive Endocrinology",
      experience: 15,
      rating: 4.9,
      reviews: 127,
      education: "Harvard Medical School",
      residency: "Massachusetts General Hospital",
      fellowship: "Reproductive Endocrinology & Infertility Fellowship at Johns Hopkins",
      certifications: ["Board Certified RE&I", "Fellow ASRM", "Fellow ESHRE"],
      specialties: ["IVF", "ICSI", "Egg Freezing", "Genetic Testing", "Recurrent Pregnancy Loss"],
      bio: "Dr. Johnson is a leading reproductive endocrinologist with over 15 years of experience helping couples achieve their dreams of parenthood. She specializes in complex fertility cases and has pioneered several innovative treatment protocols that have significantly improved success rates.",
      location: "Main Campus",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      achievements: [
        "Over 500 successful pregnancies achieved",
        "Published 50+ peer-reviewed research papers",
        "Recipient of Excellence in Fertility Care Award 2023",
        "Speaker at 30+ international conferences"
      ],
      availability: "Monday - Friday: 8:00 AM - 5:00 PM",
      languages: ["English", "Spanish"]
    },
    "michael-chen": {
      name: "Dr. Michael Chen",
      specialty: "Fertility & IUI Specialist",
      experience: 12,
      rating: 4.8,
      reviews: 94,
      education: "Stanford University",
      residency: "UCSF Medical Center",
      fellowship: "Reproductive Medicine Fellowship at Stanford",
      certifications: ["Board Certified OB-GYN", "Fellowship trained", "ASRM Member"],
      specialties: ["IUI", "Natural Cycle IVF", "Male Factor", "PCOS Treatment", "Ovulation Induction"],
      bio: "Dr. Chen focuses on minimally invasive fertility treatments and personalized care approaches. He is known for his compassionate bedside manner and innovative treatment strategies that minimize patient discomfort while maximizing success rates.",
      location: "Main Campus",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      achievements: [
        "350+ successful IUI pregnancies",
        "Research focus on natural cycle protocols",
        "Patient Choice Award 2022",
        "Mentor to 20+ medical students"
      ],
      availability: "Tuesday - Saturday: 9:00 AM - 6:00 PM",
      languages: ["English", "Mandarin"]
    }
  };

  const doctor = doctorData[id as keyof typeof doctorData];

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <BreadcrumbNav items={[{ label: "Doctors", href: "/doctors" }, { label: "Doctor Not Found" }]} />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Doctor Not Found</h1>
          <Link to="/doctors">
            <Button>Back to Doctors</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Doctors", href: "/doctors" },
    { label: doctor.name }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BreadcrumbNav items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/doctors">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Doctors
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-blue-100">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-teal-500 text-white text-3xl font-semibold">
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{doctor.name}</CardTitle>
                <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
                
                <div className="flex items-center justify-center space-x-1 mt-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{doctor.rating}</span>
                  <span className="text-gray-500">({doctor.reviews} reviews)</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Award className="w-4 h-4 mr-2" />
                  <span>{doctor.experience} years experience</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{doctor.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{doctor.availability}</span>
                </div>
                
                <div className="pt-4 space-y-2">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="w-full">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>About Dr. {doctor.name.split(' ')[1]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{doctor.bio}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education & Training
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Medical Education</h4>
                  <p className="text-gray-700">{doctor.education}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Residency</h4>
                  <p className="text-gray-700">{doctor.residency}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fellowship</h4>
                  <p className="text-gray-700">{doctor.fellowship}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Certifications</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.certifications.map((cert, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Specializations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {doctor.specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{specialty}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements & Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {doctor.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((language, index) => (
                    <Badge key={index} className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                      {language}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DoctorDetail;
