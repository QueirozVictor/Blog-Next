import { Artigo } from "@/app/types/artigo";
import Link from "next/link";
import ArticleCard from "../ArticleCard";
import styles from "./ArticleGrid.module.css";

type Grid = {
  artigos: Artigo[];
};

const ArticleGrid = ({ artigos }: Grid) => {
  return (
    <section className={styles.grid}>
      {artigos.map((artigo) => (
        <Link key={artigo.id} href={`/artigos/${artigo.slug}`}>
          <ArticleCard config={artigo} />
        </Link>
      ))}
    </section>
  );
};

export default ArticleGrid;
