import { metadata } from "./layout";

describe("RootLayout", () => {

    test("deve possuir os metadados corretos", () => {

        expect(metadata.title).toEqual({
            default: "BlogNext | Descomplicando a programação",
            template: "%s | BlogNext",
        });

        expect(metadata.description).toBe(
            "Tutoriais, dicas e conceitos de desenvolvimento web para quem está começando."
        );

        expect(metadata.keywords).toEqual([
            "programação",
            "desenvolvimento web",
            "JavaScript",
            "React",
            "Next.js",
            "Git",
            "frontend",
        ]);

        expect(metadata.authors).toEqual([
            {
                name: "Equipe BlogNext",
            },
        ]);

        expect(metadata.openGraph).toEqual({
            title: "BlogNext | Descomplicando a programação",
            description:
                "Tutoriais, dicas e conceitos de desenvolvimento web para quem está começando.",
            siteName: "BlogNext",
            type: "website",
        });
    });

});
