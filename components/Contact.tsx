
import React, { useState } from 'react';
import { FormState } from '../types';

const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h3 className="text-indigo-600 font-bold text-sm uppercase tracking-wider mb-2">Get In Touch</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Ready to start a <br />new project?</h2>
            <p className="text-slate-600 text-lg mb-10">
              I'm always open to discussing new opportunities, creative ideas or collaborations to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-4 rounded-2xl text-indigo-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email me at</h4>
                  <p className="text-xl font-bold text-slate-900">hello@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-4 rounded-2xl text-indigo-600">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Office Location</h4>
                  <p className="text-xl font-bold text-slate-900">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {['LinkedIn', 'Twitter', 'GitHub'].map(social => (
                <a key={social} href="#" className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-600 transition-all shadow-sm">
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-slate-200 rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-indigo-500 transition-all outline-none"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-slate-900 focus:ring-2 focus:ring-indigo-500 transition-all outline-none resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit"
                disabled={status !== 'idle'}
                className="w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    SENDING...
                  </>
                ) : status === 'success' ? (
                  'MESSAGE SENT!'
                ) : (
                  'SEND MESSAGE'
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
