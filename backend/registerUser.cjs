const User = require('./User.cjs');

const registerUser = async (req, res) => {
    const { email, matricula, password, confirmPassword, isAdm } = req.body;

    try {
        const userRegistered = await User.findOne({ email });
        if (userRegistered) {
            return res.status(400).json({ message: "Usuário já registrado." });
        }
    
        const newUser = new User({
            email,
            matricula,
            password,
            confirmPassword,
            isAdm
        });
    
        await newUser.save();
        res.status(201).json({ message: "Usuário registrado com sucesso!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao registrar usuário.", error });
    }
};

module.exports = { registerUser };