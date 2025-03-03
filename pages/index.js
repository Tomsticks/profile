import React from 'react';
import imag1 from '../Myhead.png';
import Image from 'next/image';
function PrintDiv() {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      // Check if the window was opened successfully
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
            <style>
              /* Add your print-specific styles here */
              @media print {
                body {
                  font-size: 12pt;
                }
                /* Example: Hide elements that shouldn't be printed */
                .no-print {
                  display: none;
                }
                  @media print {
                body {
                  font-size: 12pt;
                }
                .print-image {
                  max-width: 100%; /* Adjust as needed */
                  width:20px;
                  height: 20px;
                }
              }
              }
            </style>
          </head>
          <body>
            <div id="print-content">
              ${document.getElementById('content-to-print').innerHTML}
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus(); // Required for some browsers
      printWindow.print();
      printWindow.close();
    } else {
      alert('Popup blocked! Please allow popups for this site.');
    }
  };

  return (
    <div>
      <div id="content-to-print">
        {/* Your content to be printed goes here */}
        {/* <h1>Content to Print</h1>
        <p>This is the content that will be printed.</p>
        <p className="no-print">This will not be printed</p>
        <div className=" h-6">
          <Image
            src={imag1}
            alt="Image"
            className=" print-image w-[10px] h-[10px]"
          />
        </div>

        Add more content as needed */}
        <div className="max-w-4xl mx-auto mt-10 border p-6 shadow-lg">
          {/* Header Section */}
          <h1 className="text-center text-xl font-bold mb-4 uppercase">
            The Open-Lab Staff Profiling
            <a href="#" className="text-blue-500 ml-2">
              Form
            </a>
          </h1>

          {/* Main Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Image */}
            <div className="md:col-span-1 flex justify-center">
              <div className=" h-6">
                <Image
                  src={imag1}
                  alt="Image"
                  className=" print-image w-auto h-auto"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <p>
                  Hi, I'm <span className="font-bold">Adebowale</span>, a
                  researcher and computing strategist who helps experts,
                  authors, and coaches go from "hidden gem" to admired industry
                  leader. And even household names if you want to help people,
                  they need to know you exist.
                </p>
                <div>
                  <p className="font-bold">Department:</p>
                  <p>Computer Science</p>
                </div>
                <div>
                  <p className="font-bold">Student ID:</p>
                  <p>2203044523</p>
                </div>
                <div>
                  <p className="font-bold">Leadership Position:</p>
                  <p>Student Heads/President</p>
                </div>
                <div>
                  <p className="font-bold">Contact:</p>
                  <p>+234-80904562231</p>
                  <p>
                    Email:{' '}
                    <a
                      href="mailto:Olaleye.adebowale22@gmail.com"
                      className="text-blue-500"
                    >
                      Olaleye.adebowale22@gmail.com
                    </a>
                  </p>
                </div>
                {/* Social Media Links */}
                <div className="space-y-1">
                  <a href="#" className="text-blue-500">
                    Facebook
                  </a>
                  <a href="#" className="text-blue-500">
                    Twitter
                  </a>
                  <a href="#" className="text-blue-500">
                    Instagram
                  </a>
                  <a href="#" className="text-blue-500">
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* About Me Section */}
              <div className="space-y-4">
                <h2 className="font-bold text-xl">About Me</h2>
                <p>
                  Inquisitive computer science specialist with 8+ years of
                  experience. Working to leverage strong research and
                  programming skills as a developer for Microsoft. Led a team of
                  11 researchers at Jeolinks Technology Limited. Delivered
                  projects with 15% before deadline and 10% less errors than
                  other teams.
                </p>
                <p>
                  Trained 25 programmers and developers in web application
                  development skills.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-10">
            <h2 className="font-bold text-xl mb-4">Pro Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <li>Problem Solving: 67</li>
              <li>Collaboration: 84</li>
              <li>Work Ethics: 95</li>
              <li>Critical Thinking: 75</li>
              <li>Design Thinking: 54</li>
              <li>Adaptability, Management, etc.</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="mt-10">
            <h2 className="font-bold text-xl mb-4">Education</h2>
            <ul>
              <li>
                <span className="font-bold">
                  Ekiti State University, Ado Ekiti
                </span>
                <p>BSc in Computer Science, 2017 - 2022</p>
              </li>
              <li>
                <span className="font-bold">King’s College, London</span>
                <p>MSc in Computer Science, 2021 - 2023</p>
              </li>
            </ul>
          </div>

          {/* Motivation Section */}
          <div className="mt-10">
            <h2 className="font-bold text-xl mb-4">Motivation</h2>
            <ul className="list-disc list-inside">
              <li>
                Student Government Association (SGA): Provides leadership
                opportunities and represents student interests.
              </li>
              <li>
                Artificial Intelligence/Machine Learning Labs: Attract
                significant funding, talent, and attention due to their career
                prospects for students.
              </li>
              <li>
                Hackathons/Competitions: Participate in coding challenges,
                learning from failures, and showcasing problem-solving skills.
              </li>
            </ul>
          </div>

          {/* Hobbies Section */}
          <div className="mt-10">
            <h2 className="font-bold text-xl mb-4">Hobbies</h2>
            <p>Gaming, Writing, Traveling, Sketching</p>
          </div>

          {/* Footer Section */}
          <div className="text-center mt-10">
            <p className="text-sm">
              The staff form inputs to be sent to{' '}
              <a href="mailto:eksucsc@gmail.com" className="text-blue-500">
                eksucsc@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}

export default PrintDiv;
