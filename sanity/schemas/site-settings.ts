import { defineField, defineType } from 'sanity'

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Cài đặt website',
  type: 'document',
  fields: [
    defineField({ name: 'zaloUrl', title: 'Link Zalo', type: 'url', validation: r => r.required() }),
    defineField({ name: 'zaloPhone', title: 'Số Zalo hiển thị', type: 'string' }),
    defineField({ name: 'facebookUrl', title: 'Link Facebook', type: 'url' }),
    defineField({ name: 'messengerUrl', title: 'Link Messenger', type: 'url' }),
    defineField({
      name: 'howToBuySteps',
      title: 'Hướng dẫn mua hàng (các bước)',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    prepare() { return { title: 'Cài đặt website' } },
  },
})
