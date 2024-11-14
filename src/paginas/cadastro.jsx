// Pagina cadastro
import logo from "../assets/logo.png"

export default function cadastro (){

    return(
       <div>
        <div className="cadastro"> 
            <img width={225} src={logo} alt="" />
            <p>
            Cadastrar-se
            </p>
            <input type="email"placeholder="email" />
            <input type="number"placeholder="matrícula" />
            <input type="password"placeholder="senha" />
            <input type="password"placeholder="confirmar senha" />
            <div>
                <p>
                    você é <input name="você" type="radio" />Admim  <input name="você" type="radio" />Colaborador
                            
                </p>    
                
            </div>
            <div>
            <a href="/login" className="botaocadastro">cadastrar-se</a>
            

            </div>
            
            






          
        </div>
        
        
       </div>
    )
}