
const InfoEmpresa = {
    nome: "Pizzaria Bella Massa",
    cnpj: "12.345.678/0001-90",
    telefone: "(11) 91234-5678",
    email: "contato@bellamassa.com.br",
    descricao: "A Pizzaria Bella Massa oferece pizzas artesanais feitas no forno à lenha com ingredientes frescos e selecionados. Entregamos em toda a cidade com rapidez e qualidade.",
    endereco: "Rua das Pizzas, 123 - Centro, São Paulo - SP",
    horarioFuncionamento: "Todos os dias das 18h às 23h",
    site: "https://www.bellamassa.com.br",
    cardapio: [
        {
            nome: "Margherita",
            ingredientes: ["Molho de tomate", "Mussarela", "Manjericão fresco"],
            tamanho: ["Broto", "Média", "Grande"]
        },
        {
            nome: "Calabresa",
            ingredientes: ["Molho de tomate", "Calabresa fatiada", "Cebola", "Orégano"],
            tamanho: ["Broto", "Média", "Grande"]
        },
        {
            nome: "Quatro Queijos",
            ingredientes: ["Mussarela", "Parmesão", "Gorgonzola", "Catupiry"],
            tamanho: ["Broto", "Média", "Grande"]
        },
        {
            nome: "Frango com Catupiry",
            ingredientes: ["Frango desfiado", "Catupiry", "Molho de tomate"],
            tamanho: ["Broto", "Média", "Grande"]
        },
        {
            nome: "Chocolate com Morango",
            ingredientes: ["Chocolate ao leite", "Morango fresco"],
            tamanho: ["Broto", "Média"]
        }
    ]
};

module.exports = InfoEmpresa;