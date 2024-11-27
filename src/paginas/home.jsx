// Pagina home
import logo from "../assets/logo.png"

export default function Home() {

    return (
        <div>
            <div className="topo">
                <img width={150} src={logo} alt="" />
                <div className="botoes">
                    <a href="/login" className="botaopagina">Login</a>
                    <a href="/cadastro" className="botaopagina">Cadastrar-se</a>
                </div>
            </div>
            <div className="meio">
                <p className="texto-inicial">
                "Potencialize sua equipe com nossa gestão de treinamentos! Gerenciamos cada etapa do processo, garantindo que seus colaboradores recebam as habilidades necessárias para superar desafios e alcançar resultados excepcionais. Invista no futuro da sua empresa, desenvolvendo talentos que fazem a diferença!"
                </p>
                <img src={logo} alt="" />
                <p className="texto-final">Transforme seu potencial em resultados </p>
            </div>
            <div className="final">
                <a href="" className="botao-contato">Email</a>
                <a href="" className="botao-contato">Contato</a>
                <a href="" className="botao-contato">Instagram</a>
            </div>
        </div>
    )
}