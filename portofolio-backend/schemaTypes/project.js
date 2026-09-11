export default {
  name: "project",
  title: "Katalog Proyek",
  type: "document",
  fields: [
    { name: "title", title: "Judul Proyek", type: "string" },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "category",
      title: "Kategori Proyek (Untuk Filter Frontend)",
      type: "string",
      options: {
        list: [
          { title: "Web Application", value: "web" },
          { title: "Mobile Application", value: "mobile" },
          { title: "System, Cloud & AI", value: "system" },
        ],
      },
    },
    {
      name: "role",
      title: "Peran Anda (Misal: Full-Stack / Lead Engineer)",
      type: "string",
    },
    { name: "summary", title: "Ringkasan Singkat (1-2 Kalimat)", type: "text" },
    {
      name: "techStack",
      title: "Teknologi (Misal: Flutter, Next.js, Docker, Python)",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "thumbnail",
      title: "Gambar Sampul Utama",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "caseStudyPhases",
      title: "Tahapan Studi Kasus (Tampil di Modal Detail)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "phaseName",
              title: "Label Fase (Misal: Fase 01)",
              type: "string",
            },
            {
              name: "topic",
              title: "Fokus Bahasan (Misal: Antarmuka / Arsitektur)",
              type: "string",
            },
            { name: "title", title: "Judul Pembahasan", type: "string" },
            { name: "description", title: "Penjelasan Teknis", type: "text" },
            {
              name: "previewImage",
              title: "Tangkapan Layar / Diagram",
              type: "image",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    { name: "githubUrl", title: "Tautan Repositori GitHub", type: "url" },
    { name: "demoUrl", title: "Tautan Demo / Publikasi", type: "url" },
    {
      name: "featuredOrder",
      title: "Urutan Tampil (Angka terkecil tampil paling atas)",
      type: "number",
    },
  ],
};
