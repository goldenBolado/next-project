import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <div className={styles.description}>
        
        <h1>NextJS: por que usar?</h1>
        
        <h2>Interesse da comunidade</h2>

        <img src="/image/estatisticas_download.png" alt="" width={400} height={250}/>

        <h4>
        
        Analisando o gráfico de download da npm trends, podemos perceber o número gigantesco de pessoas interessadas no NextJS no último ano.

        </h4>

        <h2>Tempo de carregamento de páginas React</h2>
        <h4>

        No que diz respeito à arquitetura client-side, ou lado do cliente em tradução literal, uma vez que carregamos o conteúdo temos que esperar o pacote que contém todo o JavaScript ou bundle como é conhecido carregar antes de determinar o que mostrar na página. E isso torna o tempo de carregamento mais alto o que acaba virando problema para pessoas com dispositivos móveis antigos e conexões fracas.

        </h4>

        <h2>Renderização no servidor - Server Side Rendering - SSR</h2>
        <h4>

        Quando as pessoas perceberam que colocar muito código JavaScript no lado do cliente era um problema, eles pensaram em uma alternativa para renderizar esse código no lado do servidor. E assim surgiu o NextJS um framework criado em cima do ReactJS que usa a renderização do lado do servidor ou Server Side Rendering popularmente conhecido como SSR.

        </h4>

        <h2>Geração de estáticos - Static Site Generation - SSG</h2>
        <h4>

        O NextJS também possibilita a criação de sites estáticos, que são aqueles sites sem muita interação com o usuário, com pouca ou quase nenhuma mudança na interface, por exemplo uma página de venda de um produto que vai ficar no ar por uma semana.
        Então nesse caso teríamos todo conteúdo estático e um formulário que seria usado para coletar os dados das pessoas que tem interesse no produto, esse formulário sim precisaria de interação e para isso, na documentação do NextJS é indicado o uso da função getStaticProps.

        </h4>

        <img src="/image/ensinando_os_bgl.png" alt="" width={400} height={250}/>

        <h2>O que o NextJS me oferece de configuração?</h2>
        <h4>

        Por padrão o NextJS vem com configurações otimizadas e o pessoal da Vercel está sempre atualizando essas configurações pensando em melhorar nossa experiência de desenvolvimento.
        Por exemplo, o NextJS oferece suporte a todos os navegadores modernos prontos para uso e para o IE11. Ele tem suporte para divisão de código, ou code splitting enquanto com o create react app combina todos os arquivos JavaScript em um único pacote, com o next quando ao lidar com roteamento, estamos apenas carregando o JavaScript usado naquela página e isso traz um ganho de performance.
        Ele já vem com hot reload da aplicação que apenas atualiza os arquivos que foram alterados sem perder o estado do aplicativo. E tratando de aplicações ReactJS, em algum pode ser que precisemos ejetar o create react app para não ter dependências não utilizadas na aplicação e fazer algumas otimizações do webpack/babel.
        O próprio create-next-app utilizado para criar aplicações NextJS, é uma alternativa otimizada ao create-react-app e como ele já tem toda essa parte abstraída para gente, não precisamos nos preocupar com babel, webpack e outras configurações que precisamos fazer para otimizar uma aplicação em ReactJS.
        Além dessas vantagens de configuração, o NextJS ainda tem várias vantagens no que diz respeito à experiência de desenvolvimento.

        </h4>

        <img src="/image/otimizacao_fotos.png" alt="" width={400} height={300}/>

        <h2>Otimização de imagens</h2>
        <h4>

        Otimizar imagens e gerar elas com tamanho diferente para termos imagens com qualidade boa em diferentes dimensões sem distorção é um trabalho que todas as pessoas que trabalham com frontend já passaram ou ainda vão passar. Mas o NextJS não nos deixa na mão com essa tarefa, ele disponibiliza um componente imagem:

        </h4>

        <h2>Import Dinâmico</h2>
        <h4>

        Vamos imaginar que você tem um blog com vários artigos. Quando uma pessoa entrar para ler, ela precisa acessar o caminho site.com/novidades/next, e nós queremos exibir o conteúdo daquela rota o mais rápido possível, então você opta por SSG.
        Mas é possível que você não queira criar todas as páginas estáticas de uma só vez porque isso levaria muito tempo, ou então não quer uma página completamente estática para sempre, esse é o poder do import dinâmico.
        O NextJS vai buscar aquela URL específica e salvar como uma página estática e vai servir estaticamente sempre que alguém visitar o caminho e, ao mesmo tempo, estará aberto para aceitar novos caminhos dinamicamente. Além disso com o parâmetro revalidate, nós podemos especificar a atualização das páginas estáticas uma vez a cada X segundos em segundo plano se houver alguma alteração!
        
        </h4>

        <marquee direction = 'right' scrollamount = '10'> <h4>© Bryan Belarmino, Cauã Altron, Cauê Rodrigues, Felipe Netto</h4> </marquee>
        
      </div>

    </main>
  )
}
