const input = document.querySelector('.search input');
const hero = document.querySelector('.hero');
const cards = document.querySelectorAll('.card');

// fade-out no destaque
input.addEventListener('focus', () => {
  hero.style.transition = 'opacity 0.3s ease';
  hero.style.opacity = '0';
  hero.style.pointerEvents = 'none';
  setTimeout(() => hero.style.display = 'none', 300);
});

// volta o destaque se nada foi digitado
input.addEventListener('blur', () => {
  if (input.value.trim() === '') {
    hero.style.display = 'flex';
    setTimeout(() => hero.style.opacity = '1', 10);
  }
});

// filtro de filmes
input.addEventListener('input', () => {
  const termo = input.value.toLowerCase().trim();
  cards.forEach(card => {
    const titulo = card.querySelector('.title').textContent.toLowerCase();
    card.style.display = titulo.includes(termo) ? '' : 'none';
  });
});

// modal de resumo
const modal = document.getElementById('resumo');
const titulo = document.getElementById('titulo');
const descricao = document.getElementById('descricao');
const close = document.querySelector('.close');

const filmes = {
  'Guerreiras do K-Pop': 'Rumi, Mira e Zoey são estrelas globais do K-pop que levam uma vida dupla: após os shows, elas usam seus poderes secretos para caçar demônios que ameaçam os fãs e o mundo humano.',
  'Pânico 7': 'Sidney Prescott tenta recomeçar sua vida, mas o retorno de Ghostface força-a a enfrentar velhos traumas e novos riscos, enquanto uma geração emergente lida com o terror na era digital.',
  'Como treinar seu dragão': 'Soluço e seu dragão Banguela descobrem segredos antigos de Berk e enfrentam desafios que testarão sua coragem e amizade em uma jornada de crescimento.',
  'Hora do mal': 'Em uma pequena cidade, 17 crianças de uma mesma turma desaparecem às 2h17 da madrugada — sem sinais de arrombamento ou sequestro — e a comunidade fica em choque buscando respostas para o mistério.',
  'Jurassic World - Recomeço': 'Após as lições do passado, cientistas e aventureiros tentam reconstruir a convivência entre humanos e dinossauros geneticamente recriados, mas logo percebem que a natureza não se deixa controlar tão facilmente.',
  'IT a coisa': 'O maligno palhaço Pennywise retorna e força uma turma de amigos a confrontar seus medos mais profundos, para salvar a cidade de Derry e a si mesmos.',
  'Interestelar': 'Quando a Terra se aproxima do seu fim, Cooper e uma equipe de exploradores atravessam um buraco de minhoca em busca de um novo mundo habitável — enfrentando o tempo, o espaço e os laços que deixam para trás.',
  'Coringa: delírio a Dois': 'Arthur Fleck regressa, agora vivendo entre o sucesso e a insanidade, e descobre que a linha entre clamor por atenção e revolta coletiva pode transformar tudo em caos.',
  'Chainsaw Man - O Filme: Arco da Reze': 'Denji, agora com a motosserra como parte de si, se envolve com Reze, uma garota mistério que desencadeia batalhas brutais e questionamentos sobre quem é inimigo ou aliado.',
  'Demon Slayer: Castelo Infinito': 'Tanjiro, Nezuko e os outros caçadores enfrentam inimigos ainda mais formidáveis dentro do misterioso castelo em que os poderes demoníacos se multiplicam — a batalha pela humanidade continua.',
  'Ponyo': 'Ponyo, uma garota-peixinho, decide abandonar o mar para viver como humana. No processo, ela desencadeia forças que podem equilibrar ou destruir o oceano e a vida em terra firme.',
  'O menino do pijama listrado': 'Durante a Segunda Guerra Mundial, Bruno, filho de um oficial nazista, faz amizade com Shmuel, um menino judeu do outro lado da cerca. O vínculo inocente desafia o horror brutal que os cerca.'
};

const trailers = {
  'Guerreiras do K-Pop': 'https://youtu.be/pIb3zixhP3A',
  'Pânico 7': 'https://www.youtube.com/watch?v=9U3BO1I3gqY',
  'Como treinar seu dragão': 'https://www.youtube.com/watch?v=oKiYuIsPxYk',
  'Hora do mal': 'https://www.youtube.com/watch?v=FLnJ9J9y3n8',
  'Jurassic World - Recomeço': 'https://www.youtube.com/watch?v=TaJqOP92o3A',
  'IT a coisa': 'https://www.youtube.com/watch?v=hAUTdjf9rko',
  'Interestelar': 'https://www.youtube.com/watch?v=zSWdZVtXT7E',
  'Coringa: delírio a Dois': 'https://www.youtube.com/watch?v=tb_TYvXh9sY',
  'Chainsaw Man - O Filme: Arco da Reze': 'https://www.youtube.com/watch?v=d0RC_Js7fT4',
  'Demon Slayer: Castelo Infinito': 'https://www.youtube.com/watch?v=0iBAr5Zy6mE',
  'Ponyo': 'https://www.youtube.com/watch?v=CsR3KVgBzSM',
  'O menino do pijama listrado': 'https://www.youtube.com/watch?v=x0O4uDkHn4w'
};

// abre modal com botão de trailer
cards.forEach(card => {
  card.addEventListener('click', () => {
    const nome = card.querySelector('.title').textContent;
    titulo.textContent = nome;
    descricao.textContent = filmes[nome] || 'Resumo indisponível.';
    modal.style.display = 'flex';

    // remove botão antigo, se houver
    document.querySelector('.btn-trailer')?.remove();

    // cria botão pra abrir trailer no YouTube
    const link = trailers[nome];
    if (link) {
      const botao = document.createElement('a');
      botao.href = link;
      botao.target = '_blank';
      botao.textContent = '▶ Assistir trailer no YouTube';
      botao.className = 'btn-trailer';
      botao.style.display = 'inline-block';
      botao.style.marginTop = '14px';
      botao.style.padding = '10px 18px';
      botao.style.background = 'var(--pink)';
      botao.style.borderRadius = '8px';
      botao.style.color = '#fff';
      botao.style.textDecoration = 'none';
      descricao.after(botao);
    }
  });
});

close.onclick = () => {
  modal.style.display = 'none';
  document.querySelector('.btn-trailer')?.remove();
};

window.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };
