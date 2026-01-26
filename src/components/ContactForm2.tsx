// src/components/ContactForm2.tsx
import { useState } from 'react';

type FormStatus = 'IDLE' | 'SUCCESS' | 'ERROR';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('IDLE');

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(
        'https://formspree.io/f/YOUR_FORM_ID',
        {
          method: 'POST',
          body: data,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch {
      setStatus('ERROR');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-xl mx-auto px-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        autoComplete="name"
        className="w-full px-4 py-4 border rounded-lg text-base"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        autoComplete="email"
        className="w-full px-4 py-4 border rounded-lg text-base"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        autoComplete="tel"
        inputMode="tel"
        className="w-full px-4 py-4 border rounded-lg text-base"
      />

      <select
        name="service"
        className="w-full px-4 py-4 border rounded-lg text-base bg-white"
      >
        <option value="Roof Repair">Roof Repair</option>
        <option value="Roof Replacement">Roof Replacement</option>
        <option value="Emergency Roofing">Emergency Roofing</option>
      </select>

      <textarea
        name="message"
        placeholder="Tell us about your project"
        rows={4}
        className="w-full px-4 py-4 border rounded-lg text-base resize-none"
      />

      <button
        type="submit"
        className="
          w-full
          bg-[#ff6b36]
          text-white
          py-4
          rounded-lg
          font-bold
          text-lg
          active:scale-95
          transition
        "
      >
        Get Free Estimate
      </button>

      {status === 'SUCCESS' && (
        <p className="text-green-600 text-center font-medium">
          Thanks! We’ll contact you shortly.
        </p>
      )}

      {status === 'ERROR' && (
        <p className="text-red-600 text-center font-medium">
          Something went wrong. Please call us directly.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
