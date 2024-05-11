## Readme do Repositório

# Ad Portal

# Descrição
O Projeto Ad Portal é uma aplicação web voltada para o mercado imobiliário, proporcionando aos usuários uma plataforma intuitiva para explorar propriedades, buscar anúncios e obter informações relevantes sobre o setor.

# Tecnologias Utilizadas
- Linguagem: TypeScript
- Framework: NextJs
- Tecnologias: HTML5, CSS3, TailwindCss, EmbraCarousel, Headlessui para UI, ReactIcons

# Instalação e Uso
Para instalar e usar o projeto, siga estas etapas:

- Instale a última versão do NodeJs

No seu terminal faça as etapas:
Clone o repositório:
- git clone https://github.com/VictorGabriel021/coodesh-frontend-challenge-20240110-ad-portal.git

Navegue até o diretório do projeto:
- cd coodesh-frontend-challenge-20240110-ad-portal/

Instale as dependências:
- npm install

Inicie o servidor de desenvolvimento:
- npm run dev

>  This is a challenge by [Coodesh](https://coodesh.com/)

# Processo de Desenvolvimento:

## Análise Inicial:
Inicialmente, foi realizada uma análise detalhada do design no Figma para identificar todos os elementos e funcionalidades necessárias para o desenvolvimento da aplicação.

## Decisões Iniciais:
Identificação da necessidade de utilizar um carousel de terceiros para exibir imagens e cards.
Desenvolvimento de uma UI personalizada para a navbar, incluindo o efeito de menu hamburguer para dispositivos móveis.
Decisão de criar o componente de pesquisa do zero, em vez de utilizar um componente de UI pré-existente.

# Componentes Reutilizáveis:

## Botão Personalizado (botaoCustom):
Componente criado para oferecer botões personalizados em toda a aplicação.
Recebe um parâmetro opcional para definir a cor do botão.

## Carousel:
Componente reutilizável utilizado para a rotação de imagens e cards em diferentes partes da aplicação.

## Modal:
Utilizado para exibir conteúdos adicionais ou interações específicas do usuário.
Recebe título, descrição, texto do botão e conteúdo extra como parâmetros.

## Navegação de Opções:
Dois tipos de menus de navegação criados: um com setas e outro fixo para três itens.
Objetivo é utilizar em mais de um lugar, porém ainda não consolidado em um único componente.

# Componentes da Página Inicial (Home):
## Navbar:
Componente de navegação superior presente em toda a aplicação.

## Banners Estáticos:
Utilizados para exibir mensagens de destaque na página inicial.

## Frase de Efeito com Imagem ao Lado:
Componente que exibe uma frase impactante acompanhada de uma imagem ilustrativa.

## Componente de Cards e Imagens:
Cards dinâmicos com imagens e informações relevantes para compradores, vendedores ou curiosos.

## Banner da NetMoveis:
Banner promocional específico da NetMoveis, exibindo mensagem e imagem relacionadas.

## Menus com Tipos de Propriedades:
Menus interativos que permitem aos usuários filtrar propriedades por diferentes critérios.

## Informações Extras da Empresa:
Componente utilizado para fornecer informações adicionais sobre a empresa ou serviço.

## Footer:
Rodapé da página inicial contendo links úteis e informações de contato.

## Carousel com Estados:
Carousel dinâmico que destaca os diferentes estados ou regiões abrangidos pelo serviço.

## Componente "Encontre um Lugar":
Componente de busca interativa que ajuda os usuários a encontrar propriedades de acordo com suas preferências.

## Componente de Card com Menus e Setas:
Cards expansíveis com menus e setas para navegação rápida entre diferentes seções da aplicação.

## Anúncios com Carousel:
Carousel utilizado para exibir anúncios de propriedades de forma dinâmica e atrativa.

## Componente de Pesquisa:
Componente de pesquisa avançada que permite aos usuários filtrar propriedades de acordo com critérios específicos.

## Considerações:
- A implementação começou pela navbar, utilizando flexbox para organização e responsividade, seguida pela adaptação da navegação para dispositivos móveis.
- As telas estáticas foram desenvolvidas em seguida, começando pelo banner de "Anuncie sua vaga grátis", onde um desafio foi encontrar uma maneira de ajustar a imagem para maior legibilidade em diferentes dispositivos.
- O desenvolvimento continuou com o banner de Portugal, onde o principal desafio foi ajustar a imagem e aplicar o efeito de box shadow.
- Houve dificuldade para ajustar as primeiras imagens, bem como a falta de um padding adequado entre os itens com scroll na página.
- O componente de busca poderia ter sido melhorado em termos de componentização, estados e estilização da área de seleção dos inputs, porém, devido ao tempo limitado, não foi possível implementar essas melhorias.
- Testes automatizados não puderam ser realizados devido ao prazo restrito.

## Próximos Passos:
Melhorias no scroll dos componentes.
Ajustes na estilização e funcionalidades do componente de pesquisa.
Refatoração e componentização para melhorar a reutilização dos componentes.
Aprimoramento da área de seleção de busca.
