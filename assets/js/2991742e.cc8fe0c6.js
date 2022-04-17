"use strict";(self.webpackChunkmy_websites=self.webpackChunkmy_websites||[]).push([[622],{1204:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return r},metadata:function(){return m},toc:function(){return s}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={title:"\u7531\u4e00\u6b21\u6392\u9519\u60f3\u5230\u7684",authors:["kyle"],tags:["front-end"]},p=void 0,m={permalink:"/blog/2022/04/16/difference-between-onclick-and-@click",source:"@site/blog/2022-04-16-difference-between-onclick-and-@click.mdx",title:"\u7531\u4e00\u6b21\u6392\u9519\u60f3\u5230\u7684",description:"\u4e4b\u524d\u505a\u7684\u4e00\u4e2a\u5e26\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\u7684\u6a21\u5757\uff0c\u540e\u671f\u7531\u5176\u4ed6\u540c\u4e8b\u7ef4\u62a4\uff0c\u4e00\u6b21\u4fee\u6539\u540e\u51fa\u73b0\u4e00\u4e2a bug\uff1a\u8be5\u529f\u80fd\u6a21\u5757\u67d0\u9879\u53ef\u4ee5\u4e0a\u4f20\u4e24\u4efd\u6587\u4ef6\uff0c\u5047\u8bbe\u8fd9\u4e24\u4e2a\u6587\u4ef6\u4e3a A\u3001B\uff0c\u4e0a\u4f20 A \u6587\u4ef6\u9700\u8981\u9a8c\u8bc1\uff0cB \u6587\u4ef6\u5e76\u4e0d\u9700\u8981\u9a8c\u8bc1\uff0c\u7ed3\u679c\u53d1\u73b0 A \u6587\u4ef6\u4e0a\u4f20\u540e\u6587\u4ef6\u53ef\u4ee5\u6b63\u5e38\u663e\u793a\u5728\u5217\u8868\u91cc\uff0c\u7ec4\u4ef6\u7684state\u91cc\u5374\u6ca1\u6709\u8be5\u6587\u4ef6\u7684 url\uff0c\u800c B \u6587\u4ef6\u4e0a\u4f20\u540e\u7684url\u4e0d\u4f1a\u4ecestate\u91cc\u83ab\u540d\u6d88\u5931\u3002",date:"2022-04-16T00:00:00.000Z",formattedDate:"April 16, 2022",tags:[{label:"front-end",permalink:"/blog/tags/front-end"}],readingTime:4.335,truncated:!0,authors:[{name:"Kyle Von",url:"https://github.com/jhxxs",imageURL:"https://avatars.githubusercontent.com/u/7448223?s=96&v=4",key:"kyle"}],frontMatter:{title:"\u7531\u4e00\u6b21\u6392\u9519\u60f3\u5230\u7684",authors:["kyle"],tags:["front-end"]},prevItem:{title:"\u8de8repo\u90e8\u7f72\u535a\u5ba2\u5230Github Pages",permalink:"/blog/2022/04/17/deploy-to-github-pages-with-cross-repo-publish"}},c={authorsImageUrls:[void 0]},s=[{value:"\u6392\u67e5\u8fc7\u7a0b\uff1a",id:"\u6392\u67e5\u8fc7\u7a0b",level:3},{value:"example-1",id:"example-1",level:6},{value:"example-2",id:"example-2",level:6}],d={toc:s};function k(e){var t=e.components,n=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u524d\u671f\u63d0\u8981")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e4b\u524d\u505a\u7684\u4e00\u4e2a\u5e26\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\u7684\u6a21\u5757\uff0c\u540e\u671f\u7531\u5176\u4ed6\u540c\u4e8b\u7ef4\u62a4\uff0c\u4e00\u6b21\u4fee\u6539\u540e\u51fa\u73b0\u4e00\u4e2a bug\uff1a\u8be5\u529f\u80fd\u6a21\u5757\u67d0\u9879\u53ef\u4ee5\u4e0a\u4f20\u4e24\u4efd\u6587\u4ef6\uff0c\u5047\u8bbe\u8fd9\u4e24\u4e2a\u6587\u4ef6\u4e3a A\u3001B\uff0c\u4e0a\u4f20 A \u6587\u4ef6\u9700\u8981\u9a8c\u8bc1\uff0cB \u6587\u4ef6\u5e76\u4e0d\u9700\u8981\u9a8c\u8bc1\uff0c\u7ed3\u679c\u53d1\u73b0 A \u6587\u4ef6\u4e0a\u4f20\u540e\u6587\u4ef6\u53ef\u4ee5\u6b63\u5e38\u663e\u793a\u5728\u5217\u8868\u91cc\uff0c\u7ec4\u4ef6\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"\u91cc\u5374\u6ca1\u6709\u8be5\u6587\u4ef6\u7684 url\uff0c\u800c B \u6587\u4ef6\u4e0a\u4f20\u540e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"\u4e0d\u4f1a\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"\u91cc\u83ab\u540d\u6d88\u5931\u3002"))),(0,i.kt)("h3",{id:"\u6392\u67e5\u8fc7\u7a0b"},"\u6392\u67e5\u8fc7\u7a0b\uff1a"),(0,i.kt)("p",null,"\u8868\u5355\u7ec4\u4ef6\u4f7f\u7528\u7684\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"element-ui"),"\u7684",(0,i.kt)("a",{parentName:"p",href:"https://element.eleme.cn/#/zh-CN/component/upload,",title:"Upload \u4e0a\u4f20"},(0,i.kt)("inlineCode",{parentName:"a"},"Upload")),"\u7ec4\u4ef6\uff0c\n\u6211\u4eec\u8bd5\u8fc7\u4fee\u6539\u5404\u4e2a\u6587\u4ef6\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"state"),"\u4e2d\u5bf9\u5e94\u7684\u5b57\u6bb5\uff0c\u4ee5\u53ca\u5f00\u542f",(0,i.kt)("inlineCode",{parentName:"p"},"debug"),"\uff0c\u90fd\u65e0\u679c\uff0c\u6700\u540e\u540c\u4e8b\u53d1\u73b0\u662f\u4ee3\u7801\u4e2d\u67d0\u884c\u5199\u6cd5\u4e0d\u540c\u5bfc\u81f4\u7684\u95ee\u9898\uff0c\u6539\u6b63\u540e\u95ee\u9898\u89e3\u51b3\uff0c\u4ee3\u7801\u5927\u81f4\u5982\u4e0b\uff1a"),(0,i.kt)("h6",{id:"example-1"},"example-1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\x3c!-- vue-template\uff0chandleRemoveFile\u7684\u4efb\u52a1\u662f\u6e05\u7a7a\u67d0\u9879\u6587\u4ef6url --\x3e\n\x3c!-- A  --\x3e\n<el-upload :on-remove=\"handleRemoveFile('A')\" />\n\x3c!-- B --\x3e\n<el-upload :on-remove=\"() => handleRemoveFile('B')\" />\n")),(0,i.kt)("p",null,"\u770b\u51fa\u4e0d\u540c\u4e86\u5417\uff0c\u5176\u4e2d A \u7684",(0,i.kt)("inlineCode",{parentName:"p"},"on-remove"),"\u5c5e\u6027\u4f20\u9012\u7684\u662f js \u8bed\u53e5\uff0c\u800c B \u5219\u4f20\u9012\u4e86\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"\u7bad\u5934\u51fd\u6570"),"\n\u3002"),(0,i.kt)("p",null,"\u540c\u4e8b\u53d1\u51fa\u4e86\u7075\u9b42\u62f7\u95ee\uff1a\u4e3a\u4ec0\u4e48\u6211\u8fd9\u4e48\u5199\uff0c\u5b83\u4eec\u7684\u6548\u679c\u5c45\u7136\u4e00\u6837\uff1f"),(0,i.kt)("h6",{id:"example-2"},"example-2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- vue-template --\x3e\n<button @click="handleClick(\'A\')">A</button>\n\n<button @click="() => handleClick(\'B\')">B</button>\n\n<button @click="handleClick">C</button>\n')),(0,i.kt)("p",null,"\u8bf4\u5b9e\u8bdd\uff0c\u4e00\u5f00\u59cb\u6211\u4e5f\u61f5\u4e86\uff0c\u8fd9\u4e09\u79cd\u5199\u6cd5\u4e0d\u4e00\u6837\uff0c\u4e3a\u4ec0\u4e48\u6548\u679c\u5374\u662f\u4e00\u6837\u7684\uff0c\u90fd\u662f\u5728\u70b9\u51fb\u6309\u94ae\u540e\u89e6\u53d1",(0,i.kt)("inlineCode",{parentName:"p"},"handleClick"),"\u4e8b\u4ef6\uff0c\u9664\u4e86\u4f20\u9012\u7ed9\u89e6\u53d1\u51fd\u6570\u7684\u53c2\u6570\u4e0d\u4e00\u6837\u3002\u8fd9\u91cc\u6211\u4eec\u6253\u5f00 vue \u5b98\u65b9\u6587\u6863\uff0c\u770b\u770b\u5bf9\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://cn.vuejs.org/v2/guide/events.html#%E7%9B%91%E5%90%AC%E4%BA%8B%E4%BB%B6"},"\u4e8b\u4ef6\u5904\u7406"),"\u662f\u600e\u4e48\u8bf4\u7684\uff1a"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"v-on:click"),"\u4e00\u5f8b\u7b80\u5199\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"@click")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u7528 v-on \u6307\u4ee4\u76d1\u542c DOM \u4e8b\u4ef6\uff0c\u5e76\u5728\u89e6\u53d1\u65f6\u8fd0\u884c\u4e00\u4e9b JavaScript \u4ee3\u7801\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button @click="counter += 1">Add 1</button>\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7136\u800c\u8bb8\u591a\u4e8b\u4ef6\u5904\u7406\u903b\u8f91\u4f1a\u66f4\u4e3a\u590d\u6742\uff0c\u6240\u4ee5\u76f4\u63a5\u628a JavaScript \u4ee3\u7801\u5199\u5728 v-on \u6307\u4ee4\u4e2d\u662f\u4e0d\u53ef\u884c\u7684\u3002\u56e0\u6b64 v-on \u8fd8\u53ef\u4ee5\u63a5\u6536\u4e00\u4e2a\u9700\u8981\u8c03\u7528\u7684\u65b9\u6cd5\u540d\u79f0\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button @click="greet">Greet</button>\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9664\u4e86\u76f4\u63a5\u7ed1\u5b9a\u5230\u4e00\u4e2a\u65b9\u6cd5\uff0c\u4e5f\u53ef\u4ee5\u5728\u5185\u8054 JavaScript \u8bed\u53e5\u4e2d\u8c03\u7528\u65b9\u6cd5\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<button @click=\"say('hi')\">Say hi</button>\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7b80\u5355\u6765\u8bf4\uff0cvue \u6a21\u677f\u5f15\u64ce\u9488\u5bf9\u4e8b\u4ef6\u7ed1\u5b9a\u505a\u4e86\u5904\u7406\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u4e00\u4e2a\u51fd\u6570\u540d\u3001\u4e00\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/function,",title:"\ud83d\ude32\u4ece ES2015\u5f00\u59cb\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u7bad\u5934\u51fd\u6570 \u3002"},"\u51fd\u6570\u8868\u8fbe\u5f0f"),"\uff0c\u6216\u8005\u51fd\u6570\u8c03\u7528\u5f0f\u3002"))),(0,i.kt)("p",null,"\u800c\u5728",(0,i.kt)("a",{parentName:"p",href:"#example-2"},"example-2"),"\u4e2d\uff0c\u6211\u4eec\u7684\u5199\u6cd5\u5206\u522b\u662f js \u8bed\u53e5\u3001\u51fd\u6570\u8868\u8fbe\u5f0f\u548c\u51fd\u6570\u540d\uff0c\u6240\u4ee5\u6548\u679c\u662f\u4e00\u6837\u7684\uff0c\u90fd\u53ea\u4f1a\u5728\u70b9\u51fb\u65f6\u89e6\u53d1\u3002"),(0,i.kt)("p",null,"\u8fd9\u65f6\u6211\u7a81\u7136\u60f3\u5230\u90a3\u5728\u7eaf html \u4e2d\uff0c\u662f\u4e0d\u662f\u4e5f\u53ef\u4ee5\u8fd9\u6837\uff1f\u4e8e\u662f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button onclick="handleClick">click me</button>\n\n<script>\n  function handleClick() {\n    alert("hello");\n  }\n<\/script>\n')),(0,i.kt)("p",null,"\u5f88\u4e0d\u5e78\uff0c\u8fd9\u6837\u4e0d\u884c\uff0c\u4f60\u5fc5\u987b\u5199\u6210"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<button onclick="handleClick()">click me</button>\n')),(0,i.kt)("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"html onclick",src:"https://codepen.io/iamjhxxs/embed/vYpQdMe?default-tab=result&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",(0,i.kt)("a",{href:"https://codepen.io/iamjhxxs/pen/vYpQdMe"},"html onclick"),"by KyleVon (",(0,i.kt)("a",{href:"https://codepen.io/iamjhxxs"},"@iamjhxxs"),") on",(0,i.kt)("a",{href:"https://codepen.io"},"CodePen"),"."),(0,i.kt)("p",null,"\u56e0\u4e3a html ",(0,i.kt)("a",{parentName:"p",href:"https://zh.javascript.info/introduction-browser-events#html-te-xing,",title:"HTML \u7279\u6027"},"\u5185\u8054\u4e8b\u4ef6"),"\u53ea\u63a5\u53d7 js \u8bed\u53e5\uff0c\u53ea\u6709\u5728 js \u91cc",(0,i.kt)("a",{parentName:"p",href:"https://zh.javascript.info/introduction-browser-events#dom-shu-xing,",title:"DOM \u5c5e\u6027"},"\u7ed1\u5b9a\u4e8b\u4ef6"),"\u65f6\u624d\u53ef\u4ee5\u4f20\u51fd\u6570\u540d\u6216\u8005\u51fd\u6570\u8868\u8fbe\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const click = () => alert("hello");\n// ok\ndocument.body.onclick = click;\n// also ok\ndocument.body.onclick = () => alert("hello");\n// or\ndocument.body.addEventListener("click", click);\n// or this\ndocument.body.addEventListener("click", () => alert("hello"));\n')),(0,i.kt)("p",null,(0,i.kt)("del",{parentName:"p"},"\u8bba\u4e8b\u4ef6\u7ed1\u5b9a\u7684\u56db\u79cd\u5199\u6cd5"),"\uff0c\u56de\u5230",(0,i.kt)("a",{parentName:"p",href:"#example-1"},"example-1"),"\uff0c\u8fd9\u91cc\u662f\u5728\u7ed1\u5b9a",(0,i.kt)("inlineCode",{parentName:"p"},"props"),"\uff0cA \u7684\u5199\u6cd5\u4f1a\u5728\u5c5e\u6027\u7ed1\u5b9a\u65f6\u5c31\u8c03\u7528\u5220\u9664\u51fd\u6570\uff0c\u4f20\u9012\u8fc7\u53bb\u7684\u5176\u5b9e\u662f\u51fd\u6570\u8fd4\u56de\u503c\u3002"),(0,i.kt)("p",null,"\u5207\u8bb0\uff0cvue \u91cc\u4e8b\u4ef6\u7ed1\u5b9a\u548c\u5c5e\u6027\u4f20\u9012\u7684 syntax \u53ef\u4e0d\u8981\u641e\u6df7\u6dc6\u4e86\u3002"))}k.isMDXComponent=!0}}]);