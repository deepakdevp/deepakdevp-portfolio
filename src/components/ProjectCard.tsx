"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  Media,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Flex
      fillWidth
      gap="l"
      mobileDirection="column"
      padding="m"
      radius="l"
      border="neutral-alpha-weak"
      background="surface"
      style={{
        transition: 'all 0.2s ease',
      }}
    >
      {/* Compact image on the left */}
      {images.length > 0 && (
        <Flex
          style={{
            width: '280px',
            minWidth: '280px',
            height: '180px',
            overflow: 'hidden',
            borderRadius: 'var(--radius-m)',
          }}
        >
          <Media
            src={images[0]}
            alt={title}
            sizes="280px"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Flex>
      )}
      
      {/* Content on the right */}
      <Column flex={1} gap="12" vertical="center">
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-l">
            {title}
          </Heading>
        )}
        
        {avatars?.length > 0 && (
          <AvatarGroup avatars={avatars} size="s" reverse />
        )}
        
        {description?.trim() && (
          <Text
            wrap="balance"
            variant="body-default-s"
            onBackground="neutral-weak"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </Text>
        )}
        
        <Flex gap="16" wrap style={{ marginTop: 'auto' }}>
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={href}
            >
              <Text variant="body-default-s">Read case study</Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
            >
              <Text variant="body-default-s">View project</Text>
            </SmartLink>
          )}
        </Flex>
      </Column>
    </Flex>
  );
};
