let quiz = [
  {
    question: "Tu vas au cinéma, qui t'accompagne?",
    answer: {
      orgueilEtPréjugés:
        "Mon rancard ! C'est la première fois que nous sortons ensemble. Ça promet d'être intéressant.",
      nobody: "Mes copines ! Nous allons forcément bien nous amuser !",
      annabelle: "Personne. Je vais voir le film toute seule.",
      intouchable: "J'y vais avec ma mère !",
    },
  },
  {
    question:
      "Le film commence enfin. deux adolescentes assises devant toi parlent fort de l'acteur canon. Que fais-tu?",
    answer: {
      orgueilEtPréjugés: "Je me joins à elles! L'acteur est vraiment canon!",
      nobody:
        "Je vais voir les responsables pour qu'ils virent les pipelettes de la salle!",
      annabelle: "Absolument rien. Elles finiront par se calmer !",
      intouchable: "Je leur demande de parler moins fort.",
    },
  },
  {
    question: "Qu'as-tu déjà fait au cinéma?",
    answer: {
      orgueilEtPréjugés: "J'ai timidement tenu la main de mon rancard !",
      nobody: "J'ai quitté la salle, car le film était trop nul",
      annabelle: "J'ai pleuré toutes les larmes de mon corps ! ",
      intouchable:
        "Une fois, j'ai eu un fou rire et il était tout simplement impossible de m'arrêter",
    },
  },
  {
    question: "Quel dénouement aimerais-tu pour le film ?",
    answer: {
      orgueilEtPréjugés:
        "Un dénouement triste me va très bien ! La vie n'est pas un lit de roses, vous savez",
      nobody:
        "Un dénouement inattendu ! Du moment que personne ne le voit venir ! ",
      annabelle: "Un dénouement ouvert! J'aime bien deviner la suite! ",
      intouchable:
        "Un dénouement heureux s'il-vous-plaît ! Les amants doivent finir ensemble !",
    },
  },
  {
    question: "La maison parfaite, c'est…",
    answer: {
      orgueilEtPréjugés: "Un château magnifique",
      nobody: "Une grande maison",
      annabelle: "Un garage",
      intouchable: "Une maisonnette chaleureuse ",
    },
  },
  {
    question: "Quand tu pars en soirée, tu es…",
    answer: {
      orgueilEtPréjugés: "Super connu(e), tout le monde te connaît là-bas",
      nobody: "Super content(e) d'être là",
      annabelle: "Bizarre avec tout ce monde autour ",
      intouchable: "Comme libre vu que tu n'es jamais sorti(e) ",
    },
  },
  // {
  //   question: "Have you already written a letter to Santa Claus?",
  //   answer: {
  //     orgueilEtPréjugés: "Yes, sure!",
  //     nobody: "Yes, I want to be a magician and print money",
  //     annabelle: "All three hundred points in place",
  //     intouchable: "No, I don't believe in him.",
  //   },
  // },
  {
    question: "Tu préfères les…",
    answer: {
      orgueilEtPréjugés: "Carrosses",
      nobody: "Motos",
      annabelle: "Voitures",
      intouchable: "Vélos",
    },
  },
  {
    question: "Dans quel genre de film aimerais-tu jouer ?",
    answer: {
      orgueilEtPréjugés: "Un film romantique",
      nobody: "Un film d'action",
      annabelle: "Un film d'horreur ",
      intouchable: "Comédie",
    },
  },
];

let answers = {
  orgueilEtPréjugés: {
    description:
      "Si vous êtes tombé sur le film 'Orgueil et Préjugés' vous êtes définitivement une personne romantique, et ce film est parfait pour vous!",
    img: "./img/Orgueil-et-Préjugés.jpeg",
  },
  nobody: {
    description:
      "Si vous êtes tombé sur le film 'Nobody' vous êtes définitivement une personne en quête d'émotions, ce film vous en donnera!",
    img: "./img/Nobody.jpeg",
  },
  annabelle: {
    description:
      "Si vous êtes tombé sur le film 'Anabelle' vous êtes définitivement une personne qui aime monter l'adrénaline, ce film va vous faire peur!",
    img: "./img/Annabelle.jpeg",
  },
  intouchable: {
    description:
      "Si vous êtes tombé sur le film 'Intouchable' vous êtes définitivement une personne joyeuse, ce film vous apportera beaucoup d'émotions positives!",
    img: "./img/Intouchable.jpeg",
  },
};

window.onload = function () {
  let result = {};
  let step = 0;

  function showQuestion(qNumber) {
    document.querySelector(".question").textContent = quiz[step]["question"];
    document.querySelector(".stepCounterNamber").textContent = step;
    let answer = "";
    for (let key in quiz[step]["answer"]) {
      answer += `<button class="button-answer" data-v="${key}">${quiz[step]["answer"][key]}</batton>`;
    }
    document.querySelector(".answer").innerHTML = answer;
  }

  document.onclick = function (event) {
    event.stopPropagation();
    if (
      event.target.classList.contains("button-answer") &&
      step < quiz.length
    ) {
      console.log(event.target.data);
      if (result[event.target.dataset.v] != undefined) {
        result[event.target.dataset.v]++;
      } else {
        result[event.target.dataset.v] = 0;
      }
      step++;
      if (step == quiz.length) {
        document.querySelector(".question").remove();
        document.querySelector(".answer").remove();
        document.querySelector(".stepCounter").remove();
        showResult();
      } else {
        showQuestion(step);
      }
    }
    console.log(result);
  };

  function showResult() {
    let inspect = Object.keys(result).reduce(function (first, second) {
      return result[first] > result[second] ? first : second;
    });

    let paragraph = document.createElement("div");
    paragraph.classList.add("results");
    paragraph.innerHTML = "Votre résultat";
    document.querySelector(".test").appendChild(paragraph);

    let letete = document.createElement("div");
    letete.classList.add("tetsdf");
    letete.innerHTML =
      "D'après les résultats de test,le film que vous convient :";
    document.querySelector(".test").appendChild(letete);

    let img = document.createElement("img");
    img.classList.add("resultImg");
    img.src = answers[inspect]["img"];
    document.querySelector(".test").appendChild(img);

    let div = document.createElement("div");
    div.classList.add("resultDiv");
    div.innerHTML = answers[inspect]["description"];
    document.querySelector(".test").appendChild(div);

    document.getElementById("wrapper").style.display = "block";
  }
  showQuestion(step);
};
