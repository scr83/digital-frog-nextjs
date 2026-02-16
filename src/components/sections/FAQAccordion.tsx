import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title: string;
  items: FAQItem[];
}

export function FAQAccordion({ title, items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-up animation-delay-100">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-750 transition-colors"
                >
                  <h3 className="font-semibold text-white pr-4 font-outfit">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`text-cyan-400 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 border-t border-gray-700">
                    <p className="text-gray-400 pt-4 font-inter">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

FAQAccordion.displayName = 'FAQAccordion';