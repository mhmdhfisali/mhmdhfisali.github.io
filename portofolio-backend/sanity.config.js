import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {
  UserIcon,
  ProjectsIcon,
  SkillsIcon,
  ExperienceIcon,
  EducationIcon,
  CertificationIcon,
  PostsIcon,
} from './icons'

export default defineConfig({
  name: 'default',
  title: 'Portofolio Engineering Studio',

  projectId: '0dyfyoih',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Konten Portofolio')
          .items([
            // 1. Singleton Profil Utama
            S.listItem()
              .title('Profil Utama & Hero')
              .icon(UserIcon)
              .child(S.document().schemaType('profile').documentId('profile')),
            S.divider(),

            // 2. Konten Portofolio Inti
            S.listItem()
              .title('Katalog Proyek')
              .icon(ProjectsIcon)
              .schemaType('project')
              .child(S.documentTypeList('project').title('Daftar Proyek')),
            S.listItem()
              .title('Keahlian & Tools')
              .icon(SkillsIcon)
              .schemaType('skill')
              .child(S.documentTypeList('skill').title('Daftar Teknologi')),
            S.listItem()
              .title('Pengalaman Kerja')
              .icon(ExperienceIcon)
              .schemaType('experience')
              .child(S.documentTypeList('experience').title('Riwayat Pengalaman')),
            S.listItem()
              .title('Riwayat Pendidikan')
              .icon(EducationIcon)
              .schemaType('education')
              .child(S.documentTypeList('education').title('Jenjang Akademik')),
            S.listItem()
              .title('Sertifikasi & Lisensi')
              .icon(CertificationIcon)
              .schemaType('certification')
              .child(S.documentTypeList('certification').title('Daftar Sertifikasi')),
            S.listItem()
              .title('Artikel & Publikasi')
              .icon(PostsIcon)
              .schemaType('post')
              .child(S.documentTypeList('post').title('Artikel')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
