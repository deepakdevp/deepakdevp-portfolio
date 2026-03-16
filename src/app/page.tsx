import {
  Avatar,
  Badge,
  Button,
  Column,
  Flex,
  Heading,
  RevealFx,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";
import Image from "next/image";
import { Posts } from "@/components/blog/Posts";
import { ContactMe } from "@/components/ContactMe";
import { Projects } from "@/components/work/Projects";
import { about, baseURL, currently, home, person, routes } from "@/resources";

export default function Home() {
  return (
    <Column maxWidth="xl" gap="xl" horizontal="center" paddingX="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {/* Hero Section — two-column layout */}
      <Flex
        fillWidth
        paddingY="l"
        gap="xl"
        mobileDirection="column-reverse"
        vertical="center"
        horizontal="space-between"
      >
        {/* Left: text content */}
        <Column flex={2} gap="m" horizontal="start">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32">
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
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start">
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
                    style={{ marginLeft: "-0.75rem" }}
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
        <Flex
          flex={1}
          horizontal="center"
          vertical="center"
          paddingBottom="128"
          style={{ minWidth: "320px" }}
        >
          <RevealFx translateY="8" delay={0.3} fillWidth>
            <Image
              src={person.avatar}
              alt={`${person.name} — ${person.role}`}
              width={400}
              height={500}
              style={{
                borderRadius: "2rem",
                objectFit: "cover",
                boxShadow: "0 12px 64px rgba(0,0,0,0.3)",
                maxWidth: "100%",
                height: "auto",
                marginLeft: "auto",
              }}
              priority
            />
          </RevealFx>
        </Flex>
      </Flex>

      {currently.display && (
        <RevealFx translateY="12" delay={0.5} fillWidth>
          <Flex
            fillWidth
            paddingX="l"
            paddingY="m"
            gap="24"
            mobileDirection="column"
            background="neutral-alpha-weak"
            radius="l"
            border="neutral-alpha-medium"
            borderStyle="solid"
          >
            {currently.items.map((item) => (
              <Flex key={item.label} gap="8" vertical="center">
                <Text variant="label-strong-s" onBackground="neutral-weak">
                  {item.label}
                </Text>
                <Text variant="body-default-s" onBackground="neutral-strong">
                  {item.value}
                </Text>
              </Flex>
            ))}
          </Flex>
        </RevealFx>
      )}

      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingX="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="l">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}

      <Projects />
      <ContactMe />
    </Column>
  );
}
