'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Contact Methods
const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Us',
    description: 'For project inquiries and quotes',
    value: 'main@thewallcrafters.com',
    href: 'mailto:main@thewallcrafters.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Call Us',
    description: 'Mon-Sat, 10AM - 7PM IST',
    value: '+91 99522 17602',
    href: 'tel:+919952217602',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'WhatsApp',
    description: 'Quick responses, share images',
    value: 'Chat with us',
    href: 'https://wa.me/919043050410',
  },
];

// Office Location
const officeInfo = {
  title: 'Visit Our Studio',
  address: [
    'TWC Fit-Outs Pvt. Ltd.',
    'No 59/8, Near Fatima Michael College Of Engineering & Technology,',
    'Senkottai Village, Sivagangai Main Road,',
    'Madurai - 625001, Tamil Nadu, India',
  ],
  hours: 'Monday - Saturday: 10:00 AM - 7:00 PM',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=No+59%2F8%2C+Near+Fatima+Michael+College+Of+Engineering+%26+Technology%2C+Senkottai+Village%2C+Sivagangai+Main+Road%2C+Madurai%2C+Tamil+Nadu+625001',
};

export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setFormStatus('sending');

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setFormStatus('sent');
    } catch (err) {
      console.error('EmailJS error:', err);
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-twc-charcoal pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 1, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2824] leading-[1.1] mb-6">
              Let's Start a
              <br />
              <span className="italic font-extralight">Conversation</span>
            </h1>
            <p className="text-lg text-[#2C2824]/70 font-light leading-relaxed max-w-xl">
              Whether you have a project in mind or just want to explore possibilities, 
              we're here to help. Reach out and let's discuss how we can transform your space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-[#2C2824]/10 hover:border-twc-red/30 hover:bg-twc-warm/30 transition-all duration-300"
              >
                <div className="text-twc-red mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-lg font-light text-[#2C2824] mb-1">{method.title}</h3>
                <p className="text-sm text-[#2C2824]/50 mb-4">{method.description}</p>
                <p className="text-base text-[#2C2824] font-medium group-hover:text-twc-red transition-colors duration-300">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Form & Info */}
      <section className="py-16 md:py-24 bg-twc-warm">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-twc-red mb-6 block">
                Send a Message
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-[#F5F3EE] leading-tight mb-8">
                Tell Us About
                <br />
                <span className="italic font-extralight">Your Project</span>
              </h2>

              {formStatus === 'sent' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-[#2C2824] mb-3">Message Sent!</h3>
                  <p className="text-[#2C2824]/60 font-light">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : formStatus === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-12 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-twc-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light text-[#2C2824] mb-3">Something Went Wrong</h3>
                  <p className="text-[#2C2824]/60 font-light mb-6">
                    We couldn't send your message. Please try again or reach out directly via phone or WhatsApp.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="inline-flex items-center gap-2 text-twc-red hover:text-[#2C2824] transition-colors duration-300 text-sm uppercase tracking-widest"
                  >
                    Try Again
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-[#F5F3EE]/70 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#2C2824]/10 focus:border-twc-red focus:outline-none transition-colors duration-300 text-[#2C2824]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm text-[#F5F3EE]/70 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 bg-white border border-[#2C2824]/10 focus:border-twc-red focus:outline-none transition-colors duration-300 text-[#2C2824]"
                        placeholder="+91 99522 17602"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-[#F5F3EE]/70 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-[#2C2824]/10 focus:border-twc-red focus:outline-none transition-colors duration-300 text-[#2C2824]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm text-[#F5F3EE]/70 mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      className="w-full px-4 py-3 bg-white border border-[#2C2824]/10 focus:border-twc-red focus:outline-none transition-colors duration-300 text-[#2C2824]"
                    >
                      <option value="">Select a project type</option>
                      <option value="kitchen">Modular Kitchen</option>
                      <option value="wardrobe">Wardrobes & Storage</option>
                      <option value="interior">Complete Home Interior</option>
                      <option value="office">Office Fit-Out</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm text-[#F5F3EE]/70 mb-2">
                      City
                    </label>
                    <select
                      id="city"
                      name="city"
                      className="w-full px-4 py-3 bg-white border border-[#2C2824]/10 focus:border-twc-red focus:outline-none transition-colors duration-300 text-[#2C2824]"
                    >
                      <option value="">Select your city</option>
                      <option value="chennai">Chennai</option>
                      <option value="bangalore">Bangalore</option>
                      <option value="hyderabad">Hyderabad</option>
                      <option value="mumbai">Mumbai</option>
                      <option value="delhi">Delhi NCR</option>
                      <option value="pune">Pune</option>
                      <option value="kolkata">Kolkata</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-[#F5F3EE]/70 mb-2">
                      Tell Us More
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-[#2C2824]/10 focus:border-twc-red focus:outline-none transition-colors duration-300 text-[#2C2824] resize-none"
                      placeholder="Describe your project, space size, timeline, or any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#2C2824] text-[#F5F3EE] px-8 py-4 text-sm uppercase tracking-widest hover:bg-twc-red transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Office Info & Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Office Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/wardrobes/wardrobe-9.jpg"
                  alt="TWC Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Office Details */}
              <div className="bg-[#2C2824] p-8">
                <h3 className="text-xl font-light text-[#F5F3EE] mb-6">{officeInfo.title}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-twc-red mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="text-[#F5F3EE]/70 font-light text-sm leading-relaxed">
                      {officeInfo.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-twc-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-[#F5F3EE]/70 font-light text-sm">{officeInfo.hours}</p>
                  </div>
                </div>

                <a
                  href={officeInfo.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-twc-red hover:text-[#F5F3EE] transition-colors duration-300 mt-6 text-sm uppercase tracking-widest"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
