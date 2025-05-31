import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch('https://portfolio-backend-q2bv.onrender.com/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      alert('Error sending message: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-xl text-white/90 mt-6">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>
                
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/90">
                  <Mail size={20} />
                  <span>vaishnal16305@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <Linkedin size={20} />
                  <span>https://www.linkedin.com/in/vaishnal-mali-46028425a/</span>
                </div>
                <div className="flex items-center gap-4 text-white/90">
                  <Github size={20} />
                  <span>https://github.com/vaishnal16/prep-wise</span>
                </div>
              </div>
            </div>
                        
            <div>
              {success && (
                <div className="mb-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-white">
                  Message sent successfully! Thank you for contacting us.
                </div>
              )}
              
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 focus:border-white/50 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 focus:border-white/50 focus:outline-none"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your Message"
                  required
                  className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/20 focus:border-white/50 focus:outline-none resize-none"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;