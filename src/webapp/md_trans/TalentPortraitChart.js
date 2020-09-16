
    import React from 'react';
import * as styles from '../global.less';
import {TalentPortraitChart} from 'mm-ent-ui';

    
    export const attributes = {};

    class PBrrADpNCbmMdEDArtbkpkApYceGfhYk extends React.PureComponent {
  render() {
    const data = [{
      count: 181409,
      city: "北京",
      name: "北京"
    }, {
      count: 53146,
      city: "深圳",
      name: "深圳"
    }, {
      count: 42442,
      city: "上海",
      name: "上海"
    }, {
      count: 36232,
      city: "杭州",
      name: "杭州"
    }, {
      count: 28733,
      city: "广州",
      name: "广州"
    }, {
      count: 25243,
      city: "成都",
      name: "成都"
    }, {
      count: 15755,
      city: "西安",
      name: "西安"
    }];

    return (<TalentPortraitChart data={data} title="城市地区" />);
  }
}

class DfrAsdSHWnxncMpJHDdHiMXWRjYFSMsQ extends React.PureComponent {
  render() {
    const data = [{
      count: 181409,
      city: "北京",
      name: "北京"
    }, {
      count: 53146,
      city: "深圳",
      name: "深圳"
    }, {
      count: 42442,
      city: "上海",
      name: "上海"
    }, {
      count: 36232,
      city: "杭州",
      name: "杭州"
    }, {
      count: 28733,
      city: "广州",
      name: "广州"
    }, {
      count: 25243,
      city: "成都",
      name: "成都"
    }, {
      count: 15755,
      city: "西安",
      name: "西安"
    }];

    return (<TalentPortraitChart data={data} title="城市地区" chartWidth={600} />);
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>用到 Tab 的地方</p>
<h2>引用方式</h2>
<pre><code>import {"{"}TalentPortraitChart{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>组件名称</h2>
<blockquote>
<p>组件名称： 人才画像</p>
</blockquote>
<h2>代码演示</h2>
<ul>
<li>基本使用</li>
</ul>

  <div className="example">
    <div className="run"><PBrrADpNCbmMdEDArtbkpkApYceGfhYk /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class Demo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    const data = [{"\n"}      {"{"}{"\n"}        count: 181409,{"\n"}        city: '北京',{"\n"}        name: '北京',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 53146,{"\n"}        city: '深圳',{"\n"}        name: '深圳',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 42442,{"\n"}        city: '上海',{"\n"}        name: '上海',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 36232,{"\n"}        city: '杭州',{"\n"}        name: '杭州',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 28733,{"\n"}        city: '广州',{"\n"}        name: '广州',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 25243,{"\n"}        city: '成都',{"\n"}        name: '成都',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 15755,{"\n"}        city: '西安',{"\n"}        name: '西安',{"\n"}      {"}"},{"\n"}    ]{"\n"}{"\n"}    return ({"\n"}      &lt;TalentPortraitChart{"\n"}        data={"{"}data{"}"}{"\n"}        title=&quot;城市地区&quot;{"\n"}      /&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><ul>
<li>自定义宽度</li>
</ul>

  <div className="example">
    <div className="run"><DfrAsdSHWnxncMpJHDdHiMXWRjYFSMsQ /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class Demo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    const data = [{"\n"}      {"{"}{"\n"}        count: 181409,{"\n"}        city: '北京',{"\n"}        name: '北京',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 53146,{"\n"}        city: '深圳',{"\n"}        name: '深圳',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 42442,{"\n"}        city: '上海',{"\n"}        name: '上海',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 36232,{"\n"}        city: '杭州',{"\n"}        name: '杭州',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 28733,{"\n"}        city: '广州',{"\n"}        name: '广州',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 25243,{"\n"}        city: '成都',{"\n"}        name: '成都',{"\n"}      {"}"},{"\n"}      {"{"}{"\n"}        count: 15755,{"\n"}        city: '西安',{"\n"}        name: '西安',{"\n"}      {"}"},{"\n"}    ]{"\n"}{"\n"}    return ({"\n"}      &lt;TalentPortraitChart{"\n"}        data={"{"}data{"}"}{"\n"}        title=&quot;城市地区&quot;{"\n"}        chartWidth={"{"}600{"}"}{"\n"}      /&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><h2>属性</h2>
<table>
<thead>
<tr><th>属性</th><th>说明</th><th>类型</th><th>是否必填</th><th>默认值</th></tr>
</thead>
<tbody>
<tr><td>data</td><td>需要展示的数据</td><td>array(Object)</td><td>否</td><td>空数组</td></tr>
<tr><td>className</td><td>自定义的 class</td><td>string</td><td>否</td><td>空字符串</td></tr>
<tr><td>title</td><td>图表标题</td><td>string or react dom or number</td><td>否</td><td>空字符串</td></tr>
<tr><td>chartWidth</td><td>图标区的最大宽度(指条形图中条形的最大宽度)</td><td>number</td><td>否</td><td>390</td></tr>
</tbody>
</table>

        </div>
      );
    };
  