// Pagina login
import logo from "../assets/logo.png"

export default function Login(){

    return(
       <div>
        <div className="login"> 
            <img width={225} src={logo} alt="" />
            <p>
            Login
            </p>
            <input type="number"placeholder="mátricula" />
            <input type="email"placeholder="email" />
            <input type="password"placeholder="senha" />
           
        
            <div>
                <p>
                    Não possui cadastro? <a href="cadastro" className="botaopaginadecadastrologin">Cadastra-se</a>
                
                </p>  
                
                 
                
                
            </div>
            <button className="botaologin">
                Acessar
            
            </button>







          
        </div>
        
        
       </div>
    )
}