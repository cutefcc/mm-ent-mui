
    import React from 'react';
import * as styles from '../global.less';
import {MemberBadge} from 'mm-ent-ui';

    
    export const attributes = {};

    class DjYfcpQFEtKiybZMmbSNXnBxGDRWFfEW extends React.PureComponent {
  render() {
    const style = {
      marginRight: "16px"
    };

    return (
      (<div
        style={{
          display: "flex",
          flexWrap: "wrap"
        }}>
        <p style={style}>
          <label>会员1：</label><MemberBadge memId={1} />
        </p>
        <p style={style}>
          <label>会员2：</label><MemberBadge memId={2} />
        </p>
        <p style={style}>
          <label>会员3：</label><MemberBadge memId={3} />
        </p>
        <p style={style}>
          <label>会员4：</label><MemberBadge memId={4} />
        </p>
        <p style={style}>
          <label>会员5：</label><MemberBadge memId={5} />
        </p>
        <p style={style}>
          <label>会员6：</label><MemberBadge memId={6} />
        </p>
        <p style={style}>
          <label>会员7：</label><MemberBadge memId={7} />
        </p>
      </div>)
    );
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>所有需要展示会员图标的地方</p>
<h2>引用方式</h2>
<pre><code>import {"{"}MemberBadge{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>组件名称</h2>
<blockquote>
<p>组件名称： MemberBadge</p>
</blockquote>
<h2>代码演示</h2>

  <div className="example">
    <div className="run"><DjYfcpQFEtKiybZMmbSNXnBxGDRWFfEW /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class Demo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    const style={"{"}{"\n"}      marginRight: '16px',{"\n"}    {"}"}{"\n"}    return ({"\n"}      &lt;div style={"{"}{"{"}display: 'flex', flexWrap: 'wrap'{"}"}{"}"}&gt;{"\n"}        &lt;p style={"{"}style{"}"}&gt;{"\n"}          &lt;label&gt;会员1：&lt;/label&gt;&lt;MemberBadge memId={"{"}1{"}"} /&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p style={"{"}style{"}"}&gt;{"\n"}          &lt;label&gt;会员2：&lt;/label&gt;&lt;MemberBadge memId={"{"}2{"}"} /&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p style={"{"}style{"}"}&gt;{"\n"}          &lt;label&gt;会员3：&lt;/label&gt;&lt;MemberBadge memId={"{"}3{"}"} /&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p style={"{"}style{"}"}&gt;{"\n"}          &lt;label&gt;会员4：&lt;/label&gt;&lt;MemberBadge memId={"{"}4{"}"} /&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p style={"{"}style{"}"}&gt;{"\n"}          &lt;label&gt;会员5：&lt;/label&gt;&lt;MemberBadge memId={"{"}5{"}"} /&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p style={"{"}style{"}"}&gt;{"\n"}          &lt;label&gt;会员6：&lt;/label&gt;&lt;MemberBadge memId={"{"}6{"}"} /&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p style={"{"}style{"}"}&gt;{"\n"}          &lt;label&gt;会员7：&lt;/label&gt;&lt;MemberBadge memId={"{"}7{"}"} /&gt;{"\n"}        &lt;/p&gt; {"\n"}      &lt;/div&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><h2>属性</h2>
<table>
<thead>
<tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr>
</thead>
<tbody>
<tr><td>memId</td><td>会员id</td><td>number</td><td>空</td></tr>
</tbody>
</table>

        </div>
      );
    };
  