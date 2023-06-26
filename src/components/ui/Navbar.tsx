import Image from "next/image";
import NextLink from "next/link";
import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import pikachu from "@/assets/pikachu.png";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        // backgroundColor: theme?.colors.blue400.value,
      }}
    >
      <NextLink href="/" passHref legacyBehavior>
        <Link block>
          <Image src={pikachu} alt="App icon" width={64} height={64} />
          <Spacer />
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref legacyBehavior>
        <Link color="primary" block>
          <Text color="white">Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
export default Navbar;
