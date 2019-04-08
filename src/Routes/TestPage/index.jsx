import React from 'react';
import withRouteComponent from '../withRouteComponent';
import { Container, HeartButton } from '../../Components/commons';

class TestPage extends React.Component {
  render() {
    return (
      <Container isSideBar={this.props.isSideBar}>
        <h1>Heart Buttons</h1>
        <HeartButtonGroups />
      </Container>
    );
  }
}

const HeartButtonGroups = () => (
  <>
    <HeartButton isLiked size="sm" />
    <HeartButton isLiked={false} size="sm" disabled />
    <HeartButton isLiked size="md" />
    <HeartButton isLiked={false} size="md" disabled />
    <HeartButton isLiked size="lg" />
    <HeartButton isLiked={false} size="lg" disabled />
  </>
);

export default withRouteComponent(TestPage);
