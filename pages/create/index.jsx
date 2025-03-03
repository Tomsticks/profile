import React, { useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function CreateForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());

    const profilePic = formData.get('profilePic');

    if (profilePic && profilePic.size > 0) {
      // Convert image to base64
      const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      };

      try {
        const base64Image = await convertToBase64(profilePic);
        formEntries.profilePic = base64Image; // Add the base64 image to formEntries

        const encryptedData = CryptoJS.AES.encrypt(
          JSON.stringify(formEntries),
          'miracleisagoodboi' // Replace with a secure key
        ).toString();

        // Save formEntries to localStorage
        localStorage.setItem('cv', encryptedData);
        console.log('Form data saved:', formEntries);
        router.push('/cv');

      } catch (error) {
        console.error('Error converting image to base64:', error);
      }
    } else {
      // Save formEntries to localStorage without image
      localStorage.setItem('cv', JSON.stringify(formEntries));
      console.log('Form data saved:', formEntries);
    }
    saveToDb(formEntries);
  };

  async function saveToDb(data) {
    try {
      const response = await axios.post('/api/profile', { data });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-teal-400 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">Contact Information</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Post */}
          <div className="flex flex-col">
            <label htmlFor="post" className="text-sm font-medium text-gray-700">Post:</label>
            <input
              type="text"
              id="post"
              name="post"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your current post"
              required
            />
          </div>

          {/* Position */}
          <div className="flex flex-col">
            <label htmlFor="position" className="text-sm font-medium text-gray-700">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your position"
              required
            />
          </div>

          {/* About Me */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="about" className="text-sm font-medium text-gray-700">About Me:</label>
            <textarea
              id="about"
              name="about"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Describe yourself"
              required
            ></textarea>
          </div>

          {/* Department */}
          <div className="flex flex-col">
            <label htmlFor="department" className="text-sm font-medium text-gray-700">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your department"
              required
            />
          </div>

          {/* Student ID */}
          <div className="flex flex-col">
            <label htmlFor="studentId" className="text-sm font-medium text-gray-700">Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your student ID"
              required
            />
          </div>

          {/* Leadership Position */}
          <div className="flex flex-col">
            <label htmlFor="leadershipPosition" className="text-sm font-medium text-gray-700">Leadership Position:</label>
            <input
              type="text"
              id="leadershipPosition"
              name="leadershipPosition"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your leadership position"
              required
            />
          </div>

          {/* Profile Picture */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="profilePic" className="text-sm font-medium text-gray-700">Profile Picture:</label>
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Contact Information */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="+234 9035783851"
              required
            />

            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="yourname@example.com"
              required
            />

            <label htmlFor="facebook" className="text-sm font-medium text-gray-700">Facebook URL:</label>
            <input
              type="text"
              id="facebook"
              name="facebook"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="facebook.com/yourprofile"
            />

            <label htmlFor="twitter" className="text-sm font-medium text-gray-700">Twitter URL:</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="twitter.com/yourprofile"
            />

            <label htmlFor="instagram" className="text-sm font-medium text-gray-700">Instagram URL:</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="instagram.com/yourprofile"
            />
          </div>

          {/* Pro Skills */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="proskills" className="text-sm font-medium text-gray-700">Pro Skills:</label>
            <textarea
              id="proskills"
              name="proskills"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Describe your professional skills"
              required
            ></textarea>
          </div>

          {/* Education */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="education" className="text-sm font-medium text-gray-700">Education:</label>
            <textarea
              id="education"
              name="education"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Describe your educational background"
              required
            ></textarea>
          </div>

          {/* Motivation */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="motivation" className="text-sm font-medium text-gray-700">Motivation:</label>
            <textarea
              id="motivation"
              name="motivation"
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              rows="3"
              placeholder="Share your motivational quote"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 transition"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
