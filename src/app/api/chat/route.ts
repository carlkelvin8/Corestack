import { NextResponse } from 'next/server';
import { searchKnowledge } from '@/data/companyInfo';

const SYSTEM_PROMPT = `You are CoreStack AI, the official assistant of Corestack Technologies. 
You answer questions about the company's services, team, projects, process, and technology. 
Be concise, friendly, and helpful. If you don't know the answer, suggest the user contact 
corestacktechnologiesph@gmail.com. Always represent Corestack Technologies professionally.`;

function buildContext(query: string): string {
  const knowledge = searchKnowledge(query);
  if (!knowledge) return '';
  return `\n\nRelevant business information:\n${knowledge}`;
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const userMessage = messages[messages.length - 1]?.content || '';

    const context = buildContext(userMessage);
    const apiKey = process.env.OPENAI_API_KEY;

    if (apiKey) {
      const systemMsg = SYSTEM_PROMPT + (context ? `\n\nUse this business data to answer:\n${context}` : '');

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: systemMsg },
            ...messages.slice(-10),
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const err = await response.text();
        console.error('OpenAI API error:', err);
        throw new Error('AI service unavailable');
      }

      const data = await response.json();
      return NextResponse.json({ reply: data.choices[0].message.content });
    }

    // Fallback: knowledge-based response
    const reply = context
      ? context
      : `I'm CoreStack AI! I can answer questions about:\n\n` +
        `• Our services (AI, web dev, SaaS, automation)\n` +
        `• Our team members\n` +
        `• Our projects and portfolio\n` +
        `• Our development process\n` +
        `• Tech stack and tools\n` +
        `• Pricing and project inquiries\n` +
        `• Company information\n\n` +
        `What would you like to know?`;

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { reply: 'Sorry, I encountered an issue. Please email corestacktechnologiesph@gmail.com for assistance.' },
      { status: 200 }
    );
  }
}
