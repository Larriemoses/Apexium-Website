const TeamProfile = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Meet Our Managing Partner
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8 max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Placeholder for the partner's image */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex-shrink-0 mb-6 md:mb-0" />

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800">
              Samuel Omotola Omomowo
            </h3>
            <p className="text-lg text-teal-500 mb-4">Managing Partner</p>
            <p className="text-gray-600 leading-relaxed mb-4">
              As Managing Partner at Apexium Consult & Services Ltd, I combine
              legal expertise with business insight to deliver practical
              solutions that drive growth and ensure compliance. I am a
              Corporate & Commercial Lawyer and Business Consultant, with
              hands-on experience advising entrepreneurs, SMEs, and established
              corporations across diverse sectors.
            </p>
            <ul className="list-disc list-inside text-gray-600 text-left space-y-2">
              <li>
                **Corporate & Commercial Transactions** – company incorporation,
                restructuring, M&A, shareholder agreements, and due diligence.
              </li>
              <li>
                **Regulatory Compliance** – guiding businesses through CAC
                filings, tax registrations, licensing, and statutory
                obligations.
              </li>
              <li>
                **Business Consulting** – strategic advisory services tailored
                to help organizations achieve operational efficiency and growth.
              </li>
              <li>
                **Dispute Resolution** – providing clients with strong
                representation and pragmatic solutions to legal conflicts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamProfile;
