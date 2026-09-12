import { render, screen } from "@testing-library/react";
import Home from "./page";
import artigos from "./lb/artigos.json";

describe("Home", () => {

    test("deve exibir apenas os artigos em destaque", () => {

        render(<Home />);

        const artigosDestaque = artigos.filter(
            artigo => artigo.destaque
        );

        artigosDestaque.forEach((artigo) => {
            expect(
                screen.getByRole("heading", {
                    name: artigo.title,
                    level: 3
                })
            ).toBeInTheDocument();
        });
    });

});
