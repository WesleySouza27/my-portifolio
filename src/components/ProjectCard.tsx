type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  link: string;
};

export function ProjectCard({ title, image, description, link }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-full sm:w-[26rem] md:w-[31rem] lg:w-[34rem] hover:scale-105 transition">
      <img src={image} alt={title} className="w-full h-75 object-cover rounded-md mb-4" />
      <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 text-center md:text-base">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-semibold"
      >
        Ver projeto
      </a>
    </div>
  );
}