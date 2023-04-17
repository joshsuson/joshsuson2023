import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import getAllWork from "@/utils";

export async function getServerSideProps() {
  const allWork = await getAllWork();
  const workFields = allWork.map((entry) => entry.fields);

  return {
    props: {
      work: workFields,
    },
  };
}

export default function WorkPage({ work }) {
  return (
    <Layout>
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
    </Layout>
  );
}
