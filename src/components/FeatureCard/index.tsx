import { Card, createStyles, rem, Text } from "@mantine/core";

import { FeatureParams } from "../../lib/types";

const useStyles = createStyles((theme) => ({
  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "#086d72",
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function FeatureCard({
  title,
  icon,
  description,
}: FeatureParams) {
  const { classes } = useStyles();

  return (
    <Card
      key={title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <img src={icon} height={50} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  );
}
