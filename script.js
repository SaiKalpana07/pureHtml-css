//Adhaar pattern
document.getElementById("adhaar").addEventListener("input", function (e) {
  var adhaarFormat = this.value.split("-").join("");
  if (adhaarFormat.length > 0) {
    adhaarFormat = adhaarFormat.match(new RegExp(".{1,4}", "g")).join("-");
  }
  this.value = adhaarFormat;
});

//email format
const emailInput = document.getElementById("emailInput");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
emailInput.addEventListener("input", function emailValidate() {
  if (emailRegex.test(this.value)) {
    this.setCustomValidity("");
    console.log(emailInput, "email");
  } else {
    console.log(emailInput, "email1");
    this.setCustomValidity("Please enter valid email address");
  }
});

//password hide and show
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", (e) => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  e.target.classList.toggle("bi-eye");
});

const toggleCnfrmPassword = document.querySelector("#toggleCnfrmPassword");
const cnfrmPassword = document.querySelector("#cnfrmPassword");
toggleCnfrmPassword.addEventListener("click", (e) => {
  const type =
    cnfrmPassword.getAttribute("type") === "password" ? "text" : "password";
  cnfrmPassword.setAttribute("type", type);
  e.target.classList.toggle("bi-eye");
});

// Bind values from api for cities and countries
const citiesElement = document.getElementById("getCities");
const countriesElement = document.getElementById("getCountries");
fetch("https://countriesnow.space/api/v0.1/countries/population/cities")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data.data);
    let output = "";
    let country = "";
    var apiData = data.data;
    apiData.filter((a) => {
      console.log("c", a.country);
      output += `<option value="${a.city}">${a.city}</option>`;
      country += `<option value="${a.country}">${a.country}</option>`;
    });
    citiesElement.innerHTML = output;
    countriesElement.innerHTML = country;
  });

//Bind values from api for states
const stateElement = document.getElementById("getStates");
fetch("https://countriesnow.space/api/v0.1/countries/states")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data.data);
    let state = "";
    var statesData = data.data;
    statesData.filter((a) => {
      state += `<option value="${a.name}">${a.name}</option>`;
    });
    stateElement.innerHTML = state;
  });

//Bind languages to the dropdown
const language = document.getElementById("languages");
let value = "";
const languagesList = [
  {
    id: 1,
    languages: "--Select language--",
  },
  {
    id: 2,
    languages: "Albanian",
  },
  {
    id: 3,
    languages: "Aymara",
  },
  {
    id: 4,
    languages: "English",
  },
  {
    id: 5,
    languages: "Estonian",
  },
  {
    id: 6,
    languages: "Hebrew",
  },
  {
    id: 7,
    languages: "Hindi",
  },
  {
    id: 8,
    languages: "Italian",
  },
  {
    id: 9,
    languages: "Kannada",
  },
  {
    id: 10,
    languages: "Korean",
  },
  {
    id: 11,
    languages: "Kurdesh",
  },
  {
    id: 12,
    languages: "Kyrgyz",
  },
  {
    id: 13,
    languages: "Macedonian",
  },
  {
    id: 14,
    languages: "Malayalam",
  },
  {
    id: 15,
    languages: "Marathi",
  },
  {
    id: 16,
    languages: "Polish",
  },
  {
    id: 17,
    languages: "Somali",
  },
  {
    id: 18,
    languages: "Tamil",
  },
  {
    id: 19,
    languages: "Telugu",
  },
  {
    id: 20,
    languages: "Yiddish",
  },
];
console.log("hi", languagesList);
const languages = languagesList.map((l) => {
  value += `<option value="${l.languages}">${l.languages}</option>`;
  const option = document.createElement("option");
  option.value = l.languages;
  language.innerHTML = value;
});

//validate form
function validate() {
  alert("Hi");
}

//Modal form details
var form = document.getElementById("form"),
  selectLanguage = document.getElementById("languages"),
  proficiency = document.getElementById("proficiency"),
  submitBtn = document.querySelector(".submit");
