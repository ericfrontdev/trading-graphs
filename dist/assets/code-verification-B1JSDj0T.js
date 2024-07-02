import{ak as De,r as re,b as je,j as c,G as D,a as _e,S as ne,T as E}from"./index-CFwfqvE-.js";import{A as we}from"./AuthWrapper-Dvr4cKrJ.js";import{A as Ae}from"./AnimateButton-DH0De8WX.js";var ae={};(function(y){Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var d=$(re),j=["placeholder","separator","isLastChild","ariaLabelOverride","shouldRender","inputStyle","focus","isDisabled","hasErrored","errorStyle","isSuccessed","successStyle","focusStyle","disabledStyle","shouldAutoFocus","isInputNum","index","value","className","isInputSecure","onSubmit"];function _(r){if(typeof WeakMap!="function")return null;var a=new WeakMap,u=new WeakMap;return(_=function(n){return n?u:a})(r)}function $(r,a){if(r&&r.__esModule)return r;if(r===null||w(r)!=="object"&&typeof r!="function")return{default:r};var u=_(a);if(u&&u.has(r))return u.get(r);var e={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in r)if(i!=="default"&&Object.prototype.hasOwnProperty.call(r,i)){var s=n?Object.getOwnPropertyDescriptor(r,i):null;s&&(s.get||s.set)?Object.defineProperty(e,i,s):e[i]=r[i]}return e.default=r,u&&u.set(r,e),e}function x(){return x=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var u=arguments[a];for(var e in u)Object.prototype.hasOwnProperty.call(u,e)&&(r[e]=u[e])}return r},x.apply(this,arguments)}function oe(r,a){if(r==null)return{};var u=ue(r,a),e,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)e=i[n],!(a.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(r,e)&&(u[e]=r[e])}return u}function ue(r,a){if(r==null)return{};var u={},e=Object.keys(r),n,i;for(i=0;i<e.length;i++)n=e[i],!(a.indexOf(n)>=0)&&(u[n]=r[n]);return u}function q(r,a){if(!(r instanceof a))throw new TypeError("Cannot call a class as a function")}function ie(r,a){for(var u=0;u<a.length;u++){var e=a[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}function K(r,a,u){return a&&ie(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),r}function U(r,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(a&&a.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),a&&k(r,a)}function k(r,a){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},k(r,a)}function G(r){var a=le();return function(){var e=N(r),n;if(a){var i=N(this).constructor;n=Reflect.construct(e,arguments,i)}else n=e.apply(this,arguments);return se(this,n)}}function se(r,a){if(a&&(w(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return p(r)}function p(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function le(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function N(r){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(u){return u.__proto__||Object.getPrototypeOf(u)},N(r)}function f(r,a,u){return a in r?Object.defineProperty(r,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[a]=u,r}function w(r){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},w(r)}var ce=8,pe=37,fe=39,de=46,he=32,ve=13,C=function(a){return w(a)==="object"},ye=function(r){U(u,r);var a=G(u);function u(e){var n;return q(this,u),n=a.call(this,e),f(p(n),"getClasses",function(){for(var i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return s.filter(function(o){return!C(o)&&o!==!1}).join(" ")}),f(p(n),"getType",function(){var i=n.props,s=i.isInputSecure,t=i.isInputNum;return s?"password":t?"tel":"text"}),f(p(n),"getAriaLabel",function(i,s){var t=n.props.ariaLabelOverride;return t||"".concat(i===0?"Please enter verification code. ":"").concat(s?"Digit":"Character"," ").concat(i+1)}),n.input=d.default.createRef(),n}return K(u,[{key:"componentDidMount",value:function(){var n=this.props,i=n.focus,s=n.shouldAutoFocus,t=this.input.current;t&&i&&s&&t.focus()}},{key:"componentDidUpdate",value:function(n){var i=this.props.focus,s=this.input.current;n.focus!==i&&s&&i&&(s.focus(),s.select())}},{key:"render",value:function(){var n=this.props,i=n.placeholder,s=n.separator,t=n.isLastChild;n.ariaLabelOverride;var o=n.shouldRender,l=n.inputStyle,m=n.focus,I=n.isDisabled,g=n.hasErrored,h=n.errorStyle,b=n.isSuccessed,O=n.successStyle,P=n.focusStyle,S=n.disabledStyle;n.shouldAutoFocus;var T=n.isInputNum,V=n.index,R=n.value,F=n.className;n.isInputSecure,n.onSubmit;var L=oe(n,j);return d.default.createElement("div",{className:F,style:{display:"flex",alignItems:"center"}},d.default.createElement("input",x({"aria-label":this.getAriaLabel(V,T),style:Object.assign({width:"1em",textAlign:"center",padding:0},C(l)&&l,m&&C(P)&&P,I&&C(S)&&S,g&&!b&&C(h)&&h,b&&!g&&C(O)&&O),placeholder:i,className:this.getClasses(l,m&&P,I&&S,g&&!b&&h,b&&!g&&O),type:this.getType(),ref:this.input,disabled:I,value:R||""},L)),!t&&o&&s)}}]),u}(d.PureComponent),z=function(r){U(u,r);var a=G(u);function u(){var e;q(this,u);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return e=a.call.apply(a,[this].concat(i)),f(p(e),"state",{activeInput:0}),f(p(e),"getOtpValue",function(){return e.props.value?e.props.value.toString().split(""):[]}),f(p(e),"getPlaceholderValue",function(){var t=e.props,o=t.placeholder,l=t.numInputs;if(typeof o=="string"){if(o.length===l)return o;o.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}}),f(p(e),"handleOtpChange",function(t){var o=e.props.onChange,l=t.join("");o(l)}),f(p(e),"isInputValueValid",function(t){var o=e.props.isInputNum?!isNaN(parseInt(t,10)):typeof t=="string";return o&&t.trim().length===1}),f(p(e),"focusInput",function(t){var o=e.props.numInputs,l=Math.max(Math.min(o-1,t),0);e.setState({activeInput:l})}),f(p(e),"focusNextInput",function(){var t=e.state.activeInput;e.focusInput(t+1)}),f(p(e),"focusPrevInput",function(){var t=e.state.activeInput;e.focusInput(t-1)}),f(p(e),"changeCodeAtFocus",function(t){var o=e.state.activeInput,l=e.getOtpValue();l[o]=t[0],e.handleOtpChange(l)}),f(p(e),"handleOnPaste",function(t){t.preventDefault();var o=e.state.activeInput,l=e.props,m=l.numInputs,I=l.isDisabled;if(!I){for(var g=e.getOtpValue(),h=o,b=t.clipboardData.getData("text/plain"),O=e.props.isInputNum?b.replace(/\D/g,""):b,P=O.slice(0,m-o).split(""),S=0;S<m;++S)S>=o&&P.length>0&&(g[S]=P.shift(),h++);e.setState({activeInput:h},function(){e.focusInput(h),e.handleOtpChange(g)})}}),f(p(e),"handleOnChange",function(t){var o=t.target.value;e.isInputValueValid(o)&&e.changeCodeAtFocus(o)}),f(p(e),"handleOnKeyDown",function(t){t.keyCode===ce||t.key==="Backspace"?(t.preventDefault(),e.changeCodeAtFocus(""),e.focusInput(e.state.activeInput-1)):t.keyCode===de||t.key==="Delete"?(t.preventDefault(),e.changeCodeAtFocus("")):t.keyCode===pe||t.key==="ArrowLeft"?(t.preventDefault(),e.focusPrevInput()):t.keyCode===fe||t.key==="ArrowRight"?(t.preventDefault(),e.focusNextInput()):t.keyCode===he||t.key===" "||t.key==="Spacebar"||t.key==="Space"?t.preventDefault():(t.keyCode===ve||t.key==="Enter")&&e.props.onSubmit()}),f(p(e),"handleOnInput",function(t){var o=t.target.value;if(t.target.value){if(t.target.value&&t.target.value.length>1){t.preventDefault();for(var l=e.props.numInputs,m=e.state.activeInput,I=e.getOtpValue(),g=t.target.value.slice(0,l-m).split(""),h=0;h<l;++h)h>=m&&g.length>0&&(I[h]=g.shift());e.handleOtpChange(I),e.focusInput(e.props.numInputs)}else if(o&&o.trim().length>1)t.clipboardData={getData:function(){return o.trim()}},e.handleOnPaste(t);else if(e.isInputValueValid(t.target.value))e.focusNextInput();else if(!e.props.isInputNum){var b=t.nativeEvent;b.data===null&&b.inputType==="deleteContentBackward"&&(t.preventDefault(),e.changeCodeAtFocus(""),e.focusPrevInput())}}}),f(p(e),"renderInputs",function(){for(var t=e.state.activeInput,o=e.props,l=o.id,m=o.autoComplete,I=o.numInputs,g=o.inputStyle,h=o.focusStyle,b=o.separator,O=o.separateAfter,P=O===void 0?1:O,S=o.isDisabled,T=o.disabledStyle,V=o.hasErrored,R=o.errorStyle,F=o.isSuccessed,L=o.successStyle,ge=o.shouldAutoFocus,be=o.isInputNum,Ie=o.isInputSecure,Se=o.className,A=o.inputProps,Oe=o.onSubmit,H=[],J=e.getOtpValue(),Q=e.getPlaceholderValue(),X=e.props["data-cy"],Y=e.props["data-testid"],Z=e.props["custom-test-attr"],ee=e.props["custom-test-id"],xe=function(v){var B=void 0;(v+1)%parseInt(P)===0?B=!0:B=!1;var te={};Z&&(te[Z]=ee&&"".concat(ee,"-").concat(v));var M={};A&&(Array.isArray(A)?A[v]&&(M=A[v]):M=A),H.push(d.default.createElement(ye,x({id:l&&"".concat(l,"-").concat(v),autoComplete:m??"off",placeholder:Q&&Q[v],key:v,index:v,focus:t===v,value:J&&J[v],onChange:e.handleOnChange,onKeyDown:e.handleOnKeyDown,onInput:e.handleOnInput,onPaste:e.handleOnPaste,onFocus:function(Pe){e.setState({activeInput:v}),Pe.target.select()},onBlur:function(){return e.setState({activeInput:-1})},separator:b,inputStyle:g,focusStyle:h,isLastChild:v===I-1,isDisabled:S,disabledStyle:T,hasErrored:V,errorStyle:R,isSuccessed:F,successStyle:L,shouldAutoFocus:ge,isInputNum:be,isInputSecure:Ie,className:Se,"data-cy":X&&"".concat(X,"-").concat(v),"data-testid":Y&&"".concat(Y,"-").concat(v),shouldRender:B,onSubmit:Oe},M,te)))},W=0;W<I;W++)xe(W);return H}),e}return K(u,[{key:"componentDidUpdate",value:function(){var n=this.props.value,i=this.state.activeInput;n==""&&i>0&&this.setState({activeInput:0})}},{key:"render",value:function(){var n=this.props.containerStyle;return d.default.createElement("div",{style:Object.assign({display:"flex"},C(n)&&n),className:C(n)?"":n},this.renderInputs())}}]),u}(d.Component);f(z,"defaultProps",{numInputs:4,onChange:function(a){return console.log(a)},isDisabled:!1,shouldAutoFocus:!1,value:"",isInputSecure:!1,onSubmit:function(a){return console.log(a)}});var me=z;y.default=me})(ae);const Ee=De(ae);function Ne(){const y=je(),[d,j]=re.useState();return c.jsxs(D,{container:!0,spacing:3,children:[c.jsx(D,{item:!0,xs:12,children:c.jsx(Ee,{value:d,onChange:_=>j(_),numInputs:4,containerStyle:{justifyContent:"space-between"},inputStyle:{width:"100%",margin:"8px",padding:"10px",border:"1px solid",borderColor:y.palette.divider,borderRadius:4,":hover":{borderColor:y.palette.primary.main}},focusStyle:{outline:"none",boxShadow:y.customShadows.primary,border:"1px solid",borderColor:y.palette.primary.main}})}),c.jsx(D,{item:!0,xs:12,children:c.jsx(Ae,{children:c.jsx(_e,{disableElevation:!0,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Continue"})})}),c.jsx(D,{item:!0,xs:12,children:c.jsxs(ne,{direction:"row",justifyContent:"space-between",alignItems:"baseline",children:[c.jsx(E,{children:"Did not receive the email? Check your spam filter, or"}),c.jsx(E,{variant:"body1",sx:{minWidth:85,ml:2,textDecoration:"none",cursor:"pointer"},color:"primary",children:"Resend code"})]})})]})}function Fe(){let y=window.localStorage.getItem("email"),d=[];if(y){let j=y.split(""),_=j.indexOf("@");j.forEach(($,x)=>{x>=1&&x<=_-2?d.push("*"):d.push(j[x])})}return c.jsx(we,{children:c.jsxs(D,{container:!0,spacing:3,children:[c.jsx(D,{item:!0,xs:12,children:c.jsxs(ne,{spacing:1,children:[c.jsx(E,{variant:"h3",children:"Enter Verification Code"}),c.jsx(E,{color:"secondary",children:"We send you on mail."})]})}),c.jsx(D,{item:!0,xs:12,children:c.jsxs(E,{children:["We`ve send you code on jone. ",y&&d.length>0?d.join(""):"****@company.com"]})}),c.jsx(D,{item:!0,xs:12,children:c.jsx(Ne,{})})]})})}export{Fe as default};
