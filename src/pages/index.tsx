import { GetStaticProps, NextPage } from "next";
import { Grid, Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import Layout from "@/components/layouts/Layout";
import { pokeApi } from "@/api";
import { PokeData, PokemonResponse } from "@/types";
import { PokemonCard } from "@/components/pokemon";

type Props = {
  pokemons: PokeData[];
};

const Home: NextPage<Props> = ({ pokemons }) => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Layout title="Pokemon list">
      <Grid.Container gap={2} justify="center">
        {pokemons.map((poke) => (
          <PokemonCard pokemon={poke} key={poke.id} />
        ))}
      </Grid.Container>
      {/* Below code should be added to the layout to switch theme */}
      {/* <h1>Hola mundo, el tema actual es : {type}</h1>
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      /> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonResponse>("/pokemon?limit=151");
  const pokemons: PokeData[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
