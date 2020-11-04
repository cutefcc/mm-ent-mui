import React from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "antd";
import { connect } from "react-redux";
import autobind from "autobind-decorator";
// import * as actions from "../../store/actions";
import * as R from "ramda";
// import "./index.less";
import * as styles from "./index.less";
const { Header } = Layout;
@withRouter
@autobind
class TopHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  handleLogoClick() {
    this.props.history.push("/");
  }
  render() {
    // const checkedNav = R.pathOr("", ["props", "checkedNav"], this);
    const leftNavStatus = R.pathOr("", ["props", "leftNavStatus"], this);
    // const checkedNavObj = R.pathOr({}, ["props", "leftNav"], this).find(
    //   (item) => item.key === checkedNav
    // );
    return (
      <Header className={styles.topHeader}>
        <div className={styles.logo} onClick={this.handleLogoClick}>
          {/* <img className={styles.logoImg} src="./static/img/maimai_logo.png" /> */}
          {!leftNavStatus && (
            <div className={styles.logoText}>脉脉PC组件-文档平台</div>
          )}
          {leftNavStatus && (
            <img
              className={styles.logoImg}
              src="./static/img/maimai_logo.png"
            />
          )}
        </div>
      </Header>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
