(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{256:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),i=n(255),l=n(69),c=n(220),u=n.n(c),p=n(223),f=n.n(p),s=n(225),b=n.n(s),y=n(227),m=n.n(y),h=n(122),w=n.n(h),E=n(228),g=n.n(E),v=n(131),d=n.n(v),S=n(187),O=n.n(S),j=n(204),_=n.n(j),k=n(217),D=n.n(k),P=n(216),C=n.n(P),T=n(206),N=n.n(T),x=(n(25),n(9));function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"Topbar",function(){return q});var q=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=I(t).call(this,e))||"object"!==J(o)&&"function"!=typeof o?R(r):o).toggleDrawer=n.toggleDrawer.bind(R(R(n))),n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,r["Component"]),n=t,(a=[{key:"toggleDrawer",value:function(){var e,t=this.props.topbarState.open;this.props.dispatch((e=!t,{type:x.a.SET_OPEN,open:e}))}},{key:"render",value:function(){var e=o.a.createElement(d.a,null,this.props.applicationState.routes.map(function(e,t){return o.a.createElement(O.a,{button:!0,key:e.viewFolderName},o.a.createElement(_.a,null,t%2==0?o.a.createElement(N.a,null):o.a.createElement(C.a,null)),o.a.createElement(i.a,{to:e.path},o.a.createElement(D.a,{primary:e.label})))})),t=this.props.topbarState.open;return o.a.createElement(u.a,{position:"static"},o.a.createElement(f.a,null,o.a.createElement(b.a,{color:"inherit","aria-label":"Menu",onClick:this.toggleDrawer},o.a.createElement(m.a,null)),o.a.createElement(w.a,{variant:"h6",color:"inherit"}," News ")),o.a.createElement(g.a,{open:t,onClose:this.toggleDrawer},o.a.createElement("div",{tabIndex:0,role:"button",onClick:this.toggleDrawer},e)))}}])&&F(n.prototype,a),l&&F(n,l),t}();t.default=Object(l.a)(Object(a.b)(function(e){return{topbarState:e.topbarState,applicationState:e.applicationState}})(q))}}]);