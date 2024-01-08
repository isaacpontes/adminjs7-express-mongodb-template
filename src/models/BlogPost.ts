import mongoose, { Document, Schema } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  content: string;
}

const blogPostSchema: Schema = new Schema({
  title: String,
  content: String,
});

const BlogPost = mongoose.model<IBlogPost>('BlogPost', blogPostSchema);

export default BlogPost;
