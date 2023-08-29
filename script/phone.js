// Function to load phones based on a search query
const loadPhone = async (searchText, isShowAll) => {
  // Fetch phone data from the API
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;

  // Call the displayPhone function to show the loaded phones
  displayPhone(phones, isShowAll);
};

// Function to display phones in the UI
const displayPhone = (phones, isShowAll) => {
  const phonesDiv = document.getElementById("phone-container");
  // Clear the previous content
  phonesDiv.textContent = "";

  // Show or hide the "Show All" button container based on the number of phones
  const showAllCOntainer = document.getElementById("show-all-container");
  // Show the container if more than 15 phones
  if (phones.length > 15 && !isShowAll) {
    showAllCOntainer.classList.remove("hidden");
    // Hide the container if 15 or fewer phones
  } else {
    showAllCOntainer.classList.add("hidden");
  }

  // Slice the phone array to only display the first 15 phones
  if (!isShowAll) {
    phones = phones.slice(0, 15);
  }
  phones.forEach((phone) => {
    const phonesCard = document.createElement("div");
    phonesCard.classList = `card card-compact p-4 bg-gray-200 shadow-xl`;
    // Create a card element for each phone
    phonesCard.innerHTML = `
    <figure>
      <img
        src=${phone.image}
        alt="Phone-Imge"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-center">
        <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-outline btn-info">Show Details</button>
      </div>
    </div>
    `;
    // Append the card element to the phone container
    phonesDiv.appendChild(phonesCard);
  });
  dataLoader(false);
};

// Function to handle the search button click
const searchBtn = (isShowAll) => {
  dataLoader(true);
  const searchField = document.getElementById("search-field");
  const searchValue = searchField.value;
  // searchField.value = "";
  // Call the loadPhone function with the search value
  loadPhone(searchValue, isShowAll);
};

const dataLoader = (isLoading) => {
  const dataLoading = document.getElementById("data-loading");
  isLoading === true
    ? dataLoading.classList.remove("hidden")
    : dataLoading.classList.add("hidden");
};

// Show all halder
const showAllHandler = () => {
  searchBtn(true);
};

// Show details button
const handleShowDetails = (id) => {
  console.log(id);
};
