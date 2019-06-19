import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from '../actions/index';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.characters)
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }


  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <p>Loading...</p>
    } else if (this.props.characters) {
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      );
    } else {
      return (
        <p>Error</p>
      )
    }
  }
}

const mapStateToProps = state => ({
  fetching: state.isFetching,
  characters: state.characters,
})

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
