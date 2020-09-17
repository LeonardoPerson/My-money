***APLICAÇÃO EM MANUTENÇÃO***<br/>
O firebase alterou algumas regras de armazenamento afetando o funcionamento da aplicação.<br/>
As principais tecnologias que compõem a aplicação são ReactJs e NodeJs. O sistema de login foi feito em Json Web Token. Algumas estilizações foram feitas com Bootstrap e outras com arquivo CSS. O projeto tem como destaque a utilização de hooks personalizados, sendo "useDelete" utilizado para remoção de dados, "useGet" para a busca de dados e "usePost" para a entrada de novos dados. Cada um desses hooks foram estruturados de modo a possibilitar a comunicação via api do Firebase, objetivando a maniputação de dados. Além da criação desses hooks, temos os tradicionais useEffect e useReducer. <br/>

A aplicação pode ser acessada pelo modo de desenvolvimento utilizando npm start no diretório raiz do projeto. 

O My-Money é uma aplicação web para controle financeiro, contendo sistema de login com email e senha. <br/><br/>
<img src="/src/Image/home.png"> <br/><br/>
Compromissos podem ser adicionados pelo botão "Adicionar Mês" dentro de cada mês escolhido na lista. <br/><br/>
<img src="/src/Image/adicionarMes.png"> <br/><br/>
Após a adição, valores positivos ou negativos com suas respectivas descrições podem ser adicionados. <br/><br/>
<img src="/src/Image/telaadicaodemes.png"> <br/><br/>
Ao clicar em "My Money" na parte superior, a lista de compromissos de todos os meses cadastrados é exibida.  <br/>
Valores positivos constarão na coluna "Entradas", os negativos constarão em "saídas".<br/><br/>
<img src="/src/Image/telaprincipal.png"> 





