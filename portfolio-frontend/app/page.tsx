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

// Nonaktifkan cache agar data Sanity Studio langsung terbaca
export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getData() {
  const fetchOptions = { next: { revalidate: 0 } };

  const profileQuery = `*[_type == "profile"] | order(_updatedAt desc)[0]`;
  const projectsQuery = `*[_type == "project"] | order(featuredOrder asc, _createdAt desc){
    ...,
    thumbnail{ ..., asset-> },
    caseStudyPhases[]{ ..., previewImage{ ..., asset-> } }
  }`;
  const skillsQuery = `*[_type == "skill"]`;
  const experiencesQuery = `*[_type == "experience"] | order(startDate desc)`;
  const certificationsQuery = `*[_type == "certification"] | order(order asc, _createdAt desc){
    ...,
    images[]{
      ...,
      asset->
    }
  }`;
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
    client.fetch(profileQuery, {}, fetchOptions),
    client.fetch(projectsQuery, {}, fetchOptions),
    client.fetch(skillsQuery, {}, fetchOptions),
    client.fetch(experiencesQuery, {}, fetchOptions),
    client.fetch(certificationsQuery, {}, fetchOptions),
    client.fetch(educationsQuery, {}, fetchOptions),
    client.fetch(postsQuery, {}, fetchOptions),
    client.fetch(mediaContentsQuery, {}, fetchOptions),
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

  // Seksi Beranda: Tinggi minimal 1 layar dan posisi tengah vertikal
  const heroSectionClass =
    "min-h-screen w-full flex items-center justify-center pt-24 pb-16 scroll-mt-24";

  // SEMUA Seksi Konten Lain: Tanpa flex centering vertikal, scroll-mt presisi 100px (tinggi floating navbar)
  const contentSectionClass =
    "min-h-screen w-full block pt-6 pb-24 scroll-mt-[96px]";

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
      {/* Dynamic Ambient Background Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-[120px] dark:opacity-70 opacity-30 rounded-full" />
      </div>

      <Navbar profile={profile} />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* 1. SEKSI BERANDA */}
        <section id="beranda" className={heroSectionClass}>
          <ScrollReveal direction="up" className="w-full">
            <Hero profile={profile} />
          </ScrollReveal>
        </section>

        {/* 2. SEKSI KEAHLIAN */}
        <section id="skills" className={contentSectionClass}>
          <ScrollReveal direction="left" className="w-full">
            <Skills skills={skills} />
          </ScrollReveal>
        </section>

        {/* 3. SEKSI PROYEK */}
        <section id="projects" className={contentSectionClass}>
          <ScrollReveal direction="right" className="w-full">
            <Projects projects={projects} />
          </ScrollReveal>
        </section>

        {/* 4. SEKSI PENGALAMAN & PENDIDIKAN */}
        <section id="experience" className={contentSectionClass}>
          <ScrollReveal direction="up" className="w-full">
            <ExperienceEducation
              experiences={experiences}
              educations={educations}
            />
          </ScrollReveal>
        </section>

        {/* 5. SEKSI SERTIFIKASI */}
        <section id="certifications" className={contentSectionClass}>
          <ScrollReveal direction="left" className="w-full">
            <Certifications certifications={certifications} />
          </ScrollReveal>
        </section>

        {/* 6. SEKSI MEDIA */}
        <section id="media" className={contentSectionClass}>
          <ScrollReveal direction="right" className="w-full">
            <MediaContent mediaContents={mediaContents} />
          </ScrollReveal>
        </section>

        {/* 7. SEKSI ARTIKEL */}
        <section id="posts" className={contentSectionClass}>
          <ScrollReveal direction="up" className="w-full">
            <Posts posts={posts} />
          </ScrollReveal>
        </section>

        {/* 8. SEKSI KONTAK */}
        <section id="kontak" className={contentSectionClass}>
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
