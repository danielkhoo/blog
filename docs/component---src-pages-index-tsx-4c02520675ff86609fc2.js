(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(205),i=a(207),o=(a(199),a(204)),l=function(e){return r.a.createElement("div",{className:"overview-blog-card"},r.a.createElement("div",{className:"overview-blog-card-header"},"Posted ",e.date," by ",r.a.createElement("span",null," daniel")),r.a.createElement("div",{className:"overview-blog-card-content"},r.a.createElement(o.a,{to:e.path},r.a.createElement("div",{className:"title"},r.a.createElement("h3",null,e.title))),r.a.createElement("p",{className:"description"},e.description," "),r.a.createElement("p",null)))};a.d(t,"query",function(){return s});var s="1603195284";t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){return e.node.frontmatter});return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Blog"}),r.a.createElement("div",{className:"overview-blog"},t.map(function(e){return r.a.createElement(l,{title:e.title,path:e.path,date:e.date,description:e.description})})))}},203:function(e,t,a){var n;e.exports=(n=a(206))&&n.default||n},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(66),i=a.n(c);a.d(t,"a",function(){return i.a});a(203),a(9).default.enqueue,r.a.createContext({})},205:function(e,t,a){"use strict";a(132),a(133);var n,r=a(0),c=a(204);a(194);!function(e){e.Blog="blog",e.Projects="projects",e.About="about"}(n||(n={}));t.a=function(e){var t=Object(r.useState)(n.Blog),a=t[0],i=t[1];return Object(r.useEffect)(function(){window.location.pathname.includes(n.Projects)&&i(n.Projects),window.location.pathname.includes(n.About)&&i(n.About)},[]),r.createElement(r.Fragment,null,r.createElement("header",null,r.createElement("div",{className:"header-content"},r.createElement("nav",null,r.createElement(c.a,{to:"/"},r.createElement("div",{className:"navitem "+(a==n.Blog?"active":"")},"Blog")),r.createElement(c.a,{to:"/projects"},r.createElement("div",{className:"navitem "+(a==n.Projects?"active":"")},"Projects")),r.createElement(c.a,{to:"/about"},r.createElement("div",{className:"navitem "+(a==n.About?"active":"")},"About"))))),r.createElement("div",{className:"container"},r.createElement("div",{className:"main-wrapper"},e.children)))}},206:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),c=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";var n=a(208),r=a(0),c=a.n(r),i=a(209),o=a.n(i);function l(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,l=n.data.site,s=t||l.siteMetadata.description;return c.a.createElement(o.a,{htmlAttributes:{lang:a},title:i,titleTemplate:l.siteMetadata.title+" - %s",meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r),link:[{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"}]})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Daniel",description:"A blog, portfolio and digital garage for all my work, side-projects, procrastinations from work.",author:"@danieljkhoo"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4c02520675ff86609fc2.js.map