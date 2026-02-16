'use client';

import { useState } from 'react';
import { Check, Mail, Phone, MapPin, Clock, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

type FormStep = 1 | 2 | 3;

interface FormData {
  services: string[];
  budget: string;
  project: string;
  timeline: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  preferredLanguage: 'en' | 'es';
}

const Contact = () => {
  const { t, language } = useLanguage();
  const [step, setStep] = useState<FormStep>(1);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    services: [],
    budget: '',
    project: '',
    timeline: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    preferredLanguage: language,
  });

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const canProceed = () => {
    if (step === 1) return formData.services.length > 0 && formData.budget;
    if (step === 2) return formData.project.length >= 10;
    if (step === 3) return formData.name && formData.email;
    return false;
  };

  const serviceOptions = [
    { id: 'seo', label: t('contact.service.seo') },
    { id: 'webdev', label: t('contact.service.webdev') },
    { id: 'automation', label: t('contact.service.automation') },
    { id: 'all', label: t('contact.service.all') },
  ];

  const budgetOptions = [
    { value: 'under5k', label: t('contact.budget.under5k') },
    { value: '5k15k', label: t('contact.budget.5k15k') },
    { value: '15k50k', label: t('contact.budget.15k50k') },
    { value: '50kplus', label: t('contact.budget.50kplus') },
    { value: 'retainer', label: t('contact.budget.retainer') },
  ];

  const timelineOptions = [
    { value: 'asap', label: t('contact.timeline.asap') },
    { value: '1-3', label: t('contact.timeline.1-3') },
    { value: '3-6', label: t('contact.timeline.3-6') },
    { value: '6plus', label: t('contact.timeline.6plus') },
  ];

  if (isSuccess) {
    return (
        <main className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20">
          <div className="section-container">
            <div className="max-w-md mx-auto text-center animate-fade-up">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                <Check className="text-secondary" size={40} />
              </div>
              <h1 className="text-2xl font-bold mb-4">{t('contact.success')}</h1>
            </div>
          </div>
        </main>
    );
  }

  return (
      <main className="min-h-screen bg-gradient-hero pt-24 pb-16">
        <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('contact.title')}</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 animate-fade-up animation-delay-100">
              {/* Progress steps */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                        s <= step
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {s < step ? <Check size={18} /> : s}
                    </div>
                    <span className={`ml-3 hidden sm:block text-sm ${
                      s <= step ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {s === 1 && t('contact.step1.title')}
                      {s === 2 && t('contact.step2.title')}
                      {s === 3 && t('contact.step3.title')}
                    </span>
                    {s < 3 && (
                      <div className={`w-16 sm:w-24 h-1 mx-4 rounded ${
                        s < step ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 1: Service Interest */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      {t('contact.step1.title')}
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {serviceOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => handleServiceToggle(option.id)}
                          className={`p-4 rounded-lg border text-left transition-all ${
                            formData.services.includes(option.id)
                              ? 'border-primary bg-primary/10 text-foreground'
                              : 'border-border hover:border-primary/50 text-muted-foreground'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              formData.services.includes(option.id)
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground'
                            }`}>
                              {formData.services.includes(option.id) && (
                                <Check className="text-primary-foreground" size={14} />
                              )}
                            </div>
                            <span>{option.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      {t('contact.budget')}
                    </label>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {budgetOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: option.value })}
                          className={`p-3 rounded-lg border text-sm transition-all ${
                            formData.budget === option.value
                              ? 'border-primary bg-primary/10 text-foreground'
                              : 'border-border hover:border-primary/50 text-muted-foreground'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium mb-3">
                      {t('contact.project')}
                    </label>
                    <textarea
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full h-40 px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none resize-none text-foreground placeholder:text-muted-foreground"
                      placeholder="..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      {t('contact.timeline')}
                    </label>
                    <div className="grid sm:grid-cols-4 gap-3">
                      {timelineOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: option.value })}
                          className={`p-3 rounded-lg border text-sm transition-all ${
                            formData.timeline === option.value
                              ? 'border-primary bg-primary/10 text-foreground'
                              : 'border-border hover:border-primary/50 text-muted-foreground'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.name')} *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none text-foreground"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.email')} *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none text-foreground"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.company')}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.phone')}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">
                      {t('contact.language')}
                    </label>
                    <div className="flex gap-3">
                      {(['en', 'es'] as const).map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredLanguage: lang })}
                          className={`px-6 py-2 rounded-lg border transition-all ${
                            formData.preferredLanguage === lang
                              ? 'border-primary bg-primary/10 text-foreground'
                              : 'border-border hover:border-primary/50 text-muted-foreground'
                          }`}
                        >
                          {lang === 'en' ? 'English' : 'Español'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                {step > 1 ? (
                  <Button
                    variant="ghost"
                    onClick={() => setStep((step - 1) as FormStep)}
                  >
                    <ArrowLeft size={18} className="mr-2" />
                    {t('contact.back')}
                  </Button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <Button
                    variant="gradient"
                    onClick={() => setStep((step + 1) as FormStep)}
                    disabled={!canProceed()}
                  >
                    {t('contact.next')}
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                ) : (
                  <Button
                    variant="gradient"
                    onClick={handleSubmit}
                    disabled={!canProceed() || isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      <>
                        {t('contact.send')}
                        <ArrowRight size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Alternative contact methods */}
          <div className="animate-fade-up animation-delay-200">
            <div className="glass rounded-2xl p-8 sticky top-24">
              <h3 className="font-semibold mb-6">{t('contact.alternative')}</h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:jump@digitalfrog.co"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <span>jump@digitalfrog.co</span>
                </a>

                <a
                  href="tel:+56999730352"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <span>+56 9 9973 0352</span>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <span>Santiago, Chile</span>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <span>{t('contact.available')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
  );
};

export default Contact;
