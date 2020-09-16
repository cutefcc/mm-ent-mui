
    import React from 'react';
import * as styles from '../global.less';
import {Icon} from 'mm-ent-ui';

    
    export const attributes = {};

    class KfJSdTckBREwYcaDtZkzsFwQmdPmnXrR extends React.PureComponent {
  render() {
    const style = {
      display: "flex",
      flexDirection: "column",
      margin: "0 16px 16px 0",
      alignItems: "center",
      width: "100px"
    };

    return (
      (<div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}>
        <div style={style}>
          <Icon
            type="arrow-down"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />arrow-down</div>
        <div style={style}>
          <Icon
            type="arrow-up"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />arrow-up</div>
        <div style={style}>
          <Icon
            type="arrow-left"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />arrow-left</div>
        <div style={style}>
          <Icon
            type="arrow-right"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />arrow-right</div>
        <div style={style}>
          <Icon
            type="close-outline"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />close-outline</div>
        <div style={style}>
          <Icon
            type="icon_call"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />icon_call</div>
        <div style={style}>
          <Icon
            type="icon_sort"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />icon_sort</div>
        <div style={style}>
          <Icon
            type="icon_download"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />icon_download</div>
        <div style={style}>
          <Icon
            type="icon_dynamic"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />icon_dynamic</div>
        <div style={style}>
          <Icon
            type="talent_search"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />talent_search</div>
        <div style={style}>
          <Icon
            type="add_friend"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />add_friend</div>
        <div style={style}>
          <Icon
            type="direct_im"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />direct_im</div>
        <div style={style}>
          <Icon
            type="chat"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />chat</div>
        <div style={style}>
          <Icon
            type="add_label"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />add_label</div>
        <div style={style}>
          <Icon
            type="radio_checked"
            style={{
              fontSize: "28px"
            }} />radio_checked</div>
        <div style={style}>
          <Icon
            type="discover2"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />discover2</div>
        <div style={style}>
          <Icon
            type="recruit2"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />recruit2</div>
        <div style={style}>
          <Icon
            type="talent_pool2"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />talent_pool2</div>
        <div style={style}>
          <Icon
            type="data2"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />data2</div>
        <div style={style}>
          <Icon
            type="invite"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />icon_edit</div>
        <div style={style}>
          <Icon
            type="talentpool"
            style={{
              color: "#3375ff",
              fontSize: "28px"
            }} />talentpool</div>
      </div>)
    );
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>需要展示图标的地方，可以用于任何地方</p>
<h2>使用方式</h2>
<ul>
<li>引入组件</li>
</ul>
<pre><code>import {"{"}Icon{"}"} from 'mm-ent-ui'{"\n"}</code></pre><ul>
<li>用到icon的地方</li>
</ul>
<pre><code>&lt;Icon type=&quot;组件名称&quot; /&gt;{"\n"}</code></pre><ul>
<li>可以通过 style 属性，设置 icon 的样式，如 font-size  color 等</li>
<li>不能设置 font-family 属性</li>
</ul>
<h2>案例</h2>

  <div className="example">
    <div className="run"><KfJSdTckBREwYcaDtZkzsFwQmdPmnXrR /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class ButtonDemo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    const style={"{"}{"\n"}      display: 'flex',{"\n"}      flexDirection: 'column',{"\n"}      margin: '0 16px 16px 0',{"\n"}      alignItems: 'center',{"\n"}      width: '100px',{"\n"}    {"}"}{"\n"}    return ({"\n"}      &lt;div style={"{"}{"{"}display: 'flex', flexWrap: 'wrap'{"}"}{"}"}&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;arrow-down&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          arrow-down{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;arrow-up&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          arrow-up{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;arrow-left&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          arrow-left{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;arrow-right&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          arrow-right{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;close-outline&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          close-outline{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;icon_call&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          icon_call{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;icon_sort&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          icon_sort{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;icon_download&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          icon_download{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;icon_dynamic&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          icon_dynamic{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;talent_search&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          talent_search{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;add_friend&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          add_friend{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;direct_im&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          direct_im{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;chat&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          chat{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;add_label&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          add_label{"\n"}        &lt;/div&gt;{"\n"}{"\n"}{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;radio_checked&quot; style={"{"}{"{"}fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          radio_checked{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;discover2&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          discover2{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;recruit2&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          recruit2{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;talent_pool2&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          talent_pool2{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;data2&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          data2{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;invite&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          icon_edit{"\n"}        &lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;{"\n"}          &lt;Icon type=&quot;talentpool&quot; style={"{"}{"{"}color: '#3375ff', fontSize: '28px'{"}"}{"}"}/&gt;{"\n"}          talentpool{"\n"}        &lt;/div&gt;{"\n"}      &lt;/div&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><h2>属性</h2>
<table>
<thead>
<tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr>
</thead>
<tbody>
<tr><td>type</td><td>文字的基本样式</td><td>string</td><td>common,可选值 title,common,week</td></tr>
<tr><td>style</td><td>设置样式</td><td>object</td><td>无</td></tr>
</tbody>
</table>

        </div>
      );
    };
  