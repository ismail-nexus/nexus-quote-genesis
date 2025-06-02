
import { Calendar, FileText, User } from "lucide-react";

const QuotationDetails = () => {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gray-50 p-6 border-b">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-center gap-3">
          <FileText className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-semibold text-gray-700">Quotation No.</p>
            <p className="text-gray-600">NDS-WEB-2024-001</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-semibold text-gray-700">Date</p>
            <p className="text-gray-600">{currentDate}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <User className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-semibold text-gray-700">Valid Until</p>
            <p className="text-gray-600">30 days from issue date</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationDetails;
