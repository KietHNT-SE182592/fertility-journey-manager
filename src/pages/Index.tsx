
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/Breadcrumb";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <BreadcrumbNav items={[{ label: "Home" }]} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
