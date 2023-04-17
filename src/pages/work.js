import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import getAllWork from "@/utils";
import { getPlaiceholder } from "plaiceholder";

export async function getStaticProps() {
  const allWork = await getAllWork();
  const workFields = allWork.map((entry) => entry.fields);

  const workList = await Promise.all(
    workFields.map(async (project) => {
      const { base64 } = await getPlaiceholder(
        `https:${project.screenshot.fields.file.url}`
      );

      const item = {
        title: project.title,
        agency: project.agency,
        tech: project.tech,
        url: project.url,
        description: project.description,
        image: {
          source: project.screenshot.fields.file.url,
          width: project.screenshot.fields.file.details.image.width,
          height: project.screenshot.fields.file.details.image.height,
        },
        blurData: base64,
      };

      return item;
    })
  );

  return {
    props: {
      work: workList,
    },
  };
}

export default function WorkPage({ work }) {
  return (
    <>
      <div className="mt-12 px-4 lg:px-0">
        <h1 className="text-center text-4xl font-bold">My Work</h1>
        <p className="text-center mt-2 text-lg max-w-3xl mx-auto">
          I am currently working for an agency called Theory Communications and
          Design, which primarily works in the racing industry. Then I also work
          separately through freelance. Below you will find work that I have
          either completed on behalf of Theory or as an individual contractor.
        </p>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-12 px-4 xl:px-0">
        {work.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
