export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full px-4">
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
      <form className="flex flex-col w-full max-w-300 mx-auto">
        <div className="w-full bg-white/80 rounded-lg p-4 md:p-6 mb-12 shadow-2xl backdrop-blur-sm">
          <div className="rounded-full shadow-md py-1 px-4 w-full max-w-xs flex items-center justify-start mb-4">
            <p className="font-bold text-[var(--background)] text-lg text-left">
              Enviar com segurança
            </p>
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
          />
          <label
            htmlFor="melhorias"
            className="text-sm text-[var(--background-dark)] font-semibold mt-6 mb-1"
          >
            Sugestões ou ideias para melhorar a situação (opcional)
          </label>
          <textarea
            name="melhorias"
            id="melhorias"
            className="w-full bg-gray-100 rounded-md p-3 md:p-4 mt-1 resize-none h-24 md:h-28 focus:outline-none focus:ring-2 focus:ring-[var(--background)] focus:border-transparent placeholder:text-[var(--background)]"
            placeholder="Se quiser, compartilhe ideias ou melhorias..."
          />
          <div className="flex justify-end w-full">
            <button className="bg-[var(--background-dark)] mt-4 py-2 px-8 rounded-br-xl rounded-tl-xl text-white font-bold hover:bg-[#70b8e6] transition-colors cursor-pointer shadow-md">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
