import { defineField, defineType } from 'sanity'

export const productSchema = defineType({
  name: 'product',
  title: 'Sản phẩm',
  type: 'document',
  fields: [
    defineField({ name: 'id', title: 'ID (slug)', type: 'slug', options: { source: 'name' }, validation: r => r.required() }),
    defineField({ name: 'name', title: 'Tên sản phẩm', type: 'string', validation: r => r.required() }),
    defineField({ name: 'categoryId', title: 'Category ID', type: 'string', validation: r => r.required() }),
    defineField({ name: 'categoryName', title: 'Category Name', type: 'string' }),
    defineField({ name: 'price', title: 'Giá (VNĐ)', type: 'number', validation: r => r.required().min(0) }),
    defineField({ name: 'originalPrice', title: 'Giá gốc (nếu đang sale)', type: 'number' }),
    defineField({ name: 'duration', title: 'Đơn vị thời gian', type: 'string', initialValue: 'tháng' }),
    defineField({ name: 'logoEmoji', title: 'Logo Emoji', type: 'string' }),
    defineField({ name: 'logoColor', title: 'Logo Color (hex)', type: 'string' }),
    defineField({ name: 'description', title: 'Mô tả ngắn', type: 'text', rows: 2 }),
    defineField({ name: 'isFeatured', title: 'Nổi bật', type: 'boolean', initialValue: false }),
    defineField({ name: 'isSale', title: 'Đang sale', type: 'boolean', initialValue: false }),
    defineField({ name: 'isNew', title: 'Mới', type: 'boolean', initialValue: false }),
    defineField({
      name: 'features',
      title: 'Tính năng nổi bật',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'pricingTiers',
      title: 'Bảng giá',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'duration', title: 'Thời hạn', type: 'string', validation: r => r.required() }),
          defineField({ name: 'label', title: 'Nhãn tùy chỉnh', type: 'string' }),
          defineField({ name: 'price', title: 'Giá (VNĐ)', type: 'number', validation: r => r.required() }),
          defineField({ name: 'isPopular', title: 'Phổ biến nhất', type: 'boolean', initialValue: false }),
          defineField({ name: 'savings', title: 'Giảm giá (%)', type: 'number' }),
        ],
        preview: {
          select: { title: 'label', subtitle: 'price', duration: 'duration' },
          prepare({ title, subtitle, duration }) {
            return { title: title ?? duration, subtitle: `${subtitle?.toLocaleString('vi-VN')}₫` }
          },
        },
      }],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'categoryName', price: 'price' },
    prepare({ title, subtitle, price }) {
      return { title, subtitle: `${subtitle} — ${price?.toLocaleString('vi-VN')}₫` }
    },
  },
})
