import ArticleGrid from "./components/ArticleGrid";
import Main from "./components/Main";
import cardArtigos from "./lb/artigos.json";

export default function Home() {
  const destaque = cardArtigos.filter((artigo) => artigo.destaque);

  return (
    <>
      <Main />
      <ArticleGrid artigos={destaque} />
    </>
  );
}
