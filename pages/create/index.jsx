import React from 'react';
import { useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function CreateForm() {
  const router = useRouter()
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
          'miracleisagoodboi' // You should replace this with a secure key
        ).toString();

        // Save formEntries to localStorage
        localStorage.setItem('cv', encryptedData);
        console.log('Form data saved:', formEntries);
        router.push('/cv')

      } catch (error) {
        console.error('Error converting image to base64:', error);
      }
    } else {
      // Save formEntries to localStorage without image
      localStorage.setItem('cv', JSON.stringify(formEntries));
      console.log('Form data saved:', formEntries);
    }
    saveToDb(formEntries)
  };

  async function saveToDb(data) {
    const saveDb = await axios.post('/api/profile', {
      data
    }).then((r) => {
      if (r) {
        console.log(r);

      }
    }).catch((e) => {
      console.log(e);

    })
  }



  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col px-3 py-4">
        <h1>What’s the best way for employers to contact you?</h1>
        <main className="flex flex-col gap-4 justify-center">
          {/* <!-- Name --> */}
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-2"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* <!-- Post --> */}
          <div className="flex flex-col">
            <label htmlFor="post">Post:</label>
            <input
              type="text"
              id="post"
              name="post"
              className="p-2"
              placeholder="Enter your current post"
              required
            />
          </div>

          {/* <!-- Position --> */}
          <div className="flex flex-col">
            <label htmlFor="position">Position:</label>
            <input
              type="text"
              id="position"
              name="position"
              className="p-2"
              placeholder="Enter your position"
              required
            />
          </div>

          {/* <!-- About Me --> */}
          <div className="flex flex-col">
            <label htmlFor="about">About Me:</label>
            <textarea
              id="about"
              name="about"
              className="p-2"
              rows="4"
              placeholder="Describe yourself"
              required
            ></textarea>
          </div>

          {/* <!-- Department --> */}
          <div className="flex flex-col">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              className="p-2"
              placeholder="Enter your department"
              required
            />
          </div>

          {/* <!-- Student ID --> */}
          <div className="flex flex-col">
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              className="p-2"
              placeholder="Enter your student ID"
              required
            />
          </div>

          {/* <!-- Leadership Position --> */}
          <div className="flex flex-col">
            <label htmlFor="leadershipPosition">Leadership Position:</label>
            <input
              type="text"
              id="leadershipPosition"
              name="leadershipPosition"
              className="p-2"
              placeholder="Enter your leadership position"
              required
            />
          </div>

          {/* <!-- Profile Picture --> */}
          <div className="flex flex-col">
            <label htmlFor="profilePic">Profile Picture:</label>
            <input type="file" id="profilePic" name="profilePic" className="p-2" required />
          </div>

          {/* <!-- Contact Information --> */}

          <div className="flex flex-col">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="p-2"
              placeholder="+234 9035783851"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2"
              placeholder="yourname@example.com"
              required
            />

            <label htmlFor="facebook">Facebook URL:</label>
            <input
              type="text"
              id="facebook"
              name="facebook"
              className="p-2"
              placeholder="facebook.com/yourprofile"
            />

            <label htmlFor="twitter">Twitter URL:</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              className="p-2"
              placeholder="twitter.com/yourprofile"
            />

            <label htmlFor="instagram">Instagram URL:</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              className="p-2"
              placeholder="instagram.com/yourprofile"
            />
          </div>

          {/* <!-- Pro Skills --> */}
          <div className="flex flex-col">
            <label htmlFor="proskills">Pro Skills:</label>
            <textarea
              id="proskills"
              name="proskills"
              className="p-2"
              rows="4"
              placeholder="Share your motivational quote"
              required
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="education">Education:</label>
            <textarea
              id="education"
              name="education"
              className="p-2"
              rows="4"
              placeholder="Share your motivational quote"
              required
            ></textarea>
          </div>

          {/* <!-- Motivation --> */}
          <div className="flex flex-col">
            <label htmlFor="motivation">Motivation:</label>
            <textarea
              id="motivation"
              name="motivation"
              className="p-2"
              rows="4"
              placeholder="Share your motivational quote"
              required
            ></textarea>
          </div>

          {/* <!-- Submit Button --> */}
          <button type="submit" className="mt-4 bg-blue-500 text-white p-2">
            Generate
          </button>
        </main>
      </form>
    </div>
  );
}
