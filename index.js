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
const randon1 = wordSelected.substring(0,1);
const randon2 = wordSelected.substring(1,2);
const randon3 = wordSelected.substring(2,3);
const randon4 = wordSelected.substring(3,4);
const randon5 = wordSelected.substring(4,5);

//variável responsável por verificar a tentativa atual
var tentativaAtual = 'line2';

//atualizando a tentativa atual
if(tentativaAtual === 'line1'){
    select('#tentativa1').classList.add('atual');
}else if(tentativaAtual === 'line2'){
    select('#tentativa1').classList.remove('atual');
    select('#tentativa2').classList.add('atual');
}else if(tentativaAtual === 'line3'){
    select('.tentativa2').classList.remove('atual');
    select('.tentativa3').classList.add('atual');
}else if(tentativaAtual === 'line4'){
    select('.tentativa3').classList.remove('atual');
    select('.tentativa4').classList.add('atual');
}else if(tentativaAtual === 'line5'){
    select('#tentativa4').classList.remove('atual');
    select('.tentativa5').classList.add('atual');
}else if(tentativaAtual === 'line6'){
    select('.tentativa5').classList.remove('atual');
    select('.tentativa6').classList.add('atual');
}

//letras da tentativa atual
var letra1;
var letra2;
var letra3;
var letra4;
var letra5;

select('.atual .letter1 input').addEventListener('change', e =>{
    letra1 = select('.atual .letter1 input').value
})
select('.atual .letter2 input').addEventListener('change', e =>{
    letra2 = select('.atual .letter2 input').value
})
select('.atual .letter3 input').addEventListener('change', e =>{
    letra3 = select('.atual .letter3 input').value
})
select('.atual .letter4 input').addEventListener('change', e =>{
    letra4 = select('.atual .letter4 input').value
})
select('.atual .letter5 input').addEventListener('change', e =>{
    letra5 = select('.atual .letter5 input').value
})

function validationChance(){
    if(letra1 === randon1){
        console.log('aaaaaaaaa')
    }else console.log(letra1)
}

//botão enviar
select('#enter').addEventListener('click', e =>{
    validationChance()
})