import React from 'react';
import Image from 'next/image';

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Meta,
  Schema,
} from '@once-ui-system/core';
import { home, about, person, baseURL, routes } from '@/resources';
import { ContactMe } from '@/components/ContactMe';
import { Projects } from '@/components/work/Projects';
import { Posts } from '@/components/blog/Posts';

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(
          home.title
        )}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {/* Hero Section — two-column layout */}
      <Flex
        fillWidth
        paddingY="24"
        gap="xl"
        mobileDirection="column"
        vertical="center"
      >
        {/* Left: text content */}
        <Column flex={1} gap="m">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="start"
              paddingTop="16"
              paddingBottom="32"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="start"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="start"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="start"
          >
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: '-0.75rem' }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>

        {/* Right: avatar photo */}
        <RevealFx
          translateY="8"
          delay={0.3}
          style={{ flex: '0 0 auto' }}
        >
          <Image
            src={person.avatar}
            alt={`${person.name} — ${person.role}`}
            width={300}
            height={380}
            style={{
              borderRadius: '1.5rem',
              objectFit: 'cover',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            }}
            priority
          />
        </RevealFx>
      </Flex>

      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>

      {routes['/blog'] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingX="l" paddingTop="24">
            <Heading
              as="h2"
              variant="display-strong-xs"
              wrap="balance"
            >
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="l">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      <ContactMe />
    </Column>
  );
}
