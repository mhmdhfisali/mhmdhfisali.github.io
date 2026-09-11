export default {
  name: "education",
  title: "Riwayat Pendidikan",
  type: "document",
  fields: [
    {
      name: "institution",
      title: "Nama Institusi / Universitas",
      type: "string",
    },
    {
      name: "degree",
      title: "Gelar / Program Studi (Misal: S1 Informatika)",
      type: "string",
    },
    { name: "startDate", title: "Tahun Mulai", type: "string" },
    {
      name: "endDate",
      title: "Tahun Lulus (Kosongkan jika masih aktif)",
      type: "string",
    },
    {
      name: "description",
      title: "Fokus Studi / Pencapaian Akademik",
      type: "text",
    },
  ],
};
