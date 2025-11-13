import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Inställningar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Webbplatsens titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
      description: 'Används för SEO',
    }),
    defineField({
      name: 'logo',
      title: 'Logotyp',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'contact',
      title: 'Kontaktinformation',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'E-post',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Telefon',
          type: 'string',
        },
        {
          name: 'addressStockholm',
          title: 'Adress Stockholm',
          type: 'text',
        },
        {
          name: 'addressSodertalje',
          title: 'Adress Södertälje',
          type: 'text',
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Sociala medier',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'string',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'string',
        },
      ],
    }),
  ],
})
