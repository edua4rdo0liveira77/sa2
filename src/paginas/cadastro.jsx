import logo from "../assets/logo.png";
import axios from "axios";
import { useState } from "react";

export default function Cadastro() {
    const [form, setForm] = useState({
        email: "",
        matricula: "",
        password: "",
        confirmPassword: "",
        isAdm: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/cadastro", form);
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.message || "Erro ao realizar cadastro.");
        }
    };

    return (
        <div className="cadastro">
            <img width={225} src={logo} alt="" />
            <p>Cadastrar-se</p>
            <form onSubmit={handleSubmit}>
                <div className="cssinput">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="matricula"
                        placeholder="Matrícula"
                        value={form.matricula}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={form.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirmar Senha"
                        value={form.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <p>
                        Você é:
                        <label>
                            <input
                                name="isAdm"
                                type="radio"
                                value={true}
                                checked={form.isAdm === true}
                                onChange={() => setForm({ ...form, isAdm: true })}
                            />
                            Admim
                        </label>
                        <label>
                            <input
                                name="isAdm"
                                type="radio"
                                value={false}
                                checked={form.isAdm === false}
                                onChange={() => setForm({ ...form, isAdm: false })}
                            />
                            Colaborador
                        </label>
                    </p>
                </div>
                <button type="submit" className="botaocadastro">Cadastrar-se</button>
            </form>
        </div>
    );
}