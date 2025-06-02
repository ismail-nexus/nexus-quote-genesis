
import QuotationHeader from "@/components/QuotationHeader";
import QuotationDetails from "@/components/QuotationDetails";
import ServicesTable from "@/components/ServicesTable";
import TermsAndConditions from "@/components/TermsAndConditions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <QuotationHeader />
          <QuotationDetails />
          <ServicesTable />
          <TermsAndConditions />
        </div>
        
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.print()} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg"
          >
            Print Quotation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
