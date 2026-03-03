"use client";

import { Column, Flex, Heading, Media, SmartLink, Tag, Text } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { useState, useEffect, useRef } from "react";

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
  const [activeMonth, setActiveMonth] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const isClickScrolling = useRef(false);

  const sortedBlogs = [...posts].sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  // Group blogs by year-month
  const groupedBlogs = sortedBlogs.reduce(
    (acc, blog) => {
      const date = new Date(blog.metadata.publishedAt);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(blog);
      return acc;
    },
    {} as Record<string, BlogPost[]>,
  );

  const months = Object.keys(groupedBlogs).sort().reverse();

  useEffect(() => {
    if (months.length > 0 && activeMonth === null) {
      setActiveMonth(months[0]);
    }
  }, [months, activeMonth]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        // Find the entry that is most prominent or the first one crossing a threshold
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveMonth(visibleEntry.target.id.replace("month-", ""));
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Precise trigger zone
        threshold: 0,
      },
    );

    months.forEach((month) => {
      const el = document.getElementById(`month-${month}`);
      if (el) observer.current?.observe(el);
    });

    return () => observer.current?.disconnect();
  }, [months]);

  const scrollToMonth = (month: string) => {
    isClickScrolling.current = true;
    setActiveMonth(month);
    const element = document.getElementById(`month-${month}`);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  const formatMonth = (key: string) => {
    const [year, month] = key.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  const getPlaceholderImage = (post: BlogPost) => {
    const title = post.metadata.title.toLowerCase();
    const summary = post.metadata.summary.toLowerCase();
    const tag = post.metadata.tag?.toLowerCase() || "";

    if (
      title.includes("japanese") ||
      summary.includes("japanese") ||
      tag.includes("japanese") ||
      title.includes("jlpt")
    ) {
      return "/images/blog/japanese-placeholder.png";
    }

    if (tag.includes("tech") || title.includes("tech") || summary.includes("tech")) {
      return "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800";
    }

    if (
      tag.includes("code") ||
      title.includes("code") ||
      summary.includes("code") ||
      title.includes("workflow")
    ) {
      return "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800";
    }

    if (tag.includes("design") || title.includes("design")) {
      return "https://images.unsplash.com/photo-1581291518137-90d50523d944?auto=format&fit=crop&q=80&w=800";
    }

    return "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800";
  };

  return (
    <Flex fillWidth gap="xl" mobileDirection="column">
      {/* Timeline on the left */}
      <Column
        style={{
          width: "140px",
          minWidth: "140px",
          position: "sticky",
          top: "120px",
          height: "fit-content",
        }}
        gap="8"
        hide="s"
      >
        <Text
          variant="label-default-s"
          onBackground="neutral-weak"
          style={{ marginBottom: "8px", paddingLeft: "12px" }}
        >
          Timeline
        </Text>
        <Column gap="4">
          {months.map((month) => (
            <Flex
              key={month}
              as="button"
              onClick={() => scrollToMonth(month)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "6px 12px",
                textAlign: "left",
                borderRadius: "8px",
                backgroundColor:
                  activeMonth === month ? "var(--neutral-alpha-weak)" : "transparent",
                transition: "all 0.2s ease",
              }}
            >
              <Flex gap="12" vertical="center">
                <Flex
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor:
                      activeMonth === month
                        ? "var(--brand-solid-strong)"
                        : "var(--neutral-alpha-medium)",
                    transition: "all 0.2s ease",
                    boxShadow: activeMonth === month ? "0 0 8px var(--brand-solid-strong)" : "none",
                  }}
                />
                <Text
                  variant="label-default-s"
                  weight={activeMonth === month ? "strong" : "default"}
                  onBackground={activeMonth === month ? "neutral-strong" : "neutral-weak"}
                  style={{ transition: "color 0.2s" }}
                >
                  {formatMonth(month)}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Column>
      </Column>

      {/* Blog posts on the right */}
      <Column fillWidth gap="48">
        {months.map((month) => (
          <Column key={month} id={`month-${month}`} gap="24" style={{ scrollMarginTop: "120px" }}>
            <Flex paddingLeft="16" vertical="center" gap="12">
              <div style={{ height: "1px", flex: 1, background: "var(--neutral-alpha-weak)" }} />
              <Text variant="label-default-s" onBackground="neutral-weak">
                {formatMonth(month)}
              </Text>
            </Flex>
            <Column gap="16">
              {groupedBlogs[month].map((post) => (
                <SmartLink
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  unstyled
                  fillWidth
                  style={{ borderRadius: "var(--radius-l)" }}
                >
                  <Flex
                    fillWidth
                    gap="24"
                    padding="16"
                    radius="l"
                    border="neutral-alpha-weak"
                    background="surface"
                    mobileDirection="column"
                    style={{
                      transition: "all 0.3s ease",
                    }}
                    className="blog-card-hover"
                  >
                    {/* Image placeholder */}
                    <Flex
                      style={{
                        width: "200px",
                        minWidth: "200px",
                        height: "120px",
                        borderRadius: "var(--radius-m)",
                        overflow: "hidden",
                        position: "relative",
                      }}
                      className="blog-card-image"
                    >
                      <Media
                        src={post.metadata.image || getPlaceholderImage(post)}
                        alt={post.metadata.title}
                        sizes="200px"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    </Flex>

                    {/* Content */}
                    <Column flex={1} gap="8" vertical="center">
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
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
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
          </Column>
        ))}
      </Column>

      <style jsx global>{`
        .blog-card-hover:hover {
          border-color: var(--brand-alpha-strong);
          transform: translateY(-4px);
          box-shadow: var(--shadow-l);
          background: var(--neutral-alpha-weak);
        }
        .blog-card-hover:hover .blog-card-image img {
          transform: scale(1.05);
        }
      `}</style>
    </Flex>
  );
}
