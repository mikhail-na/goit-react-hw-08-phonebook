"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[236],{9236:function(n,t,e){e.r(t),e.d(t,{default:function(){return hn}});var r=e(2791),a=e(9434),o=e(8094),i=e(3829),s=function(n){var t=n.filter.toLowerCase().trim();return n.contacts.items.filter((function(n){return n.name.toLowerCase().trim().includes(t)}))},p=function(n){return n.filters},u=function(n){return n.contacts.isLoading},c=e(5206),l=e(5386),d=e(1614),h=e(3366),m=e(7462),f=e(8182),g=e(3433),x=e(2466),v=e(7416),y=["sx"];function Z(n){var t,e=n.sx,r=function(n){var t,e,r={systemProps:{},otherProps:{}},a=null!=(t=null==n||null==(e=n.theme)?void 0:e.unstable_sxConfig)?t:v.Z;return Object.keys(n).forEach((function(t){a[t]?r.systemProps[t]=n[t]:r.otherProps[t]=n[t]})),r}((0,h.Z)(n,y)),a=r.systemProps,o=r.otherProps;return t=Array.isArray(e)?[a].concat((0,g.Z)(e)):"function"===typeof e?function(){var n=e.apply(void 0,arguments);return(0,x.P)(n)?(0,m.Z)({},a,n):a}:(0,m.Z)({},a,e),(0,m.Z)({},o,{sx:t})}var b=e(4419),j=e(6934),w=e(1402),C=e(4036),z=e(7225);function B(n){return(0,z.Z)("MuiTypography",n)}!function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Mui",r={};t.forEach((function(t){r[t]=(0,z.Z)(n,t,e)}))}("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var P,k,A,W,M,N,S,E,T,_,I,L,R=e(3329),F=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],q=(0,j.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,e.variant&&t[e.variant],"inherit"!==e.align&&t["align".concat((0,C.Z)(e.align))],e.noWrap&&t.noWrap,e.gutterBottom&&t.gutterBottom,e.paragraph&&t.paragraph]}})((function(n){var t=n.theme,e=n.ownerState;return(0,m.Z)({margin:0},e.variant&&t.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})})),J={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},O={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},$=r.forwardRef((function(n,t){var e=(0,w.Z)({props:n,name:"MuiTypography"}),r=function(n){return O[n]||n}(e.color),a=Z((0,m.Z)({},e,{color:r})),o=a.align,i=void 0===o?"inherit":o,s=a.className,p=a.component,u=a.gutterBottom,c=void 0!==u&&u,l=a.noWrap,d=void 0!==l&&l,g=a.paragraph,x=void 0!==g&&g,v=a.variant,y=void 0===v?"body1":v,j=a.variantMapping,z=void 0===j?J:j,P=(0,h.Z)(a,F),k=(0,m.Z)({},a,{align:i,color:r,className:s,component:p,gutterBottom:c,noWrap:d,paragraph:x,variant:y,variantMapping:z}),A=p||(x?"p":z[y]||J[y])||"span",W=function(n){var t=n.align,e=n.gutterBottom,r=n.noWrap,a=n.paragraph,o=n.variant,i=n.classes,s={root:["root",o,"inherit"!==n.align&&"align".concat((0,C.Z)(t)),e&&"gutterBottom",r&&"noWrap",a&&"paragraph"]};return(0,b.Z)(s,B,i)}(k);return(0,R.jsx)(q,(0,m.Z)({as:A,ref:t,ownerState:k,className:(0,f.Z)(W.root,s)},P))})),D=function(n){var t=n.title,e=n.children;return(0,R.jsxs)(d.Z,{style:{padding:"30px"},sx:{backgroundColor:"rgb(56, 60, 73)",width:800},children:[(0,R.jsx)($,{style:{display:"flex",justifyContent:"center",color:"white"},variant:"h2",sx:{fontSize:"34px",fontWeight:700},children:t}),e]})},U=e(9439),V=e(6382),X=e(168),Y=e(3081),G=Y.Z.form(P||(P=(0,X.Z)(["\ndisplay:flex;\nflex-direction:column;\njustify-content:center;\npadding: 20px 200px;\n\n\n"]))),H=Y.Z.input(k||(k=(0,X.Z)(["\n// width: 350px;\npadding: 14px;\nborder-radius: 8px;\noutline: none;\nborder: none;\n"]))),K=Y.Z.label(A||(A=(0,X.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-top:15px; \nfont-size:20px;\nfont-weight:500;\n"]))),Q=Y.Z.button(W||(W=(0,X.Z)(["\nfont-size:20px;\nfont-weight:600;\nborder:none;\nborder-radius: 8px;\npadding: 14px;\nmargin-top:40px;\nmargin-right:auto;\nmargin-left:auto;\ncursor: pointer;\nwidth:144px;\n"]))),nn=function(){var n=(0,a.I0)(),t=(0,a.v9)(s),e=(0,r.useState)(""),o=(0,U.Z)(e,2),p=o[0],u=o[1],c=(0,r.useState)(""),l=(0,U.Z)(c,2),d=l[0],h=l[1],m=function(){u(""),h("")},f=function(n){var t=n.currentTarget.value;"name"===n.currentTarget.name?u(t):h(t)};return(0,R.jsxs)(G,{onSubmit:function(e){e.preventDefault();var r=p;if(t.some((function(n){return n.name===r})))return m(),alert("You already have ".concat(r.toUpperCase()," in your contacts! Please try to change the name of the contact!"));var a=function(n,t){return{id:(0,V.x0)(),name:n,number:t}}(p,d);n((0,i.je)(a)),m()},autoComplete:"off",children:[(0,R.jsxs)(K,{children:["Name",(0,R.jsx)(H,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:p,onChange:f,placeholder:"Enter Name.."})]}),(0,R.jsxs)(K,{children:["Number",(0,R.jsx)(H,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:f,placeholder:"Enter Number.."})]}),(0,R.jsx)(Q,{type:"submit",children:"Add"})]})},tn=e(4808),en=Y.Z.input(M||(M=(0,X.Z)(["\n// width: 350px;\npadding: 14px;\nborder-radius: 8px;\noutline: none;\nborder: none;\n"]))),rn=Y.Z.label(N||(N=(0,X.Z)(["\ndisplay: flex;\nflex-direction: column;\n\npadding:0 200px;\nmargin-top:15px; \nfont-size:20px;\nfont-weight:500;\n"]))),an=Y.Z.h2(S||(S=(0,X.Z)(["\nfont-size:20px;\nfont-weight:500;\n"]))),on=function(){var n=(0,a.I0)(),t=(0,a.v9)(p);return(0,R.jsxs)(rn,{children:[(0,R.jsx)(an,{children:"Find contacts by name"}),(0,R.jsx)(en,{type:"text",name:"filter",placeholder:"Enter contact name...",value:t,onChange:function(t){var e=t.target.value;n((0,tn.l)(e))}})]})},sn=Y.Z.ul(E||(E=(0,X.Z)(["\npadding: 10px 200px;\nmargin: 0;\n"]))),pn=Y.Z.li(T||(T=(0,X.Z)(["\ndisplay: flex;\nalign-items: center;\nmargin: 8px;\n"]))),un=Y.Z.p(_||(_=(0,X.Z)(["\nmargin: 0;\nfont-size:20px;\nfont-weight:500;\n"]))),cn=Y.Z.span(I||(I=(0,X.Z)(["\nmargin-left: 8px;\nfont-size:20px;\nfont-weight:500;\n"]))),ln=Y.Z.button(L||(L=(0,X.Z)(["\nfont-size:20px;\nfont-weight:600;\n\nmargin: 8px 8px 8px auto;\n// margin-left:auto;\npadding: 8px 16px;\n\nborder: none;\nborder-radius: 7px;\ncursor: pointer;\n\n"]))),dn=function(){var n=(0,a.I0)(),t=(0,a.v9)(s);return(0,R.jsx)(sn,{children:t.map((function(t){var e=t.id,r=t.name,a=t.number;return(0,R.jsxs)(pn,{children:[(0,R.jsxs)(un,{children:[r,": ",(0,R.jsx)(cn,{children:a})]}),(0,R.jsx)(ln,{type:"button",onClick:function(){return n((0,i.xX)(e))},deleting:!0,children:"x"})]},e)}))})},hn=function(){var n=(0,a.I0)(),t=(0,a.v9)(u),e=(0,o.a)().user;return(0,r.useEffect)((function(){n((0,i.VC)())}),[n]),(0,r.useEffect)((function(){c.Am.success("Congratulations, ".concat(e.name," authorization was successful!"))}),[e.name]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(D,{title:"Phonebook",children:(0,R.jsx)(nn,{})}),(0,R.jsxs)(D,{title:"Contacts",children:[(0,R.jsx)(on,{}),(0,R.jsx)(dn,{}),t&&(0,R.jsx)(l.$,{})]})]})}}}]);
//# sourceMappingURL=236.948c6f5b.chunk.js.map