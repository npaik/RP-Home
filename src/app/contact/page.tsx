import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center justify-center bg-gray-100 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/contact-1.png"
              alt="Contact"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left px-4">
            <p className="text-2xl font-semibold">
              언제나 고객에게 귀 기울이겠습니다.
              <br />
              라이즈파트너스는 항상 고객과 함께 하겠습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/2 pr-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Contact Us
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              상담을 원하시면 메시지를 남겨주세요.
              <br />
              빠르게 연락 드리겠습니다.
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center">
                {/* <Image
                  src="/location-icon.png"
                  alt="Location"
                  width={24}
                  height={24}
                /> */}
                <span className="ml-3 text-gray-600">
                  5th Floor, 409 Granville St, Vancouver BC V6C 1T2
                </span>
              </li>
              <li className="flex items-center">
                {/* <Image
                  src="/email-icon.png"
                  alt="Email Address"
                  width={24}
                  height={24}
                /> */}
                <span className="ml-3 text-gray-600">
                  contact@risepartners.ca
                </span>
              </li>
              <li className="flex items-center">
                {/* <Image
                  src="/phone-icon.png"
                  alt="Make A Call"
                  width={24}
                  height={24}
                /> */}
                <span className="ml-3 text-gray-600">604-609-5390</span>
              </li>
              <li className="flex items-center">
                {/* <Image
                  src="/hours-icon.png"
                  alt="Working Hour"
                  width={24}
                  height={24}
                /> */}
                <span className="ml-3 text-gray-600">
                  Monday - Friday, 10am-5pm
                </span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-md mt-8 md:mt-0">
            <form>
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
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
                  placeholder="Your email address"
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

      <div className="w-full flex flex-col md:flex-row items-center justify-center bg-gray-100 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/contact-2.png"
              alt="Customer Support"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-2xl mx-auto">
              <p className="text-xl font-semibold mb-4">
                <span className="inline-block bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
                우리는 고객의 요구에 귀를 기울입니다.
              </p>
              <p className="text-gray-600">
                라이즈파트너스는 고객이 원하는 것을 깊이 공감하고 업무를
                착수하는 것을 가장 중요하게 생각합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
              <p className="text-xl font-semibold mb-4">
                <span className="inline-block bg-blue-500 rounded-full w-4 h-4 mr-2"></span>
                고객에 맞는 컨설팅을 제안합니다.
              </p>
              <p className="text-gray-600">
                라이즈파트너스가 쌓아온 노하우를 고객에게 아낌없이 전달합니다.
                고객은 항상 최선의 결정을 할 수 있어야 합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5260412389625!2d-123.11726722315984!3d49.28537747139332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671827f59fd25%3A0x5fce5473fbc5b4a8!2s409%20Granville%20St%2C%20Vancouver%2C%20BC%20V6C%201T2!5e0!3m2!1sen!2sca!4v1717712076673!5m2!1sen!2sca"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
