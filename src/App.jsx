import React from "react";
import { FaLinkedin, FaGithub, FaFigma } from "react-icons/fa";
import "./App.css";
import Profile_picture from "./Profile_picture.png";

function App() {
  return (
    <div id="background" className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center sm:flex-row sm:items-start">
          <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6">
            <img
              src={Profile_picture}
              alt="profile"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <header className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                ADARSH SANJAYBHAI BHAYANI
              </h1>
              <div className="mt-2 text-sm text-gray-600">
                <p>
                  <a
                    href="mailto:adarshbhayani01234@gmail.com"
                    className="text-blue-500"
                  >
                    adarshbhayani01234@gmail.com
                  </a>{" "}
                  | +918320628256 | Ahmedabad, Gujarat
                </p>
                <div className="flex justify-center sm:justify-start gap-4 mt-2">
                  <a
                    href="https://www.linkedin.com/in/adarsh-bhayani-78126b257/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-blue-500"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/AdarshBhayani25"
                    className="text-gray-800"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.figma.com/@adarshbhayani"
                    className="text-pink-600"
                  >
                    <FaFigma size={24} />
                  </a>
                </div>
              </div>
            </header>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            EDUCATION
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700">
                B.E. IN COMPUTER ENGINEERING
              </h3>
              <p className="text-gray-600">
                Vishwakarma Government Engineering College – Ahmedabad
              </p>
              <p className="text-sm text-gray-500 mt-2">2021 - 2025</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Pursuing Bachelor of Engineering (7th Semester)</li>
                <li>CPI: 8.70 (Up to 7th Semester)</li>
                <li>CGPA: 8.89</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">12TH BOARDS</h3>
              <p className="text-gray-600">A Success School – Jetpur</p>
              <p className="text-sm text-gray-500 mt-2">2020 - 2021</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>GSEB Board: 96.90 PR</li>
                <li>GUJCET: 96 PR</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            SKILLS AND TOOLS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700">
                PROGRAMMING LANGUAGES:
              </h3>
              <p className="text-gray-600">
                C | C++ | SQL | Python | JavaScript
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">
                TECHNOLOGY & TOOLS:
              </h3>
              <p className="text-gray-600">
                Figma | React.JS | HTML | CSS | MySQL | Vercel | VS Code |
                GitHub | Tailwind CSS | Stable Diffusion | FastAPI | Gradio
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            ACHIEVEMENTS & EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700">
                HackSpring Hackathon (GEC Gandhinagar)
              </h3>
              <p className="text-gray-600">
                Team Leader & FinTech Winner (2<sup>nd</sup>-3<sup>rd</sup>{" "}
                March 2024): Led a winning team in creating a cutting-edge
                FinTech solution.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">
                Internship at Infolabz
              </h3>
              <p className="text-gray-600">
                (29 June – 12 July 2024): Gained hands-on experience in building
                and optimizing web applications using React.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700">UI/UX PROJECTS:</h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>
                  <a
                    href="https://www.figma.com/proto/Na5mMrVblOfq9EVjGRoPDk/portfolio?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&scaling=contain&mode=design&t=pmqlWtlPNCaZRfWK-1"
                    className="text-blue-500"
                  >
                    Portfolio Website Design
                  </a>{" "}
                  - Designed a comprehensive UI/UX for a personal portfolio
                  website focusing on clean aesthetics, ease of navigation, and
                  enhanced user engagement.
                </li>
                <li>
                  <a
                    href="https://www.figma.com/proto/1kRrnPdfDFqlikUpDYlDiF/hack-the-spring?page-id=0%3A1&type=design&node-id=134-637&viewport=126%2C667%2C0.16&t=flYHmkcMWJhs9cgH-1&scaling=scale-down&starting-point-node-id=474%3A1928"
                    className="text-blue-500"
                  >
                    Salary Tracking System With Expense Management App Design
                  </a>{" "}
                  - Designed a user-friendly mobile app interface using Figma to
                  streamline salary tracking and expense management.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">
                WEB FRONTEND PROJECTS:
              </h3>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>
                  <a
                    href="https://pixelart-chi.vercel.app/"
                    className="text-blue-500"
                  >
                    Pixel Art Maker
                  </a>{" "}
                  - Developed an interactive web application that allows users
                  to create pixel art designs easily.
                </li>
                <li>
                  <a
                    href="https://food-package-item-analysis.vercel.app/"
                    className="text-blue-500"
                  >
                    Food Package Analyzer
                  </a>{" "}
                  - Developed and deployed an advanced Food Package Analyzer
                  using the Gemini AI API to automate the extraction and
                  classification of nutritional information, ingredient lists,
                  and packaging details from food labels.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
            LANGUAGES
          </h2>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>English (Limited Working Proficiency)</li>
            <li>Hindi (Professional Working Proficiency)</li>
            <li>Gujarati (Full Professional Proficiency)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
