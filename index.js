//variáveis frequentimente usadas
const select = e => document.querySelector(e);
const selects = e => document.querySelectorAll(e);

//lista de palavras
var wordList = [
    'sagaz', 'negro', 'âmago', 'êxito', 'mexer', 'termo', 'senso', 'nobre', 'algoz', 'afeto', 'plena', 'ética', 'mútua', 'sutil', 'tênue', 'vigor', 'aquém', 'audaz', 'porém', 'fazer', 'sanar', 'seção', 'inato', 'assim', 'cerne', 'ideia', 'desde', 'fosse', 'poder', 'moral', 'torpe', 'honra', 'muito', 'justo', 'gozar', 'anexo', 'fútil', 'razão', 'quiçá', 'etnia', 'ícone', 'sobre', 'tange', 'égide', 'lapso', 'mútuo', 'sonho', 'expor', 'haver', 'hábil', 'casal', 'amigo', 'tempo', 'pesar', 'posse', 'ávido', 'então', 'boçal', 'ardil', 'coser', 'genro', 'corja', 'seara', 'dengo', 'prole', 'detém', 'causa', 'dizer', 'tenaz', 'digno', 'porta', 'dever', 'crivo', 'saber', 'óbice', 'ápice', 'ânsia', 'brado', 'ceder', 'ânimo', 'gleba', 'pária', 'graça', 'assaz', 'comum', 'atroz', 'orgia', 'culto', 'temor', 'sendo', 'mundo', 'censo', 'pauta', 'fugaz', 'denso', 'cozer', 'valha', 'neném', 'ainda', 'vício'
];

//gerando numero aleatorio
function randomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//pegando palavra equivalente ao index do numero aleatorio
const numberSelected = randomNumber(0,99);
const wordSelected = wordList[numberSelected];

//referência de cada letra da palavra sorteada
const randon1 = wordSelected.substring(0,1).toUpperCase();
const randon2 = wordSelected.substring(1,2).toUpperCase();
const randon3 = wordSelected.substring(2,3).toUpperCase();
const randon4 = wordSelected.substring(3,4).toUpperCase();
const randon5 = wordSelected.substring(4,5).toUpperCase();

//fileiras da tentativas atual
const atual = select('.atual');

// const letra1 = atual.children[0].value
// const letra2 = atual.children[1].value
// const letra3 = atual.children[2].value
// const letra4 = atual.children[3].value
// const letra5 = atual.children[4].value

//variável responsável por verificar a tentativa atual
let tentativaAtual = 'line2';
// atualizando a tentativa atual
// function verifiquedLine(){
//     if(tentativaAtual == 'line2'){
//         selects('#line').classList.remove('atual');
//         select('#tentativa2').classList.add('atual');
//     }else if(tentativaAtual === 'line3'){
//         selects('#line').classList.remove('atual');
//         select('#tentativa3').classList.add('atual');
//     }else if(tentativaAtual === 'line4'){
//         selects('#line').classList.remove('atual');
//         select('#tentativa4').classList.add('atual');
//     }else if(tentativaAtual === 'line5'){
//         selects('#line').classList.remove('atual');
//         select('#tentativa5').classList.add('atual');
//     }else if(tentativaAtual === 'line6'){
//         selects('#line').classList.remove('atual');
//         select('#tentativa6').classList.add('atual');
//     }else {
//         select('#tentativa1').classList.add('atual');
//     }
// };
// verifiquedLine();
console.log(document.querySelector('#tentativas').children[0].classList)