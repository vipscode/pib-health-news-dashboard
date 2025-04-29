fetch('data/categorized_data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('categories');
    container.innerHTML = '';

    Object.entries(data).forEach(([category, articles]) => {
      const section = document.createElement('section');
      section.className = "bg-white p-4 rounded-xl shadow";

      const title = document.createElement('h2');
      title.textContent = category;
      title.className = "text-2xl font-bold text-blue-700 mb-4";

      const list = document.createElement('ul');
      list.className = "space-y-2";

      articles.forEach(article => {
        const item = document.createElement('li');
        item.className = "text-gray-800 hover:text-blue-600 transition";

        const link = document.createElement('a');
        link.href = article.link;
        link.target = "_blank";
        link.className = "underline hover:no-underline";
        link.textContent = article.title;

        item.appendChild(link);
        list.appendChild(item);
      });

      section.appendChild(title);
      section.appendChild(list);
      container.appendChild(section);
    });
  })
  .catch(err => {
    document.getElementById('categories').innerHTML =
      `<p class="text-red-600">Failed to load articles: ${err.message}</p>`;
  });
