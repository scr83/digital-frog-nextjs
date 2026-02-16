import { Users, TrendingUp, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function TrustBar() {
  const { t } = useLanguage();

  const metrics = [
    { icon: Users, value: '8-10', label: t('trust.clients') },
    { icon: TrendingUp, value: '20%', label: t('trust.revenue') },
    { icon: Clock, value: '15hrs', label: t('trust.time') },
  ];

  return (
    <section className="py-12 bg-card/50 border-y border-border/50">
      <div className="section-container">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-center"
            >
              <metric.icon className="text-primary" size={24} />
              <div className="text-left">
                <span className="text-2xl font-bold text-foreground">{metric.value}</span>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
