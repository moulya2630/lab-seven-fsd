const button = document.querySelector("button");
const container = document.querySelector("#news");

button.addEventListener("click", getNews);

async function getNews() {
  container.innerHTML = "Loading...";

  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=14458480cd214f44b9cd3b412f35d468"
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