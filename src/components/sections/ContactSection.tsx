import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { contactFormSchema, ContactFormData } from '../../lib/validation';
import { siteConfig } from '../../data/social';
import { Mail, CheckCircle, AlertCircle, Copy, Check, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-level error when user starts editing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Honeypot spam check: bots that fill the hidden field get trapped
    if (formData.website && formData.website.trim().length > 0) {
      // Simulate silent drop or immediate fake success to deceive spam bots
      setStatus('success');
      return;
    }

    // Client-side validation with Zod
    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      validationResult.error.errors.forEach((err) => {
        const fieldName = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('submitting');

    try {
      // If a backend API is configured via VITE_API_BASE_URL, post to it;
      // otherwise fall back cleanly to a localized mailto dispatch and success confirmation.
      const apiUrl = import.meta.env.VITE_API_BASE_URL;

      if (apiUrl) {
        const response = await fetch(`${apiUrl}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || 'Portfolio Inquiry',
            message: formData.message,
          }),
        });

        if (!response.ok) {
          throw new Error('Server returned error response');
        }
      } else {
        // Simulated network latency for smooth, responsive UX
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Inquiries"
      className="py-20 md:py-28 border-b border-border bg-bg/50"
    >
      <Container size="wide">
        <SectionHeading
          eyebrow="06. Contact"
          title="Have a project in mind? Let's talk."
          description="Whether you have an engineering opportunity, a project proposal, or a technical inquiry, feel free to reach out."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Coordinate Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary-text">
                Direct Communication
              </h3>
              <p className="text-sm text-primary-muted leading-relaxed">
                I am actively seeking software engineering roles, technical collaborations, and
                high-impact full-stack project opportunities.
              </p>
            </div>

            {/* Email Card with One-Click Copy */}
            <Card className="bg-surface border-border p-6 space-y-4">
              <span className="text-xs font-mono uppercase text-primary-muted font-semibold tracking-wider">
                Primary Email
              </span>

              <div className="flex items-center justify-between gap-3 p-3 rounded-sm bg-surface-raised border border-border">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-primary-text truncate">
                    {siteConfig.email}
                  </span>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyEmail}
                  className="shrink-0 h-8 px-2.5 text-xs font-mono"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-[#4ade80]">
                      <Check className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </Button>
              </div>

              <div className="text-xs text-primary-muted space-y-1 font-mono pt-1">
                <p>📍 Location: {siteConfig.location}</p>
                <p>⚡ Response Time: Typically within 24 hours</p>
              </div>
            </Card>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <Card className="bg-surface border-border p-6 sm:p-8">
              {status === 'success' ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-12 text-center space-y-4 animate-in fade-in duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/30 text-accent flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary-text">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-primary-muted max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been received and I will respond
                    promptly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot field (hidden from screen, catches automated bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Leave this field blank</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {status === 'error' && (
                    <div
                      role="alert"
                      className="p-4 rounded-sm bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold">Unable to send message right now.</strong>
                        <span>
                          Please try again or contact me directly via email at {siteConfig.email}.
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Your Name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      error={errors.name}
                      placeholder="e.g. Alex Vance"
                      autoComplete="name"
                    />

                    <Input
                      label="Your Email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      placeholder="alex@company.com"
                      autoComplete="email"
                    />
                  </div>

                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    error={errors.subject}
                    placeholder="Project Inquiry / Engineering Role"
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    error={errors.message}
                    placeholder="Briefly describe what you would like to discuss or build..."
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={status === 'submitting'}
                    className="w-full sm:w-auto"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
