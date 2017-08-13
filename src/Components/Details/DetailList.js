import React, { Component } from "react";

//REMOVE
import { connect } from "react-redux";
import { detailGetter } from "../../actions";
import { bindActionCreators } from "redux";

class DetailList extends Component {
  render() {
    console.log(this.props.movieDetails);
    return (
      <div>
        <ul>
          <li>Primary info</li>
          <li>Alternative titles</li>
          <li>Cast</li>
          <li>Crew</li>
          <li>Images</li>
          <li>Plot keywords</li>
          <li>Release information</li>
          <li>Trailers</li>
          <li>Translations</li>
          <li>Similar movies</li>
          <li>Reviews</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    subheader: state.titles.subheader,
    movieDetails: state.titles.movieDetails
  };
};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailList);
