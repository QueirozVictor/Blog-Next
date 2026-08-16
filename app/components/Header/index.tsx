import Link from "next/link";
import styles from "./Header.module.css"

const logo = process.env.NODE_ENV === "production" ? "/Blog-Next" : "";;

const Header = () =>{
    return(
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Link href="/">
                    <img 
                        src={`${logo}/image/logo/logo.png`} 
                        alt="Logo do site" 
                        className={styles.header_logo}
                        />
                </Link>

                

                <nav>
                    <ul className={styles.header_nav}>
                        <li>
                            <Link href="/">Início</Link>
                        </li>

                        <li>
                            <Link href="/sobre">Sobre</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header;