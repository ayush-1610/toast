'use client';
import { motion } from 'framer-motion';

export default function CaseStudyCard({ title, problem, solution, results }) {
  return (
    <motion.article
      className="p-4 border rounded-lg shadow-sm mb-6 bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="mb-1"><strong>Problem:</strong> {problem}</p>
      <p className="mb-1"><strong>Solution:</strong> {solution}</p>
      <p><strong>Results:</strong> {results}</p>
    </motion.article>
  );
}
