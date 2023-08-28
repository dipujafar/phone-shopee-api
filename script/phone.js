const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  console.log(phones);
  displayPhone(phones);
};

const displayPhone = (phones) => {
  const phonesDiv = document.getElementById("phone-container");
  phones.forEach((phone) => {
    console.log(phone);
    const phonesCard = document.createElement("div");
    phonesCard.classList = `card card-compact max-w-96 bg-gray-200 shadow-xl`;
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
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
    `;
    phonesDiv.appendChild(phonesCard);
  });
};

loadPhone();
