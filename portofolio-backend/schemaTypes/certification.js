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
      description: 'Contoh: Dicoding, Cisco, IBM, BNSP',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Waktu Terbit (Misal: Juli 2025)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'credentialUrl',
      title: 'Tautan Bukti / Verifikasi Kredensial',
      type: 'url',
      description: 'URL sertifikat online atau dokumen verifikasi',
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
    },
    prepare({title, issuer, date}) {
      return {
        title: title || 'Sertifikat',
        subtitle: `${issuer || 'Lembaga'} • ${date || ''}`,
      }
    },
  },
}
