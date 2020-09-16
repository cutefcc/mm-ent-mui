
    import React from 'react';
import * as styles from '../global.less';
import {Button} from 'mm-ent-ui';

    
    export const attributes = {};

    class PRdGjaPtCKPhahzRnnwampfcEmPCErzK extends React.PureComponent {
  handleClick = () => {
    alert("按钮被点击了");
  };

  render() {
    const style = {
      marginRight: "16px",
      marginBottom: "8px"
    };

    return (
      (<React.Fragment>
        <p>
          <Button type="button_s_fixed_blue450" onClick={this.handleClick} style={style}>主按钮</Button>
          <Button type="button_s_fixed_blue650" onClick={this.handleClick} style={style}>主按钮</Button>
          <Button type="button_s_fixed_blue150" onClick={this.handleClick} style={style}>次主按钮</Button>
          <Button
            type="button_s_fixed_ghost_blue450"
            onClick={this.handleClick}
            style={style}>普通按钮</Button>
          <Button type="button_s_exact_blue450" onClick={this.handleClick} style={style}>自适应主</Button>
          <Button type="button_s_exact_blue100" onClick={this.handleClick} style={style}>自适应弱</Button>
          <Button type="button_s_exact_link_blue" onClick={this.handleClick} style={style}>blue文字链</Button>
          <Button type="button_s_exact_link_bgray" onClick={this.handleClick} style={style}>bgray文字链</Button>
          <Button type="button_s_exact_link_gray" onClick={this.handleClick} style={style}>gray文字链</Button>
        </p>
        <p>
          <Button type="button_m_fixed_blue450" onClick={this.handleClick} style={style}>主按钮</Button>
          <Button type="button_m_fixed_blue650" onClick={this.handleClick} style={style}>主按钮</Button>
          <Button type="button_m_fixed_blue150" onClick={this.handleClick} style={style}>次主按钮</Button>
          <Button
            type="button_m_fixed_ghost_blue450"
            onClick={this.handleClick}
            style={style}>普通按钮</Button>
          <Button type="button_m_exact_blue450" onClick={this.handleClick} style={style}>自适应主</Button>
          <Button type="button_m_exact_blue100" onClick={this.handleClick} style={style}>自适应弱</Button>
          <Button type="button_m_exact_link_blue" onClick={this.handleClick} style={style}>blue文字链</Button>
          <Button type="button_m_exact_link_bgray" onClick={this.handleClick} style={style}>bgray文字链</Button>
          <Button type="button_m_exact_link_gray" onClick={this.handleClick} style={style}>gray文字链</Button>
        </p>
        <p>
          <Button type="button_l_fixed_blue450" onClick={this.handleClick} style={style}>主按钮</Button>
          <Button type="button_l_fixed_blue650" onClick={this.handleClick} style={style}>主按钮</Button>
          <Button type="button_l_fixed_blue150" onClick={this.handleClick} style={style}>次主按钮</Button>
          <Button
            type="button_l_fixed_ghost_blue450"
            onClick={this.handleClick}
            style={style}>普通按钮</Button>
          <Button type="button_l_exact_blue450" onClick={this.handleClick} style={style}>自适应主</Button>
          <Button type="button_l_exact_blue100" onClick={this.handleClick} style={style}>自适应弱</Button>
          <Button type="button_l_exact_link_blue" onClick={this.handleClick} style={style}>链接</Button>
          <Button type="button_l_exact_link_blue" onClick={this.handleClick} style={style}>blue文字链</Button>
          <Button type="button_l_exact_link_bgray" onClick={this.handleClick} style={style}>bgray文字链</Button>
          <Button type="button_l_exact_link_gray" onClick={this.handleClick} style={style}>gray文字链</Button>
        </p>
      </React.Fragment>)
    );
  }
}

