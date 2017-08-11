import React, { Component } from "react";
import { connect } from "react-redux";
import { detailGetter, getValues } from "../../actions";

import { bindActionCreators } from "redux";

class DetailValues extends Component {
  render() {
    return (
      <div className="value-wrapper">

        <p>{this.props.values}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("VALUES state: ", state);
  return {
    values: state.titles.values
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailValues);
