import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Mail, ArrowUpRight, CheckCircle } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useLanguage } from '../i18n';

const contactItems = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '082175495541',
    href: 'https://wa.me/6282175495541',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'wearemavost@gmail.com',
    href: 'mailto:wearemavost@gmail.com',
  },
];

const socials = [
  { icon: FaInstagram, label: "Instagram Mavost", href: "https://instagram.com/mavost.id" },
  { icon: FaFacebookF, label: "Facebook Mavost", href: "https://facebook.com/mavost.id" },
];

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;
const FORMSPREE_ENDPOINT_PATTERN = /^https:\/\/formspree\.io\/f\/[\w-]+$/;

type FormState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

function Field({
  label,
  index,
  error,
  children,
}: {
  label: string;
  index: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <label className="label text-bone-300">{label}</label>
        <span className="font-mono text-[0.6rem] text-bone-400/60">{index}</span>
      </div>
      {children}
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const validate = () => {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = t.contact.nameRequired;
    if (!form.email.trim()) errs.email = t.contact.emailRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t.contact.invalidEmail;
    if (!form.projectType) errs.projectType = t.contact.projectRequired;
    if (!form.message.trim()) errs.message = t.contact.messageRequired;
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError('');
    setLoading(true);

    if (!FORMSPREE_ENDPOINT || !FORMSPREE_ENDPOINT_PATTERN.test(FORMSPREE_ENDPOINT)) {
      setSubmitError(t.contact.notConnected);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          _gotcha: honeypot,
          _subject: `New inquiry from ${form.name}`,
          _replyto: form.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Formspree request failed');
      }

      setSubmitted(true);
    } catch {
      setSubmitError(t.contact.submitFailed);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-ink-800 border border-ink-700 text-bone-50 text-sm placeholder-ink-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500/40 transition-all duration-200';

  return (
    <section id="contact" className="py-24 lg:py-32 bg-bone-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-6 mb-12 lg:mb-16"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="label text-primary-600">/ 06 — {t.contact.label}</span>
              <span className="h-px w-10 bg-ink-300" />
            </div>
            <h2 className="font-satoshi font-black text-4xl lg:text-6xl text-ink-900 leading-[0.95] tracking-tightest text-balance">
              {t.contact.headlineBefore}
              <br />
              <span className="ink-accent">{t.contact.headlineAccent}</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-ink-600 leading-relaxed">
              {t.contact.description}
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Left: Contact info — dark panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 bg-ink-900 rounded-2xl p-7 lg:p-8 flex flex-col"
          >
            <p className="label text-primary-400 mb-8">{t.contact.directChannels}</p>

            <div className="space-y-3 mb-8">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                  className="group flex items-center justify-between gap-4 p-4 rounded-xl border hairline-bone hover:border-primary-500/50 hover:bg-ink-800 transition-all duration-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full border border-bone-50/20 flex items-center justify-center text-bone-200 group-hover:border-primary-500 group-hover:text-primary-400 transition-colors">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="label text-bone-400 mb-1">{item.label}</p>
                      <p className="text-sm font-semibold text-bone-100 group-hover:text-primary-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-bone-500 group-hover:text-primary-400 group-hover:rotate-45 transition-all duration-300"
                  />
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="mb-8">
              <p className="label text-bone-400 mb-4">{t.contact.followUs}</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    data-cursor
                    className="w-11 h-11 rounded-full border hairline-bone flex items-center justify-center text-bone-300 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={17} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA — pushed to bottom */}
            <motion.a
              href="https://wa.me/6282175495541"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor
              className="mt-auto flex items-center justify-center gap-2.5 py-4 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-400 transition-colors duration-200"
            >
              <MessageCircle size={20} className="fill-current" />
              {t.contact.chatWhatsApp}
            </motion.a>
          </motion.div>

          {/* Right: Form — dark panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-7 bg-ink-800 rounded-2xl p-7 lg:p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="font-satoshi font-black text-2xl text-bone-50">
                  {t.contact.inquirySent}
                </h3>
                <p className="text-bone-300 max-w-sm">
                  {t.contact.thankYou}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError('');
                    setHoneypot('');
                    setForm({ name: '', email: '', projectType: '', budget: '', message: '' });
                  }}
                  className="mt-2 text-sm text-primary-400 hover:underline font-medium"
                >
                  {t.contact.sendAnother}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={t.contact.yourName} index="/001" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ole Romeny"
                      className={`${inputClass} ${errors.name ? 'border-red-500/60' : ''}`}
                    />
                  </Field>
                  <Field label={t.contact.emailAddress} index="/002" error={errors.email}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="romeny@example.com"
                      className={`${inputClass} ${errors.email ? 'border-red-500/60' : ''}`}
                    />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={t.contact.projectType} index="/003" error={errors.projectType}>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      className={`${inputClass} ${errors.projectType ? 'border-red-500/60' : ''}`}
                    >
                      <option value="">{t.contact.selectType}</option>
                      {t.contact.projectTypes.map((projectType) => (
                        <option key={projectType} value={projectType}>{projectType}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label={t.contact.budgetRange} index="/004">
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">{t.contact.selectBudget}</option>
                      {t.contact.budgets.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                />

                <Field label={t.contact.message} index="/005" error={errors.message}>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className={`${inputClass} resize-none ${errors.message ? 'border-red-500/60' : ''}`}
                  />
                </Field>

                {submitError && (
                  <p role="alert" className="text-sm text-red-400">
                    {submitError}
                  </p>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={loading}
                  data-cursor
                  className="group w-full flex items-center justify-center gap-2.5 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-500 disabled:opacity-70 transition-all duration-200"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.sendInquiry}
                      <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
