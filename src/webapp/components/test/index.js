import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import autobind from "autobind-decorator";
// import * as actions from "../../store/actions";
// import * as R from "ramda";
import { MUIButton } from "test-cutefcc";
// import "./index.less";
@withRouter
@autobind
class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  handleLogoClick() {
    this.props.history.push("/");
  }
  render() {
    // const checkedNav = R.pathOr("", ["props", "checkedNav"], this);
    // const leftNavStatus = R.pathOr("", ["props", "leftNavStatus"], this);
    // const checkedNavObj = R.pathOr({}, ["props", "leftNav"], this).find(
    //   (item) => item.key === checkedNav
    // );
    return (
      <div>
        12345
        <MUIButton type="mbutton_s_fixed_blue450_l1" onClick={this.handleClick}>
          一级按钮
        </MUIButton>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    ...state,
  };
};
let mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
