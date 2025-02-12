import { Badge, Button, Card, Group, Image, Text } from '@mantine/core';
import classes from './BadgeCardVertical.module.css';
import { NavLink } from 'react-router-dom';

interface IBadgeCardContent {
    id: number;
    projectType: string;
    image: string;
    title: string;
    dateDebut: Date;
    dateFin: Date | null;
    description: string;
    badges: {label: string}[];
};

export class BadgeCardContent {
    id: number;
    projectType: string;
    image: string;
    title: string;
    dateDebut: Date;
    dateFin: Date | null;
    description: string;
    badges: {label: string}[];

    constructor({id, projectType, image, title, dateDebut, dateFin, description, badges}: IBadgeCardContent){
        this.id = id;
        this.projectType = projectType;
        this.image = image;
        this.title = title;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.description = description;
        this.badges = badges;
    }
}

export function BadgeCardVertical({content}:{content:BadgeCardContent}) {
  const features = content.badges.map((badge) => (
    <Badge variant="light" key={badge.label}>
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={content.image} alt={content.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {content.title}
          </Text>
          <Badge size="sm" variant="light">
            {content.projectType}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs" className={classes.label} c='dimmed'>
          {`${content.dateDebut.toLocaleDateString()} - ${content.dateFin ? content.dateFin.toLocaleDateString() : ""}`}
        </Text>
        <Text fz="sm" mt="xs" lineClamp={3}>
          {content.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={8} pt="md">
          {features}
        </Group>
      </Card.Section>

      <Group mt="md">
        <NavLink to={`/project/${content.id}`}>
            <Button radius="md" style={{ flex: 1 }}>
                En savoir plus sur ce projet
            </Button>
        </NavLink>
      </Group>
    </Card>
  );
}