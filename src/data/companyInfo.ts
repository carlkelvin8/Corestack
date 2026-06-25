import { companyDetails, teamMembersData } from './companyData';
import { coreServices, missionStatement, visionStatement } from './aboutData';
import { servicesFeaturesData, processStepsData } from './homeData';
import { faqs } from './supportData';
import { projectsData } from './projectsData';
import { techStack } from './documentationData';
import { securityPrinciples, securityInfrastructure, appSecurity } from './legalData';
import { statusServices } from './statusData';

const teamList = teamMembersData.map(m => `${m.name} — ${m.role} (${m.department}): ${m.description}`).join('\n');

const projectsList = projectsData.map(p =>
  `• ${p.title} (${p.category}): ${p.shortDescription}`
).join('\n');

const servicesList = servicesFeaturesData.map(s =>
  `• ${s.title}: ${s.description}`
).join('\n');

const processSteps = processStepsData.map(s =>
  `• ${s.title}: ${s.description}`
).join('\n');

const faqList = faqs.map(f =>
  `Q: ${f.q}\nA: ${f.a}`
).join('\n\n');

const techStackList = techStack.map(t =>
  `${t.category}: ${t.items.join(', ')}`
).join('\n');

const securityInfo = `Principles: ${securityPrinciples.join(', ')}\n\nInfrastructure:\n${securityInfrastructure.map(s => `• ${s.title}: ${s.desc}`).join('\n')}\n\nApp Security: ${appSecurity.join(', ')}`;

const statusInfo = statusServices.map(s => `• ${s.name}: ${s.status}`).join('\n');

export const companyKnowledgeBase = `
=== COMPANY PROFILE ===
Name: ${companyDetails.name}
Email: ${companyDetails.email}
Location: ${companyDetails.location}
Website: ${companyDetails.website}
Founded: 2026

Mission: ${missionStatement}
Vision: ${visionStatement}

Core Services: ${coreServices.join(', ')}

=== SERVICES ===
${servicesList}

=== PROCESS ===
${processSteps}

=== TEAM ===
${teamList}

=== PROJECTS ===
${projectsList}

=== FAQ ===
${faqList}

=== TECH STACK ===
${techStackList}

=== SECURITY & COMPLIANCE ===
${securityInfo}

=== SYSTEM STATUS ===
${statusInfo}
`;

export function searchKnowledge(query: string): string {
  const q = query.toLowerCase();
  const results: string[] = [];

  const sections: { name: string; content: string }[] = [
    { name: 'company', content: companyDetails.name + ' ' + companyDetails.location + ' ' + companyDetails.email + ' ' + companyDetails.website },
    { name: 'services', content: coreServices.join(' ') + ' ' + servicesFeaturesData.map(s => s.title + ' ' + s.description).join(' ') },
    { name: 'process', content: processStepsData.map(s => s.title + ' ' + s.description).join(' ') },
    { name: 'team', content: teamMembersData.map(m => m.name + ' ' + m.role + ' ' + m.description).join(' ') },
    { name: 'projects', content: projectsData.map(p => p.title + ' ' + p.category + ' ' + p.shortDescription).join(' ') },
    { name: 'faq', content: faqs.map(f => f.q + ' ' + f.a).join(' ') },
    { name: 'tech', content: techStack.map(t => t.category + ' ' + t.items.join(' ')).join(' ') },
    { name: 'security', content: securityInfo },
    { name: 'status', content: statusInfo },
  ];

  for (const section of sections) {
    if (section.content.toLowerCase().includes(q)) {
      results.push(section.name);
    }
  }

  if (results.length === 0) return '';

  const answerParts: string[] = [];

  if (results.includes('company')) {
    answerParts.push(`${companyDetails.name} is based in ${companyDetails.location}, Philippines. You can reach us at ${companyDetails.email} or visit ${companyDetails.website}. We were founded in 2026.`);
  }
  if (results.includes('services')) {
    const matched = servicesFeaturesData.filter(s =>
      s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    );
    if (matched.length > 0) {
      matched.forEach(s => answerParts.push(`${s.title}: ${s.description}`));
    } else {
      answerParts.push(`We offer: ${coreServices.join(', ')}.`);
    }
  }
  if (results.includes('process')) {
    answerParts.push(`Our process:\n${processSteps}`);
  }
  if (results.includes('team')) {
    const matched = teamMembersData.filter(m =>
      m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q) || m.department.toLowerCase().includes(q)
    );
    if (matched.length > 0) {
      matched.forEach(m => answerParts.push(`${m.name} — ${m.role}, ${m.department}. ${m.description}`));
    } else {
      answerParts.push(`Our team members: ${teamMembersData.map(m => `${m.name} (${m.role})`).join(', ')}.`);
    }
  }
  if (results.includes('projects')) {
    const matched = projectsData.filter(p =>
      p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
    );
    if (matched.length > 0) {
      matched.forEach(p => answerParts.push(`${p.title} (${p.category}): ${p.shortDescription}`));
    } else {
      answerParts.push(`Our projects:\n${projectsList}`);
    }
  }
  if (results.includes('faq')) {
    const matched = faqs.filter(f =>
      f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
    if (matched.length > 0) {
      matched.forEach(f => answerParts.push(`${f.q}\n${f.a}`));
    } else {
      answerParts.push(faqs.slice(0, 3).map(f => `${f.q}\n${f.a}`).join('\n\n'));
    }
  }
  if (results.includes('tech')) {
    answerParts.push(`Our tech stack:\n${techStackList}`);
  }
  if (results.includes('security')) {
    answerParts.push(`${companyDetails.name} follows these security principles: ${securityPrinciples.join(', ')}. We implement data encryption, secure hosting, access management, and continuous monitoring.`);
  }
  if (results.includes('status')) {
    answerParts.push(`Current system status:\n${statusInfo}`);
  }

  if (answerParts.length === 0) {
    return '';
  }

  return answerParts.join('\n\n');
}