class PXeCTsZnkzpPyZninEmfnQJFRTwAKHGh extends React.PureComponent {
  render() {
    const style = {
      marginRight: "16px",
      marginBottom: "16px"
    };

    return (
      (<React.Fragment>
        <p>
          <Button type="button_s_fixed_blue450" disabled style={style}>主按钮</Button>
          <Button type="button_s_fixed_blue150" disabled style={style}>次主按钮</Button>
          <Button type="button_s_fixed_ghost_blue450" disabled style={style}>普通按钮</Button>
          <Button type="button_s_exact_blue450" disabled style={style}>自适应主</Button>
          <Button type="button_s_exact_blue100" disabled style={style}>自适应弱</Button>
          <Button type="button_s_exact_link_blue" disabled style={style}>blue文字链</Button>
          <Button type="button_s_exact_link_bgray" disabled style={style}>bgray文字链</Button>
          <Button type="button_s_exact_link_gray" disabled style={style}>gray文字链</Button>
        </p>
        <p>
          <Button type="button_m_fixed_blue450" disabled style={style}>主按钮</Button>
          <Button type="button_m_fixed_blue150" disabled style={style}>次主按钮</Button>
          <Button type="button_m_fixed_ghost_blue450" disabled style={style}>普通按钮</Button>
          <Button type="button_m_exact_blue450" disabled style={style}>自适应主</Button>
          <Button type="button_m_exact_blue100" disabled style={style}>自适应弱</Button>
          <Button type="button_m_exact_link_blue" disabled style={style}>blue文字链</Button>
          <Button type="button_m_exact_link_bgray" disabled style={style}>bgray文字链</Button>
          <Button type="button_m_exact_link_gray" disabled style={style}>gray文字链</Button>
        </p>
        <p>
          <Button type="button_l_fixed_blue450" disabled style={style}>主按钮</Button>
          <Button type="button_l_fixed_blue150" disabled style={style}>次主按钮</Button>
          <Button type="button_l_fixed_ghost_blue450" disabled style={style}>普通按钮</Button>
          <Button type="button_l_exact_blue450" disabled style={style}>自适应主</Button>
          <Button type="button_l_exact_blue100" disabled style={style}>自适应弱</Button>
          <Button type="button_l_exact_link_blue" disabled style={style}>链接</Button>
          <Button type="button_l_exact_link_blue" disabled style={style}>blue文字链</Button>
          <Button type="button_l_exact_link_bgray" disabled style={style}>bgray文字链</Button>
          <Button type="button_l_exact_link_gray" disabled style={style}>gray文字链</Button>
        </p>
      </React.Fragment>)
    );
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
<h2>引用方式</h2>
<pre><code>import {"{"}Button{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>示例代码</h2>
<blockquote>
<p>正常状态和 hover 状态</p>
</blockquote>

  <div className="example">
    <div className="run"><PRdGjaPtCKPhahzRnnwampfcEmPCErzK /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class ButtonDemo extends React.PureComponent {"{"}{"\n"}  handleClick = () =&gt; {"{"}{"\n"}    alert('按钮被点击了'){"\n"}  {"}"}{"\n"}{"\n"}  render() {"{"}{"\n"}    const style={"{"}{"\n"}      marginRight: '16px',{"\n"}      marginBottom: '8px'{"\n"}    {"}"}{"\n"}{"\n"}    return ({"\n"}      &lt;React.Fragment&gt;{"\n"}        &lt;p&gt;{"\n"}          &lt;Button type=&quot;button_s_fixed_blue450&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_fixed_blue650&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_fixed_blue150&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;次主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_fixed_ghost_blue450&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;普通按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_exact_blue450&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;自适应主&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_exact_blue100&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;自适应弱&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_exact_link_blue&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;blue文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_exact_link_bgray&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;bgray文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_exact_link_gray&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;gray文字链&lt;/Button&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p&gt;{"\n"}          &lt;Button type=&quot;button_m_fixed_blue450&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_fixed_blue650&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_fixed_blue150&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;次主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_fixed_ghost_blue450&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;普通按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_exact_blue450&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;自适应主&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_exact_blue100&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;自适应弱&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_exact_link_blue&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;blue文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_exact_link_bgray&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;bgray文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_exact_link_gray&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;gray文字链&lt;/Button&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p&gt;{"\n"}          &lt;Button type=&quot;button_l_fixed_blue450&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_fixed_blue650&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_fixed_blue150&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;次主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_fixed_ghost_blue450&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;普通按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_blue450&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;自适应主&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_blue100&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;自适应弱&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_link_blue&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;链接&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_link_blue&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;blue文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_link_bgray&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;bgray文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_link_gray&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;gray文字链&lt;/Button&gt;{"\n"}        &lt;/p&gt;{"\n"}      &lt;/React.Fragment&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><blockquote>
<p>disbaled 状态</p>
</blockquote>

  <div className="example">
    <div className="run"><PXeCTsZnkzpPyZninEmfnQJFRTwAKHGh /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class ButtonDemo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    const style={"{"}{"\n"}      marginRight: '16px',{"\n"}      marginBottom: '16px'{"\n"}    {"}"}{"\n"}    return ({"\n"}      &lt;React.Fragment&gt;{"\n"}        &lt;p&gt;{"\n"}          &lt;Button type=&quot;button_s_fixed_blue450&quot; disabled style={"{"}style{"}"}&gt;主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_fixed_blue150&quot; disabled style={"{"}style{"}"}&gt;次主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_fixed_ghost_blue450&quot; disabled style={"{"}style{"}"}&gt;普通按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_exact_blue450&quot; disabled style={"{"}style{"}"}&gt;自适应主&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_exact_blue100&quot; disabled style={"{"}style{"}"}&gt;自适应弱&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_exact_link_blue&quot; disabled style={"{"}style{"}"}&gt;blue文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_exact_link_bgray&quot; disabled style={"{"}style{"}"}&gt;bgray文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_s_exact_link_gray&quot; disabled style={"{"}style{"}"}&gt;gray文字链&lt;/Button&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p&gt;{"\n"}          &lt;Button type=&quot;button_m_fixed_blue450&quot; disabled style={"{"}style{"}"}&gt;主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_fixed_blue150&quot; disabled style={"{"}style{"}"}&gt;次主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_fixed_ghost_blue450&quot; disabled style={"{"}style{"}"}&gt;普通按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_exact_blue450&quot; disabled style={"{"}style{"}"}&gt;自适应主&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_exact_blue100&quot; disabled style={"{"}style{"}"}&gt;自适应弱&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_exact_link_blue&quot; disabled style={"{"}style{"}"}&gt;blue文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_exact_link_bgray&quot; disabled style={"{"}style{"}"}&gt;bgray文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_m_exact_link_gray&quot; disabled style={"{"}style{"}"}&gt;gray文字链&lt;/Button&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p&gt;{"\n"}          &lt;Button type=&quot;button_l_fixed_blue450&quot; disabled style={"{"}style{"}"}&gt;主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_fixed_blue150&quot; disabled style={"{"}style{"}"}&gt;次主按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_fixed_ghost_blue450&quot; disabled style={"{"}style{"}"}&gt;普通按钮&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_blue450&quot; disabled style={"{"}style{"}"}&gt;自适应主&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_blue100&quot; disabled style={"{"}style{"}"}&gt;自适应弱&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_link_blue&quot; disabled style={"{"}style{"}"}&gt;链接&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_link_blue&quot; disabled style={"{"}style{"}"}&gt;blue文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_link_bgray&quot; disabled style={"{"}style{"}"}&gt;bgray文字链&lt;/Button&gt;{"\n"}          &lt;Button type=&quot;button_l_exact_link_gray&quot; disabled style={"{"}style{"}"}&gt;gray文字链&lt;/Button&gt;{"\n"}        &lt;/p&gt;{"\n"}      &lt;/React.Fragment&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><h2>属性</h2>
<table>
<thead>
<tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr>
</thead>
<tbody>
<tr><td>type</td><td>按钮的基本样式</td><td>string</td><td>button_m_fixed_blue450</td></tr>
<tr><td>round</td><td>按钮是否为圆角</td><td>boolean</td><td>flase</td></tr>
</tbody>
</table>
<h2>type 命名规则</h2>
<ul>
<li>s,m,l 表示尺寸</li>
<li>fixed：固定尺寸  block：通栏  exact：里面多宽我多宽=自适应 (padding固定，按钮宽度随着文字大小自适应)</li>
<li>ghost 表示没有背景  link: 没有背景，没有边框,色值代表边框和文字颜色</li>
<li>颜色名称：按钮主颜色</li>
</ul>
<p><a href="https://docs.taou.com/pages/viewpage.action?pageId=54071312">参考文档</a></p>

        </div>
      );
    };
  