import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {

    test("deve exibir a logo do site", () => {

        render(<Header />);

        const logo = screen.getByAltText("Logo do site");

        expect(logo).toBeInTheDocument();
    });


    test("deve ter os links de navegação corretos", () => {

        render(<Header />);

        const inicio = screen.getByRole("link", {
            name: "Início"
        });

        const sobre = screen.getByRole("link", {
            name: "Sobre"
        });

        expect(inicio).toHaveAttribute(
            "href",
            "/"
        );

        expect(sobre).toHaveAttribute(
            "href",
            "/sobre"
        );
    });


    test("a logo deve levar para a página inicial", () => {

        render(<Header />);

        const logo = screen.getByAltText("Logo do site");

        const linkDaLogo = logo.closest("a");

        expect(linkDaLogo).toHaveAttribute(
            "href",
            "/"
        );
    });

});
