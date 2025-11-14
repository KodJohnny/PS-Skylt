import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Startsida',
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
          validation: (Rule) => Rule.required(),
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
        {
          name: 'primaryCTA',
          title: 'Primär knapp',
          type: 'object',
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'link', title: 'Länk', type: 'string' },
          ],
        },
        {
          name: 'secondaryCTA',
          title: 'Sekundär knapp',
          type: 'object',
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'link', title: 'Länk', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Tjänstesektion',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'services',
          title: 'Tjänster',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'servicePage' }] }],
          validation: (Rule) => Rule.max(3),
        },
      ],
    }),
    defineField({
      name: 'whyUsSection',
      title: '"Varför PS?"-sektion',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'reasons',
          title: 'Anledningar',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Titel', type: 'string' },
                { name: 'description', title: 'Beskrivning', type: 'text' },
                { name: 'icon', title: 'Ikon (emoji eller bild)', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'processSection',
      title: 'Process-sektion',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'steps',
          title: 'Steg',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'processStep' }] }],
        },
      ],
    }),
    defineField({
      name: 'featuredCases',
      title: 'Utvalda projekt',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'cases',
          title: 'Case',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
        },
      ],
    }),
    defineField({
      name: 'outdoorSection',
      title: 'Fokussektion: Uteserveringar',
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
          name: 'image',
          title: 'Bakgrundsbild',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'cta',
          title: 'Knapp',
          type: 'object',
          fields: [
            { name: 'text', title: 'Text', type: 'string' },
            { name: 'link', title: 'Länk', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonialsSection',
      title: 'Kundcitat',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'testimonials',
          title: 'Citat',
          type: 'array',
          of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
        },
      ],
    }),
  ],
})
