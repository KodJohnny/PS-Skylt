import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blogg/Kunskap',
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
      name: 'excerpt',
      title: 'Ingress',
      type: 'text',
      description: 'Kort sammanfattning som visas i listningar',
      rows: 3,
    }),
    defineField({
      name: 'featuredImage',
      title: 'Utvald bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Uteservering', value: 'uteservering' },
          { title: 'Skyltning', value: 'skyltning' },
          { title: 'Solskydd', value: 'solskydd' },
          { title: 'Bygglov', value: 'bygglov' },
          { title: 'Design', value: 'design' },
          { title: 'Tips & råd', value: 'tips' },
        ],
      },
    }),
    defineField({
      name: 'content',
      title: 'Innehåll',
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
      name: 'publishedAt',
      title: 'Publiceringsdatum',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Författare',
      type: 'reference',
      to: [{ type: 'teamMember' }],
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
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
      category: 'category',
    },
    prepare(selection) {
      const { title, media, category } = selection
      return {
        title: title,
        subtitle: category,
        media: media,
      }
    },
  },
})
