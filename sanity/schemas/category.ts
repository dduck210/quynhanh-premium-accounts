import { defineField, defineType } from 'sanity'

export const categorySchema = defineType({
  name: 'category',
  title: 'Danh mục',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID (slug)', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'name', title: 'Tên danh mục', type: 'string', validation: r => r.required() }),
    defineField({ name: 'icon', title: 'Icon (Lucide name)', type: 'string' }),
    defineField({ name: 'bgColor', title: 'Background color class', type: 'string' }),
    defineField({ name: 'textColor', title: 'Text color class', type: 'string' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'id.current' },
  },
})
