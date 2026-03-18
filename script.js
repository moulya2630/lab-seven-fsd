

async function getNews() {
  container.innerHTML = "Loading...";

  try {
    const response = await fetch(
      "https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=10&token=YOUR_API_KEY"
    );

    if (!response.ok) {
      throw new Error("Failed");
    }

    const data = await response.json();

    container.innerHTML = "";

    data.articles.forEach(article => {
      const p = document.createElement("p");
      p.textContent = article.title;
      container.appendChild(p);
    });

  } catch (error) {
    container.innerHTML = "Error loading news 😢";
    console.error(error);
  }
}