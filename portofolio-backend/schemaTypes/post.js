import {PostsIcon} from '../icons'

export default {
  name: 'post',
  title: 'Artikel & Publikasi Riset',
  type: 'document',
  icon: PostsIcon,
  fields: [
    {
      name: 'title',
      title: 'Judul Artikel / Makalah Riset (Bahasa Indonesia)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleEn',
      title: 'Article / Paper Title (English)',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isResearchPaper',
      title: 'Apakah ini Paper Riset / Publikasi Ilmiah?',
      type: 'boolean',
      description: 'Aktifkan jika artikel ini adalah jurnal atau prosiding penelitian ilmiah',
      initialValue: false,
    },
    {
      name: 'journalName',
      title: 'Nama Jurnal / Lembaga Penerbit (Misal: SINTA / IEEE / Prosiding Nasional)',
      type: 'string',
      hidden: ({document}) => !document?.isResearchPaper,
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
      title: 'Estimasi Waktu Baca (Misal: 5 Menit Baca / Paper Riset)',
      type: 'string',
      initialValue: '5 Menit Baca',
    },
    {
      name: 'readingTimeEn',
      title: 'Reading Time (English)',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Ringkasan Singkat (Muncul di Halaman Utama)',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerptEn',
      title: 'Short Excerpt (English)',
      type: 'text',
      rows: 2,
    },
    {
      name: 'link',
      title: 'Tautan Eksternal Paper / DOI / PDF (Opsional)',
      type: 'url',
      description: 'Jika diisi, klik kartu di beranda akan langsung membuka tautan publikasi ini.',
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
