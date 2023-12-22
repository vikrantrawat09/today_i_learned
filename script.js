// no need for hard core data now as we are fetching it from backend

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from the supabase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://twqwpjcrnqzhoapuryje.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cXdwamNybnF6aG9hcHVyeWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMzY5NDcsImV4cCI6MjAxODcxMjk0N30.YCyYTUEjhcjNFcdfV__RX7L8G2bDbNZ2u_IPeUeWjiI",

        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3cXdwamNybnF6aG9hcHVyeWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxMzY5NDcsImV4cCI6MjAxODcxMjk0N30.YCyYTUEjhcjNFcdfV__RX7L8G2bDbNZ2u_IPeUeWjiI",
      },
    }
  );
  const data = await res.json();
  // const filteredData = data.filter((fact) => fact.category === "technology");
  // console.log(filteredData);

  createFactsList(data);
}

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>jonas</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class ="fact">
    <p>
    ${fact.text}
    <a
         class="source"
         href="${fact.source}"
         target="_blank"
         >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
    </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toogle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "SHARE A FACT";
  }
});

/*



const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);



function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
*/
