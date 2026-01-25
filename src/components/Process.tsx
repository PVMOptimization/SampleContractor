import { Phone, FileText, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Contact Us',
      icon: <Phone className="w-12 h-12" />,
      description: 'Call or fill out our form for a free consultation',
    },
    {
      number: 2,
      title: 'Free Estimate',
      icon: <FileText className="w-12 h-12" />,
      description: 'We provide a detailed, no-obligation quote',
    },
    {
      number: 3,
      title: 'Schedule Work',
      icon: <Calendar className="w-12 h-12" />,
      description: 'Choose a time that works for your schedule',
    },
    {
      number: 4,
      title: 'Quality Completion',
      icon: <CheckCircle className="w-12 h-12" />,
      description: 'We complete the job right, on-time, on-budget',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple Process, Outstanding Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make it easy to get the home improvements you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white shadow-xl">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] z-0">
                  <ArrowRight className="w-full h-8 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-gray-50 rounded-2xl p-8">
          <p className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Get your free estimate today and see why we're Austin's top-rated contractor
          </p>
          <a
            href="tel:5551234567"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-orange-600 text-white px-12 py-5 rounded-lg font-bold text-xl transition-all hover:scale-105 shadow-lg"
          >
            <Phone className="w-6 h-6" />
            CALL NOW: (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
