
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Calendar, Award, MapPin } from "lucide-react";

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Reproductive Endocrinology",
      experience: 15,
      rating: 4.9,
      reviews: 127,
      education: "Harvard Medical School",
      certifications: ["Board Certified RE&I", "Fellow ASRM"],
      specialties: ["IVF", "ICSI", "Egg Freezing"],
      bio: "Dr. Johnson specializes in complex fertility cases and has helped over 500 families achieve their dreams of parenthood.",
      location: "Main Campus"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Fertility & IUI Specialist",
      experience: 12,
      rating: 4.8,
      reviews: 94,
      education: "Stanford University",
      certifications: ["Board Certified OB-GYN", "Fellowship trained"],
      specialties: ["IUI", "Natural Cycle IVF", "Male Factor"],
      bio: "Dr. Chen focuses on minimally invasive fertility treatments and personalized care approaches.",
      location: "Main Campus"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Reproductive Surgery",
      experience: 18,
      rating: 4.9,
      reviews: 156,
      education: "Johns Hopkins",
      certifications: ["Board Certified RE&I", "Laparoscopic Surgery"],
      specialties: ["Endometriosis", "Fibroids", "Tubal Surgery"],
      bio: "Dr. Rodriguez is renowned for her expertise in reproductive surgery and complex fertility cases.",
      location: "Surgical Center"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "Male Fertility Specialist",
      experience: 10,
      rating: 4.7,
      reviews: 78,
      education: "Mayo Clinic",
      certifications: ["Board Certified Urology", "Andrology Fellowship"],
      specialties: ["Male Factor", "Sperm Retrieval", "Vasectomy Reversal"],
      bio: "Dr. Wilson specializes in male fertility issues and advanced sperm retrieval techniques.",
      location: "Men's Health Center"
    }
  ];

  return (
    <section id="doctors" className="py-20 medical-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our board-certified fertility specialists combine years of experience with 
            the latest technologies to provide you with the best possible care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <Avatar className="w-20 h-20 border-4 border-blue-100">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-teal-500 text-white text-xl font-semibold">
                      {doctor.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900">{doctor.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-semibold text-lg">
                      {doctor.specialty}
                    </CardDescription>
                    
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{doctor.rating}</span>
                        <span className="text-gray-500">({doctor.reviews} reviews)</span>
                      </div>
                      <Badge variant="outline" className="border-teal-200 text-teal-700">
                        {doctor.experience} years
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-blue-600" />
                    Education & Certifications
                  </h4>
                  <div className="space-y-1">
                    <p className="text-gray-700">{doctor.education}</p>
                    {doctor.certifications.map((cert, index) => (
                      <Badge key={index} variant="secondary" className="mr-2 mb-1 bg-blue-100 text-blue-700">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty, index) => (
                      <Badge key={index} className="bg-gradient-to-r from-blue-500 to-teal-500 text-white">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {doctor.location}
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white rounded-3xl p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Preferred Doctor
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            All our doctors work together as a team, but you can specify your preference when booking your consultation.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-lg px-8">
            Schedule with Preferred Doctor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
