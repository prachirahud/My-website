import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import '../Styles/Footer.css' // Import the external CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Brand Name */}
        <div className="footer-brand">
          <h2>My Blog App</h2>
        </div>
        {/* Center - Navigation Links */}
        <div className="footer-nav">
          <a href="/">Home</a>
          <a href="/blogs">Blogs</a>
          <a href="/aboutus">About-us</a>
          <a href="/contactus">Contact-us</a>
        </div>
        {/* Right - Social Media Icons */}
        <div className="footer-social">
          <a href="https://www.facebook.com/prachi.rahud" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={26} />
          </a>
          <a href="https://x.com/BharneP" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={26} />
          </a>
          <a href="https://www.instagram.com/prachirahud/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={26} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={26} />
          </a>
        </div>
      </div>
      {/* Bottom - Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} My Blog App. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;


// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-6">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

//         {/* Left - Brand Name */}
//         <div>
//           <h2 className="text-xl font-bold text-white">My Blog App</h2>
//         </div>

//         {/* Center - Navigation Links */}
//         <div className="flex gap-x-10 text-sm">
//           <a href="/" className="hover:text-blue-400 transition">Home</a>
//           <a href="/blogs" className="hover:text-blue-400 transition">Blogs</a>
//           <a href="/about" className="hover:text-blue-400 transition">About</a>
//           <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
//         </div>

//         {/* Right - Social Media Icons */}
//         <div className="flex gap-x-6">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
//             <FaFacebook size={26} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
//             <FaTwitter size={26} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
//             <FaInstagram size={26} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
//             <FaLinkedin size={26} />
//           </a>
//         </div>

//       </div>

//       {/* Bottom - Copyright */}
//       <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} My Blog App. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-6">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
        
//         {/* Left - Brand Name */}
//         <div className="mb-4 md:mb-0">
//           <h2 className="text-xl font-bold text-white">My Blog App</h2>
//         </div>

//         {/* Center - Navigation Links */}
//         <div className="flex flex-wrap justify-center gap-x-10 text-sm">
//           <a href="/" className="hover:text-blue-400 transition">Home</a>
//           <a href="/blogs" className="hover:text-blue-400 transition">Blogs</a>
//           <a href="/about" className="hover:text-blue-400 transition">About</a>
//           <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
//         </div>

//         {/* Right - Social Media Icons */}
//         <div className="flex justify-center gap-x-6 mt-4 md:mt-0">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
//             <FaFacebook size={26} />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
//             <FaTwitter size={26} />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
//             <FaInstagram size={26} />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition">
//             <FaLinkedin size={26} />
//           </a>
//         </div>

//       </div>

//       {/* Bottom - Copyright */}
//       <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} My Blog App. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

