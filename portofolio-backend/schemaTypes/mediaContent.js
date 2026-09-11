export default {
  name: "mediaContent",
  title: "Portofolio Media & Kreatif",
  type: "document",
  fields: [
    { name: "title", title: "Judul Konten / Kampanye", type: "string" },
    {
      name: "platform",
      title: "Platform (Misal: Instagram, TikTok, YouTube)",
      type: "string",
    },
    {
      name: "role",
      title: "Peran (Misal: Social Media Admin & Editor)",
      type: "string",
    },
    { name: "link", title: "Tautan Konten", type: "url" },
    {
      name: "thumbnail",
      title: "Pratinjau Media",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
