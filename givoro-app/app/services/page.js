import { AcademicCapIcon, BeakerIcon, ChartBarIcon, ClipboardIcon, UserGroupIcon, EyeIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Services | GIVORO',
};

const services = [
  { title: 'Strategic Campaign Planning', icon: AcademicCapIcon },
  { title: 'Custom Bottle/Utility Product Design', icon: BeakerIcon },
  { title: 'QR Tracking & Distribution Tech', icon: ClipboardIcon },
  { title: 'Campaign Analytics Dashboard', icon: ChartBarIcon },
  { title: 'Political and Local Activation Support', icon: UserGroupIcon },
  { title: 'Brand Visibility Reporting', icon: EyeIcon },
];

export default function Services() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Services</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map(({ title, icon: Icon }) => (
          <div key={title} className="flex items-start space-x-4">
            <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
            <span className="text-lg">{title}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
