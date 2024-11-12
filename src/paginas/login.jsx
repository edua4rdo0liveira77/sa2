// Pagina login
import logo from "../assets/logo.png"

export default function Login(){

    return(
       <div>
        <div className="login"> 
            <img width={225} src={logo} alt="" />
            <p>
            Cadastrar-se
            </p>
            <input type="email"placeholder="email" />
            <input type="number"placeholder="mátricula" />
            <input type="password"placeholder="senha" />
            <input type="password"placeholder="confirmar senha" />
            <div>
                <p>
                    você é <input name="você" type="radio" />admim
                            <input name="você" type="radio" />colaborador
                </p>    
                
            </div>
            <button className="botaocadastro">
                cadastrar-se
            </button>






          
        </div>
        
        
       </div>
    )
}