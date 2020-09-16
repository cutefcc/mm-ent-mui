
    import React from 'react';
import * as styles from '../global.less';
import {Loading} from 'mm-ent-ui';

    
    export const attributes = {};

    class DcdykFZpdBFCbFrmKrycXxzwMQPtzZEG extends React.PureComponent {
  render() {
    return (
      (<div>
        <Loading />加载中...</div>)
    );
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>任何需要加载图标的地方</p>
<h2>引用方式</h2>
<pre><code>import {"{"}Loading{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>代码演示</h2>
<blockquote>
<p>组件名称： loading图标</p>
</blockquote>

  <div className="example">
    <div className="run"><DcdykFZpdBFCbFrmKrycXxzwMQPtzZEG /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class Demo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    return ({"\n"}      &lt;div&gt;{"\n"}        &lt;Loading /&gt; 加载中...{"\n"}      &lt;/div&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div>
        </div>
      );
    };
  