import React, { useState } from 'react';
import axios from 'axios';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to Google Apps Script
      const response = await axios.post('https://script.google.com/macros/s/AKfycbzOwJIx8LDKOANVb00dMTJJgzGp64JtVafPRjAloxY/dev', formData, {
        headers: {
          'Content-Type': 'application/json',  // Ensure the request is sent as JSON
        },
      });

      if (response.data.status === 'success') {
        setSuccess(true);
        setError(false);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error submitting form', err);
      setError(true);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-10 sm:py-20"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 items-center justify-center">
        {/* Left - "Get in Touch" Text and Contact Info */}
        <div className="text-white text-center lg:text-left space-y-6 text-lg w-full lg:w-1/2">
          <h2 className="text-3xl font-bold">
            <span className="text-indigo-300">Get</span> in <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-base sm:text-lg">
            We’d love to hear from you! Whether you have questions, need support, or simply want to connect, feel free to reach out to us.
            Use the contact form below, send us an email, or reach us through our social media channels.
          </p>

          {/* Contact Info with Icons */}
          <div className="space-y-4 mt-8">
            <div className="flex items-start space-x-4 flex-wrap justify-center lg:justify-start">
              <FaPhoneAlt className="text-2xl text-blue-300" />
              <div>
                <p className="font-semibold">Mobile:</p>
                <p>+91-7499303475</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 flex-wrap justify-center lg:justify-start">
              <FaEnvelope className="text-2xl text-blue-300" />
              <div>
                <p className="font-semibold">Email:</p>
                <p>pravinsarule617@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 flex-wrap justify-center lg:justify-start">
              <FaMapMarkerAlt className="text-2xl text-blue-300" />
              <div>
                <p className="font-semibold">Address:</p>
                <p>Bhavsingpura, Chh. Sambhajinagar</p>
                <p className="font-semibold">State:</p>
                <p>Maharashtra</p>
                <p className="font-semibold">Country:</p>
                <p>India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Contact Form Section */}
        <div className="bg-white rounded-xl shadow-lg p-10 w-full lg:w-1/2 max-w-lg">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full p-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-36"
            />

            {/* Submit Button with Hover Effect and Cursor Pointer */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Send Message
            </button>

            {success && (
              <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
            )}

            {error && (
              <p className="text-red-600 text-center mt-4">Error submitting the form. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
