"use strick";

const arr = [
  "Dance, until your fit hurt. sing, until your lungs hurt. Act, unitl you're William Hurt",
  "Key To A Good Birthday? Low Expectations.",
  "Watch A Sunrise At Least Once A Day.",
  "If You Love Something, Set It Free. Unless It's A Tiger.",
  "If You Get Pulled Over For Speeding, Tell The Policeman Your Spouse Has Diarrhea.",
  "Marry Someone Who Looks Sexy While Disappointed.",
  "You Can Tell A Lot About A Person By His Biography.",
  "When Life Gives You Lemonade, Make Lemons. Life Will Be All Like 'What?!'",
  "Never Be Afraid To Reach For The Stars, Because Even If You Fall, You'll Always Be Wearing A Parentchute™.",
];

const arr2 = [
  "#33FFAC",
  "#33D4FF",
  "#3371FF",
  "#9333FF",
  "#D433FF",
  "#FF33C4",
  "#FF3368",
  "#E3D225",
  "#6B908B",
];

let i = 0;
let j = 0;
const interval = setInterval(() => {
  i++;
  console.log(i);
  if (i == 9) {
    document.querySelector(".text").textContent = arr[j];
    document.querySelector(".section").style.backgroundImage = `url(${j}.jpg)`;
    document.body.style.backgroundColor = `${arr2[j]}`;
    if (j == 9) {
      clearInterval(interval);
      document.querySelector(".div").style.opacity = 0;
    }
    j++;
    i = 0;
  }
}, 1000);
