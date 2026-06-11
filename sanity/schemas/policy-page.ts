import { defineField, defineType } from 'sanity'

export const policyPageSchema = defineType({
  name: 'policyPage',
  title: 'Trang chính sách',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: r => r.required(),
    }),
    defineField({ name: 'title', title: 'Tiêu đề', type: 'string', validation: r => r.required() }),
    defineField({
      name: 'content',
      title: 'Nội dung',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
})
