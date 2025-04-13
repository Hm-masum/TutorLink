import { model, Schema } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    description: { type: String, required: true },
    image: { type: String },
    tags: { type: [String] },
    author: { type: String, default: 'Habibullah Mohammad masum' },
    gmail: { type: String, default: 'hhmasum88@gmail.com' },
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

export const Blog = model<TBlog>('Blog', blogSchema);
