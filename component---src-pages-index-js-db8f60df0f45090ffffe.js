webpackJsonp([35783957827783],{82:function(t,e,n){"use strict";function a(t){return t}function r(t,e,n){function r(t,e){var n=E.hasOwnProperty(e)?E[e]:null;w.hasOwnProperty(e)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function i(t,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var a=t.prototype,i=a.__reactAutoBindPairs;n.hasOwnProperty(c)&&b.mixins(t,n.mixins);for(var o in n)if(n.hasOwnProperty(o)&&o!==c){var s=n[o],u=a.hasOwnProperty(o);if(r(u,o),b.hasOwnProperty(o))b[o](t,s);else{var p=E.hasOwnProperty(o),f="function"==typeof s,h=f&&!p&&!u&&n.autobind!==!1;if(h)i.push(o,s),a[o]=s;else if(u){var y=E[o];l(p&&("DEFINE_MANY_MERGED"===y||"DEFINE_MANY"===y),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",y,o),"DEFINE_MANY_MERGED"===y?a[o]=d(a[o],s):"DEFINE_MANY"===y&&(a[o]=m(a[o],s))}else a[o]=s}}}else;}function u(t,e){if(e)for(var n in e){var a=e[n];if(e.hasOwnProperty(n)){var r=n in b;l(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in t;l(!i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),t[n]=a}}}function p(t,e){l(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(l(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function d(t,e){return function(){var n=t.apply(this,arguments),a=e.apply(this,arguments);if(null==n)return a;if(null==a)return n;var r={};return p(r,n),p(r,a),r}}function m(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function f(t,e){var n=e.bind(t);return n}function h(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var a=e[n],r=e[n+1];t[a]=f(t,r)}}function y(t){var e=a(function(t,a,r){this.__reactAutoBindPairs.length&&h(this),this.props=t,this.context=a,this.refs=s,this.updater=r||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;l("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=i});e.prototype=new _,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],g.forEach(i.bind(null,e)),i(e,N),i(e,t),i(e,v),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),l(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in E)e.prototype[r]||(e.prototype[r]=null);return e}var g=[],E={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)i(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=o({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=o({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=d(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=o({},t.propTypes,e)},statics:function(t,e){u(t,e)},autobind:function(){}},N={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},w={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},_=function(){};return o(_.prototype,t.prototype,w),y}var i,o=n(4),s=n(31),l=n(1),c="mixins";i={},t.exports=r},140:function(t,e){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,l=Object.getPrototypeOf,c=l&&l(Object);t.exports=function t(e,u,p){if("string"!=typeof u){if(c){var d=l(u);d&&d!==c&&t(e,d,p)}var m=i(u);o&&(m=m.concat(o(u)));for(var f=0;f<m.length;++f){var h=m[f];if(!(n[h]||a[h]||p&&p[h])){var y=s(u,h);try{r(e,h,y)}catch(t){}}}return e}return e}},4:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function a(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var a=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==a.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=a()?Object.assign:function(t,e){for(var a,s,l=n(t),c=1;c<arguments.length;c++){a=Object(arguments[c]);for(var u in a)i.call(a,u)&&(l[u]=a[u]);if(r){s=r(a);for(var p=0;p<s.length;p++)o.call(a,s[p])&&(l[s[p]]=a[s[p]])}}return l}},182:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var n={};for(var a in t)e.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a]);return n}e.__esModule=!0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},o=n(7),s=a(o),l=n(5),c=a(l),u=n(187),p=function(t){var e=t.className,n=t.shape,a=t.title,o=t.color,s=t.style,l=t.height,p=t.width,d=r(t,["className","shape","title","color","style","height","width"]),m=s||{};return o&&(m.fill=o),c.default.createElement("span",{className:e},c.default.createElement("svg",i({preserveAspectRatio:"xMinYMin meet",width:p,height:l,viewBox:"0 0 "+p+" "+l,role:"img",style:m},d),a&&c.default.createElement("title",null,a),u.iconShapes[n]))};p.defaultProps={color:"#000",height:"24",width:"24"},p.propTypes={shape:s.default.oneOf(u.validShapesList).isRequired,title:s.default.string,color:s.default.string,height:s.default.string,width:s.default.string},e.default=p,t.exports=e.default},185:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i=n(5),o=a(i),s=n(285),l=(a(s),n(182)),c=a(l),u=n(404),p=a(u),d=n(186),m=a(d),f=n(188),h=a(f),y=n(272),g=a(y),E=n(269),b=a(E),N=n(268),v=a(N),w=n(271),_=a(w),x=r({},g.default,v.default,_.default,b.default),M=function(){return o.default.createElement("div",null,o.default.createElement("header",{className:"\n\t\t\t\t"+x.hero+"\n\t\t\t\t"+x.section+"\n\t\t\t"},o.default.createElement("div",{className:"\n\t\t\t\t\t"+x.siteGrid+"\n\t\t\t\t\t"+x["siteGrid--columns"]+"\n\t\t\t\t\t"+x["siteGrid--rows"]+"\n\t\t\t\t\t"+x.bounds+"\n\t\t\t\t\t"+x.heroWrapper+"\n\t\t\t\t"},o.default.createElement("h2",{className:"\n\t\t\t\t\t\t\t"+x["text--hero"]+"\n\t\t\t\t\t\t\t"+x["text--accentFace"]+"\n\t\t\t\t\t\t\t"+x["hero-copy"]+"\n\t\t\t\t\t\t\t"+x["hero-copy--headlineStart"]+"\n\t\t\t\t\t"},"Oh, hi"),o.default.createElement("h2",{className:"\n\t\t\t\t\t\t\t"+x["text--hero"]+"\n\t\t\t\t\t\t\t"+x["text--accentFace"]+"\n\t\t\t\t\t\t\t"+x["hero-copy"]+"\n\t\t\t\t\t\t\t"+x["hero-copy--headlineEnd"]+"\n\t\t\t\t\t"},"I'm Miike"),o.default.createElement("p",{className:"\n\t\t\t\t\t\t\t"+x["hero-copy"]+"\n\t\t\t\t\t\t\t"+x["hero-copy--body"]+"\n\t\t\t\t\t\t\t"+x.runningText+"\n\t\t\t\t\t"},o.default.createElement("img",{alt:"Drawing of Mike",className:"\n\t\t\t\t\t\t\t\t"+x["hero-portrait"]+"\n\t\t\t\t\t\t\t\t"+x["hero-portrait--inline"]+"\n\t\t\t\t\t\t\t\t"+x["display--inline"]+"\n\t\t\t\t\t\t\t\t"+x["atMedium_display--none"]+"\n\t\t\t\t\t\t\t",src:p.default,width:"70",height:"70"}),"You can call me a designer or you can call me a developer - just don't restrain me to either box. I'm most excited by collaborating with people and organizations doing work on social justice, healthcare, education, and the arts."),o.default.createElement("img",{alt:"Drawing of Mike",className:"\n\t\t\t\t\t\t\t"+x["hero-portrait"]+"\n\t\t\t\t\t\t\t"+x["display--none"]+"\n\t\t\t\t\t\t\t"+x["atMedium_display--inline"]+"\n\t\t\t\t\t\t",src:p.default}))),o.default.createElement("section",{className:x.bounds},o.default.createElement("div",{className:"\n\t\t\t\t\t"+x.siteGrid+"\n\t\t\t\t\t"+x["siteGrid--columns"]+"\n\t\t\t\t\t"+x["siteGrid--rows"]+"\n\t\t\t\t\t"+x.section+"\n\t\t\t\t"},o.default.createElement("h3",{className:"\n\t\t\t\t\t\t\t"+x["text--big"]+"\n\t\t\t\t\t\t\t"+x["text--accentFace"]+"\n\t\t\t\t\t\t\t"+x["currently-headline"]+"\n\t\t\t\t\t\t\t"+x["siteGrid-asideArea"]+"\n\t\t\t\t\t\t"},"Currently"),o.default.createElement("aside",{className:"\n\t\t\t\t\t\t\t"+x["siteGrid-asideArea"]+"\n\t\t\t\t\t\t\t"+x["currently-summary"]+"\n\t\t\t\t\t\t"},o.default.createElement("ul",{className:"\n\t\t\t\t\t\t\t\t"+x["atMedium_text--small"]+"\n\t\t\t\t\t\t\t\t"+x.list+"\n\t\t\t\t\t\t\t\t"+x["list--bordered"]+"\n\t\t\t\t\t\t\t"},o.default.createElement("li",null,"Living in Brooklyn"),o.default.createElement("li",null,"Working at Meetup"),o.default.createElement("li",null,"Not looking for new side projects"))),o.default.createElement("div",{className:"\n\t\t\t\t\t\t"+x.runningText+"\n\t\t\t\t\t\t"+x["currently-body"]+"\n\t\t\t\t\t\t"+x["siteGrid-mainArea"]+"\n\t\t\t\t\t"},o.default.createElement("p",{className:"\n\t\t\t\t\t\t\t"+x.runningText+"\n\t\t\t\t\t\t\t"+x.paddingBottom+"\n\t\t\t\t\t\t"},"I’m working on tools for designers and tools for engineers to help us ship new things better and faster than we ever have before. So far, a lot of this work has been driven by the design system I established and maintain with Adam Detrick.")),o.default.createElement("div",{className:x["siteGrid-mainArea"]},o.default.createElement("h4",{className:x["text--subtleHeader"]},"Active projects"),o.default.createElement("ul",null,m.default.map(function(t,e){var n=e===m.default.length-1;return o.default.createElement("li",{className:!n&&x["paddingBottom--double"]},o.default.createElement("h5",{className:"\n\t\t\t\t\t\t\t\t\t\t\t\t"+x["text--accentFace"]+"\n\t\t\t\t\t\t\t\t\t\t\t"},o.default.createElement("a",{href:t.url,className:x["text--accentLink"]},t.name)),o.default.createElement("p",{className:x.runningText},t.description))}))))),o.default.createElement("section",{className:x.metaInfo},o.default.createElement("div",{className:x.bounds},o.default.createElement("div",{className:"\n\t\t\t\t\t\t"+x.siteGrid+"\n\t\t\t\t\t\t"+x["siteGrid--columns"]+"\n\t\t\t\t\t\t"+x["metaInfo-wrapper"]+"\n\t\t\t\t\t"},o.default.createElement("div",{className:"\n\t\t\t\t\t\t\t"+x["siteGrid-asideArea"]+"\n\t\t\t\t\t\t\t"+x["atMedium_text--small"]+"\n\t\t\t\t\t\t\t"+x.contact+"\n\t\t\t\t\t\t"},o.default.createElement("h2",{className:"\n\t\t\t\t\t\t\t\t"+x["text--accentFace"]+"\n\t\t\t\t\t\t\t"},"Get in touch"),o.default.createElement("p",{className:"\n\t\t\t\t\t\t\t\t"+x["siteGrid-mainArea"]+"\n\t\t\t\t\t\t\t\t"+x.paddingBottom+"\n\t\t\t\t\t\t\t"},"You can email me at ",o.default.createElement("a",{href:"mailto:mperrotti573@gmail.com",className:x["text--accentLink"]},"mperrotti573@gmail.com")," or find me elsewhere:"),o.default.createElement("ul",{className:"\n\t\t\t\t\t\t\t\t"+x.list+"\n\t\t\t\t\t\t\t"},h.default.map(function(t){return o.default.createElement("li",null,o.default.createElement("a",{href:t.link,className:x["contact-socialItem"]},o.default.createElement(c.default,{shape:t.iconShape,title:t.name,className:x["socialItem-icon"]}),o.default.createElement("span",null,t.name)))}))),o.default.createElement("div",{className:"\n\t\t\t\t\t\t\t"+x["siteGrid-mainArea"]+"\n\t\t\t\t\t\t\t"+x.inverted+"\n\t\t\t\t\t\t\t"+x.aboutSite+"\n\t\t\t\t\t\t\t"+x.runningText+"\n\t\t\t\t\t\t"},o.default.createElement("h2",{className:"\n\t\t\t\t\t\t\t\t"+x["text--accentFace"]+"\n\t\t\t\t\t\t\t\t"+x["paddingBottom--half"]+"\n\t\t\t\t\t\t\t"},"About this site"),o.default.createElement("p",null,"This is a static Github page made with ",o.default.createElement("a",{href:"#",className:x["text--accentLink"]},"Gatsby"),". The typefaces are ",o.default.createElement("a",{href:"#",className:x["text--accentLink"]},"Headline")," and ",o.default.createElement("a",{href:"#",className:x["text--accentLink"]},"Body"),". The portrait is taken from a doodle ",o.default.createElement("a",{href:"#",className:x["text--accentLink"]},"Kristen Stewart")," (no, not that one) did during a meeting. For more details, check out the source code on ",o.default.createElement("a",{href:"#",className:x["text--accentLink"]},"Github"),"."))))))};e.default=M,t.exports=e.default},268:function(t,e){},269:function(t,e){},271:function(t,e){},272:function(t,e){},186:function(t,e){"use strict";e.__esModule=!0;var n=[{name:"Swarm Design System guidelines site",url:"https://github.com/meetup/swarm-design-system",description:"A central place for Meetup’s designers and engineers to get information on our design system"},{name:"Meetup Web Components",url:"https://github.com/meetup/meetup-web-components/",description:"React components that can be reused across Meetup’s replatformed web apps"},{name:"Sasstools",url:"https://github.com/meetup/swarm-sasstools",description:"A library for styling web apps at Meetup - provides styles in CSS and utilities for SASS"},{name:"Constants",url:"https://github.com/meetup/swarm-constants/",description:"Cross-platform distribution for Meetup's design tokens"},{name:"Swarm Icons",url:"https://github.com/meetup/swarm-icons",description:"Cross-platform distribution for the icon set developed by Meetup's design team"}];e.default=n,t.exports=e.default},187:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.validShapesList=e.iconShapes=void 0;var r=n(5),i=a(r),o=e.iconShapes={linkedIn:i.default.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}),github:i.default.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}),dribbble:i.default.createElement("path",{d:"M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"}),instagram:i.default.createElement("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"}),twitter:i.default.createElement("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})};e.validShapesList=Object.keys(o)},188:function(t,e){"use strict";e.__esModule=!0;var n=[{name:"LinkedIn",iconShape:"linkedIn",link:"http://linkedin.com"},{name:"Github",iconShape:"github",link:"http://github.com"},{name:"Dribbble",iconShape:"dribbble",link:"http://dribbble.com"},{name:"Instagram",iconShape:"instagram",link:"http://instagram.com"},{name:"Twitter",iconShape:"twitter",link:"http://twitter.com"}];e.default=n,t.exports=e.default},404:function(t,e,n){t.exports=n.p+"static/portrait.43aaca85.png"}});
//# sourceMappingURL=component---src-pages-index-js-db8f60df0f45090ffffe.js.map