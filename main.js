const navMenu = document.getElementById('m-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

const navLinks = document.querySelectorAll('.nav-item');

function linkshandler() {
  navMenu.classList.remove('show');
}
navLinks.forEach((n) => n.addEventListener('click', linkshandler));

/* eslint-disable no-unused-vars */
const SpeakersList = [
  {
    speakername: 'Moris Mbetsa',
    imagelink: './images/moris-mbetsa.jpeg',
    desc1: 'CEO of numeral iot and a graduate of samburu university',
    desc2: 'moris mbetsa is CEO of kenyas\' successful startup that manufature electronis both for local export as well as for export',
  },
  {
    speakername: 'Prof Kiama',
    imagelink: './images/prof-kiama.jpeg',
    desc1: 'VC University of Nairobi',
    desc2: 'prof Kiama is VC of the largest university in Eastern and centrol Africa.Universiyu of nairobi is a leader in research and technology',
  },
  {
    speakername: 'Bill Gates',
    imagelink: './images/bill-gate.jpeg',
    desc1: 'Founder of Microsoft',
    desc2: 'Bill Gates is a software engineer who is the founder and the CEO of the Microsoft inc.',
  },
  {
    speakername: 'Mark Zuckerberg',
    imagelink: './images/mark-s.jpeg',
    desc1: 'CEO of Meta',
    desc2: 'Zuckerberg is an American business mogule. He is well known for his role as a CEO and founder the social media website Facebook',
  },
  {
    speakername: 'Kimani Ichingwa',
    imagelink: './images/cs-ict.jpeg',
    desc1: 'Minister of ICT kenya',
    desc2: 'Kimani Ichingwa is a Kenyan businessman, tech enthusiast and kenya former ICT cabinet secretary. He is the co-founder and CEO of IT talent KE community.',
  },
  {
    speakername: 'DR. Akuon',
    imagelink: './images/dr-akuon.jpeg',
    desc1: 'professor university of Samburu',
    desc2: 'DR, Akuon, is a Kenyan business executive and professor of Computer science at the university of Samburu..',
  },
];

const speakerCards = document.querySelector('.speaker-container');
for (let i = 0; i < SpeakersList.length; i += 1) {
  speakerCards.innerHTML += `
  <div class="speaker-card">
  <div class="speaker-image">
    <img src="${SpeakersList[i].imagelink}" alt="">
  </div>
  <div class="speaker-about">
    <p class="speaker-name">${SpeakersList[i].speakername}</p>
    <p class="speaker-desc">${SpeakersList[i].desc1}</p>
    <div class="underline1"></div>
    <p class="abt-speaker">${SpeakersList[i].desc2}</p>
  </div>
</div>
  `;
}