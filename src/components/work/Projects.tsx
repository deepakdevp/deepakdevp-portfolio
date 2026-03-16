import { Column, Grid, Heading, RevealFx } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import { getPosts } from "@/utils/utils";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  const allProjects = getPosts(["src", "app", "work", "projects"]);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  if (displayedProjects.length === 0) return null;

  const [featured, ...rest] = displayedProjects;

  return (
    <Column fillWidth gap="xl" paddingX="l">
      {/* Featured project — hero card */}
      <RevealFx translateY="12" speed="slow">
        <ProjectCard
          variant="featured"
          priority
          key={featured.slug}
          href={`/work/${featured.slug}`}
          images={featured.metadata.images}
          title={featured.metadata.title}
          description={featured.metadata.summary}
          content={featured.content}
          avatars={
            featured.metadata.team?.map((member: { avatar: string }) => ({ src: member.avatar })) ||
            []
          }
          link={featured.metadata.link || ""}
          tags={featured.metadata.tags || []}
        />
      </RevealFx>

      {/* Remaining projects — 2-column grid */}
      {rest.length > 0 && (
        <>
          <RevealFx translateY="8" delay={0.1}>
            <Heading as="h2" variant="heading-strong-l" paddingBottom="4">
              More Projects
            </Heading>
          </RevealFx>

          <Grid columns="2" mobileColumns="1" tabletColumns="1" gap="l">
            {rest.map((post, index) => (
              <RevealFx key={post.slug} translateY="16" delay={0.1 + index * 0.1}>
                <ProjectCard
                  variant="compact"
                  priority={index < 2}
                  href={`/work/${post.slug}`}
                  images={post.metadata.images}
                  title={post.metadata.title}
                  description={post.metadata.summary}
                  content={post.content}
                  avatars={
                    post.metadata.team?.map((member: { avatar: string }) => ({
                      src: member.avatar,
                    })) || []
                  }
                  link={post.metadata.link || ""}
                  tags={post.metadata.tags || []}
                />
              </RevealFx>
            ))}
          </Grid>
        </>
      )}
    </Column>
  );
}
