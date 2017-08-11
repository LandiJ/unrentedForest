import React, { Component } from "react";

//REMOVE
import { connect } from "react-redux";
import { detailGetter, getValues } from "../../actions";
import { bindActionCreators } from "redux";

class DetailList extends Component {
  //REMOVE
  componentWillMount() {
    this.props.detailGetter();
  }
  render() {
    return (
      <div>
        <h1> {this.props.details.title}</h1>
        <ul className="list-wrapper">
          <li
            onClick={() => this.props.getValues(this.props.details.title)}
            className="list-item"
          >
            Primary info
          </li>
          <li className="list-item">Alternative titles</li>
          <li className="list-item">Cast</li>
          <li className="list-item">Crew</li>
          <li className="list-item">Images</li>
          <li className="list-item">Plot keywords</li>
          <li className="list-item">Release information</li>
          <li className="list-item">Trailers</li>
          <li className="list-item">Translations</li>
          <li className="list-item">Similar movies</li>
          <li className="list-item">Reviews</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state: ", state);
  return {
    details: state.titles.details
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { detailGetter: detailGetter, getValues: getValues },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailList);
