import ContactForm from '../components/forms/ContactForm';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact GIVORO – Get in Touch</title>
        <meta name="description" content="Contact GIVORO for partnership, support, or questions. Fill out the form or reach us via email, phone, or LinkedIn." />
        <meta property="og:title" content="Contact GIVORO – Get in Touch" />
        <meta property="og:description" content="Contact GIVORO for partnership, support, or questions. Fill out the form or reach us via email, phone, or LinkedIn." />
      </Head>
      <main className="p-8 max-w-lg mx-auto bg-neutral rounded-2xl shadow-card fade-in-up">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-heading text-primary mb-2">Contact Us</h1>
          <p className="text-lg text-gray-900">We’d love to discuss how GIVORO can amplify your brand—drop us a message!</p>
        </header>
        <section className="mb-10">
          <ContactForm />
        </section>
        <section className="bg-accent rounded-lg p-6 mb-6">
          <h2 className="font-heading text-lg text-primary mb-2">Company Information</h2>
          <ul className="text-gray-900 text-sm space-y-1">
            <li><strong>Email:</strong> <a href="mailto:info@givoro.com" className="text-primary hover:underline">info@givoro.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a></li>
            <li><strong>Address:</strong> 123 Main Street, Suite 400, City, Country</li>
            <li><strong>LinkedIn:</strong> <a href="#" className="text-primary hover:underline">linkedin.com/company/givoro</a></li>
          </ul>
        </section>
        <div className="text-center text-gray-600 text-sm mt-6">We’ll get back to you within 1 business day.</div>
      </main>
    </>
  );
}
