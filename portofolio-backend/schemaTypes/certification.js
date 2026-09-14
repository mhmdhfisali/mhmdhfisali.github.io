export default {
  name: 'certification',
  title: 'Sertifikasi & Lisensi Resmi',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nama Sertifikasi / Lisensi',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'issuer',
      title: 'Lembaga Penerbit / Penyelenggara',
      type: 'string',
      description: 'Contoh: Dicoding, Cisco, IBM, BNSP, UBSI',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Waktu Terbit (Misal: Juli 2025)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Deskripsi / Ringkasan Pelatihan & Kompetensi',
      type: 'text',
      rows: 3,
      description: 'Penjelasan singkat materi, pencapaian, atau kompetensi yang divalidasi',
    },
    {
      name: 'images',
      title: 'Berkas Gambar Sertifikat (Bisa Lebih Dari 1 Gambar)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Keterangan Gambar (Opsional)',
            },
          ],
        },
      ],
      description: 'Unggah file sertifikat (misal: halaman depan & transkrip nilai/lampiran)',
    },
    {
      name: 'credentialUrl',
      title: 'Tautan Bukti / Verifikasi Kredensial',
      type: 'url',
      description: 'URL sertifikat online atau dokumen verifikasi resmi',
    },
    {
      name: 'order',
      title: 'Urutan Tampil (Angka 1 = Prioritas Utama)',
      type: 'number',
      initialValue: 1,
    },
  ],
  preview: {
    select: {
      title: 'title',
      issuer: 'issuer',
      date: 'date',
      media: 'images.0',
    },
    prepare({title, issuer, date, media}) {
      return {
        title: title || 'Sertifikat',
        subtitle: `${issuer || 'Lembaga'} • ${date || ''}`,
        media,
      }
    },
  },
}
