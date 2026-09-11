export default {
  name: "post",
  title: "Artikel / Jurnal",
  type: "document",
  fields: [
    { name: "title", title: "Judul Artikel", type: "string" },
    {
      name: "slug",
      title: "Slug URL",
      type: "slug",
      options: { source: "title" },
    },
    { name: "publishedAt", title: "Tanggal Publikasi", type: "datetime" },
    {
      name: "mainImage",
      title: "Gambar Utama",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "body",
      title: "Isi Tulisan",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
