import { PokeData } from "@/types";
import { Card, Col, Grid, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

type Props = {
  pokemon: PokeData;
};

const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter();

  const navigateToPokeDetail = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card
        isHoverable
        isPressable
        onClick={navigateToPokeDetail}
        variant="bordered"
        css={{ bg: "$black", w: "100%" }}
      >
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={pokemon.img}
            width="100%"
            height={340}
            objectFit="fill"
            alt="Poke background image"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Col>
            <Text
              size={14}
              weight={"bold"}
              transform="uppercase"
              color="#ffffffAA"
            >
              {`# ${pokemon.id}`}
            </Text>
            <Text transform="capitalize" h4>
              {pokemon.name}
            </Text>
          </Col>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
export default PokemonCard;
