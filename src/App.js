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
    score: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  handleClick = (id) => {
    console.log("The card has been clicked " + id)
    if(this.state.beenClicked.includes(id)){
      this.setState({score: 0});
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
        <h2>{this.state.score}</h2>
        <Title>My Hero Clicky Game!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            handleClick={this.handleClick}
            removeFriend={this.removeFriend}
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
