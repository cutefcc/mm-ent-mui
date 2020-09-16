
    import React from 'react';
import * as styles from '../global.less';
import {Icon, Text, MUIButton} from 'mm-ent-ui';

    
    export const attributes = {};

    class WEdQcdHMZXJHYsJwNJYPKezkdJeQWGBA extends React.PureComponent {
  handleClick = () => {
    console.log("click");
  };

  render() {
    const style = {
      marginRight: "16px",
      marginBottom: "8px"
    };

    return (
      (<React.Fragment>
        <p>一级按钮（size：S（h: 24）、M(h: 32)、L(h: 40)）</p>
        <p>
          <MUIButton
            type="mbutton_s_fixed_blue450_l1"
            onClick={this.handleClick}
            style={style}>一级按钮</MUIButton>
          <MUIButton
            type="mbutton_m_fixed_blue450_l1"
            onClick={this.handleClick}
            style={style}>一级按钮</MUIButton>
          <MUIButton
            type="mbutton_l_fixed_blue450_l1"
            onClick={this.handleClick}
            style={style}>一级按钮</MUIButton>
          <MUIButton
            disabled
            type="mbutton_s_fixed_blue450_l1"
            onClick={this.handleClick}
            style={style}>一级按钮</MUIButton>
          <MUIButton
            disabled
            type="mbutton_m_fixed_blue450_l1"
            onClick={this.handleClick}
            style={style}>一级按钮</MUIButton>
          <MUIButton
            disabled
            type="mbutton_l_fixed_blue450_l1"
            onClick={this.handleClick}
            style={style}>一级按钮</MUIButton>
        </p>
        <p>一级按钮(带图标)（size：S（h: 24）、M(h: 32)、L(h: 40)）</p>
        <p>
          <MUIButton
            type="mbutton_s_exact_blue450_l1"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />一级按钮</span>
          </MUIButton>
          <MUIButton
            type="mbutton_m_exact_blue450_l1"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />一级按钮</span>
          </MUIButton>
          <MUIButton
            type="mbutton_l_exact_blue450_l1"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />一级按钮</span>
          </MUIButton>
          <MUIButton
            disabled
            type="mbutton_s_exact_blue450_l1"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />一级按钮</span>
          </MUIButton>
          <MUIButton
            disabled
            type="mbutton_m_exact_blue450_l1"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />一级按钮</span>
          </MUIButton>
          <MUIButton
            disabled
            type="mbutton_l_exact_blue450_l1"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />一级按钮</span>
          </MUIButton>
        </p>
        <p>二级按钮（size：S（h: 24）、M(h: 32)、L(h: 40)）</p>
        <p>
          <MUIButton
            type="mbutton_s_fixed_blue450_l2"
            onClick={this.handleClick}
            style={style}>二级按钮</MUIButton>
          <MUIButton
            type="mbutton_m_fixed_blue450_l2"
            onClick={this.handleClick}
            style={style}>二级按钮</MUIButton>
          <MUIButton
            type="mbutton_l_fixed_blue450_l2"
            onClick={this.handleClick}
            style={style}>二级按钮</MUIButton>
          <MUIButton
            disabled
            type="mbutton_s_fixed_blue450_l2"
            onClick={this.handleClick}
            style={style}>二级按钮</MUIButton>
          <MUIButton
            disabled
            type="mbutton_m_fixed_blue450_l2"
            onClick={this.handleClick}
            style={style}>二级按钮</MUIButton>
          <MUIButton
            disabled
            type="mbutton_l_fixed_blue450_l2"
            onClick={this.handleClick}
            style={style}>二级按钮</MUIButton>
        </p>
        <p>二级按钮(带图标)（size：S（h: 24）、M(h: 32)、L(h: 40)）</p>
        <p>
          <MUIButton
            type="mbutton_s_exact_blue450_l2"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />二级按钮</span>
          </MUIButton>
          <MUIButton
            type="mbutton_m_exact_blue450_l2"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />二级按钮</span>
          </MUIButton>
          <MUIButton
            type="mbutton_l_exact_blue450_l2"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />二级按钮</span>
          </MUIButton>
          <MUIButton
            disabled
            type="mbutton_s_exact_blue450_l2"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />二级按钮</span>
          </MUIButton>
          <MUIButton
            disabled
            type="mbutton_m_exact_blue450_l2"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />二级按钮</span>
          </MUIButton>
          <MUIButton
            disabled
            type="mbutton_l_exact_blue450_l2"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />二级按钮</span>
          </MUIButton>
        </p>
        <p>三级按钮（size：S（h: 24）、M(h: 32)、L(h: 40)）</p>
        <p>
          <MUIButton type="mbutton_s_fixed_l3" onClick={this.handleClick} style={style}>三级按钮</MUIButton>
          <MUIButton type="mbutton_m_fixed_l3" onClick={this.handleClick} style={style}>三级按钮</MUIButton>
          <MUIButton type="mbutton_l_fixed_l3" onClick={this.handleClick} style={style}>三级按钮</MUIButton>
          <MUIButton
            disabled
            type="mbutton_s_fixed_l3"
            onClick={this.handleClick}
            style={style}>三级按钮</MUIButton>
          <MUIButton
            disabled
            type="mbutton_m_fixed_l3"
            onClick={this.handleClick}
            style={style}>三级按钮</MUIButton>
          <MUIButton
            disabled
            type="mbutton_l_fixed_l3"
            onClick={this.handleClick}
            style={style}>三级按钮</MUIButton>
        </p>
        <p>三级按钮(带图标)（size：S（h: 24）、M(h: 32)、L(h: 40)）</p>
        <p>
          <MUIButton type="mbutton_s_exact_l3" onClick={this.handleClick} style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />三级按钮</span>
          </MUIButton>
          <MUIButton type="mbutton_m_exact_l3" onClick={this.handleClick} style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />三级按钮</span>
          </MUIButton>
          <MUIButton type="mbutton_l_exact_l3" onClick={this.handleClick} style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />三级按钮</span>
          </MUIButton>
          <MUIButton
            disabled
            type="mbutton_s_exact_l3"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />三级按钮</span>
          </MUIButton>
          <MUIButton
            disabled
            type="mbutton_m_exact_l3"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />三级按钮</span>
          </MUIButton>
          <MUIButton
            disabled
            type="mbutton_l_exact_l3"
            onClick={this.handleClick}
            style={style}>
            <span><Icon
                type="download"
                style={{
                  marginRight: "6px"
                }} />三级按钮</span>
          </MUIButton>
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
<pre><code>import {"{"}MUIButton{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>示例代码</h2>

  <div className="example">
    <div className="run"><WEdQcdHMZXJHYsJwNJYPKezkdJeQWGBA /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class ButtonDemo extends React.PureComponent {"{"}{"\n"}  handleClick = () =&gt; {"{"}{"\n"}    console.log('click'){"\n"}  {"}"}{"\n"}{"\n"}  render() {"{"}{"\n"}    const style={"{"}{"\n"}      marginRight: '16px',{"\n"}      marginBottom: '8px'{"\n"}    {"}"}{"\n"}{"\n"}    return ({"\n"}      &lt;React.Fragment&gt;{"\n"}        &lt;p&gt;一级按钮（size：S（h: 24）、M(h: 32)、L(h: 40)）&lt;/p&gt;{"\n"}        &lt;p&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_s_fixed_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;一级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_m_fixed_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;一级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_l_fixed_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;一级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_s_fixed_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;一级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_m_fixed_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;一级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_l_fixed_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;一级按钮&lt;/MUIButton&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p&gt;一级按钮(带图标)（size：S（h: 24）、M(h: 32)、L(h: 40)）&lt;/p&gt;{"\n"}        &lt;p&gt;{"\n"}            &lt;MUIButton type=&quot;mbutton_s_exact_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}                &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;一级按钮&lt;/span&gt;{"\n"}            &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_m_exact_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;一级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_l_exact_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;一级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_s_exact_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;一级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_m_exact_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;一级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_l_exact_blue450_l1&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;一级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p&gt;二级按钮（size：S（h: 24）、M(h: 32)、L(h: 40)）&lt;/p&gt;{"\n"}        &lt;p&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_s_fixed_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;二级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_m_fixed_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;二级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_l_fixed_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;二级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_s_fixed_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;二级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_m_fixed_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;二级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_l_fixed_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;二级按钮&lt;/MUIButton&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p&gt;二级按钮(带图标)（size：S（h: 24）、M(h: 32)、L(h: 40)）&lt;/p&gt;{"\n"}        &lt;p&gt;{"\n"}            &lt;MUIButton type=&quot;mbutton_s_exact_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}                &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;二级按钮&lt;/span&gt;{"\n"}            &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_m_exact_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;二级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_l_exact_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;二级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_s_exact_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;二级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_m_exact_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;二级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_l_exact_blue450_l2&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;二级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p&gt;三级按钮（size：S（h: 24）、M(h: 32)、L(h: 40)）&lt;/p&gt;{"\n"}        &lt;p&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_s_fixed_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;三级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_m_fixed_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;三级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_l_fixed_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;三级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_s_fixed_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;三级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_m_fixed_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;三级按钮&lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_l_fixed_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;三级按钮&lt;/MUIButton&gt;{"\n"}        &lt;/p&gt;{"\n"}        &lt;p&gt;三级按钮(带图标)（size：S（h: 24）、M(h: 32)、L(h: 40)）&lt;/p&gt;{"\n"}        &lt;p&gt;{"\n"}            &lt;MUIButton type=&quot;mbutton_s_exact_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}                &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;三级按钮&lt;/span&gt;{"\n"}            &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_m_exact_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;三级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton type=&quot;mbutton_l_exact_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;三级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_s_exact_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;三级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_m_exact_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;三级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}          &lt;MUIButton disabled type=&quot;mbutton_l_exact_l3&quot; onClick={"{"}this.handleClick{"}"} style={"{"}style{"}"}&gt;{"\n"}            &lt;span&gt;&lt;Icon type=&quot;download&quot; style={"{"}{"{"}marginRight: '6px'{"}"}{"}"}/&gt;三级按钮&lt;/span&gt;{"\n"}          &lt;/MUIButton&gt;{"\n"}        &lt;/p&gt;{"\n"}      &lt;/React.Fragment&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div>
        </div>
      );
    };
  