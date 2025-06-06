
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/Breadcrumb";

const CustomerPayments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BreadcrumbNav items={[{ label: "Payment History" }]} />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Payment History</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">Your payment history will appear here...</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomerPayments;
