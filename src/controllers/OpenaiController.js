require("dotenv").config();

const { OpenAI } = require("openai");
const InfoEmpresa = require("../openai-files/InfoEmpresa");
const SystemPrompt = require("../openai-files/SystemPrompt");
const UserPrompt = require("../openai-files/UserPrompt");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const OpenaiController = {
    secretariaIA: async (req, res) => {
        try {
        const { mensagemCliente } = req.body;
        // Dados enviados à IA
        const metadata = {
            mensagemCliente,
            infoEmpresa: InfoEmpresa
        };
        // Configuração da IA e envio dos prompts
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // ou "gpt-4"
            messages: [
                { role: "system", content: SystemPrompt.getPrompt() },
                { role: "user", content: UserPrompt.getPrompt(metadata) },
            ],
            temperature: 0.85,
        });
        const resposta = completion.choices[0].message.content;
        let openaiResponse = null;
        try {
            const parsed = JSON.parse(resposta);
            if (!parsed.openaiResponse || !parsed.openaiResponse.secretariaIA) {
                    return res.status(500).json({
                    error: "A IA não retornou um objeto 'openaiResponse' completo.",
                });
            }
            openaiResponse = parsed.openaiResponse
        } catch (e) {
            console.error("Erro ao fazer parse do JSON da IA:", resposta);
            return res.status(500).json({ error: "Erro ao interpretar resposta da IA." });
        }
        return res.status(200).json({ openaiResponse });
        } catch (err) {
            console.error("Erro ao gerar resposta:", err);
            return res.status(500).json({ error: "Erro ao gerar resposta." });
        }
    }
};
module.exports = OpenaiController;
