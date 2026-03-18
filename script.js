const button = document.querySelector("button");
const container = document.querySelector("#news");

button.addEventListener("click", getNews);

async function getNews() {
  container.innerHTML = "Loading...";

  try {
      const response = await fetch(
  "https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=10&token=7fbc49bbef8de37a418b785f841c7a10"
);
    );

    const data = await response.json();

    container.innerHTML = "";

    data.articles.forEach(article => {
      const p = document.createElement("p");
      p.textContent = article.title;
      container.appendChild(p);
    });

  } catch (error) {
    container.innerHTML = "Error fetching news";
    console.log(error);
  }
}