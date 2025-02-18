import { Card, Group, Image, Text, Stack, Title } from '@mantine/core';
import classes from './CardHorizontal.module.css';

interface ICardHorizontalContent {
    id: number;
    image: string;
    title: string;
    dateDebut: Date;
    dateFin: Date | null;
    place: string;
    description: string;
};

export class CardHorizontalContent {
  id: number;
  image: string;
  title: string;
  dateDebut: Date;
  dateFin: Date | null;
  place: string;
  description: string;

    constructor({id, image, title, dateDebut, dateFin, place, description}: ICardHorizontalContent){
        this.id = id;
        this.place = place;
        this.image = image;
        this.title = title;
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.description = description;
    }
}

export function CardHorizontal({content}:{content:ICardHorizontalContent}) {

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section m={0} pr="md" className={classes.firstSection}>
        <Stack align="center">
          <Image src={content.image} alt={content.title} height={180} style={{flex:1}} />
          <Stack align="center" gap="xs">
            <Title order={4}>{content.title}</Title>
            <Text fs={"italic"}>{content.dateDebut.toLocaleDateString()} - {content.dateFin ? content.dateFin.toLocaleDateString() : ""}</Text>
            <Text>{content.place}</Text>
          </Stack>
        </Stack>
      </Card.Section>

      <Card.Section m={0} px="md" className={classes.secondSection}>
          <Text fz="sm" component='div' dangerouslySetInnerHTML={{__html:content.description}} />
      </Card.Section>
    </Card>
  );
}