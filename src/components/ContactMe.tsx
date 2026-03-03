import { contact } from "@/resources/content";
import { Button, Flex, Heading, Text, Column, Icon, SmartLink } from "@once-ui-system/core";

export const ContactMe = () => {
  if (!contact.display) return null;
  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
    >
      <Heading style={{ position: "relative" }} marginBottom="s" variant="display-strong-xs">
        {contact.title}
      </Heading>
      <Text
        style={{
          position: "relative",
          maxWidth: "var(--responsive-width-xs)",
          textAlign: "center",
        }}
        wrap="balance"
        marginBottom="l"
        onBackground="neutral-medium"
      >
        {contact.description}
      </Text>
      <Flex gap="12" horizontal="center" vertical="center" wrap>
        {contact.options.map((option) => (
          <SmartLink key={option.name} href={option.link} rel="noopener noreferrer" target="_blank">
            <Button size="m" variant="primary">
              <Flex gap="8" vertical="center">
                <Icon name={option.icon} size="s" />
                <Text variant="label-default-s">{option.name}</Text>
              </Flex>
            </Button>
          </SmartLink>
        ))}
      </Flex>
    </Column>
  );
};
