import { useEffect, useState } from "react";

function Livre({ livre }) {
  const [liste, setListe] = useState([...livre]);
  const [inputEl, setInputEl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [genre, setGenre] = useState("");

  console.log(liste)

  useEffect(
    function () {
      setListe((liste) =>
        liste.filter((liste) =>
          liste.titre.toLowerCase().includes(inputEl.toLowerCase()),
        ),
      );
    },
    [inputEl],
  );

  useEffect(function () {
    setIsLoading(true);
    document.addEventListener("keydown", (e) => {
      if (e.code === "Backspace") return setListe([...livre]);
    });
    setIsLoading(false);
  }, []);

  function AjouterLivre(){
    setListe([...livre, {id : 10, titre : titre, auteur : auteur, genre : genre}])
  }

  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search"> Recherche </label>
          <input
            type="search"
            id="search"
            placeholder="Tapez ici"
            value={inputEl}
            onChange={(e) => setInputEl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title"> Titre : </label>
          <input
            type="text"
            id="title"
            placeholder="Tapez ici"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            required
          />
          <label htmlFor="author"> Auteur : </label>
          <input
            type="text"
            id="author"
            placeholder="Tapez ici"
            value={auteur}
            onChange={(e) => setAuteur(e.target.value)}
            required
          />
          <label htmlFor="gender"> Genre : </label>
          <input
            type="text"
            id="gender"
            placeholder="Tapez ici"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
          <button onClick={AjouterLivre}> Ajouter </button>
        </div>
      </form>

      {isLoading ? (
        <p> Loading...</p>
      ) : (
        <table className="tableau">
          <thead>
            <tr>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {liste.map((book) => (
              <tr key={book.id}>
                <td>{book.titre}</td>
                <td>{book.auteur}</td>
                <td>{book.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Livre;
