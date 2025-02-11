import { IconHeart } from '@tabler/icons-react';
import { ActionIcon, Badge, Button, Card, Group, Image, Text } from '@mantine/core';
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
const mockdata = new BadgeCardContent({
    id: 1,
    projectType: "Projet Professionnel",
    image:
    'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
    title: 'Verudela Beach',
    dateDebut: new Date(2024, 9, 15),
    dateFin: null,
    description:
    'Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.',
  badges: [
    { label: 'Sunny weather' },
    { label: 'Onsite zoo' },
    { label: 'Sea' },
    { label: 'Nature' },
    { label: 'Water sports' },
  ],
});

export function BadgeCardVertical() {
  const features = mockdata.badges.map((badge) => (
    <Badge variant="light" key={badge.label}>
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={mockdata.image} alt={mockdata.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {mockdata.title}
          </Text>
          <Badge size="sm" variant="light">
            {mockdata.projectType}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs" className={classes.label} c='dimmed'>
          {`${mockdata.dateDebut.toLocaleDateString()} - ${mockdata.dateFin === null ? "" : mockdata.dateFin.toLocaleDateString()}`}
        </Text>
        <Text fz="sm" mt="xs">
          {mockdata.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={8} pt="md">
          {features}
        </Group>
      </Card.Section>

      <Group mt="md">
        <NavLink to={`/projects/${mockdata.id}`}>
            <Button radius="md" style={{ flex: 1 }}>
                En savoir plus sur ce projet
            </Button>
        </NavLink>
      </Group>
    </Card>
  );
}