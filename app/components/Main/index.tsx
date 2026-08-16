import styles from "./Main.module.css"


const Main = () =>{
    return(
        <main className={styles.main}>
            <div className={styles.main_container}>
                <h1 className={styles.main_title}>Descomplicando a Programação.</h1>

                <p 
                className={styles.main_text}>
                    Tutoriais, dicas e conceitos de desenvolvimento web para quem está começando.
                </p>
            </div>
        </main>
    )
}

export default Main;