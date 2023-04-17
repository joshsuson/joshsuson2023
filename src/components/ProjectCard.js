import Image from "next/image";
import josh from "../../public/josh.jpg";

export default function ProjectCard({ project }) {
  return (
    <div className="relative border-2 border-black large-custom-shadow flex flex-col">
      <h3 className="absolute bg-champagne-300 py-1 px-4 uppercase border-b-2 border-r-2 text-lg border-black">
        {project.agency}
      </h3>

      <div>
        <Image
          src={`http:${project.image.source}`}
          width={project.image.width}
          height={project.image.height}
          className="w-full aspect-video object-cover"
          alt={project.title}
          placeholder="blur"
          blurDataURL={project.blurData}
        />
      </div>
      <div className="relative flex flex-col h-full">
        <h2 className="absolute -top-8 lg:-top-10 text-xl lg:text-2xl pl-2 tracking-wider uppercase font-black text-[#53cc83] text-border">
          {project.title}
        </h2>
        <div className="px-2">
          <p className="font-bold text-sm uppercase mb-1 mt-2">
            {project.tech}
          </p>
          <p className="text-lg mb-4">{project.description}</p>
        </div>
        <div className="mt-auto">
          <a
            href={project.url}
            className="block border-t-2 text-center text-2xl tracking-wide font-semibold border-black bg-carnation-400 py-4 px-6"
          >
            See the site
          </a>
        </div>
      </div>
    </div>
  );
}
