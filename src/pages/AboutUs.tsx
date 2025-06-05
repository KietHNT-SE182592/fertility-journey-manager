import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Heart, Award, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/Breadcrumb";

const AboutUs = () => {
  const breadcrumbItems = [
    { label: "About Us" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BreadcrumbNav items={breadcrumbItems} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About FertileCare</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to provide compassionate, cutting-edge fertility care to help you achieve your dreams of parenthood.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  <span>Our Mission</span>
                </CardTitle>
                <CardDescription>
                  To provide personalized and effective fertility solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We are dedicated to offering the latest advancements in reproductive medicine, tailored to meet the unique needs of each patient.
                </p>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span>Our Vision</span>
                </CardTitle>
                <CardDescription>
                  To be a leading center for fertility care and innovation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive to be at the forefront of reproductive technology, offering hope and advanced treatments to families around the world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Compassion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We approach every patient with empathy, understanding, and respect.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We are committed to providing the highest quality care and achieving the best possible outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We continuously seek new and improved methods to enhance fertility treatments and patient care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center">Dr. Sarah Johnson</CardTitle>
                  <CardDescription className="text-center text-blue-600">
                    Reproductive Endocrinologist
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    A leading expert in IVF and fertility treatments.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center">Dr. Michael Chen</CardTitle>
                  <CardDescription className="text-center text-blue-600">
                    Fertility & IUI Specialist
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Specializes in minimally invasive fertility treatments.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-center">Dr. Emily Rodriguez</CardTitle>
                  <CardDescription className="text-center text-blue-600">
                    Reproductive Surgeon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Renowned for expertise in reproductive surgery.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Patient Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent>
                  <div className="mb-4">
                    <Star className="w-5 h-5 text-yellow-500 inline-block mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 inline-block mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 inline-block mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 inline-block mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 inline-block mr-1" />
                  </div>
                  <p className="text-gray-600 italic">
                    "Thanks to FertileCare, we were able to conceive our first child after years of trying. The staff was incredibly supportive and professional."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-500">John and Jane Doe</span>
                    <Calendar className="w-4 h-4 ml-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-500">March 10, 2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardContent>
                  <div className="mb-4">
                    <Star className="w-5 h-5 text-yellow-500 inline-block mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 inline-block mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 inline-block mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 inline-block mr-1" />
                    <Star className="w-5 h-5 text-yellow-500 inline-block mr-1" />
                  </div>
                  <p className="text-gray-600 italic">
                    "The team at FertileCare made our journey to parenthood a smooth and positive experience. We highly recommend their services."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-500">Alice and Bob Smith</span>
                    <Calendar className="w-4 h-4 ml-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-500">February 28, 2024</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
