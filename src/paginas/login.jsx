import logo from "../assets/logo.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({
        matricula: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value.trimStart() });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/login", {
                matricula: form.matricula.trim(),
                email: form.email.trim(),
                password: form.password.trim(),
            });

            alert(response.data.message);

            navigate("/editar/treinamento");
        } catch (error) {
            alert(error.response?.data?.message || "Erro ao realizar login.");
        }
    };

    return (
        <div className="login">
            <img width={225} src={logo} alt="" />
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <div className="cssinput">
                    <input
                        type="number"
                        name="matricula"
                        placeholder="Matrícula"
                        value={form.matricula}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={form.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="botaoacessar">Acessar</button>
            </form>
            <p>
                Não possui cadastro? <a href="cadastro" className="botaopaginadecadastrologin">Cadastrar-se</a>
            </p>
        </div>
    );
}