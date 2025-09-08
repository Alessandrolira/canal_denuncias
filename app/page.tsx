"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const denuncia = event.target.denuncia.value;
    const sugestao = event.target.sugestao.value;

    if (!denuncia) {
      alert("Por favor, preencha o campo de denúncia.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_KEY!, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `denuncia=${denuncia}&sugestao=${sugestao}`,
      });

      if (response.ok) {
        setMensagem("Denúncia enviada com sucesso!");
        setLoading(false);
        setSucesso(true);
        event.target.reset();
      } else {
        setLoading(false);
        setSucesso(false);
        setMensagem("Erro ao enviar denúncia. Tente novamente mais tarde.");
      }
    } catch (error) {
      console.error("Erro ao enviar denúncia:", error);
      setLoading(false);
      setSucesso(false);
      setMensagem("Erro ao enviar denúncia. Tente novamente mais tarde.");
    }
  };

  useEffect(() => {}, [loading]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full px-4">
      {mensagem !== "" && (
        <div
          className={`fixed top-4 text-white px-6 py-3 rounded-lg shadow-lg border border-[var(--background-dark)] z-50 ${
            sucesso ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {mensagem}
        </div>
      )}
      <div className="flex flex-col items-center pt-8 pb-6 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-white pb-4 text-center drop-shadow-lg">
          Canal de Denúncias Anônimas
        </h1>
        <p className="text-base md:text-lg text-white text-center px-2 md:px-4 mb-2">
          Você nunca está sozinho(a). Este é um espaço seguro, anônimo e
          confidencial para compartilhar situações que merecem atenção.
          <br />
          Aqui, sua voz é respeitada e sua identidade preservada!
        </p>
      </div>
      <form
        className="flex flex-col w-full max-w-300 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="w-full bg-white/80 rounded-lg p-4 md:p-6 mb-12 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center gap-3 bg-[var(--background)]/80 rounded-xl px-4 py-2 shadow-lg mb-6 border border-[var(--background-dark)]">
            <span className="text-white text-2xl">🛡️</span>
            <span className="text-white font-semibold text-lg">
              Sua denúncia é protegida e anônima
            </span>
          </div>
          <p className="text-sm md:text-md text-[var(--background-dark)] mb-4">
            Não pedimos seu nome, e-mail ou qualquer informação pessoal. Sua
            denúncia é totalmente anônima e feita com segurança, para que você
            se sinta tranquilo(a) ao compartilhar.
          </p>
          <label
            htmlFor="denuncia"
            className="text-sm text-[var(--background-dark)] font-semibold mb-1"
          >
            Descreva sua denúncia
          </label>
          <textarea
            name="denuncia"
            id="denuncia"
            className="w-full bg-gray-100 rounded-md p-3 md:p-4 mt-1 resize-none h-24 md:h-28 focus:outline-none focus:ring-2 focus:ring-[var(--background)] focus:border-transparent placeholder:text-[var(--background)]"
            placeholder="Descreva aqui a situação que deseja denunciar..."
            required
          />
          <label
            htmlFor="melhorias"
            className="text-sm text-[var(--background-dark)] font-semibold mt-6 mb-1"
          >
            Sugestões ou ideias para melhorar a situação (opcional)
          </label>
          <textarea
            name="sugestao"
            id="sugestao"
            className="w-full bg-gray-100 rounded-md p-3 md:p-4 mt-1 resize-none h-24 md:h-28 focus:outline-none focus:ring-2 focus:ring-[var(--background)] focus:border-transparent placeholder:text-[var(--background)]"
            placeholder="Se quiser, compartilhe ideias ou melhorias..."
          />
          <div className="flex justify-end w-full">
            <button
              className="bg-[var(--background-dark)] mt-4 py-2 px-8 rounded-br-xl rounded-tl-xl text-white font-bold hover:bg-[#70b8e6] transition-colors cursor-pointer shadow-md"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <img
                  src="/loader.png"
                  alt="Load"
                  className="w-[1.5em] animate-spin"
                />
              ) : (
                "Enviar"
              )}
            </button>
          </div>
        </div>
      </form>
      <img src="/Logos.png" alt="" className="w-150 mb-12" />
    </div>
  );
}
