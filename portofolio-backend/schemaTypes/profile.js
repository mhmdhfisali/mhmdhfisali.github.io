export default {
  name: "profile",
  title: "Profil Utama",
  type: "document",
  fields: [
    { name: "name", title: "Nama Lengkap", type: "string" },
    { name: "headline", title: "Headline Profesional", type: "string" },
    { name: "bio", title: "Bio Detail", type: "text" },
    {
      name: "isAvailableForWork",
      title: "Status Ketersediaan (Tampil 'Available' di Navbar)",
      type: "boolean",
      initialValue: true,
    },
    { name: "email", title: "Email Kontak", type: "string" },
    { name: "phone", title: "Nomor Telepon", type: "string" },
    { name: "githubUrl", title: "URL GitHub", type: "url" },
    { name: "linkedinUrl", title: "URL LinkedIn", type: "url" },
    { name: "resumeUrl", title: "URL Dokumen CV (PDF)", type: "url" },
    {
      name: "profileImage",
      title: "Foto Profil",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
