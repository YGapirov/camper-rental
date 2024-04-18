// import { useLocation } from 'react-router-dom';
import sprite from '../../services/sprite.svg';
import {
  ListStyle,
  ImageStyle,
  CamperTitle,
  CamperPrice,
  CamperDescription,
  ItemStyle,
  InfoContainer,
  CamperNamePrice,
  CamperRatingLocation,
  FeaturesList,
  ShowMoreButton,
  ImageContainer,
  FeaturesItem,
} from './CampersList.styled';

export const CampersList = ({ campers }) => {
  //   const location = useLocation();

  return (
    <div>
      <ItemStyle>
        {campers.map(camper => (
          <ListStyle key={camper._id}>
            <ImageContainer>
              <ImageStyle
                src={
                  camper.gallery.length > 0
                    ? camper.gallery[0]
                    : 'default_image.jpg'
                }
                alt={camper.name}
              />
            </ImageContainer>
            <InfoContainer>
              <CamperNamePrice>
                <CamperTitle>{camper.name}</CamperTitle>
                <CamperPrice>€{camper.price}</CamperPrice>
              </CamperNamePrice>
              <CamperRatingLocation>
                <button>
                  <svg fill="#FFC531" width="24" height="24">
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>
                  {`${camper.rating}(${camper.reviews.length} Reviews)`}
                </button>
                <p>
                  <svg width="24" height="24">
                    <use href={`${sprite}#icon-pin`}></use>
                  </svg>
                  {camper.location}
                </p>
              </CamperRatingLocation>
              <CamperDescription>{camper.description}</CamperDescription>
              <FeaturesList>
                <FeaturesItem>
                  <svg width="20" height="20">
                    <use href={`${sprite}#icon-adults`}></use>
                  </svg>
                  {camper.adults}
                  adults
                </FeaturesItem>
                <FeaturesItem>
                  <svg width="20" height="20">
                    <use href={`${sprite}#icon-transmission`}></use>
                  </svg>
                  {camper.transmission}
                </FeaturesItem>
                <FeaturesItem>
                  <svg width="20" height="20">
                    <use href={`${sprite}#icon-petrol`}></use>
                  </svg>
                  {camper.engine} engine
                </FeaturesItem>
                <FeaturesItem>
                  <svg width="20" height="20">
                    <use href={`${sprite}#icon-kitchen`}></use>
                  </svg>
                  Kitchen
                </FeaturesItem>
                <FeaturesItem>
                  <svg width="20" height="20">
                    <use href={`${sprite}#icon-bedroom`}></use>
                  </svg>
                  {camper.details.beds} beds
                </FeaturesItem>
                {camper.details.airConditioner >= 1 && (
                  <FeaturesItem>
                    <svg width="20" height="20">
                      <use href={`${sprite}#icon-conditioner`}></use>
                    </svg>
                    AC
                  </FeaturesItem>
                )}
              </FeaturesList>
              <ShowMoreButton>Show more</ShowMoreButton>
            </InfoContainer>
          </ListStyle>
        ))}
      </ItemStyle>
    </div>
  );
};
