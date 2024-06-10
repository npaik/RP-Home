"use client";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

export default function SecondBlock() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message", error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/2 pr-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-4">
            Contact Us
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            상담을 원하시면 메시지를 남겨주세요.
            <br />
            빠르게 연락 드리겠습니다.
          </h3>
          <ul className="space-y-6">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-blue-900 w-6 h-6" />
              <span className="ml-3 text-gray-600">
                5th Floor, 409 Granville St, Vancouver BC V6C 1T2
              </span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-blue-900 w-6 h-6" />
              <span className="ml-3 text-gray-600">
                contact@risepartners.ca
              </span>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-blue-900 w-6 h-6" />
              <span className="ml-3 text-gray-600">604-609-5390</span>
            </li>
            <li className="flex items-center">
              <FaClock className="text-blue-900 w-6 h-6" />
              <span className="ml-3 text-gray-600">
                Monday - Friday, 10am-5pm
              </span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md mt-8 md:mt-0">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="Your full name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone No
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="Your phone number"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="Subject"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
