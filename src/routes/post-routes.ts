import { Router, Request, Response } from 'express';
import BlogPost from '../models/BlogPost.js';

const router = Router();

// Get all blog posts
router.get('/', async (req: Request, res: Response) => {
  try {
    const posts = await BlogPost.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific blog post
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create a new blog post
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const post = new BlogPost({ title, content });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a blog post
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a blog post
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
