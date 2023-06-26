import { pokeApi } from "@/api";
import Layout from "@/components/layouts/Layout";
import { Pokemon } from "@/types";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

type Props = {
  pokemon: Pokemon;
};

const PokemonDetail = ({ pokemon }: Props) => {
  //* router.query will bring me the URL dynamic value that I'm sending as param from the previous page
  //   const router = useRouter();
  //   console.log(router.query);
  return (
    <Layout title="Pokemon detail">
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ p: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={`${pokemon.name} default image`}
                width={"100%"}
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button color="gradient" ghost>
                Save to favorites
              </Button>
            </Card.Header>
            <Card.Body>
              <Text h3>Available sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const pokemonsArrayQuantity = [...Array(151)].map(
    (value, idx) => `${idx + 1}`
  );
  return {
    paths: pokemonsArrayQuantity.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonDetail;
