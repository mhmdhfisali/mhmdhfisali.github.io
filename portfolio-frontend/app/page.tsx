import Certifications from "@/components/Certifications";
import ContactDrawer from "@/components/ContactDrawer";
import ExperienceEducation from "@/components/ExperienceEducation";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import ScrollReveal from "@/components/ScrollReveal";
import Skills from "@/components/Skills";
import { client } from "@/sanity";

export const dynamic = "force-static";

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

  // Ekstrak tautan eksternal (Unindra, blog, atau PDF) langsung sebagai properti link
  const postsQuery = `*[_type == "post"] | order(publishedAt desc){
    ...,
    "link": coalesce(externalUrl, link, tautanEksternal, "")
  }`;

  const [
    profile,
    projects,
    skills,
    experiences,
    certifications,
    educations,
    posts,
  ] = await Promise.all([
    client.fetch(profileQuery, {}, fetchOptions),
    client.fetch(projectsQuery, {}, fetchOptions),
    client.fetch(skillsQuery, {}, fetchOptions),
    client.fetch(experiencesQuery, {}, fetchOptions),
    client.fetch(certificationsQuery, {}, fetchOptions),
    client.fetch(educationsQuery, {}, fetchOptions),
    client.fetch(postsQuery, {}, fetchOptions),
  ]);

  return {
    profile,
    projects,
    skills,
    experiences,
    certifications,
    educations,
    posts,
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
  } = await getData();

  const heroSectionClass =
    "min-h-screen w-full flex items-center justify-center pt-24 pb-16 scroll-mt-24";
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
          <ScrollReveal direction="converge" delay={100} className="w-full">
            <Hero profile={profile} />
          </ScrollReveal>
        </section>

        {/* 2. SEKSI KEAHLIAN */}
        <section id="skills" className={contentSectionClass}>
          <ScrollReveal direction="up" delay={50} className="w-full">
            <Skills skills={skills} />
          </ScrollReveal>
        </section>

        {/* 3. SEKSI PROYEK */}
        <section id="projects" className={contentSectionClass}>
          <ScrollReveal direction="converge" delay={80} className="w-full">
            <Projects projects={projects} />
          </ScrollReveal>
        </section>

        {/* 4. SEKSI PENGALAMAN & PENDIDIKAN */}
        <section id="experience" className={contentSectionClass}>
          <ScrollReveal direction="up" delay={80} className="w-full">
            <ExperienceEducation
              experiences={experiences}
              educations={educations}
            />
          </ScrollReveal>
        </section>

        {/* 5. SEKSI SERTIFIKASI */}
        <section id="certifications" className={contentSectionClass}>
          <ScrollReveal direction="converge" delay={80} className="w-full">
            <Certifications certifications={certifications} />
          </ScrollReveal>
        </section>

        {/* 6. SEKSI ARTIKEL */}
        <section id="posts" className={contentSectionClass}>
          <ScrollReveal direction="scale" delay={80} className="w-full">
            <Posts posts={posts} />
          </ScrollReveal>
        </section>

        {/* 7. SEKSI KONTAK (HAPUS min-h-screen AGAR TINGGINYA PAS DENGAN KONTEN KARTU) */}
        <section
          id="kontak"
          className="w-full block pt-6 pb-6 scroll-mt-[96px]"
        >
          <ScrollReveal direction="up" delay={50} className="w-full">
            <ContactDrawer profile={profile} />
          </ScrollReveal>
        </section>
      </main>

      {/* FOOTER (RAPAT & TEPAT MENEMPEL DI BAWAH KARTU KONTAK) */}
      <footer className="relative z-10 w-full border-t border-gray-200/60 dark:border-white/[0.08] mt-4 pt-6 pb-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 dark:text-gray-400">
          {/* Sisi Kiri: Identitas & Status */}
          <div className="flex flex-wrap items-center gap-3 sm:pl-28">
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              Muhamad Hafis Ali
            </span>
            <span className="text-gray-300 dark:text-white/20">•</span>
            <span>Jakarta, Indonesia</span>
            <span className="text-gray-300 dark:text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Tersedia untuk Pekerjaan
            </span>
          </div>

          {/* Sisi Kanan: Tahun & Navigasi Atas */}
          <div className="flex items-center gap-4 sm:pr-14">
            <span>© {new Date().getFullYear()}</span>
            <a
              href="#beranda"
              className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/[0.04]"
            >
              <span>Atas</span>
              <span>↑</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
