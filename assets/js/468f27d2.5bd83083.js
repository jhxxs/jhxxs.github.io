"use strict";(self.webpackChunkmy_websites=self.webpackChunkmy_websites||[]).push([[701],{3543:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=n(7462),s=(n(7294),n(3905));const r={title:"\u88c1\u526a\u89c6\u9891\u5e76\u66f4\u65b0\u5b57\u5e55\u65f6\u95f4",authors:["kyle"],tags:["windows"],toc_max_heading_level:5},i=void 0,l={permalink:"/2023/03/14/cut-video-and-update-srt-file",source:"@site/blog/2023-03-14-cut-video-and-update-srt-file.mdx",title:"\u88c1\u526a\u89c6\u9891\u5e76\u66f4\u65b0\u5b57\u5e55\u65f6\u95f4",description:"\u7528ffmpeg\u6765\u88c1\u526a\u89c6\u9891\uff0c\u7528nodejs\u6765\u5904\u7406\u5b57\u5e55\u6587\u4ef6",date:"2023-03-14T00:00:00.000Z",formattedDate:"March 14, 2023",tags:[{label:"windows",permalink:"/tags/windows"}],readingTime:4.545,hasTruncateMarker:!0,authors:[{name:"Kyle Von",url:"https://github.com/jhxxs",imageURL:"https://avatars.githubusercontent.com/u/7448223?s=96&v=4",key:"kyle"}],frontMatter:{title:"\u88c1\u526a\u89c6\u9891\u5e76\u66f4\u65b0\u5b57\u5e55\u65f6\u95f4",authors:["kyle"],tags:["windows"],toc_max_heading_level:5},nextItem:{title:"\u91cd\u88c5win11\u548c\u914d\u7f6e\u5f00\u53d1\u73af\u5883",permalink:"/2022/07/18/reinstall-win11-and-setup-env"}},m={authorsImageUrls:[void 0]},o=[{value:"1. \u88c1\u526a\u6700\u540e\u4e00\u8282\u5230\u89c6\u9891\u7247\u5c3e",id:"1-\u88c1\u526a\u6700\u540e\u4e00\u8282\u5230\u89c6\u9891\u7247\u5c3e",level:3},{value:"2. \u622a\u53d6\u5b57\u5e55\u6587\u4ef6\u5e76\u66f4\u65b0\u6bcf\u6761\u5b57\u5e55\u7684\u5f00\u59cb\u7ed3\u675f\u65f6\u95f4",id:"2-\u622a\u53d6\u5b57\u5e55\u6587\u4ef6\u5e76\u66f4\u65b0\u6bcf\u6761\u5b57\u5e55\u7684\u5f00\u59cb\u7ed3\u675f\u65f6\u95f4",level:3},{value:"a. \u5728\u5f53\u524d\u6587\u4ef6\u4e0b\u521b\u5efa js \u9879\u76ee",id:"a-\u5728\u5f53\u524d\u6587\u4ef6\u4e0b\u521b\u5efa-js-\u9879\u76ee",level:4},{value:"b. \u622a\u53d6\u5b57\u5e55\u5e76\u66f4\u65b0\u65f6\u95f4",id:"b-\u622a\u53d6\u5b57\u5e55\u5e76\u66f4\u65b0\u65f6\u95f4",level:4},{value:"c. \u8fd0\u884c\u547d\u4ee4<code>npm start</code>",id:"c-\u8fd0\u884c\u547d\u4ee4npm-start",level:4}],p={toc:o},d="wrapper";function c(t){let{components:e,...n}=t;return(0,s.kt)(d,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"ffmpeg"),"\u6765\u88c1\u526a\u89c6\u9891\uff0c\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"nodejs"),"\u6765\u5904\u7406\u5b57\u5e55\u6587\u4ef6"),(0,s.kt)("p",null,"\u51e0\u5e74\u524d\u6211\u5728 B \u7ad9\u4e0a\u4f20\u4e86\u7eaa\u5f55\u7247",(0,s.kt)("a",{parentName:"p",href:"https://movie.douban.com/subject/26323045/"},"\u300a\u53f2\u8482\u592b\xb7\u4e54\u5e03\u65af\uff1a\u673a\u5668\u4eba\u751f Steve Jobs: Man in the Machine (2015)\u300b"),"\u7684\u6700\u540e\u4e00\u4e2a\u7247\u6bb5\u3002"),(0,s.kt)("p",null,"\u5f53\u65f6\u5e76\u6ca1\u6709\u9ad8\u6e05\u8d44\u6e90\uff0c\u800c\u4e14\u4e5f\u4e0d\u61c2\u89c6\u9891\u526a\u5207\uff0c\u76f4\u63a5\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"win + g"),'\u5f55\u5c4f\u540e\u4e0a\u4f20\u3002\u6240\u4ee5\u89c6\u9891\u6709\u597d\u51e0\u5904\u56e0\u52a0\u8f7d\u9020\u6210\u7684\u505c\u987f\uff0c\u6700\u540e\u8fd8\u6709\u624b\u52a8\u70b9\u51fb\u9f20\u6807\u6765\u6682\u505c\u89c6\u9891\u7684\u753b\u9762\u3002\u53e6\u5916\u539f\u89c6\u9891\u7528\u7684\u662f\u6781\u5176\u8e69\u811a\u7684\u673a\u7ffb\uff0c\u4e54\u5e03\u65af\u7ffb\u53d8\u6210\u4e86"\u8d3e\u5e03\u65af"\u3002'),(0,s.kt)("p",null,"\u5f53\u6211\u77e5\u9053",(0,s.kt)("a",{parentName:"p",href:"https://ffmpeg.org/"},(0,s.kt)("inlineCode",{parentName:"a"},"ffmpeg")),"\u540e\uff0c\u5c31\u51b3\u5b9a\u8981\u7528\u9ad8\u6e05\u6587\u4ef6\u66ff\u6362\u6389\u539f\u89c6\u9891\uff0c\u5e76\u4e0a\u4f20\u5bf9\u5e94\u7684\u5b57\u5e55\u6587\u4ef6\u3002\u4e00\u756a\u6298\u817e\u540e\uff0c\u6211\u62ff\u5230\u4e86\u89c6\u9891\u6587\u4ef6\u548c\u5b57\u5e55\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},".\n\u251c\u2500\u2500 input.mkv # \u8d85\u6e05\u89c6\u9891\uff0c\u51fa\u4e8e\u65b9\u4fbf\u91cd\u547d\u540d\u4e3a`input`\n\u251c\u2500\u2500 en.mp4 # \u82f1\u6587\u5b57\u5e55\n\u2514\u2500\u2500 cn.srt # \u7b80\u4e2d\u5b57\u5e55\n")),(0,s.kt)("h3",{id:"1-\u88c1\u526a\u6700\u540e\u4e00\u8282\u5230\u89c6\u9891\u7247\u5c3e"},"1. \u88c1\u526a\u6700\u540e\u4e00\u8282\u5230\u89c6\u9891\u7247\u5c3e"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"ffmpeg -i input.mkv -ss 02:01:09 -c copy cut.mp4\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u8fd9\u91cc\u526a\u5207\u7684\u5f00\u59cb\u65f6\u95f4\u6ca1\u6709\u8bbe\u7f6e\u6beb\u79d2\uff0c\u4e4b\u524d\u52a0\u4e86\u6beb\u79d2\u540e\u53d1\u73b0\u88c1\u526a\u51fa\u6765\u7684\u89c6\u9891\u4e0a\u4f20\u5230 B \u7ad9\u64ad\u653e\u65f6\u4f1a\u76f4\u63a5\u8df3\u79d2\uff0c\u53ef\u80fd\u662f\u5e27\u6570\u51fa\u73b0\u95ee\u9898\u4e86\u3002")),(0,s.kt)("h3",{id:"2-\u622a\u53d6\u5b57\u5e55\u6587\u4ef6\u5e76\u66f4\u65b0\u6bcf\u6761\u5b57\u5e55\u7684\u5f00\u59cb\u7ed3\u675f\u65f6\u95f4"},"2. \u622a\u53d6\u5b57\u5e55\u6587\u4ef6\u5e76\u66f4\u65b0\u6bcf\u6761\u5b57\u5e55\u7684\u5f00\u59cb\u7ed3\u675f\u65f6\u95f4"),(0,s.kt)("h4",{id:"a-\u5728\u5f53\u524d\u6587\u4ef6\u4e0b\u521b\u5efa-js-\u9879\u76ee"},"a. \u5728\u5f53\u524d\u6587\u4ef6\u4e0b\u521b\u5efa js \u9879\u76ee"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm init -y\nnpm add tsx\nnpm add @types/node\ntouch index.ts\n")),(0,s.kt)("p",null,"\u7ed9",(0,s.kt)("inlineCode",{parentName:"p"},"package.json"),"\u589e\u52a0\u4e00\u6761\u547d\u4ee4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'"scripts": {\n    // highlight-next-line\n    "start": "tsx index.ts",\n}\n')),(0,s.kt)("h4",{id:"b-\u622a\u53d6\u5b57\u5e55\u5e76\u66f4\u65b0\u65f6\u95f4"},"b. \u622a\u53d6\u5b57\u5e55\u5e76\u66f4\u65b0\u65f6\u95f4"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},'import fs from "fs"\nimport path from "path"\n\nconst srtNames = ["en", "cn"]\nsrtNames.forEach(srtUpdate)\n\nfunction srtUpdate(filename: string) {\n  const srtContextText = fs.readFileSync(\n    path.resolve(__dirname, filename + ".srt"),\n    "utf16le"\n  )\n\n  const timeSeperator = " --\x3e "\n  let startIndex: number | undefined\n\n  // \u89e3\u6790\u5b57\u5e55\u6587\u4ef6\u5185\u5bb9\u4e3a\u5b57\u5e55\u5bf9\u8c61\u6570\u7ec4\n  const subtitles = srtContextText\n    .split("\\r\\n\\r\\n")\n    .filter((v) => v)\n    .map((subtitle) => {\n      const [index, time, text] = subtitle.split("\\r\\n")\n      const [start, end] = time\n        .split(timeSeperator)\n        .map((time) => timeToMs(time))\n      return { index, start, end, text }\n    })\n\n  // \u89c6\u9891\u5f00\u59cb\u65f6\u95f4\n  const startTime = timeToMs("02:01:09,000")\n  // \u5b57\u5e55\u5f00\u59cb\u622a\u53d6\u65f6\u95f4\uff1b\u622a\u53d6\u540e\u89c6\u9891\u7684\u7b2c\u4e00\u4e2a\u5b57\u5e55\u6709\u70b9\u591a\u4f59\uff0c\u8981\u53bb\u6389\uff0c\u4ee5\u5b83\u4e3a\u5f00\u59cb\n  let startCutTime: number | undefined\n\n  // \u627e\u5230\u5f00\u59cb\u65f6\u95f4\u5927\u4e8e\u6307\u5b9a\u65f6\u95f4\u7684\u5b57\u5e55\u5bf9\u8c61\uff0c\u62fc\u63a5\u6587\u672c\n  let textAfterStartTime = ""\n  for (const { text, start, end, index } of subtitles) {\n    if (start > startTime) {\n      if (startCutTime == undefined) startCutTime = start\n\n      if (startCutTime != undefined && start > startCutTime) {\n        if (startIndex == undefined) startIndex = +index\n        // \u91cd\u6392\u5f39\u5e55\u7d22\u5f15\n        const srtIndex = +index - startIndex + 1\n        // \u66f4\u65b0\u5f39\u5e55\u5f00\u59cb\u7ed3\u675f\u65f6\u95f4\n        const timeText = [start, end]\n          .map((v) => formatTime(v - startTime))\n          .join(timeSeperator)\n        // \u79fb\u9664`{\\an8}`\u8fd9\u6837\u7684\u5f39\u5e55\u5b9a\u4f4d\u6807\u8bc6\n        const textReplaced = text.replace(/\\{\\\\an\\d+\\}/g, "")\n\n        textAfterStartTime +=\n          [srtIndex, timeText, textReplaced].join("\\r\\n") + "\\r\\n".repeat(2)\n      }\n    }\n  }\n\n  // \u5c06\u62fc\u63a5\u540e\u7684\u5b57\u5e55\u6587\u672c\u5199\u5165\u8f93\u51fa\u6587\u4ef6\n  fs.writeFileSync(`${filename}_updated.srt`, Buffer.from(textAfterStartTime))\n}\n\n/**\n * \u5c06\u65f6\u95f4\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6beb\u79d2\u6570\n * @example `00:00:00.001` -> `1`\n */\nfunction timeToMs(time: string) {\n  const [hh, mm, ssms] = time.split(":")\n  const [ss, ms] = ssms.split(",")\n  return (\n    parseInt(hh) * 3600000 +\n    parseInt(mm) * 60000 +\n    parseInt(ss) * 1000 +\n    parseInt(ms)\n  )\n}\n\n/**\n * \u5c06\u6beb\u79d2\u8f6c\u6362\u4e3a\u65f6\u95f4\u5b57\u7b26\u4e32\n * @example `1` -> `00:00:00.001`\n */\nfunction formatTime(milliseconds: number) {\n  const seconds = Math.floor(milliseconds / 1000)\n  const minutes = Math.floor(seconds / 60)\n  const hours = Math.floor(minutes / 60)\n\n  const ms = milliseconds % 1000\n  const ss = seconds % 60\n  const mm = minutes % 60\n\n  return `${hours.toString().padStart(2, "0")}:${mm\n    .toString()\n    .padStart(2, "0")}:${ss.toString().padStart(2, "0")},${ms\n    .toString()\n    .padStart(3, "0")}`\n}\n')),(0,s.kt)("h4",{id:"c-\u8fd0\u884c\u547d\u4ee4npm-start"},"c. \u8fd0\u884c\u547d\u4ee4",(0,s.kt)("inlineCode",{parentName:"h4"},"npm start")),(0,s.kt)("p",null,"\u5f97\u5230\u66f4\u65b0\u540e\u7684\u5b57\u5e55\u6587\u4ef6\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-srt",metastring:'title="cn_updated.srt"',title:'"cn_updated.srt"'},"1\n00:00:03,010 --\x3e 00:00:05,340\n\u82f9\u679c\u5f88\u5927\n\n2\n00:00:05,510 --\x3e 00:00:09,800\n\u5728\u6b64\u65f6\u6b64\u523b  \u662f\u5168\u7403\u6700\u5927\u7684\u4f01\u4e1a\n\n3\n00:00:12,270 --\x3e 00:00:15,850\n\u4f46\u6bcf\u4e00\u6b21\u6211\u4eec\u770b\u5230\u4e54\u5e03\u65af  \u90fd\u597d\u50cf\u53d8\u5c0f\u4e86\u4e00\u70b9\n\n4\n00:00:17,610 --\x3e 00:00:19,220\n\u53d1\u8868\u4f1a\n\n...\n")),(0,s.kt)("p",null,"\u5b8c\u7f8e \ud83e\udd73\uff0c\u53ef\u4ee5\u76f4\u63a5\u53bb",(0,s.kt)("a",{parentName:"p",href:"https://member.bilibili.com/platform/upload-manager/article"},"\u7a3f\u4ef6\u7ba1\u7406"),"\u8ddf\u6362\u89c6\u9891\u5e76\u4e0a\u4f20\u5b57\u5e55\u6587\u4ef6\u4e86\u3002"),(0,s.kt)("p",null,"\u6765\u6b23\u8d4f\u6700\u540e\u6210\u679c\u5427\uff1a"),(0,s.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=17147845&bvid=BV1zW411h7Tj&cid=1052804819&page=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",width:"100%",height:"300",allowfullscreen:"true"}))}c.isMDXComponent=!0}}]);