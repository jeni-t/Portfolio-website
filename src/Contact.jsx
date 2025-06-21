import address from '../public/address.jpg';
import email from '../public/email.png';
import contact from '../public/contact.jpg';

const Contact = () => {
  return (
    <div className="bg-sky-50 py-2 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-center text-[#0f172a] mb-12">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Info + Map */}
        <div className="bg-[#0f172a] p-6 rounded shadow-md text-white">
          <div className="mb-6">
            <div className="flex items-start gap-4 mb-4">
              <img src={address} alt="address" className="my-2 w-8 h-8 rounded-full" />
              <div>
                <p className="font-bold text-lg">Address</p>
                <p>Rajapalayam</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <img src={contact} alt="call" className="my-2 w-8 h-8 rounded-full" />
              <div>
                <p className="font-bold text-lg">Call Us</p>
                <p>+91 87780 89525</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <img src={email} alt="email" className="my-2 w-8 h-8 rounded-full" />
              <div>
                <p className="font-bold text-lg">Email Us</p>
                <p>jenivijay19@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.731818021076!2d-74.0112583!3d40.7105029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a20e42e79a1%3A0xe4f24a182d680f8!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1617928489611!5m2!1sen!2sus"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            className="rounded"
          ></iframe>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-[#0f172a] p-6 rounded shadow-md text-white">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
