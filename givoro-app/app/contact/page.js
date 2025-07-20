import ContactForm from '../../components/ContactForm';

export const metadata = {
  title: 'Contact | GIVORO',
};

export default function Contact() {
  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <ContactForm />
    </main>
  );
}
