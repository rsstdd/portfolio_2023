import userData from "@constants/data"
import getLatestRepos from "@lib/getLatestRepos"
import AboutMe from "../components/AboutMe"
import ContainerBlock from "../components/ContainerBlock"
import Hero from "../components/Hero"
import LatestCode from "../components/LatestCode"

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title={`${userData.name} - Software Engineer`}
      description=""
    >
      <Hero />
      <AboutMe />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
