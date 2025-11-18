export default function Home() {
    return (
        <div>

            {/* BANNER */}
            <div className="w-full bg-blue-600 text-white py-24 text-center mt-16">
                <h1 className="text-5xl font-bold mb-4">Aprenda no seu ritmo</h1>
                <p className="text-xl opacity-90 mb-6">
                    Cursos completos e organizados para você evoluir todos os dias.
                </p>
                <a
                    href="/courses"
                    className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200"
                >
                    Ver Cursos
                </a>
            </div>

            {/* DESTAQUES */}
            <div className="max-w-5xl mx-auto mt-16">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Por que estudar com a gente?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="bg-white shadow-md p-8 rounded-xl text-center">
                        <h3 className="text-xl font-bold mb-3">📚 Conteúdo Atualizado</h3>
                        <p className="text-gray-600">Cursos completos e sempre atualizados.</p>
                    </div>

                    <div className="bg-white shadow-md p-8 rounded-xl text-center">
                        <h3 className="text-xl font-bold mb-3">💻 Acesso Vitalício</h3>
                        <p className="text-gray-600">Assista onde e quando quiser.</p>
                    </div>

                    <div className="bg-white shadow-md p-8 rounded-xl text-center">
                        <h3 className="text-xl font-bold mb-3">⭐ Certificado</h3>
                        <p className="text-gray-600">Receba certificado ao concluir os cursos.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
