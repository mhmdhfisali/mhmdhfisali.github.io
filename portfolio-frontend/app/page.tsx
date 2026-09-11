import Certifications from "@/components/Certifications";
import ContactDrawer from "@/components/ContactDrawer";
import ExperienceEducation from "@/components/ExperienceEducation";
import Hero from "@/components/Hero";
import MediaContent from "@/components/MediaContent";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import ScrollReveal from "@/components/ScrollReveal";
import Skills from "@/components/Skills";
import { client } from "@/sanity";

async function getData() {
  const profileQuery = `*[_type == "profile"][0]`;
  const projectsQuery = `*[_type == "project"] | order(featuredOrder asc, _createdAt desc)`;
  const skillsQuery = `*[_type == "skill"]`;
  const experiencesQuery = `*[_type == "experience"] | order(startDate desc)`;
  const certificationsQuery = `*[_type == "certification"] | order(order asc, _createdAt desc)`;
  const educationsQuery = `*[_type == "education"] | order(startDate desc)`;
  const postsQuery = `*[_type == "post"] | order(publishedAt desc)`;
  const mediaContentsQuery = `*[_type == "mediaContent"]`;

  const [
    profile,
    projects,
    skills,
    experiences,
    certifications,
    educations,
    posts,
    mediaContents,
  ] = await Promise.all([
    client.fetch(profileQuery),
    client.fetch(projectsQuery),
    client.fetch(skillsQuery),
    client.fetch(experiencesQuery),
    client.fetch(certificationsQuery),
    client.fetch(educationsQuery),
    client.fetch(postsQuery),
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
    mediaContents,
  } = await getData();

  const heroWrapperClass =
    "min-h-[100dvh] w-full flex items-center justify-center pt-20 sm:pt-24 pb-12";

  const sectionWrapperClass =
    "min-h-[100dvh] w-full flex items-start justify-center pt-24 sm:pt-28 pb-16 sm:pb-20";

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
      {/* Dynamic Background Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-[120px] dark:opacity-70 opacity-30 rounded-full" />
      </div>

      <Navbar profile={profile} />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* 1. SEKSI BERANDA */}
        <section id="beranda" className={heroWrapperClass}>
          <ScrollReveal direction="up" className="w-full">
            <Hero profile={profile} />
          </ScrollReveal>
        </section>

        {/* 2. SEKSI KEAHLIAN */}
        <section id="skills" className={`${sectionWrapperClass} scroll-mt-6`}>
          <ScrollReveal direction="left" className="w-full">
            <Skills skills={skills} />
          </ScrollReveal>
        </section>

        {/* 3. SEKSI PROYEK */}
        <section id="projects" className={`${sectionWrapperClass} scroll-mt-6`}>
          <ScrollReveal direction="right" className="w-full">
            <Projects projects={projects} />
          </ScrollReveal>
        </section>

        {/* 4. SEKSI PENGALAMAN & PENDIDIKAN */}
        <section
          id="experience"
          className={`${sectionWrapperClass} scroll-mt-6`}
        >
          <ScrollReveal direction="up" className="w-full">
            <ExperienceEducation
              experiences={experiences}
              educations={educations}
            />
          </ScrollReveal>
        </section>

        {/* 5. SEKSI SERTIFIKASI */}
        <section
          id="certifications"
          className={`${sectionWrapperClass} scroll-mt-6`}
        >
          <ScrollReveal direction="left" className="w-full">
            <Certifications certifications={certifications} />
          </ScrollReveal>
        </section>

        {/* 6. SEKSI MEDIA */}
        <section id="media" className={`${sectionWrapperClass} scroll-mt-6`}>
          <ScrollReveal direction="right" className="w-full">
            <MediaContent mediaContents={mediaContents} />
          </ScrollReveal>
        </section>

        {/* 7. SEKSI ARTIKEL */}
        <section id="posts" className={`${sectionWrapperClass} scroll-mt-6`}>
          <ScrollReveal direction="up" className="w-full">
            <Posts posts={posts} />
          </ScrollReveal>
        </section>

        {/* 8. SEKSI KONTAK & SOCIAL CHANNELS */}
        <section id="kontak" className={`${sectionWrapperClass} scroll-mt-6`}>
          <ScrollReveal direction="up" className="w-full">
            <ContactDrawer profile={profile} />
          </ScrollReveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full border-t border-gray-200 dark:border-white/[0.08] py-10 px-4">
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
