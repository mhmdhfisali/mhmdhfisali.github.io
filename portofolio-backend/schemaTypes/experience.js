export default {
  name: "experience",
  title: "Pengalaman",
  type: "document",
  fields: [
    { name: "jobTitle", title: "Posisi / Jabatan", type: "string" },
    {
      name: "company",
      title: "Nama Perusahaan / Organisasi / Proyek",
      type: "string",
    },
    {
      name: "startDate",
      title: "Tanggal Mulai",
      type: "date",
      options: { dateFormat: "YYYY-MM" },
    },
    {
      name: "endDate",
      title: "Tanggal Selesai (Kosongkan jika masih aktif)",
      type: "date",
      options: { dateFormat: "YYYY-MM" },
    },
    { name: "isCurrent", title: "Masih aktif di posisi ini?", type: "boolean" },
    {
      name: "description",
      title: "Tanggung Jawab & Pencapaian",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
