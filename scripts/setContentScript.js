const firstSectionTitle = document.querySelector("#primeira-secao .portfolio__main__content__text__title");
const firstSectionContent = document.querySelector("#primeira-secao .portfolio__main__content__text__info");

const secondSectionTitle = document.querySelector("#segunda-secao .portfolio__main__content__text__title");
const secondSectionContent = document.querySelector("#segunda-secao .portfolio__main__content__text__info");

const thirdSectionTitle = document.querySelector("#terceira-secao .portfolio__main__content__text__title");
const thirdSectionContent = document.querySelector("#terceira-secao .portfolio__main__content__text__info");

const textLinkGitHub = document.querySelector("#github__link").href = "http://github.com/eduardoAssuncao";
const textLinkLinkedin = document.querySelector("#linkedin__link").href = "https://linkedin.com/in/eduardo-assunção";
const textLinkCertificado = document.querySelector("#certificado__link").href = "https://github.com/eduardoAssuncao/certificados-alura/blob/main/Certificado%20Alura.pdf";

const textLinkDiv1 = document.querySelector("#div1__link").href = "https://eduardoassuncao.github.io/projeto-pong/";
const textLinkDiv2 = document.querySelector("#div2__link").href = "https://eduardoassuncao.github.io/projeto-alura-midi/";
const textLinkDiv3 = document.querySelector("#div3__link").href = "https://eduardoassuncao.github.io/robotron-2000/";
const textLinkDiv4 = document.querySelector("#div4__link").href = "https://eduardoassuncao.github.io/projeto-fokus/";
const textLinkDiv5 = document.querySelector("#div5__link").href = "https://github.com/eduardoAssuncao/voll_med/tree/main/api/api";
const textLinkDiv6 = document.querySelector("#div6__link").href = "https://www.newgrounds.com/portal/view/780020";

firstSectionTitle.innerHTML = `<span style="color: orange">public </span
><span style="color: rgb(255, 191, 0)">void </span
><span style="color: rgb(0, 105, 0)">setName </span
><span style="color: rgb(0, 153, 255)">()</span>
<span style="color: rgb(0, 153, 255)">{</span><br />
&emsp;
<span style="color: rgba(0, 179, 255, 0.695)">this.name</span> =
"Eduardo <span id="nome__autor__icon">Assunção"</span>;<br /><span
  style="color: rgb(0, 153, 255)"
  >}</span
>`;

firstSectionContent.innerHTML = `<span style="color: rgb(255, 191, 0)">System</span>.<span
style="color: rgb(0, 153, 255)"
>out</span
>.<span style="color: rgb(0, 105, 0)">println(</span>"Olá! Sou o
Kenny! Desenvolvedor Back-end e, nesse momento, estou desbravando
alguns conceitos relacionados ao desenvolvimento Front-end com
HTML, CSS e JavaScript por meio deste portfolio."<span
style="color: rgb(0, 105, 0)"
>)</span
>;`;

secondSectionTitle.innerHTML = `<span style="color: orange">public </span
><span style="color: rgb(255, 191, 0)">Habilidade </span
><span style="color: rgb(0, 105, 0)">getHabilidades </span
><span style="color: rgb(0, 153, 255)">() </span
><span style="color: rgb(0, 153, 255)">{</span><br />
&emsp; <span style="color: red">return</span> minhas<span
  id="habilidades"
  >Habilidades</span
>;<br /><span style="color: rgb(0, 153, 255)">}</span>`;

secondSectionContent.innerHTML = `<span style="color: rgb(255, 191, 0)">System</span>.<span
style="color: rgb(0, 153, 255)"
>out</span
>.<span style="color: rgb(0, 105, 0)">println(</span>"Minha
trajetória profissional é marcada por conhecimentos em tecnologias
como Java, C, C#, SQL, MySql, Python, Unity, Construct, Blender...
e pela busca incessante por novos desafios. Acredito que a
combinação de conhecimento teórico e experiência prática é
fundamental para o sucesso em qualquer área."<span
style="color: rgb(0, 105, 0)"
>)</span
>; <br /><br />
<span style="color: rgb(255, 191, 0)">System</span>.<span
style="color: rgb(0, 153, 255)"
>out</span
>.<span style="color: rgb(0, 105, 0)">println(</span>"Ao longo dos
meus 4 anos de faculdade, tive a oportunidade de trabalhar em
projetos que englobam todas as tecnologias supracitadas que me
proporcionaram um crescimento exponencial."<span
style="color: rgb(0, 105, 0)"
>)</span
>;`;

thirdSectionTitle.innerHTML = `<span style="color: orange">public </span
><span style="color: rgb(255, 191, 0)">Projeto </span
><span style="color: rgb(0, 105, 0)">getProjetos </span
><span style="color: rgb(0, 153, 255)">() </span
><span style="color: rgb(0, 153, 255)">{</span><br />
&emsp; <span style="color: red">return</span> meus<span
  id="projetos"
  id="habilidades"
  >Projetos</span
>;<br /><span style="color: rgb(0, 153, 255)">}</span>`;

thirdSectionContent.innerHTML = `<span style="color: rgb(255, 191, 0)">System</span>.<span
style="color: rgb(0, 153, 255)"
>out</span
>.<span style="color: rgb(0, 105, 0)">println(</span> Ao longo da
minha trajetória com a Alura, construí alguns projetos propostos
em cursos e que podem ser acessados logo abaixo. Além disso, no
meu GitHub, tenho outros projetos desenvolvidos ao longo da minha
formação:<span style="color: rgb(0, 105, 0)">)</span>;`;