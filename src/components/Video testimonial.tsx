// src/components/VideoTestimonial.tsx

interface VideoTestimonialProps {
  videoId: string;
  author: string;
  location: string;
}

const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  videoId,
  author,
  location,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="aspect-video mb-4">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`Testimonial from ${author}`}
          className="w-full h-full rounded"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p className="font-semibold">{author}</p>
      <p className="text-sm text-gray-600">{location}</p>
    </div>
  );
};

export default VideoTestimonial;

