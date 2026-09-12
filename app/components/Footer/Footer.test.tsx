import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer", () => {
  test("deve exibir as redes sociais corretamente", () => {
    render(<Footer />);

    const linkedin = screen.getByRole("link", {
      name: "Linkedin",
    });

    const instagram = screen.getByRole("link", {
      name: "Intagram",
    });

    const github = screen.getByRole("link", {
      name: "GitHub",
    });

    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/victor-queiroz-a80abb1b5/",
    );

    expect(instagram).toHaveAttribute(
      "href",
      "https://www.instagram.com/victor_.queiroz/",
    );

    expect(github).toHaveAttribute(
      "href",
      "https://github.com/QueirozVictor?tab=repositories",
    );
  });

  test("deve exibir os links de navegação e direitos autorais", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", {
        name: "Início",
      }),
    ).toHaveAttribute("href", "/");

    expect(
      screen.getByRole("link", {
        name: "Sobre",
      }),
    ).toHaveAttribute("href", "/sobre");

    expect(
      screen.getByText("©2026 Blog-Next - Todos os direitos reservados."),
    ).toBeInTheDocument();
  });
});
