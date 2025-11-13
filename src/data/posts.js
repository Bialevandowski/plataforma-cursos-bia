const posts = [
    {
        id: "1",
        author_email: "bia@example.com",
        author_name: "Bianca",
        content: "Terminei meu primeiro curso de programação! 🎉",
        subject: "Programação",
        post_type: "conquista",
        likes: ["ana@example.com"],
        comments: [
            {
                author_email: "ana@example.com",
                author_name: "Ana",
                content: "Parabéns, Bianca!",
                created_at: "2025-11-10"
            }
        ]
    },
    {
        id: "2",
        author_email: "carlos@example.com",
        author_name: "Carlos",
        content: "Alguém tem dicas de planilhas automáticas no Excel?",
        subject: "Excel & Planilhas",
        post_type: "dica",
        likes: [],
        comments: []
    }
];

export default posts;
