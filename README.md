# Projeto FIAP 17MOB - Introdução ao Desenvolvimento Cross-Platform



## Objetivo
Implementar um aplicativo mobile hibrido utilizando Cordova e JavaScript, aplicando os conhecimentos adquiridos durante as aulas e expandindo as habilidades adquiridas.


## Requisitos
Para que o objetivo do projeto seja atingido é necessário que os seguinte requerimentos sejam atendidos:

1. O desenvolvimento deve utilizar o framework Cordova para que o resultado final possa ser compilado para um aplicativo Android;
Ok.
2. O desenvolvimento deve utilizar um framework CSS responsivo para a interface de apresentação;
Ok. Usado o Bootstrap
3. O desenvolvimento deve utilizar o sistema de autenticação oferecido pelo Firebase;
Ok. Utilizado o Auth do Firebase
4. O aplicativo deve oferecer uma tela para que o usuário se cadastre;
Ok. Tela de register;
5. O aplicativo deve solicitar autenticação do usuário para acesso a tela inicial;
OK. Login
6. O aplicativo deve conter uma tela para edição do perfil do usuário, onde ele deve informar o nome completo e enviar uma foto de perfil, que deve ser obtida a partir da câmera do celular;
Usado a camera do Celular, e guardado a foto no S3 da Amazon. Isso fiz da tela de registro.
6. O aplicativo deve oferecer uma opção para que o usuário finalize a sua sessão e retorne a tela de login;
Ok. Na tela principal do DASH tem um botão Exit, que desloga do Auth e redireciona para a pagina principal.
7. O aplicativo deve consumir uma API Rest e o resultado desse consumo deve alterar de alguma maneira os dados exibidos ao usuário;
Ok. Consome tres URLS do site, https://earthquake.usgs.gov/fdsnws/event/1/ . Consulta sobre terremotos.

