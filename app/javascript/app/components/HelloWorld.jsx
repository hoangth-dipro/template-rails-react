import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greting: {this.props.greting}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greting: PropTypes.string
};
export default HelloWorld
