
import { Clock, CreditCard, Wrench, Plus, Calendar, Award } from "lucide-react";

const TermsAndConditions = () => {
  const terms = [
    {
      icon: Clock,
      title: "Project Timeline",
      description: "Approximately 8-10 weeks from confirmation and project initiation."
    },
    {
      icon: CreditCard,
      title: "Payment Terms",
      description: "50% advance, 25% upon completion of frontend and backend, 25% on final delivery."
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Minor changes and maintenance will be provided free of charge for up to 6 months post-delivery."
    },
    {
      icon: Plus,
      title: "Additional Features",
      description: "Any additional features or major changes beyond the scope will incur extra charges."
    },
    {
      icon: Calendar,
      title: "Quotation Validity",
      description: "This quotation is valid for 30 days from the issue date."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "All deliverables will undergo thorough testing and quality checks before final delivery."
    }
  ];

  return (
    <div className="p-6 bg-gray-50 rounded-b-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Terms & Conditions</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        {terms.map((term, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
            <term.icon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">{term.title}</h4>
              <p className="text-sm text-gray-700">{term.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Ready to proceed?</strong> Contact us at <span className="font-semibold">ismail@nexusdatasolution.org</span> or 
          <span className="font-semibold"> +91-7032229659</span> to confirm this quotation and begin your project.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
