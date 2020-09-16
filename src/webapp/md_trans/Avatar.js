
    import React from 'react';
import * as styles from '../global.less';
import {Avatar} from 'mm-ent-ui';
import {Badge} from 'antd';

    
    export const attributes = {};

    class HGkZGPZBiaAZDmezCMxftNeRripDBSwF extends React.PureComponent {
  render() {
    const style = {
      marginRight: "16px"
    };

    return (
      (<div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
        <div style={style}><Avatar
            shape="circle"
            size="56px"
            src="https://i9.taou.com/maimai/p/21954/4400_82_7bzTQITze0xjJC-a160" /></div>
        <div style={style}><Avatar shape="circle" size="56px" name="王艳琴" /></div>
        <div style={style}><Avatar shape="circle" size="56px" /></div>
        <div style={style}><Avatar
            shape="square"
            size="40px"
            src="https://i9.taou.com/maimai/p/21954/4400_82_7bzTQITze0xjJC-a160" /></div>
        <div style={style}><Avatar shape="square" size="40px" name="王艳琴" /></div>
        <div style={style}><Avatar shape="square" size="40px" /></div>
      </div>)
    );
  }
}

class NpnfNkDcJPSnBfCDTNKPrZcKeQCrdMDk extends React.PureComponent {
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
        <Badge count={23} overflowCount={99} style={style}>
          <Avatar shape="circle" size="56px" name="王艳琴" />
        </Badge>
        <Badge count={233} overflowCount={99} style={style}>
          <Avatar shape="circle" size="56px" name="王艳琴" />
        </Badge>
      </div>)
    );
  }
}

class CYJpJJHEFCzhndmrtekXTBZTkPEPaSNb extends React.PureComponent {
  render() {
    const style = {
      marginRight: "16px"
    };

    return (
      (<div style={style}>
        <Avatar shape="circle" size="72px" name="王艳琴" showMemBadge memId={6} />
      </div>)
    );
  }
}
    export default function() {
      return (
        <div className={styles.markdownCon}>
          <h2>何时使用</h2>
<p>展示头像，或者公司logo的时候</p>
<h2>引用方式</h2>
<pre><code>import {"{"}Avatar{"}"} from 'mm-ent-ui'{"\n"}</code></pre><h2>代码演示</h2>
<blockquote>
<p>组件名称： 头像<em>形状</em>大小  例如 头像_circle_56</p>
</blockquote>

  <div className="example">
    <div className="run"><HGkZGPZBiaAZDmezCMxftNeRripDBSwF /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class AvatarDemo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    const style={"{"}{"\n"}      marginRight: '16px',{"\n"}    {"}"}{"\n"}    return ({"\n"}      &lt;div style={"{"}{"{"}display: 'flex', flexWrap: 'wrap', alignItems: 'center'{"}"}{"}"}&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;&lt;Avatar shape=&quot;circle&quot; size=&quot;56px&quot; src=&quot;https://i9.taou.com/maimai/p/21954/4400_82_7bzTQITze0xjJC-a160&quot;/&gt;&lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;&lt;Avatar shape=&quot;circle&quot; size=&quot;56px&quot; name=&quot;王艳琴&quot; /&gt;&lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;&lt;Avatar shape=&quot;circle&quot; size=&quot;56px&quot; /&gt;&lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;&lt;Avatar shape=&quot;square&quot; size=&quot;40px&quot; src=&quot;https://i9.taou.com/maimai/p/21954/4400_82_7bzTQITze0xjJC-a160&quot;/&gt;&lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;&lt;Avatar shape=&quot;square&quot; size=&quot;40px&quot; name=&quot;王艳琴&quot; /&gt;&lt;/div&gt;{"\n"}        &lt;div style={"{"}style{"}"}&gt;&lt;Avatar shape=&quot;square&quot; size=&quot;40px&quot; /&gt;&lt;/div&gt;{"\n"}      &lt;/div&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}{"\n"}
      </code></pre>
    </div>
  </div><blockquote>
<p>带未读消息的头像</p>
</blockquote>

  <div className="example">
    <div className="run"><NpnfNkDcJPSnBfCDTNKPrZcKeQCrdMDk /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        class AvatarDemo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    const style={"{"}{"\n"}      marginRight: '16px',{"\n"}    {"}"}{"\n"}    return ({"\n"}      &lt;div style={"{"}{"{"}display: 'flex', flexWrap: 'wrap'{"}"}{"}"}&gt;{"\n"}        &lt;Badge count={"{"}23{"}"} overflowCount={"{"}99{"}"} style={"{"}style{"}"}&gt;{"\n"}          &lt;Avatar shape=&quot;circle&quot; size=&quot;56px&quot; name=&quot;王艳琴&quot; /&gt;{"\n"}        &lt;/Badge&gt;{"\n"}{"\n"}        &lt;Badge count={"{"}233{"}"} overflowCount={"{"}99{"}"} style={"{"}style{"}"}&gt;{"\n"}          &lt;Avatar shape=&quot;circle&quot; size=&quot;56px&quot; name=&quot;王艳琴&quot; /&gt;{"\n"}        &lt;/Badge&gt;{"\n"}      &lt;/div&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}{"\n"}
      </code></pre>
    </div>
  </div><blockquote>
<p>带会员图标的头像</p>
</blockquote>

  <div className="example">
    <div className="run"><CYJpJJHEFCzhndmrtekXTBZTkPEPaSNb /></div>
    <div style={{display: 'flex', alignItems: 'center'}} className="seperator">
      <span style={{width: '20px', borderBottom: '1px solid #ddd', display: 'inline-block', marginRight: '8px'}}/>
      <span style={{color: '#333'}}>实例与代码分割线</span>
      <span style={{flex: 1, borderBottom: '1px dashed #ddd', display: 'inline-block' , marginLeft: '8px'}}/>
    </div>
    <div className="source">
      <pre className="language-html"><code className="language-html">
        {"\n"}class AvatarDemo extends React.PureComponent {"{"}{"\n"}  render() {"{"}{"\n"}    const style={"{"}{"\n"}      marginRight: '16px',{"\n"}    {"}"}{"\n"}    return ({"\n"}      &lt;div style={"{"}style{"}"}&gt;{"\n"}        &lt;Avatar shape=&quot;circle&quot; size=&quot;72px&quot; name=&quot;王艳琴&quot; showMemBadge memId={"{"}6{"}"} /&gt;{"\n"}      &lt;/div&gt;{"\n"}    ){"\n"}  {"}"}{"\n"}{"}"}{"\n"}
      </code></pre>
    </div>
  </div><h2>展示规则</h2>
<p>如果没有 arc 字段，则取 name 的最后一个字段，如果没有 name 字段，则默认为 U</p>
<h2>属性</h2>
<table>
<thead>
<tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr>
</thead>
<tbody>
<tr><td>src</td><td>头像链接</td><td>string</td><td>空字符串</td></tr>
<tr><td>name</td><td>当没有头像的时候，取名字最后一位展示</td><td>string</td><td>空字符串</td></tr>
<tr><td>shape</td><td>头像形状</td><td>circle 或 square</td><td>circle</td></tr>
<tr><td>size</td><td>头像的大小</td><td>string 如 40px</td><td>40px</td></tr>
<tr><td>showMemBadge</td><td>是否展示会员图标</td><td>boolean</td><td>false</td></tr>
<tr><td>memId</td><td>会员类型id，在 showMemBadge 为 true 时才会生效</td><td>number</td><td>0</td></tr>
</tbody>
</table>

        </div>
      );
    };
  