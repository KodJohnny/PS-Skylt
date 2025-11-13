import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicePage',
  title: 'Tjänstesidor',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
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
      name: 'serviceType',
      title: 'Tjänstetyp',
      type: 'string',
      options: {
        list: [
          { title: 'Uteservering', value: 'uteservering' },
          { title: 'Skyltprojekt', value: 'skyltprojekt' },
          { title: 'Solskydd', value: 'solskydd' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kort beskrivning',
      type: 'text',
      description: 'Används på startsidan och i kort',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Ikon eller bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
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
          name: 'description',
          title: 'Ingress',
          type: 'text',
          rows: 4,
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
      name: 'whatWeDeliver',
      title: 'Vad vi levererar',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'items',
          title: 'Punkter',
          type: 'array',
          of: [{ type: 'string' }],
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
          name: 'description',
          title: 'Beskrivning',
          type: 'text',
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
      title: 'Case-exempel',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
    }),
    defineField({
      name: 'additionalContent',
      title: 'Ytterligare innehåll',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'CTA-sektion',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Rubrik',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Text',
          type: 'text',
        },
        {
          name: 'buttonText',
          title: 'Knapptext',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Titel',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Beskrivning',
      type: 'text',
      rows: 3,
    }),
  ],
})
