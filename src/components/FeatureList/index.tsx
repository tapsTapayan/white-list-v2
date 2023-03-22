import {
  Badge,
  Container,
  createStyles,
  Group,
  rem,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

import { FeatureParams, menuDataParams } from "../../lib/types";
import { FeatureCard } from "./..";

type FeatureListParams = {
  menuData: menuDataParams;
  header?: string | "";
  subheader?: string | "";
  description?: string | "";
  description2?: string | "";
};

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "#086d72",
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function FeatureList({
  menuData,
  header,
  subheader,
  description,
  description2,
}: FeatureListParams) {
  const { classes } = useStyles();

  const features = menuData.data.map(
    ({ title, icon, description }: FeatureParams) => (
      <FeatureCard
        key={title}
        title={title}
        icon={icon}
        description={description}
      />
    )
  );

  return (
    <Container size="lg" py="xl" mt="60px">
      <Group position="center">
        <Badge variant="filled" bg="#085272" my="lg" size="lg">
          {header}
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        {subheader}
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        {description}
        <br />
        {description2}
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[
          { maxWidth: "md", cols: 2 },
          { maxWidth: "sm", cols: 1 },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
