(function(){function F(e,q){var c=(" "+e.className+" ").replace(/\s+/g," "),w=(" "+q+" ").replace(/\s+/g," ");0>c.indexOf(w)&&(e.className=(c+w).replace(/\s+/g," ").replace(/^ | $/g,""))}function G(e,q){var c=(" "+e.className+" ").replace(/\s+/g," "),w=(" "+q+" ").replace(/\s+/g," ");0<=c.indexOf(w)&&(e.className=c.replace(w," ").replace(/\s+/g," ").replace(/^ | $/g,""))}function J(e,q){var c=new XMLHttpRequest;q&&(c.onreadystatechange=function(){4===this.readyState&&200===this.status&&q.call(this)});
c.open("GET",e,!0);c.send()}function M(e,q,c){e.addEventListener?e.addEventListener(q,c,!1):e.attachEvent&&e.attachEvent("on"+q,c)}function t(){var e,q,c,w,t;e=document.createElement("div");e.id="demoengine";document.body.insertBefore(e,document.body.firstChild);q=document.createElement("a");q.className="corner-l active";q.href="#";q.innerHTML="Output";q.onclick=function(){G(document.body,"active");F(q,"active");G(c,"active");G(t,"active");return!1};e.appendChild(q);c=document.createElement("a");
c.className="corner-r";c.href="#";c.innerHTML="Source";c.onclick=function(){F(document.body,"active");G(q,"active");F(c,"active");F(t,"active");return!1};e.appendChild(c);w=document.createElement("a");w.className="corner-l corner-r";top===self?(w.href=".",w.innerHTML="Browse files"):(w.href=window.location.href,w.target="_blank",w.innerHTML="Open in new window");e.appendChild(w);t=document.createElement("div");e.appendChild(t);J(window.location.href,function(){t.innerHTML="<PRE class=prettyprint>"+
this.responseText.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</PRE>";prettyPrint()})}"complete"===document.readyState?t():M(window,"load",t)})();var IN_GLOBAL_SCOPE=!0;window.PR_SHOULD_USE_CONTINUATION=!0;var prettyPrintOne,prettyPrint;
(function(){function F(b){function h(f){var d=f.charCodeAt(0);if(92!==d)return d;var a=f.charAt(1);return(d=u[a])?d:"0"<=a&&"7">=a?parseInt(f.substring(1),8):"u"===a||"x"===a?parseInt(f.substring(2),16):f.charCodeAt(1)}function z(f){if(32>f)return(16>f?"\\x0":"\\x")+f.toString(16);f=String.fromCharCode(f);return"\\"===f||"-"===f||"]"===f||"^"===f?"\\"+f:f}function d(f){var d=f.substring(1,f.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]",
"g"));f=[];var a="^"===d[0],b=["["];a&&b.push("^");for(var a=a?1:0,g=d.length;a<g;++a){var k=d[a];if(/\\[bdsw]/i.test(k))b.push(k);else{var k=h(k),n;a+2<g&&"-"===d[a+1]?(n=h(d[a+2]),a+=2):n=k;f.push([k,n]);65>n||122<k||(65>n||90<k||f.push([Math.max(65,k)|32,Math.min(n,90)|32]),97>n||122<k||f.push([Math.max(97,k)&-33,Math.min(n,122)&-33]))}}f.sort(function(f,a){return f[0]-a[0]||a[1]-f[1]});d=[];g=[];for(a=0;a<f.length;++a)k=f[a],k[0]<=g[1]+1?g[1]=Math.max(g[1],k[1]):d.push(g=k);for(a=0;a<d.length;++a)k=
d[a],b.push(z(k[0])),k[1]>k[0]&&(k[1]+1>k[0]&&b.push("-"),b.push(z(k[1])));b.push("]");return b.join("")}function c(f){for(var a=f.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),b=a.length,h=[],g=0,k=0;g<b;++g){var n=a[g];"("===n?++k:"\\"===n.charAt(0)&&(n=+n.substring(1))&&(n<=k?h[n]=-1:a[g]=z(n))}for(g=1;g<h.length;++g)-1===h[g]&&(h[g]=++e);for(k=g=0;g<b;++g)n=a[g],
"("===n?(++k,h[k]||(a[g]="(?:")):"\\"===n.charAt(0)&&(n=+n.substring(1))&&n<=k&&(a[g]="\\"+h[n]);for(g=0;g<b;++g)"^"===a[g]&&"^"!==a[g+1]&&(a[g]="");if(f.ignoreCase&&v)for(g=0;g<b;++g)n=a[g],f=n.charAt(0),2<=n.length&&"["===f?a[g]=d(n):"\\"!==f&&(a[g]=n.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return a.join("")}for(var e=0,v=!1,m=!1,l=0,a=b.length;l<a;++l){var p=b[l];if(p.ignoreCase)m=!0;else if(/[a-z]/i.test(p.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,
""))){v=!0;m=!1;break}}for(var u={b:8,t:9,n:10,v:11,f:12,r:13},r=[],l=0,a=b.length;l<a;++l){p=b[l];if(p.global||p.multiline)throw Error(""+p);r.push("(?:"+c(p)+")")}return new RegExp(r.join("|"),m?"gi":"g")}function G(b,h){function z(b){var a=b.nodeType;if(1==a){if(!d.test(b.className)){for(a=b.firstChild;a;a=a.nextSibling)z(a);a=b.nodeName.toLowerCase();if("br"===a||"li"===a)c[m]="\n",v[m<<1]=e++,v[m++<<1|1]=b}}else if(3==a||4==a)a=b.nodeValue,a.length&&(a=h?a.replace(/\r\n?/g,"\n"):a.replace(/[ \t\r\n]+/g,
" "),c[m]=a,v[m<<1]=e,e+=a.length,v[m++<<1|1]=b)}var d=/(?:^|\s)nocode(?:\s|$)/,c=[],e=0,v=[],m=0;z(b);return{sourceCode:c.join("").replace(/\n$/,""),spans:v}}function J(b,h,z,d){h&&(b={sourceCode:h,basePos:b},z(b),d.push.apply(d,b.decorations))}function M(b){for(var h=void 0,z=b.firstChild;z;z=z.nextSibling)var d=z.nodeType,h=1===d?h?b:z:3===d?X.test(z.nodeValue)?b:h:h;return h===b?void 0:h}function t(b,h){var z={},d;(function(){for(var c=b.concat(h),e=[],l={},a=0,p=c.length;a<p;++a){var u=c[a],
r=u[3];if(r)for(var f=r.length;0<=--f;)z[r.charAt(f)]=u;u=u[1];r=""+u;l.hasOwnProperty(r)||(e.push(u),l[r]=null)}e.push(/[\0-\uffff]/);d=F(e)})();var c=h.length,e=function(b){for(var m=b.basePos,l=[m,"pln"],a=0,p=b.sourceCode.match(d)||[],u={},r=0,f=p.length;r<f;++r){var B=p[r],A=u[B],x=void 0,g;if("string"===typeof A)g=!1;else{var k=z[B.charAt(0)];if(k)x=B.match(k[1]),A=k[0];else{for(g=0;g<c;++g)if(k=h[g],x=B.match(k[1])){A=k[0];break}x||(A="pln")}!(g=5<=A.length&&"lang-"===A.substring(0,5))||x&&
"string"===typeof x[1]||(g=!1,A="src");g||(u[B]=A)}k=a;a+=B.length;if(g){g=x[1];var n=B.indexOf(g),E=n+g.length;x[2]&&(E=B.length-x[2].length,n=E-g.length);A=A.substring(5);J(m+k,B.substring(0,n),e,l);J(m+k+n,g,w(A,g),l);J(m+k+E,B.substring(E),e,l)}else l.push(m+k,A)}b.decorations=l};return e}function e(b){var h=[],c=[];b.tripleQuotedStrings?h.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
null,"'\""]):b.multiLineStrings?h.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):h.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);b.verbatimStrings&&c.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var d=b.hashComments;d&&(b.cStyleComments?(1<d?h.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):h.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
null,"#"]),c.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):h.push(["com",/^#[^\r\n]*/,null,"#"]));b.cStyleComments&&(c.push(["com",/^\/\/[^\r\n]*/,null]),c.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));if(d=b.regexLiterals){var e=(d=1<d?"":"\n\r")?".":"[\\S\\s]";c.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+
("/(?=[^/*"+d+"])(?:[^/\\x5B\\x5C"+d+"]|\\x5C"+e+"|\\x5B(?:[^\\x5C\\x5D"+d+"]|\\x5C"+e+")*(?:\\x5D|$))+/")+")")])}(d=b.types)&&c.push(["typ",d]);d=(""+b.keywords).replace(/^ | $/g,"");d.length&&c.push(["kwd",new RegExp("^(?:"+d.replace(/[\s,]+/g,"|")+")\\b"),null]);h.push(["pln",/^\s+/,null," \r\n\t\u00a0"]);d="^.[^\\s\\w.$@'\"`/\\\\]*";b.regexLiterals&&(d+="(?!s*/)");c.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,
null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",new RegExp(d),null]);return t(h,c)}function q(b,c,e){function d(a){var b=a.nodeType;if(1==b&&!w.test(a.className))if("br"===a.nodeName)q(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)d(a);else if((3==b||4==b)&&e){var c=a.nodeValue,h=c.match(v);h&&(b=c.substring(0,h.index),a.nodeValue=b,(c=c.substring(h.index+h[0].length))&&
a.parentNode.insertBefore(m.createTextNode(c),a.nextSibling),q(a),b||a.parentNode.removeChild(a))}}function q(b){function d(a,b){var c=b?a.cloneNode(!1):a,f=a.parentNode;if(f){var f=d(f,1),e=a.nextSibling;f.appendChild(c);for(var h=e;h;h=e)e=h.nextSibling,f.appendChild(h)}return c}for(;!b.nextSibling;)if(b=b.parentNode,!b)return;b=d(b.nextSibling,0);for(var c;(c=b.parentNode)&&1===c.nodeType;)b=c;a.push(b)}for(var w=/(?:^|\s)nocode(?:\s|$)/,v=/\r\n?|\n/,m=b.ownerDocument,l=m.createElement("li");b.firstChild;)l.appendChild(b.firstChild);
for(var a=[l],p=0;p<a.length;++p)d(a[p]);c===(c|0)&&a[0].setAttribute("value",c);var u=m.createElement("ol");u.className="linenums";c=Math.max(0,c-1|0)||0;for(var p=0,r=a.length;p<r;++p)l=a[p],l.className="L"+(p+c)%10,l.firstChild||l.appendChild(m.createTextNode("\u00a0")),u.appendChild(l);b.appendChild(u)}function c(b,c){for(var e=c.length;0<=--e;){var d=c[e];K.hasOwnProperty(d)?H.console&&console.warn("cannot override language handler %s",d):K[d]=b}}function w(b,c){b&&K.hasOwnProperty(b)||(b=/^\s*</.test(c)?
"default-markup":"default-code");return K[b]}function N(b){var c=b.langExtension;try{var e=G(b.sourceNode,b.pre),d=e.sourceCode;b.sourceCode=d;b.spans=e.spans;b.basePos=0;w(c,d)(b);var q=/\bMSIE\s(\d+)/.exec(navigator.userAgent),q=q&&8>=+q[1],c=/\n/g,t=b.sourceCode,v=t.length,e=0,m=b.spans,l=m.length,d=0,a=b.decorations,p=a.length,u=0;a[p]=v;var r,f;for(f=r=0;f<p;)a[f]!==a[f+2]?(a[r++]=a[f++],a[r++]=a[f++]):f+=2;p=r;for(f=r=0;f<p;){for(var B=a[f],A=a[f+1],x=f+2;x+2<=p&&a[x+1]===A;)x+=2;a[r++]=B;a[r++]=
A;f=x}a.length=r;var g=b.sourceNode,k;g&&(k=g.style.display,g.style.display="none");try{for(;d<l;){var n=m[d+2]||v,E=a[u+2]||v,x=Math.min(n,E),D=m[d+1],L;if(1!==D.nodeType&&(L=t.substring(e,x))){q&&(L=L.replace(c,"\r"));D.nodeValue=L;var O=D.ownerDocument,s=O.createElement("span");s.className=a[u+1];var C=D.parentNode;C.replaceChild(s,D);s.appendChild(D);e<n&&(m[d+1]=D=O.createTextNode(t.substring(x,n)),C.insertBefore(D,s.nextSibling))}e=x;e>=n&&(d+=2);e>=E&&(u+=2)}}finally{g&&(g.style.display=k)}}catch(y){H.console&&
console.log(y&&y.stack||y)}}function P(b,c,e){var d=document.createElement("div");d.innerHTML="<pre>"+b+"</pre>";d=d.firstChild;e&&q(d,e,!0);N({langExtension:c,numberLines:e,sourceNode:d,pre:1});return d.innerHTML}function Q(b,c){function e(){for(var c=H.PR_SHOULD_USE_CONTINUATION?a.now()+250:Infinity;p<t.length&&a.now()<c;p++){for(var d=t[p],h=k,m=d;m=m.previousSibling;){var l=m.nodeType,s=(7===l||8===l)&&m.nodeValue;if(s?!/^\??prettify\b/.test(s):3!==l||/\S/.test(m.nodeValue))break;if(s){h={};s.replace(/\b(\w+)=([\w:.%+-]+)/g,
function(a,b,c){h[b]=c});break}}m=d.className;if((h!==k||f.test(m))&&!B.test(m)){l=!1;for(s=d.parentNode;s;s=s.parentNode)if(g.test(s.tagName)&&s.className&&f.test(s.className)){l=!0;break}if(!l){d.className+=" prettyprinted";l=h.lang;if(!l){var l=m.match(r),v;!l&&(v=M(d))&&x.test(v.tagName)&&(l=v.className.match(r));l&&(l=l[1])}if(A.test(d.tagName))s=1;else var s=d.currentStyle,y=w.defaultView,s=(s=s?s.whiteSpace:y&&y.getComputedStyle?y.getComputedStyle(d,null).getPropertyValue("white-space"):0)&&
"pre"===s.substring(0,3);y=h.linenums;(y="true"===y||+y)||(y=(y=m.match(/\blinenums\b(?::(\d+))?/))?y[1]&&y[1].length?+y[1]:!0:!1);y&&q(d,y,s);u={langExtension:l,sourceNode:d,numberLines:y,pre:s};N(u)}}}p<t.length?setTimeout(e,250):"function"===typeof b&&b()}for(var d=c||document.body,w=d.ownerDocument||document,d=[d.getElementsByTagName("pre"),d.getElementsByTagName("code"),d.getElementsByTagName("xmp")],t=[],v=0;v<d.length;++v)for(var m=0,l=d[v].length;m<l;++m)t.push(d[v][m]);var d=null,a=Date;
a.now||(a={now:function(){return+new Date}});var p=0,u,r=/\blang(?:uage)?-([\w.]+)(?!\S)/,f=/\bprettyprint\b/,B=/\bprettyprinted\b/,A=/pre|xmp/i,x=/^code$/i,g=/^(?:pre|code|xmp)$/i,k={};e()}var H=window,C=["break,continue,do,else,for,if,return,while"],I=[[C,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
R=[I,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],S=[I,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],T=[S,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
I=[I,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],U=[C,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],V=[C,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],Y=[C,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],
C=[C,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],W=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,X=/\S/,Z=e({keywords:[R,T,I,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",U,V,C],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),K={};c(Z,["default-code"]);c(t([],
[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup htm html mxml xhtml xml xsl".split(" "));c(t([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,
null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);c(t([],[["atv",/^[\s\S]+/]]),["uq.val"]);c(e({keywords:R,
hashComments:!0,cStyleComments:!0,types:W}),"c cc cpp cxx cyc m".split(" "));c(e({keywords:"null,true,false"}),["json"]);c(e({keywords:T,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:W}),["cs"]);c(e({keywords:S,cStyleComments:!0}),["java"]);c(e({keywords:C,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);c(e({keywords:U,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);c(e({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);c(e({keywords:V,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);c(e({keywords:I,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);c(e({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),
["coffee"]);c(e({keywords:Y,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);c(t([],[["str",/^[\s\S]+/]]),["regex"]);var $=H.PR={createSimpleLexer:t,registerLangHandler:c,sourceDecorator:e,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:IN_GLOBAL_SCOPE?H.prettyPrintOne=P:prettyPrintOne=P,prettyPrint:prettyPrint=
IN_GLOBAL_SCOPE?H.prettyPrint=Q:prettyPrint=Q};"function"===typeof define&&define.amd&&define("google-code-prettify",[],function(){return $})})();
