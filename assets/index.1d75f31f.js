var k=Object.defineProperty,w=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(i,t,r)=>t in i?k(i,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[t]=r,b=(i,t)=>{for(var r in t||(t={}))q.call(t,r)&&y(i,r,t[r]);if(N)for(var r of N(t))S.call(t,r)&&y(i,r,t[r]);return i},x=(i,t)=>w(i,C(t));import{R as p,j as n,B as a,a as e,L as h,d as M,M as v,b as d,N as O,r as I,T as l,c as f,e as E,f as L,C as _,g as P,h as R,S as z,i as A,k as T}from"./vendor.c1c429a8.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))m(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}};j();var D="/assets/rexcloud_logo.4aea3b31.svg";const W=()=>{const[i,t]=p.useState(null),[r,m]=p.useState(null),s=u=>{i||(u.preventDefault(),t({top:64,left:u.pageX}),console.log(u.pageX,u.pageY))},o=u=>{r||(u.preventDefault(),m({top:64,left:u.pageX}))},c=()=>{m(null)};return n(a,{className:"header",children:[n(a,{className:"header-wrapper",children:[e(h,{to:"/",children:e("img",{src:D,alt:"",className:"logo-container"})}),n(h,{to:"/contact",className:"contact-link",children:[e(M,{style:{width:"18px"}}),e("span",{className:"contact-text",children:"Contact"})]})]}),n(a,{className:"header-dropdown-wrapper",children:[n(a,{className:"options-menu",children:[e("button",{className:"option-btn",onClick:s,children:e("span",{className:"option-text",children:"Solutions"})}),n(v,{open:!!i,onClose:()=>t(null),anchorReference:"anchorPosition",anchorPosition:i,children:[e(d,{children:"RexCloud"}),n(O,{label:"IIoT Edge Gateways",parentMenuOpen:!!i,children:[e(d,{children:"REX-EDGE 1525-EP"}),e(d,{children:"REX-EDGE 1525-EX"})]})]})]}),n(a,{className:"options-menu",children:[e("button",{className:"option-btn",onClick:o,children:e("span",{className:"option-text",children:"About Us"})}),n(v,{open:!!r,onClose:()=>m(null),anchorReference:"anchorPosition",anchorPosition:r,children:[e(d,{onClick:c,children:"Industrial IOT"}),e(d,{onClick:c,children:"Wireless Solution"}),e(d,{onClick:c,children:"Preventive and Predictive Maintenance"}),e(d,{onClick:c,children:"Water and waste water management"}),e(d,{onClick:c,children:"Energy"}),e(d,{onClick:c,children:"Building Management"})]})]}),e(a,{className:"options-menu",children:e("button",{className:"option-btn",children:e(h,{to:"/career",className:"option-text",children:"Career"})})})]}),n(a,{className:"links-wrapper",children:[e(h,{to:"/",className:"link-item",children:e("span",{className:"link-text",children:"Products & Services"})}),e(h,{to:"/",className:"link-item",children:e("span",{className:"link-text",children:"Market-specific solutions"})}),e(h,{to:"/",className:"link-item",children:e("span",{className:"link-text",children:"Company"})})]})]})};var G="/assets/slideshow1.5363c271.jpg",X="/assets/slideshow2.dab9ee9a.jpg",$="/assets/slideshow3.01c2017f.jpg";function F(){const i=p.createRef();p.useState();const t=[G,X,$],r=[{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,",body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}],m={duration:2e3,autoplay:!0,transitionDuration:1e3,arrows:!0,infinite:!0,easing:"ease",indicators:s=>n(a,{className:"indicator text-wrap",children:[e(l,{className:"pt-2 px-2 m-0 fs-5",variant:"h6",children:r[s].heading}),e(l,{className:"pt-2 px-2 m-0 fs-6",children:r[s].body}),e(a,{className:"slider"})]})};return e(a,{className:"slideshow",children:e(a,{className:"slide-container",children:e(I.exports.Slide,x(b({ref:i},m),{children:t.map((s,o)=>e(a,{className:"each-slide",children:e("img",{className:"lazy",src:s,alt:"slide"})},o))}))})})}const B=[{icon:e(f,{sx:{fontSize:50}}),heading:"Consulting",body:"A quality audit begins with leading professionals and technology."},{icon:e(E,{sx:{fontSize:50}}),heading:"Analytics",body:"A wide range of complex famulus and restructing-related matters."},{icon:e(L,{sx:{fontSize:50}}),heading:"Strategy",body:"The process of valuing your estate and the right documents in place."},{icon:e(f,{sx:{fontSize:50}}),heading:"Creative",body:"Making decisions on allocating resources pursue the strategy."},{icon:e(f,{sx:{fontSize:50}}),heading:"Production",body:"The essential accounting for income taxes and recognize-tax liabilities."},{icon:e(f,{sx:{fontSize:50}}),heading:"Promotion",body:"Pertain to buyers who purchase services for consumption than resale."}];function J(){return n(a,{className:"whywe-section pt-5 pb-5",children:[n(a,{className:"top-section pb-2",children:[e(l,{className:"whywe-title text-info",variant:"h6",children:"Why We"}),e(l,{variant:"h2",children:"We help you to go ahead"}),e("p",{className:"lead introduction text-secondary",children:"We transform the in which working capital solutions are delivered to large opportunities. Our team combines technology and financial services expertise to deliver for our customers."})]}),e(a,{className:"bottom-section d-grid gap-3 px-4 mx-4 p-2",children:e(a,{className:"row row-cols-3 items-grid",children:B.map((i,t)=>n(a,{className:"item d-flex p-4 justtify-content-center align-items-center",children:[e(a,{className:"icon-div w-50",children:i.icon}),n(a,{className:"text-div text-start",children:[e(l,{className:"text-dark fs-3",variant:"h6",children:i.heading}),e(l,{className:"text-secondary fw-normal",children:i.body})]})]},t))})})]})}var U="/assets/clients.1bf40f48.png";function K(){return e(a,{className:"ourclients-section pb-5",children:n(a,{className:"ourclients-section-wrapper",children:[e(l,{className:"text-info p-4",variant:"h6",children:"Our Clients"}),e("img",{src:U,className:"img-fluid",alt:"Clients Image"})]})})}var g="/assets/profile placeholder.d124081b.jpg";const H=[{image:g,body:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qula non numquam.",name:"Jack Johnson"},{image:g,body:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qula non numquam.",name:"Jessica Robinson"},{image:g,body:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qula non numquam.",name:"Edward Klarson"}];function Y(){return e(a,{className:"testimonials-section p-5",children:n(a,{className:"testimonials-section-wrapper",children:[n(a,{className:"top-section pb-5",children:[e(l,{className:"text-info p-3",variant:"h6",children:"Clients Testimonials"}),e(l,{variant:"h2",children:"What Our Clients Say"}),e("p",{className:"lead text-secondary",children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus quod maxime placeat facere possimus, omnis voluptas assumenda."})]}),e(a,{className:"bottom-section px-5 pb-5",children:e(a,{className:"testimonials-wrapper",children:H.map((i,t)=>n(a,{className:"testimonial",children:[e("img",{src:i.image,alt:"",className:"img-fluid profile-img"}),e(_,{sx:{maxWidth:"30%"},children:n(P,{className:"testimonial-body",children:[e(l,{className:"text-secondary fs-6 testimonial-text",variant:"body2",children:i.body}),e(l,{className:"fs-6 p-2 text-end testimonial-name",children:i.name})]})},t)]},t))})})]})})}const Z=[{heading:"IXON Cloud",headingLink:"/",children:[{name:"All features",link:"/"},{name:"Connectivity products",link:"/"},{name:"Cloud infrastructure",link:"/"},{name:"Platform status",link:"/"},{name:"Security & ISO 27001 ISMS",link:"/"},{name:"Release notes",link:"/"}]},{heading:"Get started",headingLink:"/",children:[{name:"Step by step guide",link:"/"},{name:"Interactive product tour",link:"/"},{name:"Request a live demo",link:"/"},{name:"Find a distributor",link:"/"},{name:"Request expert consultation",link:"/"},{name:"Contact us",link:"/"}]},{heading:"Technical Support",headingLink:"/",children:[{name:"Support portal",link:"/"},{name:"Developer portal",link:"/"},{name:"IXON Community forum",link:"/"},{name:"Knowledge articles",link:"/"},{name:"Videos",link:"/"}]},{heading:"Join IXON",headingLink:"/",children:[{name:"Create your free account",link:"/"},{name:"Request IXrouter trial kit",link:"/"}]}];function V(){return e(a,{className:"footer",children:Z.map((i,t)=>e(a,{className:"footer-col"},t))})}var Q="/assets/our-story_image.a1ac2ca6.jpg";function ee(){return e(a,{className:"ourstory-section text-justify row",children:n(a,{className:"section-wrapper d-flex flex-row justify-content-center align-items-center ",children:[e(a,{className:"left-section col-md-6 col-sm-6 col-xs-12",children:e(a,{className:"image-wrapper",children:e(a,{className:"image",children:e("img",{src:Q,alt:"our story image"})})})}),e(a,{className:"right-section col-md-6 col-sm-6 col-xs-12",children:n(a,{className:"content",children:[e(l,{variant:"h6",className:"text-info",children:"Our Story"}),e(l,{variant:"h3",className:"fw-normal text-info heading",children:"A WORLD-LEADING DESIGN, ENGINEERING AND PROJECT-MANAGEMENT CONSULTANCY"}),e(l,{className:"text-secondary",children:"Our lived environment is facing rapid change; to face these challenges, we are radically transforming the way infrastructure is designed, delivered and operated. Our aim is to help create a world that is diverse, sustainable, full of thriving communities and working better for all."}),e(h,{to:"/",className:"link pt-5",children:"Find out more"})]})})]})})}function ae(){return e(a,{className:"contact-us ",children:e(a,{className:"container",children:e(a,{className:"row",children:n(a,{className:"col-md-12 p-0 px-sm-3",children:[e(a,{className:"heading-wrapper",children:e(l,{variant:"h2",className:"",children:"CONTACT US"})}),e(a,{className:"form-wrapper",children:n("form",{children:[n(a,{className:"contact-row",children:[n(a,{className:"form-group col-md-6 ",children:[e("label",{for:"name",children:"First Name"}),e("input",{id:"name",className:"form-control",type:"text",placeholder:"Enter your First Name",pattern:"^([a-zA-Z]{3,16})$",name:"first_name",spellCheck:"false",required:!0})]}),n(a,{className:"form-group col-md-6 ",children:[e("label",{for:"last_name",children:"Last Name"}),e("input",{id:"last_name",className:"form-control",type:"text",placeholder:"Enter your Last Name",pattern:"^([a-zA-Z]{3,16})$",name:"last_name",spellCheck:"false",required:!0})]})]}),n(a,{className:"contact-row",children:[n(a,{className:"form-group col-md-6 ",children:[e("label",{for:"mobile",children:"Mobile"}),e("input",{id:"Mobile",type:"text",class:"form-control",placeholder:"9876543210",pattern:"^([0-9]{10,10})$",title:"Mobile number",required:"required",name:"mobile",spellcheck:"false","data-ms-editor":"true"})]}),n(a,{className:"form-group col-md-6 ",children:[e("label",{for:"email",children:"Email"}),e("input",{id:"email",className:"form-control",type:"text",placeholder:"john@jshealth.com",pattern:"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",name:"first_name",spellCheck:"false",required:!0})]})]}),e(a,{className:"contact-row",children:n(a,{className:"form-group col-md-12 ",children:[e("label",{for:"Message",children:"Message"}),e("textarea",{class:"form-control",rows:"4",id:"Message",placeholder:"Type your message here",name:"message",pattern:"[\\s\\S]{6,300}",required:"required",spellcheck:"false","data-ms-editor":"true"})]})}),e(a,{class:"form-group text-center",children:e("button",{children:"Send Message"})})]})})]})})})})}function ne(){return n(a,{className:"home-page",children:[e(F,{}),e(ee,{}),e(J,{}),e(K,{}),e(Y,{}),e(ae,{}),e(V,{})]})}function te(){return e(R,{children:n("div",{className:"App",children:[e(W,{}),e(z,{children:e(A,{exact:!0,path:"/",component:ne})})]})})}T.render(e(p.StrictMode,{children:e(te,{})}),document.getElementById("root"));
