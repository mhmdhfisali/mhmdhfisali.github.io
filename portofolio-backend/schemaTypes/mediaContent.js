export default {
  name: 'mediaContent',
  title: 'Portofolio Media & Kreatif',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Konten / Kampanye',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'platform',
      title: 'Platform Media',
      type: 'string',
      options: {
        list: [
          {title: 'Instagram', value: 'Instagram'},
          {title: 'YouTube', value: 'YouTube'},
          {title: 'TikTok', value: 'TikTok'},
          {title: 'LinkedIn Media', value: 'LinkedIn'},
          {title: 'Lainnya', value: 'General'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Peran Anda',
      type: 'string',
      description: 'Contoh: Social Media Admin, Content Strategist, Video Editor',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Deskripsi Singkat Konten / Dampak',
      type: 'text',
      rows: 2,
    },
    {
      name: 'link',
      title: 'Tautan Langsung Konten',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Gambar Pratinjau / Cover',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      platform: 'platform',
      role: 'role',
      media: 'thumbnail',
    },
    prepare({title, platform, role, media}) {
      return {
        title: title || 'Konten Media',
        subtitle: `[${platform || 'Media'}] ${role || ''}`,
        media,
      }
    },
  },
}
