import type { Metadata } from "next"
import artigos from "@/app/lb/artigos.json"
import { notFound } from "next/navigation"
import styles from "./Article.module.css"

type Props = {
    params: Promise<{
        slug: string
    }>
}

export function generateStaticParams(){
    return artigos.map((artigo) => ({
        slug: artigo.slug
    }))
}


export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {

    const { slug } = await params

    const artigo = artigos.find((a) => a.slug === slug)

    if (!artigo) {
        return {
            title: "Artigo não encontrado | BlogNext",
        }
    }

    return {
        title: `${artigo.title} | BlogNext`,
        description: artigo.description,
    }
}



export default async function Article ({params} : Props){
    const { slug } = await params;

    const artigo = artigos.find((a) => a.slug === slug);

    if (!artigo || !artigo.content) {
    notFound();
    }

return(
    <article className={styles.article}>

        <h1 className={styles.article_title}>{artigo.title}</h1>
            <span className={styles.article_container_p}>Por {artigo.author}</span>
            <span className={styles.article_container_p}>{artigo.date}</span>

        {Object.entries(artigo.content).map(([chave, valor]) =>{
            //Subtitulos
            if(chave.startsWith("sub-titulo")){
                return(
                    <h2 key={chave}
                        className={styles.article_subtitulo}
                    >
                        {valor}
                    </h2>
                );
            }

            //Conteudo em arrays
            if(Array.isArray(valor)){
                return(
                    <div key={chave}
                         className={styles.article_container}
                    >
                        {valor.map((item, index) => {
                            if(item.startsWith("/")){
                                return(
                                    <img 
                                    key={index}
                                    className={styles.article_container_img}
                                    src={item} 
                                    alt={`Imagem do artigo ${artigo.title}`} />
                                )
                            };

                            return(
                                <p key={index}
                                    className={styles.article_container_p}
                                    >
                                    {item}
                                </p>
                            );
                        })}
                    </div>
                )
            }
            return null;
        })}
    </article>
)
}


