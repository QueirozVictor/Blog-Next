import { render, screen } from "@testing-library/react";
import ArticleCard from ".";
import { Artigo } from "@/app/types/artigo";

describe("ArticleCard", () => {
  test("deve exibir as informações do artigo corretamente", () => {
    const artigo: Artigo = {
      image: "/imagem-artigo.jpg",
      title: "Aprendendo React",
      description: "Um artigo para quem está começando com React.",
      date: "12/09/2026",
      id: 123,
      slug: "Teste",
    };

    render(<ArticleCard config={artigo} />);

    expect(
      screen.getByRole("heading", {
        name: artigo.title,
        level: 3,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(artigo.description)).toBeInTheDocument();

    expect(screen.getByText(artigo.date)).toBeInTheDocument();

    expect(
      screen.getByAltText(`Imagem do Artigo ${artigo.title}`),
    ).toBeInTheDocument();
  });
});
