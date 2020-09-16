import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import * as actions from "store/actions";
import TopHeader from "components/header";
import LeftNav from "components/leftNav/index";
import ArticleCard from "../md_trans/ArticleCard.js";
import Avatar from "../md_trans/Avatar.js";
import Empty from "../md_trans/Empty.js";
import FeedMultiImg from "../md_trans/FeedMultiImg";
import MButton from "../md_trans/MButton.js";
import RefreshLeftNavChecked from "utils/refreshLeftNavChecked";

import * as styles from './index.less';
import { Layout } from "antd";

function App(props) {
  const { dispatch } = props;
  const ref = useRef();
  useEffect(() => {
    ref.current.handleLeftNavChecked(); // 切换leftNav 选择状态 
    dispatch(
      actions.saveLeftNavCheckedMethod(ref.current.handleLeftNavChecked)
    );
  }, []);

  return (
    <BrowserRouter>
      <Layout className={styles.layout}>
        <TopHeader />
        <div className={styles.mainContainer}>
          <LeftNav />
          <Route path="/" exact component={MButton} />
          <Route path="/avatar" component={Avatar} />
          <Route path="/ArticleCard" component={ArticleCard} />
          <Route path="/Empty" component={Empty} />
          <Route path="/FeedMultiImg" component={FeedMultiImg} />
          <Route path="/MButton" component={MButton} />
        </div>
        <RefreshLeftNavChecked ref={ref} dispatch={dispatch} />
      </Layout>
    </BrowserRouter> 
  );
}

export default connect((state, dispatch) => ({
  dispatch,
}))(App);
