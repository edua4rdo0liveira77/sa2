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
            
            <div className="cssinput">
            <input type="number"placeholder="Matrícula" />
            <input type="email"placeholder="Email" />
            <input type="password"placeholder="Senha" />
            </div>
           
        
            <div>
                <p>
                    Não possui cadastro? <a href="cadastro" className="botaopaginadecadastrologin">Cadastrar-se</a>
                
                </p>  
            </div>
            <div>
                <br />
                <a href="/editar/treinamento" className="botaoacessar">acessar</a>
            </div>

            </div>
        
        
        </div>
     )
 }


            
                
                 
                    
                       
                    
                 
                
                
            

            
            







          
  