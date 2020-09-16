
    import React from 'react';
import * as styles from '../global.less';
import {RichText} from 'mm-ent-ui';

    
    export const attributes = {};

    class SnNeWYPzpdZKemiSxpaDCszWxNTNffHM extends React.PureComponent {
  render() {
    const text = "今天很开心[微笑],[胜利],<dref t=1 v=31379035>@吕金妍</dref>，<dref t=1 url=https://maimai.cn>脉脉</dref>,加油<dref t=12 v=[拳头]></dref>";
    return (<RichText text={text} />);
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>所有需要解析富文本的地方</p>
<h2>引用方式</h2>
<pre><code>import {"{"}RichText{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>背书</h2>
<blockquote>
<p>解析富文本的逻辑，请参考 <a href="https://docs.taou.com/pages/viewpage.action?pageId=59970481">文档</a>,如果解析逻辑有有变更或者补充，请同步维护该文档</p>
</blockquote>
<h2>代码演示</h2>
<blockquote>
<p>组件名称： 富文本</p>
</blockquote>

  <div className="example">
    <div className="run"><SnNeWYPzpdZKemiSxpaDCszWxNTNffHM /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class Demo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    const text = '今天很开心[微笑],[胜利],&lt;dref t=1 v=31379035&gt;@吕金妍&lt;/dref&gt;，&lt;dref t=1 url=https://maimai.cn&gt;脉脉&lt;/dref&gt;,加油&lt;dref t=12 v=[拳头]&gt;&lt;/dref&gt;'{"\n"}    return ({"\n"}      &lt;RichText{"\n"}        text={"{"}text{"}"}{"\n"}      /&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><h2>属性</h2>
<table>
<thead>
<tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr>
</thead>
<tbody>
<tr><td>text</td><td>富文本内容</td><td>string</td><td>空</td></tr>
</tbody>
</table>

        </div>
      );
    };
  