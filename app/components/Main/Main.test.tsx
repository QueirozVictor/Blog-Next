import { render, screen } from "@testing-library/react";
import Main from ".";

describe("Main", () => {

    test("deve exibir o título principal", () => {

        render(<Main />);

        expect(
            screen.getByRole("heading", {
                name: "Descomplicando a Programação.",
                level: 1
            })
        ).toBeInTheDocument();
    });


    test("deve exibir o texto principal", () => {

        render(<Main />);

        expect(
            screen.getByText(
                "Tutoriais, dicas e conceitos de desenvolvimento web para quem está começando."
            )
        ).toBeInTheDocument();
    });

});
