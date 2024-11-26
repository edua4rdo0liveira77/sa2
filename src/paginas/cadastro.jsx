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
            <div className="cssinput">
            <input type="email"placeholder="Email" />
            <input type="number"placeholder="Matrícula" />
            <input type="password"placeholder="Senha" />
            <input type="password"placeholder="Confirmar Senha" />
            </div>
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




          
        
        
        




