
    import React from 'react';
import * as styles from '../global.less';
import {Popover} from 'mm-ent-ui';

    
    export const attributes = {};

    class FHNrZPmyBWwRmhDpNeQiCaMPhcZREEKe extends React.PureComponent {
  render() {
    return (<Popover content="付费客户专属特权" trigger="hover">推送给粉丝</Popover>);
  }
}

class MmPtaNcrKpHQGatJcwYWGczNWSyFDCGS extends React.PureComponent {
  render() {
    return (<Popover title="这里是标题" trigger="click" content="这里是内容" 这里是内容这里是内容这里是内容这里是内容>推送给粉丝</Popover>);
  }
}

class TZMkWJrFFjKjjkXDXWZCMBneXPyrzsGF extends React.PureComponent {
  render() {
    return (<Popover content="付费客户专属特权" type="blue">推送给粉丝</Popover>);
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>所有需要 popover 的地方</p>
<h2>引用方式</h2>
<pre><code>import {"{"}Popover{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>代码演示</h2>
<blockquote>
<p>组件名称： pop-确认</p>
</blockquote>
<ul>
<li>没有 title</li>
</ul>

  <div className="example">
    <div className="run"><FHNrZPmyBWwRmhDpNeQiCaMPhcZREEKe /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class Demo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    return ({"\n"}      &lt;Popover{"\n"}        content=&quot;付费客户专属特权&quot;{"\n"}        trigger=&quot;hover&quot;{"\n"}      &gt;{"\n"}        推送给粉丝{"\n"}      &lt;/Popover&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><ul>
<li>有 title</li>
</ul>

  <div className="example">
    <div className="run"><MmPtaNcrKpHQGatJcwYWGczNWSyFDCGS /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class Demo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    return ({"\n"}      &lt;Popover title=&quot;这里是标题&quot; trigger=&quot;click&quot; content=&quot;这里是内容&quot;这里是内容这里是内容这里是内容这里是内容&gt;{"\n"}        推送给粉丝{"\n"}      &lt;/Popover&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><ul>
<li>特殊样式的弹框</li>
</ul>

  <div className="example">
    <div className="run"><TZMkWJrFFjKjjkXDXWZCMBneXPyrzsGF /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class Demo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    return ({"\n"}      &lt;Popover content=&quot;付费客户专属特权&quot; type=&quot;blue&quot;&gt;{"\n"}        推送给粉丝{"\n"}      &lt;/Popover&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><h2>属性</h2>
<table>
<thead>
<tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr>
</thead>
<tbody>
<tr><td>title</td><td>标题</td><td>string 或 ReactDom</td><td>空</td></tr>
<tr><td>content</td><td>内容</td><td>string 或 ReactDom</td><td>空</td></tr>
<tr><td>type</td><td>样式类型</td><td>string(可选值： blue)</td><td>空</td></tr>
</tbody>
</table>

        </div>
      );
    };
  