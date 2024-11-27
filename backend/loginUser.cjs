const User = require('./User.cjs');

const loginUser = async (req, res) => {
    const { matricula, email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Usuário não encontrado. Verifique o e-mail e a matrícula." });
        }

        if (user.matricula !== Number(matricula)) {
            return res.status(400).json({ message: "Matrícula incorreta." });
        }

        if (user.password.trim() !== password.trim()) {
            return res.status(400).json({ message: "Senha incorreta." });
        }

        return res.status(200).json({
            message: "Login bem-sucedido!",
            user: {
                email: user.email,
                matricula: user.matricula,
                isAdm: user.isAdm,
            },
        });
    } catch (error) {
        console.error("Erro ao realizar o login:", error);
        return res.status(500).json({ message: "Erro no servidor.", error });
    }
};

module.exports = { loginUser };