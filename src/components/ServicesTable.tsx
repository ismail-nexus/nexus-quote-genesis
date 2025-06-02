
import { Check } from "lucide-react";

const ServicesTable = () => {
  const services = [
    {
      category: "Frontend Development",
      price: "₹32,000",
      features: [
        "Custom-designed, responsive homepage with modern UI/UX",
        "Interactive product listing page with filtering and sorting",
        "Detailed product pages with images, descriptions, and reviews",
        "Seamless shopping cart functionality",
        "Streamlined checkout process with form validation",
        "Order confirmation page with email notifications"
      ]
    },
    {
      category: "Backend Development",
      price: "₹25,000",
      features: [
        "Robust database setup for products, orders, and customer data",
        "Efficient order flow management with status tracking",
        "Advanced inventory management system integrated with admin panel",
        "API development for seamless frontend-backend communication"
      ]
    },
    {
      category: "Admin Panel",
      price: "₹28,000",
      features: [
        "Secure admin login with two-factor authentication",
        "Comprehensive product management (add/edit/delete 1000+ products)",
        "Order management dashboard with search and filter capabilities",
        "Real-time delivery status updates and notifications"
      ]
    },
    {
      category: "Payment Gateway Integration",
      price: "₹12,000",
      features: [
        "Cash on Delivery (COD) with order verification",
        "Secure card payment integration via Razorpay",
        "Support for multiple payment methods with error handling"
      ]
    },
    {
      category: "Domain & Hosting Setup",
      price: "₹3,000",
      features: [
        "Domain purchase and DNS configuration",
        "Hosting setup with optimized platforms (Vercel, Hostinger, or equivalent)",
        "SSL certificate for secure browsing"
      ]
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Service Breakdown</h2>
      
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 w-1/3">Service Category</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description & Features</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 w-32">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {services.map((service, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors service-row">
                <td className="px-6 py-6 align-top">
                  <div className="font-semibold text-gray-900">{service.category}</div>
                </td>
                <td className="px-6 py-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-6 text-right align-top">
                  <span className="text-lg font-semibold text-gray-900">{service.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-blue-50">
            <tr>
              <td colSpan={2} className="px-6 py-4 text-right font-bold text-lg text-gray-900">
                Total Project Cost:
              </td>
              <td className="px-6 py-4 text-right">
                <span className="text-2xl font-bold text-blue-600">₹98,000</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ServicesTable;
