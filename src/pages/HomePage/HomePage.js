import { Container, Text, Image, ListItem } from './HomePage.styled';
import mainrv from '../../services/images/mainrv.jpg';
import rv2 from '../../services/images/rvhome.jpg';

export default function HomePage() {
  return (
    <Container>
      <ul>
        <ListItem>
          <Text>
            Since the 1960s, camper vans have been a popular way for families to
            travel and see the sights of this country. However, until recently,
            recreational vehicle travel was limited by the high costs associated
            with owning and maintaining an RV. With our RV rental resource,
            travelers can now rent a RV in the size and style that fits their
            needs without the high price tag.
          </Text>
          <Image src={mainrv} alt="RV" />
        </ListItem>
        <ListItem>
          <Image src={rv2} alt="RV" />
          <Text>
            Discover our RV models and find your travel home which ticks all of
            the boxes and makes your travel dreams come true. We offer a diverse
            selection of campervans and motorhomes from renowned brands like
            Knaus, Fiat, and VW, and many more.
          </Text>
        </ListItem>
      </ul>
    </Container>
  );
}
