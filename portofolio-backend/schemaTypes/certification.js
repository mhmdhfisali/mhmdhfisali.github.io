import {CertificationIcon} from '../icons'

export default {
  name: 'certification',
  title: 'Sertifikasi & Lisensi Resmi',
  type: 'document',
  icon: CertificationIcon,
  fields: [
    {
      name: 'title',
      title: 'Nama Sertifikasi / Lisensi (Bahasa Indonesia)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleEn',
      title: 'Certification / License Name (English)',
      type: 'string',
    },
    {
      name: 'issuer',
      title: 'Lembaga Penerbit / Penyelenggara',
      type: 'string',
      description: 'Contoh: Dicoding, Cisco, IBM, BNSP, UBSI',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'credentialId',
      title: 'ID Kredensial / Nomor Registrasi (Opsional)',
      type: 'string',
      description: 'Misal: DICODING-2024-ABCDE',
    },
    {
      name: 'date',
      title: 'Waktu Terbit (Misal: Juli 2025)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Deskripsi / Ringkasan Pelatihan & Kompetensi (Bahasa Indonesia)',
      type: 'text',
      rows: 3,
      description: 'Penjelasan singkat materi, pencapaian, atau kompetensi yang divalidasi',
    },
    {
      name: 'descriptionEn',
      title: 'Competency & Training Description (English)',
      type: 'text',
      rows: 3,
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
