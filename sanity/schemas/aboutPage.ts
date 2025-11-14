import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'Om oss-sidan',
  type: 'document',
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero-sektion',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Underrubrik',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Bakgrundsbild',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'historySection',
      title: 'Historik-sektion',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'content',
          title: 'Innehåll',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    }),
    defineField({
      name: 'organizationSection',
      title: 'Organisation-sektion',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Beskrivning',
          type: 'text',
        },
        {
          name: 'offices',
          title: 'Kontor',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Namn', type: 'string' },
                { name: 'type', title: 'Typ', type: 'string' },
                { name: 'description', title: 'Beskrivning', type: 'text' },
                { name: 'employees', title: 'Antal anställda', type: 'number' },
                { name: 'image', title: 'Bild', type: 'image', options: { hotspot: true } },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'teamSection',
      title: 'Team-sektion',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'members',
          title: 'Teammedlemmar',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
        },
      ],
    }),
    defineField({
      name: 'statsSection',
      title: 'Statistik-sektion',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'stats',
          title: 'Statistik',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'number', title: 'Siffra', type: 'string' },
                { name: 'label', title: 'Etikett', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
