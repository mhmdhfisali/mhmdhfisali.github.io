export default {
  name: "skill",
  title: "Keahlian & Tools",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Nama Teknologi (Misal: Docker, Flutter, Python)",
      type: "string",
    },
    {
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Frontend & Mobile", value: "frontend" },
          { title: "Backend & AI", value: "backend" },
          { title: "DevOps & OS", value: "devops" },
          { title: "Multimedia & Manajemen", value: "tools" },
        ],
      },
    },
    {
      name: "icon",
      title: "Logo (Format SVG atau PNG transparan)",
      type: "image",
    },
    {
      name: "proficiency",
      title: "Tingkat Kemahiran (1 - 100)",
      type: "number",
    },
  ],
};
