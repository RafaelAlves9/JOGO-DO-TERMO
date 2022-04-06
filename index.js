//variáveis frequentimente usadas
const select = e => document.querySelector(e);
//lista de palavras
var wordList = [
    'sagaz', 'negro', 'âmago', 'êxito', 'mexer', 'termo', 'senso', 'nobre', 'algoz', 'afeto', 'plena', 'ética', 'mútua', 'sutil', 'tênue', 'vigor', 'aquém', 'audaz', 'porém', 'fazer', 'sanar', 'seção', 'inato', 'assim', 'cerne', 'ideia', 'desde', 'fosse', 'poder', 'moral', 'torpe', 'honra', 'muito', 'justo', 'gozar', 'anexo', 'fútil', 'razão', 'quiçá', 'etnia', 'ícone', 'sobre', 'tange', 'égide', 'lapso', 'mútuo', 'sonho', 'expor', 'haver', 'hábil', 'casal', 'amigo', 'tempo', 'pesar', 'posse', 'ávido', 'então', 'boçal', 'ardil', 'coser', 'genro', 'corja', 'seara', 'dengo', 'prole', 'detém', 'causa', 'dizer', 'tenaz', 'digno', 'porta', 'dever', 'crivo', 'saber', 'óbice', 'ápice', 'ânsia', 'brado', 'ceder', 'ânimo', 'gleba', 'pária', 'graça', 'assaz', 'comum', 'atroz', 'orgia', 'culto', 'temor', 'sendo', 'mundo', 'censo', 'pauta', 'fugaz', 'denso', 'cozer', 'valha', 'neném', 'ainda', 'vício'
];
//gerando numero aleatorio
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//pegando palavra equivalente ao index do numero aleatorio
const numberSelected = randomNumber(0,99);
const wordSelected = wordList[numberSelected]; //palavra da vez

//referência de cada letra da palavra sorteada
const letra0 = wordSelected.substring(0,1).toUpperCase();
const letra1 = wordSelected.substring(1,2).toUpperCase();
const letra2 = wordSelected.substring(2,3).toUpperCase();
const letra3 = wordSelected.substring(3,4).toUpperCase();
const letra4 = wordSelected.substring(4,5).toUpperCase();

//fileiras da tentativas atual
const atual = select('.atual')

//mostrando na tela (teste)
atual.children[0].innerHTML = letra0
atual.children[1].innerHTML = letra1
atual.children[2].innerHTML = letra2
atual.children[3].innerHTML = letra3
atual.children[4].innerHTML = letra4