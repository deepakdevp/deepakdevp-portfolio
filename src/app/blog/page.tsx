import { Column, Heading, Meta, Schema } from '@once-ui-system/core';
import { ContactMe } from '@/components/ContactMe';
import { BlogTimeline } from '@/components/blog/BlogTimeline';
import { getPosts } from '@/utils/utils';
import { baseURL, blog, person } from '@/resources';

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  const posts = getPosts(['src', 'app', 'blog', 'posts']);
  
  return (
    <Column maxWidth="m">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(
          blog.title
        )}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {blog.title}
      </Heading>
      <Column fillWidth flex={1}>
        <BlogTimeline posts={posts} />
      </Column>
      <ContactMe />
    </Column>
  );
}
