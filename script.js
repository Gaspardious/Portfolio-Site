document.addEventListener('DOMContentLoaded', function () {

  const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      section && section.scrollIntoView({ behavior: 'smooth' });
  };

  // Event listener for the menu links and logo
  const menuLinks = document.querySelectorAll('.menu-link');
  const logo = document.getElementById('logo');

  menuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault();
          scrollToSection(link.getAttribute('href').substring(1));
      });
  });

  // Logo click event
  logo && logo.addEventListener('click', () => {
      scrollToSection('home');
  });

  // Event listener for the menu button
  const menuButton = document.getElementById('menu');
  menuButton && menuButton.addEventListener('click', () => {
      const nav = document.getElementById('nav');
      nav && nav.classList.toggle('show');
  });
});



/* const apiKey = "cn6gkq9r01qt2at483i0cn6gkq9r01qt2at483ig";
const baseUrl = "https://finnhub.io/api/v1";
const endpoint = "/news";
const category = "crypto";
const url = `${baseUrl}${endpoint}?category=${category}&token=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(news => {
        console.log(news);
        // Display news on the "stocks" div
        const stocksDiv = document.getElementById('stocks');
        news.forEach((article) => {
            const articleElement = document.createElement('div');
            articleElement.innerHTML = `
                <h3>${article.headline}</h3>
                <p>${article.summary}</p>
                <p>Source: ${article.source}</p>
            `;
            stocksDiv.appendChild(articleElement);
        });
    })
    .catch(error => {
        console.error("Error fetching market news:", error);
    });
 */
    



    const apiKey = "cn6gkq9r01qt2at483i0cn6gkq9r01qt2at483ig";
    const baseUrl = "https://finnhub.io/api/v1";
    const endpoint = "/stock/metric";
    const symbol = "AAPL";
    const metric = "all";
    const url = `${baseUrl}${endpoint}?symbol=${symbol}&metric=${metric}&token=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Display the fetched data in the "stocks" div
            const stocksDiv = document.getElementById('stocks');
            stocksDiv.innerHTML = `
                <p>Financials Data:</p>
                <ul>
                    <li>Stock: ${data.metric.symbol}</li>
                    <li>Revenue: ${data.metric.revenue}</li>
                    <li>EPS: ${data.metric.eps}</li>
                    <li>EBITDA: ${data.metric.ebitda}</li>
                    <!-- Add more data points as needed -->
                </ul>
            `;
        })
        .catch(error => {
            console.error("Error fetching financials data:", error);
        });
    