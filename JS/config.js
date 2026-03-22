// Credential
const accountNumber = "01630591092";
const pin = "2061";
// Utils
//Error Sound
const errorSound = () => {
  const error = new Audio("./assets/Viral FAAH Sound.mp3");
  return error.play();
};

//Show the current balance
const currentBalance = () =>
  Number(document.getElementById("balance").innerText);

//Sets new Balance
const setBalance = (value) =>
  (document.getElementById("balance").innerHTML = value);
function getValueById(id) {
  return document.getElementById(id).value;
}

//visibility
function showSection(sectionId) {
  const allToggleableSections = document.querySelectorAll(
    ".toggleable-section",
  );
  allToggleableSections.forEach((section) => {
    section.classList.add("hidden");
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.remove("hidden");
  }
}
//Showing transaction history
function showHistory(id, id2, image) {
  const history = document.getElementById(id);
  const newHistory = document.createElement("div");

  newHistory.innerHTML = `
  <div class= "flex justify-between items-center bg-base-100 rounded-[.75rem] py-[.8125rem] pl-[1rem]">
    <div class="transaction-container-left flex gap-[.5rem] items-center">
      <div class="p-[.6875rem] bg-base-200 rounded-full">
        <img src=${image} alt="" />
      </div>
      <div id="transaction-container-text" class="">
        <h2 class="font-semibold text-[1rem] text-[#080808]/70">
          ${document.getElementById(id2).innerText}
        </h2>
        <p class="font-normal text-[12px] text-[#080808]/70">
          ${new Date().toLocaleString("en-US", { weekday: "short", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit" })}
        </p>
      </div>
    </div>
    <svg
      class= "cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11_8567)">
        <path
          d="M11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12Z"
          stroke="#080808"
          stroke-opacity="0.7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19Z"
          stroke="#080808"
          stroke-opacity="0.7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11 5C11 5.26522 11.1054 5.51957 11.2929 5.70711C11.4804 5.89464 11.7348 6 12 6C12.2652 6 12.5196 5.89464 12.7071 5.70711C12.8946 5.51957 13 5.26522 13 5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5Z"
          stroke="#080808"
          stroke-opacity="0.7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_8567">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
  `;
  history.prepend(newHistory);
}
//Export them all
export {
  accountNumber,
  pin,
  currentBalance,
  setBalance,
  getValueById,
  errorSound,
  showSection,
  showHistory,
};
