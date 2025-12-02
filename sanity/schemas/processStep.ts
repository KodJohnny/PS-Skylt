import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'processStep',
  title: 'Process-steg',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beskrivning',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'order',
      title: 'Ordning',
      type: 'number',
      description: 'Steg-nummer (1, 2, 3, etc.)',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'icon',
      title: 'Ikon (emoji)',
      type: 'string',
      description: 'T.ex. 📋, 📐, 💰, 📅, 🔧, ✅',
    }),
  ],
  orderings: [
    {
      title: 'Ordning',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
