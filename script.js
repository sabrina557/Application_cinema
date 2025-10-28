// Tableau d'objets contenant les informations sur les films
const movies = [
  {
    title: "Inception",
    overview: "Un voleur qui vole les secrets des rêves doit accomplir une dernière mission.",
    rating: 8.8,
    image: "https://tse2.mm.bing.net/th/id/OIP.b8WjJA8J2IJgblXaSliy3QHaLH?rs=1&pid=ImgDetMain&o=7&rm=3",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },
  {
    title: "The Dark Knight",
    overview: "Batman doit arrêter le Joker qui terrorise Gotham City.",
    rating: 9.0,
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
  },
  {
    title: "Interstellar",
    overview: "Des explorateurs voyagent à travers un trou de ver pour sauver l'humanité.",
    rating: 8.6,
    image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },
  {
    title: "Avengers: Endgame",
    overview: "Les Avengers restants tentent de réparer les actions de Thanos et sauver l'univers.",
    rating: 8.4,
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
  },
  {
    title: "The Matrix",
    overview: "Un hacker découvre que le monde qu'il connaît est une simulation.",
    rating: 8.7,
    image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    trailer: "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },
  {
    title: "Pulp Fiction",
    overview: "Histoires entrelacées de criminels à Los Angeles.",
    rating: 8.9,
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/08/vincent-mia-and-jules-in-pulp-fiction.jpg",
    trailer: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
  },
  {
    title: "Forrest Gump",
    overview: "La vie extraordinaire de Forrest Gump à travers les décennies.",
    rating: 8.8,
    image: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    trailer: "https://www.youtube.com/watch?v=bLvqoHBptjg"
  },
  {
    title: "Gladiator",
    overview: "Un général romain devient gladiateur pour venger sa famille et l'empire.",
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    trailer: "https://www.youtube.com/watch?v=owK1qxDselE"
  },
  {
    title: "Jurassic Park",
    overview: "Un parc à thème avec des dinosaures clonés tourne au chaos.",
    rating: 8.1,
    image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/11/imagery-from-jurassic-park-jurassic-world.jpg",
    trailer: "https://www.youtube.com/watch?v=lc0UehYemQA"
  },
  {
    title: "The Lion King",
    overview: "L'histoire de Simba, un jeune lion qui doit reprendre sa place de roi.",
    rating: 8.5,
    image: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
    trailer: "https://www.youtube.com/watch?v=4sj1MT05lAA"
  },
  {
    title: "Spider-Man: No Way Home",
    overview: "Peter Parker demande de l'aide pour effacer son identité révélée au monde.",
    rating: 8.4,
    image: "https://images.thedirect.com/media/article_full/spiderman-no-way-home-strange.jpg",
    trailer: "https://www.youtube.com/watch?v=JfVOs4VSpmA"
  },
  {
    title: "The Shawshank Redemption",
    overview: "Un homme injustement condamné trouve l'espoir et la liberté en prison.",
    rating: 9.3,
    image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco"
  }
];

// 🔹 Fonction pour convertir la note du film (sur 10) en étoiles (sur 5)
function getStars(rating) {
  const starsTotal = 5;                // Nombre maximum d'étoiles
  const fullStars = Math.round(rating / 2); // Conversion de 10 → 5 étoiles
  // Renvoie une chaîne contenant les étoiles pleines et vides
  return '★'.repeat(fullStars) + '☆'.repeat(starsTotal - fullStars);
}

// 🔹 Sélection du conteneur dans lequel les cartes seront insérées
const container = document.getElementById('movie-cards');

// 🔹 Boucle sur chaque film pour créer dynamiquement une "carte"
movies.forEach(movie => {
  // Création de la carte principale
  const card = document.createElement('div');
  card.className = 'movie-card'; // Classe pour le style CSS

  // Image du film
  const img = document.createElement('img');
  img.src = movie.image;
  img.alt = movie.title;

  // Contenu textuel (titre, description, note, bouton)
  const content = document.createElement('div');
  content.className = 'movie-content';

  // Titre du film
  const title = document.createElement('h3');
  title.className = 'movie-title';
  title.textContent = movie.title;

  // Résumé / description
  const overview = document.createElement('p');
  overview.className = 'movie-overview';
  overview.textContent = movie.overview;

  // Note convertie en étoiles
  const rating = document.createElement('p');
  rating.className = 'movie-rating';
  rating.textContent = getStars(movie.rating);

  // Bouton vers la bande-annonce (ouvre un nouvel onglet)
  const trailerBtn = document.createElement('a');
  trailerBtn.href = movie.trailer;
  trailerBtn.target = "_blank"; // Ouvre dans un nouvel onglet
  trailerBtn.className = 'trailer-btn';
  trailerBtn.textContent = "Regarder la bande-annonce";

  // On assemble tous les éléments dans la carte
  content.appendChild(title);
  content.appendChild(overview);
  content.appendChild(rating);
  content.appendChild(trailerBtn);

  card.appendChild(img);
  card.appendChild(content);

  // On ajoute la carte complète au conteneur principal
  container.appendChild(card);
});
