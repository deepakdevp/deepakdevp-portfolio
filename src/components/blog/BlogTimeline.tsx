'use client';

import { Column, Flex, Heading, Media, SmartLink, Tag, Text } from '@once-ui-system/core';
import { formatDate } from '@/utils/formatDate';
import { useState } from 'react';

interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    tag?: string;
  };
}

interface BlogTimelineProps {
  posts: BlogPost[];
}

export function BlogTimeline({ posts }: BlogTimelineProps) {
  const sortedBlogs = [...posts].sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // Group blogs by year-month
  const groupedBlogs = sortedBlogs.reduce((acc, blog) => {
    const date = new Date(blog.metadata.publishedAt);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(blog);
    return acc;
  }, {} as Record<string, BlogPost[]>);

  const months = Object.keys(groupedBlogs).sort().reverse();

  const [activeMonth, setActiveMonth] = useState<string | null>(months[0] || null);

  const formatMonth = (key: string) => {
    const [year, month] = key.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <Flex fillWidth gap="xl" mobileDirection="column">
      {/* Timeline on the left */}
      <Column
        style={{
          width: '120px',
          minWidth: '120px',
          position: 'sticky',
          top: '100px',
          height: 'fit-content',
        }}
        gap="8"
        hide="s"
      >
        <Text variant="label-default-s" onBackground="neutral-weak" style={{ marginBottom: '8px' }}>
          Timeline
        </Text>
        {months.map((month) => (
          <Flex
            key={month}
            as="button"
            onClick={() => setActiveMonth(month)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 0',
              textAlign: 'left',
            }}
          >
            <Flex gap="8" vertical="center">
              <Flex
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: activeMonth === month
                    ? 'var(--brand-solid-strong)'
                    : 'var(--neutral-alpha-weak)',
                  transition: 'background-color 0.2s',
                }}
              />
              <Text
                variant="label-default-s"
                onBackground={activeMonth === month ? 'brand-strong' : 'neutral-weak'}
                style={{ transition: 'color 0.2s' }}
              >
                {formatMonth(month)}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Column>

      {/* Blog posts on the right */}
      <Column fillWidth gap="16">
        {sortedBlogs.map((post) => (
          <SmartLink
            key={post.slug}
            href={`/blog/${post.slug}`}
            unstyled
            fillWidth
            style={{ borderRadius: 'var(--radius-l)' }}
          >
            <Flex
              fillWidth
              gap="16"
              padding="16"
              radius="l"
              border="neutral-alpha-weak"
              background="surface"
              mobileDirection="column"
              style={{
                transition: 'all 0.2s ease',
              }}
              className="blog-card-hover"
            >
              {/* Small image placeholder */}
              <Flex
                style={{
                  width: '120px',
                  minWidth: '120px',
                  height: '80px',
                  borderRadius: 'var(--radius-m)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--neutral-alpha-weak)',
                }}
              >
                {post.metadata.image ? (
                  <Media
                    src={post.metadata.image}
                    alt={post.metadata.title}
                    sizes="120px"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <Flex
                    fillWidth
                    fillHeight
                    horizontal="center"
                    vertical="center"
                    style={{
                      background: `linear-gradient(135deg, var(--brand-alpha-weak), var(--accent-alpha-weak))`,
                    }}
                  >
                    <Text variant="label-default-s" onBackground="neutral-weak">
                      📝
                    </Text>
                  </Flex>
                )}
              </Flex>

              {/* Content */}
              <Column flex={1} gap="4" vertical="center">
                <Flex gap="8" vertical="center" wrap>
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    {formatDate(post.metadata.publishedAt, false)}
                  </Text>
                  {post.metadata.tag && (
                    <Tag label={post.metadata.tag} variant="neutral" size="s" />
                  )}
                </Flex>
                <Heading as="h3" variant="heading-strong-m" wrap="balance">
                  {post.metadata.title}
                </Heading>
                {post.metadata.summary && (
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.metadata.summary}
                  </Text>
                )}
              </Column>
            </Flex>
          </SmartLink>
        ))}
      </Column>

      <style jsx global>{`
        .blog-card-hover:hover {
          border-color: var(--brand-alpha-medium);
          transform: translateY(-2px);
        }
      `}</style>
    </Flex>
  );
}
