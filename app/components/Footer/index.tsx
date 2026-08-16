import Link from "next/link";
import styles from "./Footer.module.css"


const Footer = () => {



    return(
        <footer className={styles.footer}>
            <div className={styles.footer_social}>
                <Link 
                href="https://www.linkedin.com/in/victor-queiroz-a80abb1b5/" 
                target="_blank"
                rel="noopener noreferrer"
                >

                    <img 
                    src="/image/social/linkedin.png" 
                    alt="Linkedin"
                    className={styles.footer_social_img}
                    />

                </Link>

                <Link 
                href="https://www.instagram.com/victor_.queiroz/"
                target="_blank"
                rel="noopener noreferrer"
                >

                    <img 
                    src="/image/social/instagram.png" 
                    alt="Intagram"
                    className={styles.footer_social_img}
                    />

                </Link>

                <Link 
                href="https://github.com/QueirozVictor?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                >

                    <img 
                    src="/image/social/github.png" 
                    alt="GitHub"
                    className={styles.footer_social_img}
                    />

                </Link>
            </div>
            <p className={styles.footer_call}>©2026 Blog-Next - Todos os direitos reservados.</p>
            <div className={styles.footer_link}>
                <Link href="/">Início</Link>
                <Link href="">Sobre</Link>
            </div>
        </footer>
    )
}

export default Footer;