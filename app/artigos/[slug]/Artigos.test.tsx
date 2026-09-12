import { render, screen } from "@testing-library/react";

import Article, { generateMetadata, generateStaticParams } from "./page";

import artigos from "@/app/lb/artigos.json";

jest.mock("next/navigation", () => ({
  notFound: jest.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

describe("Article", () => {
  test("deve exibir o artigo corretamente", async () => {
    const artigo = artigos[0];

    const page = await Article({
      params: Promise.resolve({
        slug: artigo.slug,
      }),
    });

    render(page);

    expect(screen.getByText(`Por ${artigo.author}`)).toBeInTheDocument();

    expect(screen.getByText(artigo.date)).toBeInTheDocument();
  });

  test("Deve chamar notFound quando o artigo não existir", async () => {
    await expect(
      Article({
        params: Promise.resolve({
          slug: "Artigo inexistente",
        }),
      }),
    ).rejects.toThrow("NEXT_NOT_FOUND");
  });

  test("deve exibir subtítulos, textos e imagens do artigo", async () => {
    const artigo = artigos[0];

    const page = await Article({
      params: Promise.resolve({
        slug: artigo.slug,
      }),
    });

    render(page);

    Object.entries(artigo.content).forEach(([chave, valor]) => {
      if (chave.startsWith("sub-titulo")) {
        expect(
          screen.getByRole("heading", {
            name: valor,
            level: 2,
          }),
        ).toBeInTheDocument();
      }

      if (Array.isArray(valor)) {
        valor.forEach((item) => {
          if (!item.startsWith("/")) {
            expect(screen.getByText(item)).toBeInTheDocument();
          }
        });
      }
    });

    const imagens = screen.getAllByAltText(`Imagem do artigo ${artigo.title}`);

    expect(imagens.length).toBeGreaterThan(0);
  });

  test("Deve gerar os metadados do artigo", async () => {
    const artigo = artigos[0];

    const metadata = await generateMetadata({
      params: Promise.resolve({
        slug: artigo.slug,
      }),
    });

    expect(metadata).toEqual({
      title: `${artigo.title} | BlogNext`,
      description: `${artigo.description}`,
    });
  });

  test("Deve gerar metadata de arquivo não encontrado", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({
        slug: "artigo-inexistente",
      }),
    });

    expect(metadata).toEqual({
      title: "Artigo não encontrado | BlogNext",
    });
  });

  test("Deve gerar parametros estaticos dos artigos", () => {
    const params = generateStaticParams();

    expect(params).toEqual(
      artigos.map((artigo) => ({
        slug: artigo.slug,
      })),
    );
  });
});
