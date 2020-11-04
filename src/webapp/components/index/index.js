import React from "react";
import { connect } from "react-redux";
import * as styles from "./index.less";

function Index() {
  return <div className={styles.indexContainer}>index</div>;
}

export default connect((state, dispatch) => ({
  dispatch,
}))(Index);
