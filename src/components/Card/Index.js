import { Link } from "react-router-dom";

import { useLoginContext } from '../../contexts/LoginContext'
import { useFavContext } from '../../contexts/FavsContext'

import './card.css'

export default function Card( { imgUrl, title, overview, id } ) {
  const { isLoged } = useLoginContext()
  const { addToFav, isAdded, removeFromFav } = useFavContext()

  return (
    <div className="card h-25 w-75">
      {isLoged && (!isAdded(id) ?
        <span className="addFavBtn" role={'img'} onClick={() => addToFav({id, title, imgUrl, overview}) }>🖤</span>
        :
        <span className="addFavBtn" role={'img'} onClick={() => removeFromFav(id) }>❤</span>
      )}
      <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {overview.substring(0, 100)}...
        </p>
        <Link to={`/movie?movieID=${id}`} className="btn btn-primary">
          Detalles
        </Link>
      </div>
    </div>
  );
}
