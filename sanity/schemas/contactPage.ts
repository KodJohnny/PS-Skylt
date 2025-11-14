import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Kontakt-sidan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Rubrik',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
    }),
    defineField({
      name: 'formTitle',
      title: 'Formulär-titel',
      type: 'string',
    }),
    defineField({
      name: 'formDescription',
      title: 'Formulär-beskrivning',
      type: 'text',
    }),
    defineField({
      name: 'responseTime',
      title: 'Återkopplingstid',
      type: 'string',
      description: 'T.ex. "Vi återkommer inom 24 timmar på vardagar"',
    }),
    defineField({
      name: 'offices',
      title: 'Kontor',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Namn', type: 'string' },
            { name: 'address', title: 'Adress', type: 'text' },
            { name: 'phone', title: 'Telefon', type: 'string' },
            { name: 'email', title: 'E-post', type: 'string' },
          ],
        },
      ],
    }),
  ],
})
