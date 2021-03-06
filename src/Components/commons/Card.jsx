import styled from 'styled-components';

import { shadowBox, onHoverEffect } from './styles';

const TestBox = styled.div`
  :nth-child(even) {
    background-color: #3498db;
  }
  :nth-child(odd) {
    background-color: #34495e;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  color: black;
  ${shadowBox};
`;

const BaseCard = styled(Card)`
  ${onHoverEffect};
`;

export { TestBox, Card, BaseCard };
