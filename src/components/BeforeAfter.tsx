import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface Project {
  before: string;
  after: string;
  description?: string;
}

interface BeforeAfterProps {
  projects: Project[];
}

// Custom Arrow Components
const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10
             w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm
             border-2 border-secondary/40 shadow-lg
             flex items-center justify-center
             hover:bg-secondary hover:border-secondary
             transition-all duration-300 hover:scale-110
             group"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
  </button>
);

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10
             w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm
             border-2 border-secondary/40 shadow-lg
             flex items-center justify-center
             hover:bg-secondary hover:border-secondary
             transition-all duration-300 hover:scale-110
             group"
    aria-label="Next slide"
  >
    <ChevronRight className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
  </button>
);

const BeforeAfter: React.FC<BeforeAfterProps> = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots !bottom-6",
    customPaging: () => (
      <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-secondary 
                       transition-all duration-300 hover:scale-125" />
    ),
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-6 py-2 rounded-full bg-secondary/10 border-2 border-secondary/30 mb-4">
            <span className="text-secondary font-bold text-sm tracking-widest">TRANSFORMATIONS</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-primary mb-6">
            Real Projects,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Real Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            See the dramatic transformations we've delivered for homeowners just like you.
            Every project backed by our satisfaction guarantee.
          </p>
        </div>

        {/* Slider Container with Premium Styling */}
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden 
                        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                        border-4 border-secondary/20">
            
            <Slider {...settings}>
              {projects.map((project, i) => (
                <div key={i} className="pb-16 pt-8 px-4">
                  
                  {/* Before/After Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8">
                    
                    {/* Before Image */}
                    <div className="group">
                      <div className="relative overflow-hidden rounded-2xl 
                                    shadow-xl hover:shadow-2xl transition-shadow duration-300">
                        {/* Badge */}
                        <div className="absolute top-4 left-4 z-10
                                      px-4 py-2 rounded-full
                                      bg-gradient-to-r from-gray-600 to-gray-800
                                      shadow-lg border-2 border-white/30">
                          <span className="text-white font-bold text-sm">BEFORE</span>
                        </div>
                        
                        <img
                          src={project.before}
                          alt="Before project"
                          className="w-full h-[400px] object-cover 
                                   group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="group relative">
                      <div className="relative overflow-hidden rounded-2xl 
                                    shadow-xl hover:shadow-2xl transition-shadow duration-300
                                    ring-4 ring-secondary/20 hover:ring-secondary/40 transition-all">
                        {/* Premium Badge */}
                        <div className="absolute top-4 left-4 z-10
                                      px-4 py-2 rounded-full
                                      bg-gradient-to-r from-secondary to-accent
                                      shadow-[0_0_20px_rgba(212,175,55,0.4)]
                                      border-2 border-white/30">
                          <span className="text-primary font-bold text-sm">AFTER ✨</span>
                        </div>
                        
                        <img
                          src={project.after}
                          alt="After project"
                          className="w-full h-[400px] object-cover 
                                   group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Star Burst Effect (Desktop) */}
                      <div className="hidden md:block absolute -top-3 -right-3 w-16 h-16 
                                    bg-gradient-to-br from-secondary to-accent rounded-full
                                    flex items-center justify-center
                                    shadow-[0_0_30px_rgba(212,175,55,0.5)]
                                    animate-bounce">
                        <Star className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  {project.description && (
                    <div className="max-w-3xl mx-auto">
                      <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10
                                    border-2 border-secondary/20 backdrop-blur-sm">
                        
                        {/* Description */}
                        <p className="text-center text-gray-700 text-lg font-medium mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Project Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {[
                            { icon: CheckCircle, text: 'On-Time Completion' },
                            { icon: Star, text: '100% Satisfaction' },
                            { icon: CheckCircle, text: 'Under Budget' },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 justify-center
                                                    text-sm text-gray-600">
                              <item.icon className="w-5 h-5 text-secondary" />
                              <span className="font-semibold">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-6 font-medium">
            Ready to see your own transformation?
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 
                     bg-gradient-to-r from-secondary to-accent
                     text-primary font-heading font-black px-10 py-5 rounded-xl
                     shadow-[0_10px_40px_rgba(212,175,55,0.4)]
                     hover:shadow-[0_15px_50px_rgba(212,175,55,0.6)]
                     hover:scale-105 transition-all duration-300 text-lg"
          >
            Get Your Free Estimate
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Custom Slick Dots Styling */}
      <style>{`
        .slick-dots li button:before {
          display: none;
        }
        .slick-dots li.slick-active button {
          background: #D4AF37 !important;
          transform: scale(1.5);
        }
      `}</style>
    </section>
  );
};

export default BeforeAfter;
