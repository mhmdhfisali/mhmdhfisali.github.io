import { client } from "@/sanity";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ResearchMetrics from "@/components/ResearchMetrics";
import ExperienceEducation from "@/components/ExperienceEducation";
import Certifications from "@/components/Certifications";
import MediaContent from "@/components/MediaContent";
import Posts from "@/components/Posts";
import ScrollReveal from "@/components/ScrollReveal";
import ContactDrawer from "@/components/ContactDrawer";

async function getData() {
  const profileQuery = `*[_type == "profile"][0]`;
  const projectsQuery = `*[_type == "project"] | order(featuredOrder asc, _createdAt desc)`;
  const skillsQuery = `*[_type == "skill"]`;
  const experiencesQuery = `*[_type == "experience"] | order(startDate desc)`;
  const certificationsQuery = `*[_type == "certification"] | order(order asc, _createdAt desc)`;
  const educationsQuery = `*[_type == "education"] | order(startDate desc)`;
  const postsQuery = `*[_type == "post"] | order(publishedAt desc)`;
  const researchMetricsQuery = `*[_type == "researchMetric"]`;
  const mediaContentsQuery = `*[_type == "mediaContent"]`;

  const [
    profile,
    projects,
    skills,
    experiences,
    certifications,
    educations,
    posts,
    researchMetrics,
    mediaContents,
  ] = await Promise.all([
    client.fetch(profileQuery),
    client.fetch(projectsQuery),
    client.fetch(skillsQuery),
    client.fetch(experiencesQuery),
    client.fetch(certificationsQuery),
    client.fetch(educationsQuery),
    client.fetch(postsQuery),
    client.fetch(researchMetricsQuery),
    client.fetch(mediaContentsQuery),
  ]);

  return {
    profile,
    projects,
    skills,
    experiences,
    certifications,
    educations,
    posts,
    researchMetrics,
    mediaContents,
  };
}

export default async function Home() {
  const {
    profile,
    projects,
    skills,
    experiences,
    certifications,
    educations,
    posts,
    researchMetrics,
    mediaContents,
  } = await getData();

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
      {/* Dynamic Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-[120px] dark:opacity-70 opacity-30 rounded-full" />
      </div>

      <Navbar profile={profile} />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-36 pb-16 md:pb-24 space-y-20 sm:space-y-32">
        {/* Hero Section */}
        <ScrollReveal direction="up">
          <div id="beranda" className="scroll-mt-32">
            <Hero profile={profile} />
          </div>
        </ScrollReveal>

        {/* Keahlian & Teknologi (Animasi 3D dari Kiri) */}
        <ScrollReveal direction="left">
          <div id="skills" className="scroll-mt-28">
            <Skills skills={skills} />
          </div>
        </ScrollReveal>

        {/* Katalog Proyek (Animasi 3D dari Kanan) */}
        <ScrollReveal direction="right">
          <div id="projects" className="scroll-mt-28">
            <Projects projects={projects} />
          </div>
        </ScrollReveal>

        {/* Metrik Riset & Pencapaian */}
        <ScrollReveal direction="up">
          <ResearchMetrics researchMetrics={researchMetrics} />
        </ScrollReveal>

        {/* Timeline Terhubung: Pengalaman & Pendidikan */}
        <ScrollReveal direction="up">
          <div id="experience" className="scroll-mt-28">
            <ExperienceEducation
              experiences={experiences}
              educations={educations}
            />
          </div>
        </ScrollReveal>

        {/* Sertifikasi & Lisensi (Animasi 3D dari Kiri) */}
        <ScrollReveal direction="left">
          <Certifications certifications={certifications} />
        </ScrollReveal>

        {/* Portofolio Media & Kreatif (Animasi 3D dari Kanan) */}
        <ScrollReveal direction="right">
          <div id="media" className="scroll-mt-28">
            <MediaContent mediaContents={mediaContents} />
          </div>
        </ScrollReveal>

        {/* Artikel & Publikasi Ilmiah */}
        <ScrollReveal direction="up">
          <Posts posts={posts} />
        </ScrollReveal>

        {/* Seksi Kontak Cepat & Salin Email */}
        <ScrollReveal direction="up">
          <div id="kontak" className="scroll-mt-28">
            <ContactDrawer
              email={profile?.email}
              githubUrl={profile?.githubUrl}
              linkedinUrl={profile?.linkedinUrl}
            />
          </div>
        </ScrollReveal>
      </main>

      {/* Footer Minimalis */}
      <footer className="relative z-10 w-full border-t border-gray-200 dark:border-white/[0.08] mt-16 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400 font-mono">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            {profile?.name || "Muhamad Hafis Ali"}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] opacity-80">
            <span>Next.js App Router</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Sanity CMS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
