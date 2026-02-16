import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface BuildItem {
  icon: string;
  title: string;
  description: string;
}

interface WhatWeBuildProps {
  title: string;
  subtitle: string;
  items: BuildItem[];
}

export function WhatWeBuild({ title, subtitle, items }: WhatWeBuildProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-inter">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up animation-delay-100">
          {(items || []).map((item, index) => {
            const IconComponent = (Icons as any)[item.icon] as LucideIcon;
            
            return (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-cyan-400/50 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-cyan-400/10 mb-4 w-fit group-hover:bg-cyan-400/20 transition-colors">
                  <IconComponent className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white font-outfit">
                  {item.title}
                </h3>
                <p className="text-gray-400 font-inter">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

WhatWeBuild.displayName = 'WhatWeBuild';