export default {
  name: "certification",
  title: "Sertifikasi & Penghargaan",
  type: "document",
  fields: [
    { name: "title", title: "Judul Sertifikasi / Penghargaan", type: "string" },
    { name: "issuer", title: "Penyelenggara / Institusi", type: "string" },
    {
      name: "date",
      title: "Waktu Diperoleh (Misal: Juli 2025)",
      type: "string",
    },
    {
      name: "credentialUrl",
      title: "URL Kredensial / Bukti Sertifikat",
      type: "url",
    },
    {
      name: "order",
      title: "Urutan Tampil",
      type: "number",
    },
  ],
};
