!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=11)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObject=MathJax._.components.global.isObject,t.combineConfig=MathJax._.components.global.combineConfig,t.combineDefaults=MathJax._.components.global.combineDefaults,t.combineWithMathJax=MathJax._.components.global.combineWithMathJax,t.MathJax=MathJax._.components.global.MathJax},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(7),r=a(8),o=a(9),i=a(10),c={CD:function(e,t){e.Push(t);var a=e.itemFactory.create("array"),n=e.configuration.options.amscd;return a.setProperties({minw:e.stack.env.CD_minw||n.harrowsize,minh:e.stack.env.CD_minh||n.varrowsize}),a.arraydef={columnalign:"center",columnspacing:n.colspace,rowspacing:n.rowspace,displaystyle:!0},a},arrow:function(e,t){var a=e.string.charAt(e.i);if(!a.match(/[><VA.|=]/))return r.Other(e,t);e.i++;var l=e.stack.Top();l.isKind("array")&&!l.Size()||(c.cell(e,t),l=e.stack.Top());for(var s,u=l,d=u.table.length%2==1,m=(u.row.length+(d?0:1))%2;m;)c.cell(e,t),m--;var p={minsize:u.getProperty("minw"),stretchy:!0},f={minsize:u.getProperty("minh"),stretchy:!0,symmetric:!0,lspace:0,rspace:0};if("."===a);else if("|"===a)s=e.create("token","mo",f,"\u2225");else if("="===a)s=e.create("token","mo",p,"=");else{var M={">":"\u2192","<":"\u2190",V:"\u2193",A:"\u2191"}[a],h=e.GetUpTo(t+a,a),b=e.GetUpTo(t+a,a);if(">"===a||"<"===a){if(s=e.create("token","mo",p,M),h||(h="\\kern "+u.getProperty("minw")),h||b){var _={width:".67em",lspace:".33em"};if(s=e.create("node","munderover",[s]),h){var x=new n.default(h,e.stack.env,e.configuration).mml(),g=e.create("node","mpadded",[x],_);i.default.setAttribute(g,"voffset",".1em"),i.default.setChild(s,s.over,g)}if(b){var v=new n.default(b,e.stack.env,e.configuration).mml();i.default.setChild(s,s.under,e.create("node","mpadded",[v],_))}e.configuration.options.amscd.hideHorizontalLabels&&(s=e.create("node","mpadded",s,{depth:0,height:".67em"}))}}else{var C=e.create("token","mo",f,M);s=C,(h||b)&&(s=e.create("node","mrow"),h&&i.default.appendChildren(s,[new n.default("\\scriptstyle\\llap{"+h+"}",e.stack.env,e.configuration).mml()]),C.texClass=o.TEXCLASS.ORD,i.default.appendChildren(s,[C]),b&&i.default.appendChildren(s,[new n.default("\\scriptstyle\\rlap{"+b+"}",e.stack.env,e.configuration).mml()]))}}s&&e.Push(s),c.cell(e,t)},cell:function(e,t){var a=e.stack.Top();(a.table||[]).length%2==0&&0===(a.row||[]).length&&e.Push(e.create("node","mpadded",[],{height:"8.5pt",depth:"2pt"})),e.Push(e.itemFactory.create("cell").setProperties({isEntry:!0,name:t}))},minCDarrowwidth:function(e,t){e.stack.env.CD_minw=e.GetDimen(t)},minCDarrowheight:function(e,t){e.stack.env.CD_minh=e.GetDimen(t)}};t.default=c},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmsCdConfiguration=void 0;var n=a(3);a(4),t.AmsCdConfiguration=n.Configuration.create("amscd",{handler:{character:["amscd_special"],macro:["amscd_macros"],environment:["amscd_environment"]},options:{amscd:{colspace:"5pt",rowspace:"5pt",harrowsize:"2.75em",varrowsize:"1.75em",hideHorizontalLabels:!1}}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Configuration=MathJax._.input.tex.Configuration.Configuration,t.ConfigurationHandler=MathJax._.input.tex.Configuration.ConfigurationHandler,t.ParserConfiguration=MathJax._.input.tex.Configuration.ParserConfiguration},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(5),r=a(6),o=a(1);new n.EnvironmentMap("amscd_environment",r.default.environment,{CD:"CD"},o.default),new n.CommandMap("amscd_macros",{minCDarrowwidth:"minCDarrowwidth",minCDarrowheight:"minCDarrowheight"},o.default),new n.MacroMap("amscd_special",{"@":"arrow"},o.default)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AbstractSymbolMap=MathJax._.input.tex.SymbolMap.AbstractSymbolMap,t.RegExpMap=MathJax._.input.tex.SymbolMap.RegExpMap,t.AbstractParseMap=MathJax._.input.tex.SymbolMap.AbstractParseMap,t.CharacterMap=MathJax._.input.tex.SymbolMap.CharacterMap,t.DelimiterMap=MathJax._.input.tex.SymbolMap.DelimiterMap,t.MacroMap=MathJax._.input.tex.SymbolMap.MacroMap,t.CommandMap=MathJax._.input.tex.SymbolMap.CommandMap,t.EnvironmentMap=MathJax._.input.tex.SymbolMap.EnvironmentMap},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.ParseMethods.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.TexParser.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Other=MathJax._.input.tex.base.BaseConfiguration.Other,t.BaseTags=MathJax._.input.tex.base.BaseConfiguration.BaseTags,t.BaseConfiguration=MathJax._.input.tex.base.BaseConfiguration.BaseConfiguration},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TEXCLASS=MathJax._.core.MmlTree.MmlNode.TEXCLASS,t.TEXCLASSNAMES=MathJax._.core.MmlTree.MmlNode.TEXCLASSNAMES,t.indentAttributes=MathJax._.core.MmlTree.MmlNode.indentAttributes,t.AbstractMmlNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlNode,t.AbstractMmlTokenNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlTokenNode,t.AbstractMmlLayoutNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlLayoutNode,t.AbstractMmlBaseNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlBaseNode,t.AbstractMmlEmptyNode=MathJax._.core.MmlTree.MmlNode.AbstractMmlEmptyNode,t.TextNode=MathJax._.core.MmlTree.MmlNode.TextNode,t.XMLNode=MathJax._.core.MmlTree.MmlNode.XMLNode},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=MathJax._.input.tex.NodeUtil.default},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(2),o=a(1);Object(n.combineWithMathJax)({_:{input:{tex:{amscd:{AmsCdConfiguration:r,AmsCdMethods:o}}}}}),function(e,t,a){var r,o,i,c=MathJax.config.tex;if(c&&c.packages){var l=c.packages,s=l.indexOf(e);s>=0&&(l[s]=t),a&&c[e]&&(Object(n.combineConfig)(c,(r={},o=t,i=c[e],o in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,r)),delete c[e])}}("amsCd","amscd",!0)}]);