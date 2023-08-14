## O projeto foi implantado na Vercel, portanto, não é necessário instalá-lo para visualizá-lo.

Você pode acessar o projeto através deste link: [https://rick-morty-teste-eta.vercel.app/](https://rick-morty-teste-eta.vercel.app/)

## Para executar o projeto em sua máquina, siga as instruções abaixo:

1. Abra o terminal e navegue até a pasta do projeto.

2. Execute o seguinte comando para instalar as dependências necessárias:
   
   ```sh
   npm install
   ```

3. Para compilar e atualizar o projeto durante o desenvolvimento, utilize o seguinte comando:
   
   ```sh
   npm run dev
   ```

4. Se você desejar fazer testes de ponta a ponta com o [Cypress](https://www.cypress.io/), execute o seguinte comando para rodar os testes de desenvolvimento:
   
   ```sh
   npm run test:e2e:dev
   ```

   Isso executará os testes de ponta a ponta no servidor de desenvolvimento do Vite. Isso é mais rápido do que usar a compilação de produção.

5. No entanto, é recomendável também testar a versão de produção com o seguinte comando antes de implantar (por exemplo, em ambientes de integração contínua):

   ```sh
   npm run build
   npm run test:e2e
   ```

6. Para verificar a qualidade do código com o [ESLint](https://eslint.org/), use o seguinte comando:
   
   ```sh
   npm run lint
   ```

Assim, você poderá executar e testar o projeto em sua máquina local seguindo essas etapas.
