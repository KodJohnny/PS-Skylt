import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Kundcitat',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Citat',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Namn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Roll/Titel',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Företag',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bild (valfritt)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'company',
      media: 'image',
    },
  },
})
