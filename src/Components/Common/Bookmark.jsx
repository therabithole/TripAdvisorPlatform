import React from "react";

const Bookmark = props => {
  const { type } = props;
  let classes = "fa fa-heart";

  if (!props.bookmarked) classes += "-o";
  return (
    <React.Fragment>
      <i
        onClick={props.onClick}
        className={classes}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      ></i>
      <span> Bookmark this {type}</span>
    </React.Fragment>
  );
};

export default Bookmark;

/* class Bookmark extends Component {
  state = {};

  render() {
    let classes = "fa fa-heart";

    if (!this.props.bookmarked) classes += "-o";
    return (
      <React.Fragment>
        <i
          onClick={this.props.onClick}
          className={classes}
          style={{ cursor: "pointer" }}
          aria-hidden="true"
        ></i>
        <span> Bookmark this hotel</span>
      </React.Fragment>
    );
  }
}

export default Bookmark; */
