
    import React from 'react';
import * as styles from '../global.less';
import {Tab} from 'mm-ent-ui';

    
    export const attributes = {};

    class HcBzYJdwisTZmYABkkTxckwWPECacDtn extends React.PureComponent {
  state = {
    activeKeys: [1]
  };

  handleTabChange = config => {
    this.setState({
      activeKeys: [config.key]
    });
  };

  render() {
    const tabsConfig = [{
      title: "企业动态",
      key: 1
    }, {
      title: "员工动态",
      key: 2
    }, {
      title: "其他动态",
      key: 3
    }];

    return (
      (<div
        style={{
          borderBottom: "1px solid #eee"
        }}>
        <Tab
          tabs={tabsConfig}
          activeKeys={this.state.activeKeys}
          onChange={this.handleTabChange}
          type="large"
          style={{
            marginLeft: "8px"
          }} />
      </div>)
    );
  }
}

class WmPpfYmTkpEWfcfXxsEdxmkcaJbGJrDD extends React.PureComponent {
  state = {
    activeKeys: [1]
  };

  handleTabChange = config => {
    this.setState({
      activeKeys: [config.key]
    });
  };

  render() {
    const tabsConfig = [{
      title: "企业动态",
      key: 1
    }, {
      title: "员工动态",
      key: 2
    }, {
      title: "其他动态",
      key: 3
    }];

    return (
      (<div>
        <Tab
          tabs={tabsConfig}
          activeKeys={this.state.activeKeys}
          onChange={this.handleTabChange}
          type="small" />
      </div>)
    );
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>用到 Tab 的地方</p>
<h2>引用方式</h2>
<pre><code>import {"{"}Tab{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>组件名称</h2>
<blockquote>
<p>组件名称： Tab</p>
</blockquote>
<h2>代码演示</h2>
<ul>
<li>一级页面 tab</li>
</ul>

  <div className="example">
    <div className="run"><HcBzYJdwisTZmYABkkTxckwWPECacDtn /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class TabDemo extends React.PureComponent {"{"}{"\n"}  state = {"{"}{"\n"}    activeKeys: [1]{"\n"}  {"}"}{"\n"}{"\n"}  handleTabChange = config =&gt; {"{"}{"\n"}    this.setState({"{"}{"\n"}      activeKeys: [config.key],{"\n"}    {"}"}){"\n"}  {"}"}{"\n"}{"\n"}  render() {"{"}{"\n"}    const tabsConfig = [{"\n"}      {"{"}{"\n"}        title: '企业动态',{"\n"}        key: 1{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        title: '员工动态',{"\n"}        key: 2{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        title: '其他动态',{"\n"}        key: 3{"\n"}      {"}"}{"\n"}    ]{"\n"}{"\n"}    return ({"\n"}      &lt;div style={"{"}{"{"}borderBottom: '1px solid #eee'{"}"}{"}"}&gt;{"\n"}        &lt;Tab{"\n"}          tabs={"{"}tabsConfig{"}"}{"\n"}          activeKeys={"{"}this.state.activeKeys{"}"}{"\n"}          onChange={"{"}this.handleTabChange{"}"}{"\n"}          type=&quot;large&quot;{"\n"}          style={"{"}{"{"}marginLeft: '8px'{"}"}{"}"}{"\n"}        /&gt;{"\n"}      &lt;/div&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><ul>
<li>二级页面 tab</li>
</ul>

  <div className="example">
    <div className="run"><WmPpfYmTkpEWfcfXxsEdxmkcaJbGJrDD /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class TabDemo extends React.PureComponent {"{"}{"\n"}  state = {"{"}{"\n"}    activeKeys: [1]{"\n"}  {"}"}{"\n"}{"\n"}  handleTabChange = config =&gt; {"{"}{"\n"}    this.setState({"{"}{"\n"}      activeKeys: [config.key],{"\n"}    {"}"}){"\n"}  {"}"}{"\n"}{"\n"}  render() {"{"}{"\n"}    const tabsConfig = [{"\n"}      {"{"}{"\n"}        title: '企业动态',{"\n"}        key: 1{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        title: '员工动态',{"\n"}        key: 2{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        title: '其他动态',{"\n"}        key: 3{"\n"}      {"}"}{"\n"}    ]{"\n"}{"\n"}    return ({"\n"}      &lt;div&gt;{"\n"}        &lt;Tab{"\n"}          tabs={"{"}tabsConfig{"}"}{"\n"}          activeKeys={"{"}this.state.activeKeys{"}"}{"\n"}          onChange={"{"}this.handleTabChange{"}"}{"\n"}          type=&quot;small&quot;{"\n"}        /&gt;{"\n"}      &lt;/div&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><h2>属性</h2>
<table>
<thead>
<tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr>
</thead>
<tbody>
<tr><td>tabsConfig</td><td>tab选项</td><td>array(Object)</td><td>空数组</td></tr>
</tbody>
</table>

        </div>
      );
    };
  