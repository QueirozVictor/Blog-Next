import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <span className={styles.tag}>Sobre o BlogNext</span>

        <h1>Descomplicando a programação</h1>

        <p>
          O BlogNext nasceu com uma ideia simples: tornar a programação mais
          fácil de entender para quem está começando.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.card}>
          <h2>💡 A ideia</h2>

          <p>
            Aprender programação pode parecer complicado no começo. Por isso, o
            BlogNext reúne conteúdos explicados de forma simples, prática e
            direta, evitando complicações desnecessárias.
          </p>
        </div>

        <div className={styles.card}>
          <h2>📚 O que você encontra</h2>

          <p>
            Aqui você encontra artigos, tutoriais e dicas sobre desenvolvimento
            web, passando por HTML, CSS, JavaScript, React, Git e outras
            tecnologias importantes para quem está construindo seus primeiros
            projetos.
          </p>
        </div>

        <div className={styles.card}>
          <h2>🚀 Como o blog funciona</h2>

          <p>
            Os conteúdos são organizados por artigos e categorias, permitindo
            que você avance aos poucos, começando pelos fundamentos e chegando a
            conceitos mais avançados.
          </p>
        </div>
      </section>

      <section className={styles.finalSection}>
        <h2>Aprenda, pratique e evolua.</h2>

        <p>
          O objetivo do BlogNext não é ensinar tudo de uma vez. É ajudar você a
          dar o próximo passo.
        </p>
      </section>
    </main>
  );
}
