// src/components/BeforeAfter.tsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Project {
  before: string;
  after: string;
  description?: string;
}

interface BeforeAfterProps {
  projects: Project[];
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false, // better for mobile
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <Slider {...settings}>
        {projects.map((project, i) => (
          <div key={i} className="pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before */}
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2 text-center md:text-left">
                  Before
                </p>
                <img
                  src={project.before}
                  alt="Before project"
                  className="w-full rounded-lg shadow-md object-cover"
                />
              </div>

              {/* After */}
              <div>
                <p className="text-sm font-semibold text-gray-500 mb-2 text-center md:text-left">
                  After
                </p>
                <img
                  src={project.after}
                  alt="After project"
                  className="w-full rounded-lg shadow-md object-cover"
                />
              </div>
            </div>

            {project.description && (
              <p className="mt-6 text-center text-gray-700 max-w-2xl mx-auto">
                {project.description}
              </p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BeforeAfter;
