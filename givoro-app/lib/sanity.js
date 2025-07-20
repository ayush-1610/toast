import { createClient } from '@sanity/client';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;

let client;
if (projectId && dataset) {
  client = createClient({ projectId, dataset, apiVersion: '2023-01-01', useCdn: true });
}

export async function getPosts() {
  if (!client) return [];
  return await client.fetch(`*[_type == "post"]{ _id, title, slug, excerpt }`);
}

export async function getCaseStudies() {
  if (!client) return [
    { _id: 'example', title: 'Pune Political Outreach 2024', problem: 'Low visibility in local wards', solution: '12,000 branded water bottles across 10 stalls over 5 days with live scan tracking', results: '11,200 scans, 21% re-scan rate, QR survey collected 450+ email leads' },
  ];
  return await client.fetch(`*[_type == "caseStudy"]{ _id, title, problem, solution, results }`);
}

export async function getTeam() {
  if (!client) return [];
  return await client.fetch(`*[_type == "team"]{ _id, name, role, bio, image }`);
}

export default client;
