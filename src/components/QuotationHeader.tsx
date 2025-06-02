
import { Building2, Globe, Mail, Phone } from "lucide-react";

const QuotationHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 rounded-t-lg">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Building2 className="h-8 w-8" />
            Nexus Data Solutions
          </h1>
          <p className="text-blue-100 text-lg">Professional Web Development Services</p>
        </div>
        <div className="text-right text-sm space-y-2">
          <div className="flex items-center justify-end gap-2">
            <Globe className="h-4 w-4" />
            <span>www.nexusdatasolution.org</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Mail className="h-4 w-4" />
            <span>ismail@nexusdatasolution.org</span>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Phone className="h-4 w-4" />
            <span>+91-7032229659</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationHeader;
