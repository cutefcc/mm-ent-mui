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
  // DesktopOutlined,
  // ContainerOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
import * as styles from "./index.less";

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
          {/* <Menu.Item
            key="2"
            onClick={() => {
              this.props.history.push("/");
              this.handleItemClick("2");
            }}
            icon={<DesktopOutlined />}
          >
            首页
          </Menu.Item> */}
          <SubMenu key="sub1" icon={<PieChartOutlined />} title="UI组件">
            <Menu.Item
              key="6"
              onClick={() => {
                this.props.history.push("/MButton");
                this.handleItemClick("6");
              }}
            >
              按钮(新)
            </Menu.Item>
            <Menu.Item
              key="12"
              onClick={() => {
                this.props.history.push("/oldButton");
                this.handleItemClick("12");
              }}
            >
              按钮(老)
            </Menu.Item>
            {/* <Menu.Item
              key="7"
              onClick={() => {
                this.props.history.push("/FeedMultiImg");
                this.handleItemClick("7");
              }}
            >
              FeedMultiImg(老)
            </Menu.Item> */}
            <Menu.Item
              key="8"
              onClick={() => {
                this.props.history.push("/Empty");
                this.handleItemClick("8");
              }}
            >
              空提示(老)
            </Menu.Item>
            <Menu.Item
              key="9"
              onClick={() => {
                this.props.history.push("/ArticleCard");
                this.handleItemClick("9");
              }}
            >
              <span title="mockUVE返回数据">文章卡片(老)</span>
            </Menu.Item>
            <Menu.Item
              key="14"
              onClick={() => {
                this.props.history.push("/MUI-Avatar");
                this.handleItemClick("14");
              }}
            >
              头像(新)
            </Menu.Item>
            <Menu.Item
              key="10"
              onClick={() => {
                this.props.history.push("/avatar");
                this.handleItemClick("10");
              }}
            >
              头像(老)
            </Menu.Item>
            <Menu.Item
              key="13"
              onClick={() => {
                this.props.history.push("/Text");
                this.handleItemClick("13");
              }}
            >
              文字(老)
            </Menu.Item>
            <Menu.Item
              key="15"
              onClick={() => {
                this.props.history.push("/Loading");
                this.handleItemClick("15");
              }}
            >
              Loading(老)
            </Menu.Item>
            <Menu.Item
              key="16"
              onClick={() => {
                this.props.history.push("/Icon");
                this.handleItemClick("16");
              }}
            >
              图标(老)
            </Menu.Item>
            <Menu.Item
              key="17"
              onClick={() => {
                this.props.history.push("/Tab");
                this.handleItemClick("17");
              }}
            >
              Tab切换(老)
            </Menu.Item>
            <Menu.Item
              key="18"
              onClick={() => {
                this.props.history.push("/RichText");
                this.handleItemClick("18");
              }}
            >
              富文本(老)
            </Menu.Item>
            <Menu.Item
              key="19"
              onClick={() => {
                this.props.history.push("/MemberBadge");
                this.handleItemClick("19");
              }}
            >
              会员图标(老)
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<PieChartOutlined />} title="业务组件">
            {/* <Menu.Item
              key="11"
              onClick={() => {
                this.props.history.push("/MButton");
                this.handleItemClick("11");
              }}
            >
              MButton
            </Menu.Item> */}
          </SubMenu>
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
