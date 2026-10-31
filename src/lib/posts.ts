import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Newest first. Drafts are included only in `astro dev`, so you can preview them locally. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const postUrl = (post: Post) => `/blog/${post.id}`;

const WORDS_PER_MINUTE = 200;

/** Estimated from the raw Markdown at build time, e.g. "4 min read". */
export function readingTime(post: Post): string {
  const text = (post.body ?? '').replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
}

export const tagUrl = (tag: string) => `/blog/tags/${tag}`;

export interface Tag {
  name: string;
  posts: Post[];
}

/** Every tag with its posts (newest first), most used tags first. */
export async function getTags(): Promise<Tag[]> {
  const byName = new Map<string, Post[]>();
  for (const post of await getPosts()) {
    for (const name of post.data.tags) {
      byName.set(name, [...(byName.get(name) ?? []), post]);
    }
  }
  return [...byName]
    .map(([name, posts]) => ({ name, posts }))
    .sort((a, b) => b.posts.length - a.posts.length || a.name.localeCompare(b.name));
}
