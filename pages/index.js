'use client'
import { useRouter } from 'next/navigation'; // For navigation in Next.js

export default function UploadOrFormPage() {
  const router = useRouter()

  // Function to handle the redirect when the button is clicked
  const handleRedirect = (path) => {
    router.push(path); // Navigate to the desired page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Upload Your CV or Fill a Form
        </h1>
        <p className="text-gray-600 mb-6">
          Choose one of the options below to either upload your CV or fill out a form to provide your details.
        </p>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => handleRedirect('/create')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          > 
            Fill Form to Generate Cv
          </button>

          <button
            onClick={() => handleRedirect('/fill-form')}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
