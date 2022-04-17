"use strict";(self.webpackChunkmy_websites=self.webpackChunkmy_websites||[]).push([[610],{8665:function(e,t,a){a.d(t,{Z:function(){return b}});var l=a(3366),r=a(7294),n=a(6010),i=a(3570),s=a(9960),m="sidebar_a9qW",o="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",g="sidebarItem_CF0Q",d="sidebarItemLink_miNk",u="sidebarItemLinkActive_RRTD",p=a(5999);function h(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:c},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:g},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title))}))))}var E=["sidebar","toc","children"];function b(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,l.Z)(e,E),o=t&&t.items.length>0;return r.createElement(i.Z,m,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(h,{sidebar:t})),r.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},6299:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),r=a(5999),n=a(1750);function i(e){var t=e.metadata,a=t.previousPage,i=t.nextPage;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},i&&l.createElement(n.Z,{permalink:i,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))}},8902:function(e,t,a){a.d(t,{Z:function(){return A}});var l=a(7294),r=a(6010),n=a(5999),i=a(9960),s=a(4996),m=a(7556),o=a(8780),c=a(8704),g=a(7462),d=a(3366),u="iconEdit_dcUD",p=["className"];function h(e){var t=e.className,a=(0,d.Z)(e,p);return l.createElement("svg",(0,g.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(u,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function E(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},l.createElement(h,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var b="blogPostTitle_rzP5",v="blogPostData_Zg1s",f="blogPostDetailsFull_h6_j",_=a(7774),N="tags_XVD_",Z="tag_JSN8";function k(e){var t=e.tags;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.Z)(N,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return l.createElement("li",{key:a,className:Z},l.createElement(_.Z,{name:t,permalink:a}))}))))}var P="image_o0gy";function T(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function w(e){var t=e.author,a=t.name,r=t.title,n=t.url,i=t.imageURL,s=t.email,m=n||s&&"mailto:"+s||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(T,{href:m},l.createElement("img",{className:P,src:i,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(T,{href:m,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}var y="authorCol_FlmR",I="imageOnlyAuthorRow_trpF",L="imageOnlyAuthorCol_S2np";function M(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?I:"row")},t.map((function(e,t){var i;return l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?L:y),key:t},l.createElement(w,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function A(e){var t,a,g=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),d=(0,s.C)().withBaseUrl,u=e.children,p=e.frontMatter,h=e.assets,_=e.metadata,N=e.truncated,Z=e.isBlogPostPage,P=void 0!==Z&&Z,T=_.date,w=_.formattedDate,y=_.permalink,I=_.tags,L=_.readingTime,A=_.title,R=_.editUrl,x=_.authors,U=null!=(t=h.image)?t:p.image,C=!P&&N,B=I.length>0,F=P?"h1":"h2";return l.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(F,{className:b,itemProp:"headline"},P?A:l.createElement(i.Z,{itemProp:"url",to:y},A)),l.createElement("div",{className:(0,r.Z)(v,"margin-vert--md")},l.createElement("time",{dateTime:T,itemProp:"datePublished"},w),void 0!==L&&l.createElement(l.Fragment,null," \xb7 ",g(L))),l.createElement(M,{authors:x,assets:h})),U&&l.createElement("meta",{itemProp:"image",content:d(U,{absolute:!0})}),l.createElement("div",{id:P?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,u)),(B||N)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",P&&f)},B&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":C})},l.createElement(k,{tags:I})),P&&R&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(E,{editUrl:R})),C&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":B})},l.createElement(i.Z,{to:_.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:A})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var l=a(7294),r=a(9960),n=a(8665),i=a(8902),s=a(5999),m=a(7556),o=a(6299),c=a(4739),g=a(6010);function d(e){var t,a=e.metadata,d=e.items,u=e.sidebar,p=e.listMetadata,h=a.allTagsPath,E=a.name,b=a.count,v=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,s.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,s.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:v(b),tagName:E});return l.createElement(m.FG,{className:(0,g.Z)(m.kM.wrapper.blogPages,m.kM.page.blogTagPostListPage)},l.createElement(m.d,{title:f}),l.createElement(c.Z,{tag:"blog_tags_posts"}),l.createElement(n.Z,{sidebar:u},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,f),l.createElement(r.Z,{href:h},l.createElement(s.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),d.map((function(e){var t=e.content;return l.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(o.Z,{metadata:p})))}},1750:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(7294),r=a(9960);function n(e){var t=e.permalink,a=e.title,n=e.subLabel;return l.createElement(r.Z,{className:"pagination-nav__link",to:t},n&&l.createElement("div",{className:"pagination-nav__sublabel"},n),l.createElement("div",{className:"pagination-nav__label"},a))}}}]);