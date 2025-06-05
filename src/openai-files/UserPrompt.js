const UserPrompt = {
    getPrompt: (metadata) => {
        return `Abaixo estão os dados com informações básicas da empresa:
            ${JSON.stringify(metadata, null, 2)}, Gere o objeto JSON conforme instruções.`;
    },
};

module.exports = UserPrompt;