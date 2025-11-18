export function CourseFactory({ id, titulo, preco, categoria, descricao, imagem }) {
    return {
        id,
        titulo,
        preco,
        categoria,
        descricao,
        imagem,
        criadoEm: new Date().toISOString(),
        estoque: 999,
        ativo: true
    };
}
