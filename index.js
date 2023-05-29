const beers = {
  id: "beers",
  logo: "Best Beers",
  button: "details",
  cards: [
    {
      title: "Mango Bay",
      sub: "Mad Scientist Beer",
      text: "Pale Ale - American",
    },
    {
      title: "Távoli Galaxis",
      sub: "Rothbeer Brewery",
      text: "IPA - American",
    },
    {
      title: "Flying Rabbit AIPA",
      sub: "MONYO Brewing Co.",
      text: "IPA - American",
    },
    {
      title: "Liquid Cocaine",
      sub: "Mad Scientist Beer",
      text: "IPA - Imperial",
    },
    {
      title: "Organic Chocolate Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - English",
    },
    {
      title: "Bracia",
      sub: "Thornbridge Brewery",
      text: "Strong Ale - English",
    },
    {
      title: "Oatmeal Stout",
      sub: "Samuel Smith Old Brewery",
      text: "Stout - Oatmeal",
    },
    {
      title: "Black Tokyo Horizon",
      sub: "BrewDog",
      text: "Stout - American Imperial",
    },
    {
      title: "Vintage Ale",
      sub: "Fuller's",
      text: "Old Ale",
    },
    {
      title: "All the Leaves are Brown",
      sub: "Tempest Brewing Company",
      text: "Brown Ale - American",
    },
  ],
};

const rootElement = document.querySelector("#root");
const cardWrapper = document.querySelector(".wrapper");
const headerComponent = () => {
  return `
  <header>
    <h1 class="logo">${beers.logo}</h1>
    <span class="material-symbols-outlined menu-icon">
      menu
    </span>
  </header>
  `;
};

const cardComponent = (index, title, sub, text) => {
  return `
  <article class="card">
    <div class="number-container">${index}</div>
    <h3 class="card-title">${title}</h3>
    <div class="line"></div>
    <div class="card-content">
      <p class="sub">${sub}</p>
      <p class="text">${text}</p>
    </div>
    <button type="button">
      ${beers.button} 
      <span class="material-symbols-outlined btn-arrow">
        arrow_forward
      </span> 
      </button>
  </article>
  `;
};

beers.cards.forEach((beer, index) => {
  cardWrapper.insertAdjacentHTML(
    "beforeend",
    cardComponent(index + 1, beer.title, beer.sub, beer.text)
  );
});

rootElement.insertAdjacentHTML("afterbegin", headerComponent());
