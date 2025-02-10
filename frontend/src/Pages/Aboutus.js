import React, { useState } from "react";

const AboutUs = () => {
  // State for dropdown selection
  const [selectedSection, setSelectedSection] = useState("mission");

  // Section data
  const sections = {
    mission: {
      title: "Our Mission",
      content:
        "Our mission is to bridge the gap between development and operations by providing a platform to learn and share DevOps knowledge. We empower teams to work collaboratively, delivering high-quality software with greater speed and reliability.",
    },
    whatWeCover: {
      title: "What We Cover",
      content: (
        <ul className="list-disc pl-6 text-gray-700 mt-4 text-lg">
          <li>CI/CD (Continuous Integration & Deployment)</li>
          <li>Infrastructure as Code (IaC)</li>
          <li>Cloud & Server Management</li>
          <li>Monitoring & Logging</li>
          <li>Automation Tools (Jenkins, Docker, Kubernetes, Terraform)</li>
        </ul>
      ),
    },
    whyDevOps: {
      title: "Why DevOps?",
      content:
        "DevOps transforms how teams collaborate and build products. It leads to efficient development cycles, reduced operational costs, and improved customer satisfaction by integrating development and operations practices.",
    },
  };

  return (
    <div className="px-6 py-12 sm:px-8 sm:py-16 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">About Us</h1>
      <p className="text-lg sm:text-xl text-center text-gray-700 mb-6">
        Welcome to <strong>DevOps Hub</strong> – your go-to source for everything DevOps.
      </p>

      {/* Dropdown Selector */}
      <div className="mb-6">
        <select
          className="border border-gray-400 rounded-lg px-4 py-2 text-lg focus:ring-2 focus:ring-blue-500"
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
        >
          <option value="mission">Our Mission</option>
          <option value="whatWeCover">What We Cover</option>
          <option value="whyDevOps">Why DevOps?</option>
        </select>
      </div>

      {/* Section Content */}
      <div className="text-center max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-800">{sections[selectedSection].title}</h2>
        <p className="text-lg text-gray-700 mt-4">{sections[selectedSection].content}</p>
      </div>
    </div>
  );
};

export default AboutUs;


// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="about-us-container px-6 py-12 sm:px-8 sm:py-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-blue-700 mb-6">
//           About Us
//         </h1>
//         <p className="text-xl sm:text-2xl text-center text-gray-700 mb-8">
//           Welcome to <strong>DevOps Hub</strong> – your ultimate source for everything DevOps. Our blog is dedicated to helping professionals, developers, and organizations embrace the world of DevOps to enhance their software development, automation, and operations practices.
//         </p>

//         {/* Our Mission Section */}
//         <div className="content-section mt-8">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mt-8">
//             Our Mission
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-700 mt-4">
//             Our mission is to bridge the gap between development and operations by providing a comprehensive platform to learn, grow, and share knowledge about DevOps. We believe in empowering teams to work more collaboratively and efficiently, delivering high-quality software with greater speed and reliability.
//           </p>
//         </div>

//         {/* What We Cover Section */}
//         <div className="content-section mt-8">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mt-8">
//             What We Cover:
//           </h2>
//           <ul className="list-disc pl-6 sm:pl-8 text-lg sm:text-xl text-gray-700 mt-4">
//             <li>Continuous Integration/Continuous Delivery (CI/CD)</li>
//             <li>Infrastructure as Code (IaC)</li>
//             <li>Monitoring & Logging</li>
//             <li>Cloud Infrastructure</li>
//             <li>Automation Tools (e.g., Jenkins, Docker, Kubernetes, Terraform)</li>
//           </ul>
//         </div>

//         {/* Why DevOps Section */}
//         <div className="content-section mt-8">
//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mt-8">
//             Why DevOps?
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-700 mt-4">
//             DevOps isn’t just a set of practices; it’s a culture shift that transforms how teams collaborate and build products. We believe that DevOps practices lead to more efficient development cycles, reduced operational costs, and improved customer satisfaction.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
