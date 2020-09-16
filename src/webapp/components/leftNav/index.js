import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "store/actions";
import * as R from "ramda";
import autobind from "autobind-decorator";
import { Menu, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
import * as styles from './index.less';

@withRouter
@autobind
class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleItemClick(key) {
    this.props.changeCheckedNav(key);
  }

  toggleCollapsed() {
    this.props.changeLeftNavStatus(!this.props.leftNavStatus);
  }

  render() {
    const leftNavStatus = R.pathOr("", ["props", "leftNavStatus"], this);
    const checkedNav = R.pathOr("6", ["props", "checkedNav"], this);
    return (
      <>
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{
            marginBottom: 16,
            position: "absolute",
            left: !leftNavStatus ? "180px" : "80px",
            top: "5px",
          }}
        >
          {React.createElement(
            leftNavStatus ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <Menu
          selectedKeys={[checkedNav]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={leftNavStatus}
          className={styles.menuUl}
        >
          <SubMenu key="sub1" icon={<PieChartOutlined />} title="UI组件">
            {/* <Menu.Item
              key="5"
              onClick={() => {
                this.props.history.push("/alreadyEnv");
                this.handleItemClick("5");
              }}
            >
              已有环境列表
            </Menu.Item> */}
            <Menu.Item
              key="6"
              onClick={() => {
                this.props.history.push("/MButton");
                this.handleItemClick("6");
              }}
            >
              MButton
            </Menu.Item>
            <Menu.Item
              key="7"
              onClick={() => {
                this.props.history.push("/FeedMultiImg");
                this.handleItemClick("7");
              }}
            >
              FeedMultiImg
            </Menu.Item>
            <Menu.Item
              key="8"
              onClick={() => {
                this.props.history.push("/Empty");
                this.handleItemClick("8");
              }}
            >
              Empty
            </Menu.Item>
            <Menu.Item
              key="9"
              onClick={() => {
                this.props.history.push("/ArticleCard");
                this.handleItemClick("9");
              }}
            >
              <span title="mockUVE返回数据">ArticleCard</span>
            </Menu.Item>
            <Menu.Item
              key="10"
              onClick={() => {
                this.props.history.push("/avatar");
                this.handleItemClick("10");
              }}
            >
              avatar
            </Menu.Item>
            {/* <Menu.Item
              key="11"
              onClick={() => {
                this.props.history.push("/avatar");
                this.handleItemClick("11");
              }}
            >
              avatar
            </Menu.Item> */}
            {/* <Menu.Item
              key="12"
              onClick={() => {
                this.props.history.push("/MUIButton");
                this.handleItemClick("12");
              }}
            >
              MUIButton
            </Menu.Item> */}
          </SubMenu>
          {/* <Menu.Item
            key="2"
            onClick={() => {
              this.props.history.push("/smartBuild");
              this.handleItemClick("2");
            }}
            icon={<DesktopOutlined />}
          >
            智能搭建环境
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => {
              this.props.history.push("/newEnv");
              this.handleItemClick("3");
            }}
            icon={<ContainerOutlined />}
          >
            新建联调环境
          </Menu.Item> */}
          {/* <Menu.Item
            key="4"
            onClick={() => {
              this.props.history.push("/countPage");
              this.handleItemClick("4");
            }}
            icon={<ContainerOutlined />}
          >
            统计页面展示
          </Menu.Item> */}
        </Menu>
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    ...state,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    changeCheckedNav: (key) => {
      dispatch(actions.changeCheckedNav(key));
    },
    // change left nav status
    changeLeftNavStatus: (payload) => {
      dispatch(actions.changeLeftNavStatus(payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);
