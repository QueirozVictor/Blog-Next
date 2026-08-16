import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
    title: {
        default: "BlogNext | Descomplicando a programação",
        template: "%s | BlogNext",
    },

    description:
        "Tutoriais, dicas e conceitos de desenvolvimento web para quem está começando.",

    keywords: [
        "programação",
        "desenvolvimento web",
        "JavaScript",
        "React",
        "Next.js",
        "Git",
        "frontend",
    ],

    authors: [
        {
            name: "Equipe BlogNext",
        },
    ],

    openGraph: {
        title: "BlogNext | Descomplicando a programação",
        description:
            "Tutoriais, dicas e conceitos de desenvolvimento web para quem está começando.",
        siteName: "BlogNext",
        type: "website",
    },
};



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
    >
      <body className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
