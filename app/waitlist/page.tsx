'use client'

import { useState } from 'react';
import { supabase } from '@/config/supabaseClient';
import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';

const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ name, email }])
      .select();

    if (error) {
      setMessage('Error submitting form');
    } else {
      setMessage('Successfully submitted');
      setName('');
      setEmail('');
    }
  };

return (
  <div className="w-3/4 mx-auto">
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md"
      >
        Join Waitlist
      </button>
      {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
    </form>
  </div>
);
};

export default function Waitlist() {
  return (
    <Container>
      <div id="Waitlist" />
      <SectionTitle preTitle="Join Our Waitlist" title="Be the First to Know">
        Sign up for our waitlist to get early access to our product and stay updated with the latest news.
      </SectionTitle>
      <WaitlistForm />
    </Container>
  );
}