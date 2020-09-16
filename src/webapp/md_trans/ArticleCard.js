
    import React from 'react';
import * as styles from '../global.less';
import {ArticleCard} from 'mm-ent-ui';

    
    export const attributes = {};

    class CjEihyjMPhFYXiGaJXPDhETaAPcmcDFT extends React.PureComponent {
  render() {
    const card = {
      avatar: "http://i9.taou.com/maimai/p/21672/9296_60_6n5SfkvZQjECkIXn-a160",
      line1: "面对下属抱团抵制、阳奉阴违，空降的销售leader该如何管理？",
      target: "https://maimai.cn/article/topic?id=268169"
    };

    return (<ArticleCard card={card} />);
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>展示文章卡片的地方</p>
<h2>引用方式</h2>
<pre><code>import {"{"}ArticleCard{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>代码演示</h2>
<blockquote>
<p>组件名称： 文章卡片</p>
</blockquote>

  <div className="example">
    <div className="run"><CjEihyjMPhFYXiGaJXPDhETaAPcmcDFT /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class ArticleCardDemo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    const card = {"{"}{"\n"}      avatar: 'http://i9.taou.com/maimai/p/21672/9296_60_6n5SfkvZQjECkIXn-a160',{"\n"}      line1: '面对下属抱团抵制、阳奉阴违，空降的销售leader该如何管理？',{"\n"}      target: 'https://maimai.cn/article/topic?id=268169',{"\n"}    {"}"}{"\n"}    return ({"\n"}      &lt;ArticleCard card={"{"}card{"}"} /&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><h2>属性</h2>
<table>
<thead>
<tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr>
</thead>
<tbody>
<tr><td>card</td><td>文档卡片所需信息</td><td>object: avatar  line1  line2</td><td>空数组</td></tr>
</tbody>
</table>

        </div>
      );
    };
  