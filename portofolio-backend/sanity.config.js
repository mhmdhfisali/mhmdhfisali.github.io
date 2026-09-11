import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

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
            // 1. Singleton Profil Utama (Langsung edit 1 dokumen)
            S.listItem()
              .title('👤 Profil Utama & Hero')
              .child(S.document().schemaType('profile').documentId('profile')),
            S.divider(),

            // 2. Konten Portofolio Inti
            S.listItem()
              .title('💻 Katalog Proyek')
              .schemaType('project')
              .child(S.documentTypeList('project').title('Daftar Proyek')),
            S.listItem()
              .title('⚡ Keahlian & Tools')
              .schemaType('skill')
              .child(S.documentTypeList('skill').title('Daftar Teknologi')),
            S.listItem()
              .title('💼 Pengalaman Kerja')
              .schemaType('experience')
              .child(S.documentTypeList('experience').title('Riwayat Pengalaman')),
            S.listItem()
              .title('🎓 Riwayat Pendidikan')
              .schemaType('education')
              .child(S.documentTypeList('education').title('Jenjang Akademik')),
            S.listItem()
              .title('📜 Sertifikasi & Lisensi')
              .schemaType('certification')
              .child(S.documentTypeList('certification').title('Daftar Sertifikasi')),
            S.listItem()
              .title('🎬 Konten Media & Kreatif')
              .schemaType('mediaContent')
              .child(S.documentTypeList('mediaContent').title('Daftar Media')),
            S.listItem()
              .title('📝 Artikel & Publikasi')
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
