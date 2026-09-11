export default {
  name: 'post',
  title: 'Artikel & Publikasi Riset',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Artikel / Makalah Riset',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readingTime',
      title: 'Estimasi Waktu Baca (Misal: 5 Menit Baca / Paper Seminar)',
      type: 'string',
      initialValue: '5 Menit Baca',
    },
    {
      name: 'excerpt',
      title: 'Ringkasan Singkat (Muncul di Halaman Utama)',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Tautan Eksternal Paper / PDF (Opsional jika diterbitkan di Jurnal)',
      type: 'url',
      description: 'Jika diisi, klik kartu di beranda akan langsung membuka tautan ini.',
    },
    {
      name: 'mainImage',
      title: 'Gambar Sampul Utama',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'body',
      title: 'Isi Dokumen Lengkap',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'mainImage',
    },
    prepare({title, publishedAt, media}) {
      const date = publishedAt ? publishedAt.split('T')[0] : 'Draft'
      return {
        title: title || 'Artikel Tanpa Judul',
        subtitle: `Rilis: ${date}`,
        media,
      }
    },
  },
}
