import Layout from '../components/layout/Layout';
import ContactForm from '../components/forms/ContactForm';

export default function Contact() {
  return (
    <Layout>
      <main className="p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <ContactForm />
      </main>
    </Layout>
  );
}
