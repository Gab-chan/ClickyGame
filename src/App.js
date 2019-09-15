import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    beenClicked: [],
    score: 0,
    wins: 0,
    loses: 0
  };

  handleClick = (id) => {
   if(this.state.beenClicked.includes(id)){
      this.setState({
        score: 0,
        loses: this.state.loses + 1
      });
    } else if (this.state.score === 9){
      this.setState({
      wins: this.state.wins + 1,
      beenClicked: this.state.beenClicked.concat(id),
      score: 0
    });
  } else {
      this.setState({
        beenClicked: this.state.beenClicked.concat(id),
        score: this.state.score + 1
      });
      this.shuffleHero();
    };

    
  };

  shuffleHero = () => {
    this.state.friends.sort(() => .5 - Math.random());
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <h2>Wins: {this.state.wins}</h2>
        <h2>Score: {this.state.score}</h2>
        <h2>Loses: {this.state.loses}</h2>
        <Title>My Hero Clicky Game!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
