import { render, screen } from "@testing-library/react";
import ArticleGrid from ".";
import { Artigo } from "@/app/types/artigo";

describe("ArticleGrid", () => {

    test("deve exibir todos os artigos", () => {

        const artigos: Artigo[] = [
            {
                id: 1,
                slug: "aprendendo-react",
                image: "/react.jpg",
                title: "Aprendendo React",
                description: "Um artigo sobre React.",
                date: "12/09/2026",
            },
            {
                id: 2,
                slug: "aprendendo-next",
                image: "/next.jpg",
                title: "Aprendendo Next.js",
                description: "Um artigo sobre Next.js.",
                date: "13/09/2026",
            },
        ];

        render(<ArticleGrid artigos={artigos} />);

        expect(
            screen.getByRole("heading", {
                name: "Aprendendo React",
                level: 3,
            })
        ).toBeInTheDocument();

        expect(
            screen.getByRole("heading", {
                name: "Aprendendo Next.js",
                level: 3,
            })
        ).toBeInTheDocument();
    });


    test("deve criar um link para cada artigo", () => {

        const artigos: Artigo[] = [
            {
                id: 1,
                slug: "aprendendo-react",
                image: "/react.jpg",
                title: "Aprendendo React",
                description: "Um artigo sobre React.",
                date: "12/09/2026",
            },
            {
                id: 2,
                slug: "aprendendo-next",
                image: "/next.jpg",
                title: "Aprendendo Next.js",
                description: "Um artigo sobre Next.js.",
                date: "13/09/2026",
            },
        ];

        render(<ArticleGrid artigos={artigos} />);

        const links = screen.getAllByRole("link");

        expect(links).toHaveLength(2);

        expect(links[0]).toHaveAttribute(
            "href",
            "/artigos/aprendendo-react"
        );

        expect(links[1]).toHaveAttribute(
            "href",
            "/artigos/aprendendo-next"
        );
    });
});
