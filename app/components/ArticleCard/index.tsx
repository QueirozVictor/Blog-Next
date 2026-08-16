import { Artigo } from "@/app/types/artigo";
import styles from "./ArticleCard.module.css"


type Card = {
    config: Artigo
}


const ArticleCard =  ({config} : Card) =>{
    const {image, title, description, date} = config;

    return(
            <div className={styles.card}>
                <img 
                className={styles.card_image}
                src={image} 
                alt={`Imagem do Artigo ${title}`}/>

                <div className={styles.card_info}>
                    <h3 className={styles.card_info_title}>{title}</h3>
                    <p className={styles.card_info_description}>{description}</p>
                    <span className={styles.card_info_date}>{date}</span>
                </div>

            </div>
    )
}

export default ArticleCard;