import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 5px;
`;

export const Text = styled.p`
  padding: 14px;
  font-size: 18px;
  font-style: italic;
  max-width: 600px;
  margin-right: 20px;
`;

export const Image = styled.img`
  width: 50%;
  max-width: 400px;
  max-height: 400px;
  height: auto;
  border-radius: 5px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
