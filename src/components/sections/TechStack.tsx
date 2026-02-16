interface TechStackProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
}

export function TechStack({ title, subtitle, description, technologies }: TechStackProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-6 font-inter">
            {subtitle}
          </p>
          <p className="text-gray-300 font-inter">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-100">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-full text-gray-300 font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

TechStack.displayName = 'TechStack';