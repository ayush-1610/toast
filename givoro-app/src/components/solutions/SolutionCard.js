export default function SolutionCard({ title, icon, alt, children }) {
  return (
    <div className="bg-accent rounded-xl shadow-card p-8 flex flex-col items-center text-center border border-gray-50 hover:shadow-lg hover:scale-[1.03] transition-all duration-200 cursor-pointer">
      {icon && (
        <span className="text-4xl mb-3 text-primary" role="img" aria-label={alt}>{icon}</span>
      )}
      <h3 className="font-heading text-xl text-primary mb-2 font-bold">{title}</h3>
      <p className="text-gray-900 mb-2">{children}</p>
    </div>
  );
}
