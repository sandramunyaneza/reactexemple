import { useState } from "react";
import Livre from "./Livre";

const books = [
  {
    id: 1,
    titre: "L’Étranger",
    auteur: "Albert Camus",
    genre: "Philosophie",
  },
  {
    id: 2,
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    genre: "Conte",
  },
  {
    id: 3,
    titre: "1984",
    auteur: "George Orwell",
    genre: "Science-fiction",
  },
  {
    id: 4,
    titre: "Les Misérables",
    auteur: "Victor Hugo",
    genre: "Roman",
  },
  {
    id: 5,
    titre: "Harry Potter à l’école des sorciers",
    auteur: "J.K. Rowling",
    genre: "Fantastique",
  },
  {
    id: 6,
    titre: "Le Seigneur des Anneaux",
    auteur: "J.R.R. Tolkien",
    genre: "Fantasy",
  },
  {
    id: 7,
    titre: "Une si longue lettre",
    auteur: "Mariama Bâ",
    genre: "Roman",
  },
  {
    id: 8,
    titre: "L’Alchimiste",
    auteur: "Paulo Coelho",
    genre: "Développement personnel",
  },
];

function AfficherLivres(){
 
  return(
    <div className="containerLivre">
      <h1 style={{fontFamily: "roboto"}}> BIBLIOTHEQUE</h1>
      <Livre livre={books}/>
    </div>
  )
} 

export default AfficherLivres;