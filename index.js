// 1 number ----------------------------------------->
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayLessons(json.categories));
};
const loadLevelWord = (plants) => {
  console.log(plants);
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaylevelWord(data.plants));
};
const displaylevelWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  words.forEach((word) => {
    console.log(word);
    const crad = document.createElement("div");
    crad.innerHTML = `
    <p>cat</p>`;
    wordContainer.append(crad);
  });
};

const displayLessons = (lessons) => {
  //   1 get the container

  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  //   2 get evray  lesson
  for (let lesson of lessons) {
    //   3 creat the elimatn
    const btndiv = document.createElement("div");
    btndiv.innerHTML = `

  <button onclick="loadLevelWord(${lesson.category_name})" class="btn text-slate-500 my-3  hover:bg-[#166534]">
          ${lesson.category_name}
        </button>
 `;
    // 4 appand
    levelContainer.append(btndiv);
  }
};
loadLessons();
// 2 Number ------------------------------------------------>
