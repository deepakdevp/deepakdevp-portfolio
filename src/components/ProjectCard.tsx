"use client";

import { Flex, Heading, LetterFx, Media, SmartLink, Text, TiltFx } from "@once-ui-system/core";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  tags?: string[];
  variant?: "featured" | "compact";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  link,
  tags = [],
  variant = "compact",
}) => {
  const isFeatured = variant === "featured";

  return (
    <TiltFx>
      <SmartLink href={href} unstyled style={{ display: "block", width: "100%" }}>
        <div className={`${styles.card} ${isFeatured ? styles.featured : styles.compact}`}>
          {/* Image */}
          {images.length > 0 && (
            <div
              className={isFeatured ? styles.featuredImageContainer : styles.compactImageContainer}
            >
              <Media
                src={images[0]}
                alt={title}
                sizes={
                  isFeatured ? "(max-width: 768px) 100vw, 55vw" : "(max-width: 768px) 100vw, 50vw"
                }
                className={styles.image}
              />
            </div>
          )}

          {/* Content */}
          <div className={isFeatured ? styles.featuredContent : styles.compactContent}>
            {/* Tags */}
            {tags.length > 0 && (
              <div className={styles.tags}>
                {tags.slice(0, isFeatured ? 5 : 3).map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title with LetterFx */}
            {title && (
              <Heading
                as="h2"
                wrap="balance"
                variant={isFeatured ? "heading-strong-xl" : "heading-strong-l"}
              >
                <LetterFx trigger="hover" speed="fast">
                  {title}
                </LetterFx>
              </Heading>
            )}

            {/* Description */}
            {description?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-s"
                onBackground="neutral-weak"
                className={`${styles.description} ${isFeatured ? styles.descriptionFeatured : ""}`}
              >
                {description}
              </Text>
            )}

            {/* Action Links */}
            <Flex className={styles.actions}>
              {content?.trim() && (
                <Text variant="body-default-s" onBackground="brand-strong">
                  Read case study &rarr;
                </Text>
              )}
              {link && (
                <SmartLink
                  href={link}
                  unstyled
                  style={{ display: "inline-flex" }}
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                >
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    View project &#8599;
                  </Text>
                </SmartLink>
              )}
            </Flex>
          </div>
        </div>
      </SmartLink>
    </TiltFx>
  );
};
