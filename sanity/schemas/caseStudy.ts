import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case-studier',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Projekttitel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Kund',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Plats',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Uteservering', value: 'uteservering' },
          { title: 'Skyltprojekt', value: 'skyltprojekt' },
          { title: 'Solskydd', value: 'solskydd' },
          { title: 'Helhetsprojekt', value: 'helhet' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kort beskrivning',
      type: 'text',
      description: 'Visas i listningar',
      rows: 3,
    }),
    defineField({
      name: 'featuredImage',
      title: 'Huvudbild',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      title: 'Utmaning',
      type: 'text',
      description: 'Vad var kundens utmaning?',
      rows: 4,
    }),
    defineField({
      name: 'solution',
      title: 'Lösning',
      type: 'text',
      description: 'Hur löste ni det?',
      rows: 4,
    }),
    defineField({
      name: 'result',
      title: 'Resultat',
      type: 'text',
      description: 'Vad blev utfallet?',
      rows: 4,
    }),
    defineField({
      name: 'gallery',
      title: 'Bildgalleri',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Bildtext',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Kundcitat',
      type: 'reference',
      to: [{ type: 'testimonial' }],
    }),
    defineField({
      name: 'featured',
      title: 'Utvald (visas på startsidan)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'completionDate',
      title: 'Slutfört datum',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { title, client, media } = selection
      return {
        title: title,
        subtitle: client,
        media: media,
      }
    },
  },
})
