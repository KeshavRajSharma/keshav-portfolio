import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProjectDetail } from "@/components/projects/project-detail";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.seo.title,
    description: project.seo.description,

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    openGraph: {
      type: "website",
      url: `/projects/${project.slug}`,
      title: project.seo.title,
      description: project.seo.description,
    },

    twitter: {
      card: "summary_large_image",
      title: project.seo.title,
      description: project.seo.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main id="main-content">
        <ProjectDetail project={project} />
      </main>

      <Footer />
    </>
  );
}
