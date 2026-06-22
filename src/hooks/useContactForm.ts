'use client';

import { useState } from 'react';
import type { ContactFormData } from '@/types/contact';

type ContactSubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const EMPTY_FORM: ContactFormData = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
};

export interface UseContactFormReturn {
  formData: ContactFormData;
  status: ContactSubmitStatus;
  errorMessage: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  resetStatus: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [status, setStatus] = useState<ContactSubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data: { success: boolean; message?: string } = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setFormData(EMPTY_FORM);
      } else {
        setStatus('error');
        setErrorMessage(data.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'Something went wrong. Please try again or email us directly at corestacktechph@gmail.com.'
      );
    }
  };

  const resetStatus = () => {
    setStatus('idle');
    setErrorMessage('');
  };

  return { formData, status, errorMessage, handleChange, handleSubmit, resetStatus };
}
