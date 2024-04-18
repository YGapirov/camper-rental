import styled from 'styled-components';

export const ItemStyle = styled.ul`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px; */
`;

export const ListStyle = styled.li`
  display: flex;
  align-items: flex-start; // Забезпечує вертикальне вирівнювання елементів на початку контейнера
  gap: 24px;
  padding: 24px;
  width: 100%; // Якщо потрібна фіксована ширина, можете вказати її
  max-height: 358px;
  max-width: 888px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  background-color: #fff;
  box-shadow: rgba(239, 241, 243, 0.3) 0px 1px 2px 0px,
    rgba(225, 229, 232, 0.15) 0px 1px 3px 1px;
  overflow: hidden; // Запобігає виходу вмісту за межі контейнера
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center; // Центрує зображення вертикально, якщо це необхідно
  justify-content: center; // Центрує зображення горизонтально в контейнері
`;

export const ImageStyle = styled.img`
  width: 290px; // Змініть розміри згідно з вашими потребами
  height: 310px;
  border-radius: 10px;
  align-self: flex-start; // Вирівнювання зображення зліва
`;

export const InfoContainer = styled.div`
  width: 526px;
  /* display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;  */
`;

export const CamperNamePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FeaturesList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;
export const FeaturesItem = styled.li`
  border-radius: 100px;
  background: #f2f4f7;
  padding: 12px 18px;

  mix-blend-mode: multiply;
`;

export const CamperTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const CamperRatingLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CamperPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const CamperDescription = styled.p`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ShowMoreButton = styled.button`
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  border-radius: 200px;
  background: #e44848;
  font-size: 16px;
  max-width: 166px;
  min-height: 56px;
  color: #fff;
  border: none;
`;