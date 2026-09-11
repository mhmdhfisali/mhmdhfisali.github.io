export default {
  name: 'skill',
  title: 'Keahlian & Tools',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nama Teknologi (Misal: Docker, Flutter, Python)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend & Mobile', value: 'frontend'},
          {title: 'Backend & AI', value: 'backend'},
          {title: 'DevOps & OS', value: 'devops'},
          {title: 'Multimedia & Manajemen', value: 'tools'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Logo Ikon (SVG / PNG Transparan)',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'proficiency',
      title: 'Tingkat Kemahiran (1 - 100)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(100),
      initialValue: 85,
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      proficiency: 'proficiency',
      media: 'icon',
    },
    prepare({title, category, proficiency, media}) {
      return {
        title: title || 'Teknologi',
        subtitle: `${category?.toUpperCase() || 'TECH'} • ${proficiency || 85}%`,
        media,
      }
    },
  },
}
