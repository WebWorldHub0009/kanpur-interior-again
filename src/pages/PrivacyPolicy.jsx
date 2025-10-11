// src/pages/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <section className="bg-[#FFFFFF] text-[#2C2C2C] py-8 px-6 md:px-20 lg:px-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <h1 className="text-4xl font-light md:text-5xl font-bold text-center mb-10">
          Privacy <span className="text-[#C5A46D] font-cursive">Policy</span>
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          At <span className="font-semibold text-[#2C2C2C]">Kanpur Interior</span>, 
          we value your privacy and are committed to protecting your personal information. 
          This Privacy Policy outlines how we collect, use, and safeguard your data when 
          you visit our website or interact with our services.
        </p>

        {/* Section 1 */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-[#C5A46D]">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We collect personal information that you voluntarily provide to us when 
            you fill out forms, request a consultation, or contact us. This may include:
          </p>
          <ul className="list-disc pl-8 text-gray-700 leading-relaxed">
            <li>Full name, email address, and phone number</li>
            <li>Project details or design preferences shared through forms</li>
            <li>Website usage data, such as browser type and IP address (collected automatically)</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#C5A46D]">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-8 text-gray-700 leading-relaxed">
            <li>Respond to your inquiries and service requests</li>
            <li>Provide interior design consultations and project updates</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Send occasional updates, offers, or newsletters (only if you’ve opted in)</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#C5A46D]">
            3. Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We take appropriate technical and organizational measures to protect 
            your personal data against unauthorized access, alteration, disclosure, 
            or destruction. However, please note that no internet-based platform 
            can guarantee 100% security.
          </p>
        </div>

        {/* Section 4 */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#C5A46D]">
            4. Sharing Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell, rent, or trade your personal information. We may share 
            your data only with trusted service providers who assist us in running 
            our business (such as web hosting, analytics, or communication tools), 
            and only when necessary.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#C5A46D]">
            5. Cookies and Analytics
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may use cookies to enhance your browsing experience and 
            analyze site performance. You can choose to disable cookies in your 
            browser settings at any time.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#C5A46D]">
            6. Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, correct, or request deletion of your personal data. 
            If you wish to exercise any of these rights, please contact us using the details below.
          </p>
        </div>

        {/* Section 7 */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#C5A46D]">
            7. Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns about our Privacy Policy, 
            please reach out to us:
          </p>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Kanpur Interior</span> <br />
            Email: <a href="mailto:Kanpurinteriorsproducts@gmail.com" className="text-[#C5A46D] hover:underline">Kanpurinteriorsproducts@gmail.com</a> <br />
            Phone: +91 8299334764 <br />
           C/o Of Shakuntala Niwas, House No. 8/59 Ground Floor,
Nearby Anjaneya Crystal, GT Road, Krishna Nagar,
Kanpur, Uttar Pradesh 208007
          </p>
        </div>

        {/* Section 8 */}
        <div className="space-y-6 mt-10">
          <h2 className="text-2xl font-semibold text-[#C5A46D]">
            8. Updates to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy periodically to reflect changes in 
            our practices or for other operational, legal, or regulatory reasons. 
            The updated version will be posted on this page with a revised date.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-10 text-center">
          Last Updated: October 2025
        </p>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;
