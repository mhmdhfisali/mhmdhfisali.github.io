export default {
  name: "researchMetric",
  title: "Metrik & Pencapaian Riset",
  type: "document",
  fields: [
    {
      name: "metricName",
      title: "Nama Metrik (Misal: Akurasi mAP@50)",
      type: "string",
    },
    {
      name: "metricValue",
      title: "Nilai / Angka (Misal: 0.995 / 1.123 Citra)",
      type: "string",
    },
    { name: "associatedProject", title: "Nama Proyek Terkait", type: "string" },
    { name: "description", title: "Penjelasan Singkat", type: "text" },
  ],
};
