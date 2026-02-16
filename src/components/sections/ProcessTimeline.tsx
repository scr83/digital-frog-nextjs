interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
}

interface ProcessTimelineProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export function ProcessTimeline({ title, subtitle, steps }: ProcessTimelineProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-950">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-inter">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 animate-fade-up animation-delay-100">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-700 transform -translate-x-1/2 z-0"></div>
              )}
              
              {/* Step number */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-lime-500 flex items-center justify-center mx-auto mb-4 text-gray-950 font-bold text-lg relative z-10">
                {step.number}
              </div>
              
              {/* Step content */}
              <h3 className="text-lg font-semibold mb-2 text-white font-outfit">
                {step.title}
              </h3>
              <p className="text-sm text-cyan-400 mb-3 font-inter">
                {step.duration}
              </p>
              <p className="text-sm text-gray-400 font-inter">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

ProcessTimeline.displayName = 'ProcessTimeline';