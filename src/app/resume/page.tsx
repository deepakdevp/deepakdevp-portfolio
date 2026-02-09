import { Button, Column, Flex, Heading, Meta, Text } from '@once-ui-system/core';
import { baseURL, person } from '@/resources';

export async function generateMetadata() {
  return Meta.generate({
    title: `Resume - ${person.name}`,
    description: `View and download ${person.name}'s resume`,
    baseURL: baseURL,
    path: '/resume',
  });
}

export default function ResumePage() {
  return (
    <Column maxWidth="l" gap="xl" paddingY="xl">
      <Flex direction="column" gap="m" horizontal="center">
        <Heading variant="display-strong-s">My Resume</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          View my professional experience and skills below, or download a copy.
        </Text>
        <Button
          href="/resume.pdf"
          download="Deepak_Dev_Panwar_Resume.pdf"
          variant="primary"
          size="m"
          prefixIcon="download"
        >
          Download Resume (PDF)
        </Button>
      </Flex>
      
      <Flex
        fillWidth
        style={{
          height: 'calc(100vh - 300px)',
          minHeight: '600px',
          borderRadius: 'var(--radius-l)',
          overflow: 'hidden',
          border: '1px solid var(--neutral-border-medium)',
        }}
      >
        <iframe
          src="/resume.pdf"
          width="100%"
          height="100%"
          style={{
            border: 'none',
          }}
          title="Resume PDF Viewer"
        />
      </Flex>
    </Column>
  );
}
