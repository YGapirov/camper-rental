// import { useLocation } from 'react-router-dom';

export const CampersList = ({ campers }) => {
  //   const location = useLocation();

  return (
    <ul>
      {campers.map(camper => (
        <li key={camper._id}>
          <img
            src={camper.gallery.length > 0 ? camper.gallery[0] : 0}
            alt={camper.name}
            style={{ width: '310px', height: '290px' }}
          />
          <h2>{camper.name}</h2>
          <p>Rating: {camper.rating}</p>
          <p>Location {camper.location}</p>
          <p>Price: €{camper.price}</p>
          <p>{camper.description}</p>
          <ul>
            <li>{camper.adults}</li>
            <li>{camper.transmission}</li>
            <li>{camper.engine}</li>
            <li>Kitchen</li>
            <li>{camper.details.beds} beds</li>
            {camper.details.airConditioner >= 1 && <li> AC</li>}
          </ul>
          <button>Show more</button>
        </li>
      ))}
    </ul>
  );
};
