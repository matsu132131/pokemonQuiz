const quiz =[
{
  question: '次のうち、でんきタイプのポケモンはどれでしょうか？',
  answers: [
  'ピカチュウ',
  'リザードン',
  'ポッチャマ',
  'ゾロアーク'
  ],
  correct: 'ピカチュウ'
},{
  question: '次のうち、ほのおタイプのポケモンはどれでしょうか？',
  answers: [
  'ピカチュウ',
  'リザードン',
  'ポッチャマ',
  'ゾロアーク'
  ],
  correct: 'リザードン'
},{
  question: '次のうち、みずタイプのポケモンはどれでしょうか？',
  answers: [
  'ピカチュウ',
  'リザードン',
  'ポッチャマ',
  'ゾロアーク'
  ],
  correct: 'ポッチャマ'
}
]

const quizLength = quiz.length;
let quizIndex = 0;
let scoa = 0;


const $button = document.getElementsByTagName('button');

const buttonLength = $button.length;


// クイズの問題文、選択肢を定義
const setupQuiz = () =>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent =  quiz[quizIndex].answers[buttonIndex];
    buttonIndex ++;
  }
}
 
setupQuiz();


// 正誤判定

const clickHandler = (e) =>{
if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解ピカ！');
    scoa ++;
   }else{
    window.alert('不正解ピカ...');
  }

// 次の問題へ
quizIndex ++;

if(quizIndex < quizLength){
  setupQuiz();
  }else{
    if(scoa　===　quizLength){
    window.alert(`出題が終わったピカ！君の結果は${scoa}/3 ピカ！！
      すごいピカ！！！満点ピカね！！！`);}
    else{
      if(scoa > 0){
        window.alert(`出題が終わったピカ！君の結果は${scoa}/3 ピカ！！もう少しピカね！`);
      }else{
        window.alert(`出題が終わったピカ！君の結果は${scoa}/3 ピカ！！
          もっと勉強しろよ、こんなことも出来ないピカ？？`)
      }
    }
  }

};

for(let clickI = 0; clickI<buttonLength; clickI++){
    $button[clickI].addEventListener('click', (e) => {
      clickHandler(e);}
);}
  
  







