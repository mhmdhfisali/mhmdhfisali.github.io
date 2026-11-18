import Certifications from "@/components/Certifications";
import ContactDrawer from "@/components/ContactDrawer";
import ExperienceEducation from "@/components/ExperienceEducation";
import Footer from "@/components/Footer";
import GitHubActivity from "@/components/GitHubActivity";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import Projects from "@/components/Projects";
import ScrollReveal from "@/components/ScrollReveal";
import Skills from "@/components/Skills";
import { defaultProjects } from "@/lib/defaultProjects";
import {
  fallbackCertifications,
  fallbackEducations,
  fallbackExperiences,
  fallbackPosts,
  fallbackProfile,
  fallbackSkills,
} from "@/lib/fallbackData";
import { client } from "@/sanity";

export const dynamic = "force-static";

async function safeFetch<T>(
  query: string,
  fallbackValue: T,
  options: any = {},
  timeoutMs: number = 3500
): Promise<T> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    const result = await client.fetch(query, {}, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return result || fallbackValue;
  } catch {
    // If network drops, DNS fails, or connection times out, seamlessly return fallback
    return fallbackValue;
  }
}

async function getData() {
  const fetchOptions = { next: { revalidate: 60 } };

  const profileQuery = `*[_type == "profile"] | order(_updatedAt desc)[0]`;
  const projectsQuery = `*[_type == "project"] | order(featuredOrder asc, _createdAt desc){
        ...,
        thumbnail{ ..., asset-> },
        caseStudyPhases[]{ ..., previewImage{ ..., asset-> } },
        galleryImages[]{ ..., asset-> }
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
    safeFetch(profileQuery, fallbackProfile, fetchOptions),
    safeFetch(projectsQuery, defaultProjects, fetchOptions),
    safeFetch(skillsQuery, fallbackSkills, fetchOptions),
    safeFetch(experiencesQuery, fallbackExperiences, fetchOptions),
    safeFetch(certificationsQuery, fallbackCertifications, fetchOptions),
    safeFetch(educationsQuery, fallbackEducations, fetchOptions),
    safeFetch(postsQuery, fallbackPosts, fetchOptions),
  ]);

  return {
    profile: profile || fallbackProfile,
    projects:
      Array.isArray(projects) && projects.length > 0
        ? projects
        : defaultProjects,
    skills:
      Array.isArray(skills) && skills.length > 0 ? skills : fallbackSkills,
    experiences:
      Array.isArray(experiences) && experiences.length > 0
        ? experiences
        : fallbackExperiences,
    certifications:
      Array.isArray(certifications) && certifications.length > 0
        ? certifications
        : fallbackCertifications,
    educations:
      Array.isArray(educations) && educations.length > 0
        ? educations
        : fallbackEducations,
    posts: Array.isArray(posts) && posts.length > 0 ? posts : fallbackPosts,
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

  const githubUsername = profile?.githubUrl
    ? profile.githubUrl.replace(/\/$/, "").split("/").pop()
    : "mhmdhfisali";

  // Merge Sanity projects with default comprehensive projects
  const sanityProjects = Array.isArray(projects) ? projects : [];
  const mergedProjects = [...defaultProjects];

  sanityProjects.forEach((sp) => {
    const existingIdx = mergedProjects.findIndex(
      (dp) =>
        dp._id === sp._id ||
        (dp.title &&
          sp.title &&
          dp.title.toLowerCase().includes(sp.title.toLowerCase().slice(0, 15))),
    );
    if (existingIdx !== -1) {
      const curatedOrder = mergedProjects[existingIdx].featuredOrder;
      mergedProjects[existingIdx] = {
        ...mergedProjects[existingIdx],
        ...sp,
        featuredOrder: curatedOrder,
        projectType: sp.projectType || mergedProjects[existingIdx].projectType,
        company: sp.company || mergedProjects[existingIdx].company,
        deploymentStatus:
          sp.deploymentStatus || mergedProjects[existingIdx].deploymentStatus,
        caseStudyPhases:
          sp.caseStudyPhases && sp.caseStudyPhases.length > 0
            ? sp.caseStudyPhases
            : mergedProjects[existingIdx].caseStudyPhases,
        impactMetrics:
          sp.impactMetrics && sp.impactMetrics.length > 0
            ? sp.impactMetrics
            : mergedProjects[existingIdx].impactMetrics,
        galleryImages:
          sp.galleryImages && sp.galleryImages.length > 0
            ? sp.galleryImages
            : mergedProjects[existingIdx].galleryImages,
      };
    } else {
      mergedProjects.push(sp);
    }
  });

  const CANONICAL_ORDER: Record<string, number> = {
    "project-ppic-smii": 1,
    "project-ipc-smii": 2,
    "project-dashboard-smii": 3,
    "project-absolutestore": 4,
    "ca94d2a9-7c10-4784-ab61-efe7a895e911": 5,
    "e4adfc50-99a9-433f-98f0-2a960ad394db": 6,
    "a5e66933-006d-4263-8c63-f85099020fb4": 7,
  };

  // Sort by canonical order asc (SMII enterprise -> live production -> mobile -> research)
  mergedProjects.sort(
    (a, b) =>
      (CANONICAL_ORDER[a._id] || a.featuredOrder || 99) -
      (CANONICAL_ORDER[b._id] || b.featuredOrder || 99),
  );

  // CLASS RESPONSIVE: Padding proporsional & rapat di mobile (tanpa gap kosong raksasa), lapang di desktop
  const heroSectionClass =
    "w-full flex items-center justify-center pt-20 sm:pt-32 pb-6 sm:pb-16 sm:min-h-screen scroll-mt-20";
  const contentSectionClass =
    "w-full block py-5 sm:pt-20 sm:pb-24 scroll-mt-20";

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-blue-600/15 via-cyan-500/10 to-transparent blur-[120px] dark:opacity-70 opacity-30 rounded-full" />
      </div>

      <Navbar profile={profile} />

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 space-y-2 sm:space-y-0">
        {/* 1. SEKSI BERANDA / HOME */}
        <section id="home" className={heroSectionClass}>
          <span id="beranda" className="sr-only" />
          <ScrollReveal direction="converge" delay={100} className="w-full">
            <Hero profile={profile} />
          </ScrollReveal>
        </section>

        {/* 2. SEKSI KEAHLIAN / SKILLS */}
        <section id="skills" className={contentSectionClass}>
          <ScrollReveal direction="up" delay={50} className="w-full">
            <Skills skills={skills} />
          </ScrollReveal>
        </section>

        {/* 2.5 SEKSI AKTIVITAS / ACTIVITY */}
        <section id="activity" className={contentSectionClass}>
          <span id="github" className="sr-only" />
          <ScrollReveal direction="up" delay={60} className="w-full">
            <GitHubActivity username={githubUsername} />
          </ScrollReveal>
        </section>

        {/* 3. SEKSI PROYEK / PROJECTS */}
        <section id="projects" className={contentSectionClass}>
          <ScrollReveal direction="converge" delay={80} className="w-full">
            <Projects projects={mergedProjects} />
          </ScrollReveal>
        </section>

        {/* 4. SEKSI PENGALAMAN & PENDIDIKAN / EXPERIENCE */}
        <section id="experience" className={contentSectionClass}>
          <ScrollReveal direction="up" delay={80} className="w-full">
            <ExperienceEducation
              experiences={experiences}
              educations={educations}
            />
          </ScrollReveal>
        </section>

        {/* 5. SEKSI SERTIFIKASI / CERTIFICATIONS */}
        <section id="certifications" className={contentSectionClass}>
          <ScrollReveal direction="converge" delay={80} className="w-full">
            <Certifications certifications={certifications} />
          </ScrollReveal>
        </section>

        {/* 6. SEKSI ARTIKEL / ARTICLES */}
        <section id="articles" className={contentSectionClass}>
          <span id="posts" className="sr-only" />
          <ScrollReveal direction="scale" delay={80} className="w-full">
            <Posts posts={posts} />
          </ScrollReveal>
        </section>

        {/* 7. SEKSI KONTAK / CONTACT */}
        <section id="contact" className={contentSectionClass}>
          <span id="kontak" className="sr-only" />
          <ScrollReveal direction="up" delay={50} className="w-full">
            <ContactDrawer profile={profile} />
          </ScrollReveal>
        </section>
      </main>

      {/* FOOTER BILINGUAL */}
      <Footer profile={profile} />
    </div>
  );
}
