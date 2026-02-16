interface CaseStudyResult {
  metric: string;
  label: string;
  detail?: string;
}

interface CaseStudyProps {
  title: string;
  subtitle: string;
  featured: {
    type: string;
    client: string;
    challenge: string;
    solution: string;
    results: CaseStudyResult[];
    quote: string;
    quoteName: string;
  };
  additionalMetrics?: Array<{
    value: string;
    label: string;
    client: string;
  }>;
}

export function CaseStudyFeature({ title, subtitle, featured, additionalMetrics }: CaseStudyProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-outfit">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-400 font-inter">
            {subtitle}
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8 mb-12 animate-fade-up animation-delay-100">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
                {featured.type}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-outfit">
                {featured.client}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Challenge</h4>
                  <p className="text-gray-400 font-inter">{featured.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Solution</h4>
                  <p className="text-gray-400 font-inter">{featured.solution}</p>
                </div>
              </div>
            </div>

            <div>
              {/* Results */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {featured.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-400">
                      {result.label}
                    </div>
                    {result.detail && (
                      <div className="text-xs text-gray-500 mt-1">
                        {result.detail}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-gray-700 border border-gray-600 rounded-xl p-6">
                <blockquote className="text-gray-300 italic mb-4 font-inter">
                  "{featured.quote}"
                </blockquote>
                <div className="text-cyan-400 font-semibold">
                  {featured.quoteName}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        {additionalMetrics && (
          <div className="grid md:grid-cols-3 gap-6 animate-fade-up animation-delay-200">
            {additionalMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-lime-500 mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-300 font-medium mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-400">
                  {metric.client}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

CaseStudyFeature.displayName = 'CaseStudyFeature';