export default {
  name: 'project',
  title: 'Katalog Proyek',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategori Proyek (Untuk Filter Frontend)',
      type: 'string',
      options: {
        list: [
          {title: 'Web Application', value: 'web'},
          {title: 'Mobile Application', value: 'mobile'},
          {title: 'System, Cloud & AI', value: 'system'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Peran Anda (Misal: Lead Engineer / Mobile Dev)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Ringkasan Singkat (1-2 Kalimat)',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'techStack',
      title: 'Teknologi (Misal: Flutter, Next.js, Docker, Python)',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'thumbnail',
      title: 'Gambar Sampul Utama',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caseStudyPhases',
      title: 'Tahapan Studi Kasus (Tampil di Modal Detail)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'phaseName',
              title: 'Label Fase (Misal: Fase 01)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'topic',
              title: 'Fokus Bahasan (Misal: Antarmuka / Arsitektur Data)',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Judul Pembahasan',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Penjelasan Teknis',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'previewImage',
              title: 'Tangkapan Layar / Diagram Alur',
              type: 'image',
              options: {hotspot: true},
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'phaseName',
              media: 'previewImage',
            },
          },
        },
      ],
    },
    {name: 'githubUrl', title: 'Tautan Repositori GitHub', type: 'url'},
    {name: 'demoUrl', title: 'Tautan Demo / Publikasi Live', type: 'url'},
    {
      name: 'featuredOrder',
      title: 'Urutan Tampil (Angka 1 = Paling Atas)',
      type: 'number',
      initialValue: 1,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'thumbnail',
    },
    prepare({title, subtitle, media}) {
      const categoryMap = {
        web: '🌐 Web App',
        mobile: '📱 Mobile',
        system: '⚙️ System & AI',
      }
      return {
        title: title || 'Proyek Tanpa Judul',
        subtitle: categoryMap[subtitle] || subtitle || 'General',
        media,
      }
    },
  },
}
