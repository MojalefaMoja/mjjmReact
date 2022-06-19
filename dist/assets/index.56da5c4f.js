var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(t,i,n)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,l=(e,t)=>{for(var i in t||(t={}))a.call(t,i)&&o(e,i,t[i]);if(n)for(var i of n(t))r.call(t,i)&&o(e,i,t[i]);return e};import{W as s,H as m,L as d,r as c,u as p,a as g,R as h,I as f,F as x,C as u,b as w,c as b,d as v,e as y,f as E,m as k,g as $,h as j,S as z,D as S,i as T,A,j as L,k as P,l as C,n as H,o as M,B as W,p as I,q as O,s as J}from"./vendor.c81c24b4.js";const D=s`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }
`,U=m.div`
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`,B=m.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({inverse:e})=>e?"$403ae3":"#fff"};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`,_=m.h2`
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	margin: ${({margin:e})=>e||""};
	margin-bottom: ${({mb:e})=>e||""};
	margin-top: ${({mt:e})=>e||""};
	color: ${({inverse:e})=>e?"$403ae3":"#fff"};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({width:e})=>e||"100%"};
`,F=m.span`
	color: ${({color:e})=>e||""};
	font-size: ${({size:e})=>e||""};
	font-weight: ${({weight:e})=>e||""};
	letter-spacing: ${({spacing:e})=>e||""};
	padding: ${({padding:e})=>e||""};
	margin: ${({margin:e})=>e||""};
	margin-bottom: ${({mb:e})=>e||""};
	margin-top: ${({mt:e})=>e||""};
`,N=m.section`
	padding: ${({padding:e})=>e||"140px 0"};
	margin: ${({margin:e})=>e||""};
	background: ${({inverse:e})=>e?"white":"#071c2f"};
	position: ${({position:e})=>e||""};
	width: ${({width:e})=>e||"auto"};
	min-width: ${({minWidth:e})=>e||"auto"};
	max-width: ${({maxWidth:e})=>e||"auto"};
	height: ${({height:e})=>e||"auto"};
	max-height: ${({maxHeight:e})=>e||"auto"};
	min-height: ${({minHeight:e})=>e||"auto"};
	@media screen and (max-width: 768px) {
		padding: ${({smPadding:e})=>e||"70px 0"};
	}
`,q=m.div`
	display: flex;
	justify-content: ${({justify:e})=>e||""};
	align-items: ${({align:e})=>e||""};
	gap: ${({gap:e})=>e||""};
	padding: ${({padding:e})=>e||""};
	margin: ${({margin:e})=>e||""};
	position: ${({position:e})=>e||""};
	width: ${({width:e})=>e||"auto"};
	min-width: ${({minWidth:e})=>e||"auto"};
	max-width: ${({maxWidth:e})=>e||"auto"};
	height: ${({height:e})=>e||"auto"};
	max-height: ${({maxHeight:e})=>e||"auto"};
	min-height: ${({minHeight:e})=>e||"auto"};
	flex-wrap: ${({wrap:e})=>e||""};
`,R=m.div`
	display: flex;
	flex-direction: column;
	justify-content: ${({justify:e})=>e||""};
	align-items: ${({align:e})=>e||""};
	gap: ${({gap:e})=>e||""};
	padding: ${({padding:e})=>e||""};
	margin: ${({margin:e})=>e||""};
	position: ${({position:e})=>e||""};
	width: ${({width:e})=>e||"auto"};
	min-width: ${({minWidth:e})=>e||"auto"};
	max-width: ${({maxWidth:e})=>e||"auto"};
	height: ${({height:e})=>e||"auto"};
	max-height: ${({maxHeight:e})=>e||"auto"};
	min-height: ${({minHeight:e})=>e||"auto"};
`,V=m.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	outline: none;
	border: 2px solid #fff;
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:before {
		background: #fff;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 100%;
		height: 0%;
		transform: translate(-50%, -50%) rotate(45deg);
	}
	&:hover:before {
		height: 500%;
	}
	&:hover {
		color: black;
	}
`,Q=m.nav`
	background: transparent;
	margin-bottom: -80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	top: 0;
	z-index: 50;
	width: 100%;
	transition: background-color 0.3s ease-in;
`,G=m(U)`
	display: flex;
	justify-content: start;
	height: 80px;
	${U}
`,K=m(d)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	z-index: 50;
`,Y=m.img`
	margin-right: 1rem;
	width: 3rem;
`,X=m.div`
	display: none;
	z-index: 50;
	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`,Z=m.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	width: 100%;
	@media screen and (max-width: 960px) {
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: fixed;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: ${({show:e})=>e?1:0};
		visibility: ${({show:e})=>e?"visible":"hidden"};
		transform: translateY(${({show:e})=>e?"0":"-10px"});
		transition: opacity 0.5s ease;
		background-color: #071c2f;
	}
	> li:first-child {
		margin-left: auto;
	}
`,ee=m.li`
	height: 80px;
	cursor: pointer;
	@media screen and (max-width: 960px) {
		width: 100%;
		&:hover {
			border: none;
		}
	}
`,te=m.span`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;
	&:hover {
		color: #c8c9d8;
		transition: all 0.3s ease;
	}
	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;
		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;m(d)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
`;const ie=[{to:"/",text:"About",id:"about"}],ne=()=>{const[e,t]=c.exports.useState(!1);let i=p(),n=g();const a=(e,a)=>{a&&"/"===n.pathname&&(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})(a),i.push(e),t(!1)};return h.createElement(f.Provider,{value:{color:"#fff"}},h.createElement(Q,null,h.createElement(G,null,h.createElement(K,{to:"/"},h.createElement(Y,{src:"./Assets/portfolio.png",alt:"logo"}),"MJJM's Portfolio"),h.createElement(X,{onClick:()=>{t(!e)}},e?h.createElement(x,null):h.createElement(u,null)),h.createElement(Z,{show:e},ie.map(((e,t)=>h.createElement(ee,{key:t},h.createElement(te,{onClick:()=>a(e.to,e.id)},e.text))))))))};m.div`
	background-color: #101522;
	padding: 4rem 0 2rem 0;
`;const ae=m.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
`;m.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
	padding: 24px;
	color: #fff;
`,m.p`
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
		sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`,m(q)`
	flex-wrap: wrap;
	@media screen and (max-width: 820px) {
		> div {
			width: 20%;
		}
		> div:first-child {
			width: 100%;
		}
	}
	@media screen and (max-width: 420px) {
		flex-direction: column;
		align-items: center;
		* {
			width: 100%;
			text-align: center;
		}
	}
`;const re=m.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
`,oe=m(R)`
	@media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;m.p`
	margin-bottom: 24px;
	font-size: 20px;
`,m.div`
	width: 100%;
	max-width: 1000px;
	display: flex;
	justify-content: center;
	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;const le=m.div`
	display: flex;
	flex-direction: column;
	margin: 16px;
	text-align: left;
	box-sizing: border-box;
	color: #fff;
	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`,se=m.h2`
	margin-bottom: 16px;
`,me=m(d)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;
	&:hover {
		color: #0467fb;
		transition: 0.3s ease-out;
	}
`,de=m(d)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
`,ce=m.img`
	margin-right: 10px;
	width: 40px;
`,pe=m.div`
	color: #fff;
	margin-bottom: 16px;
	width: 100%;
	font-size: 0.8rem;
	text-align: center;
	border-top: 1px solid #2d3748;
	padding: 1rem 0;
	margin: 1rem 0 0;
`,ge=m.a`
	color: #fff;
	font-size: 24px;
`,he=m.div`
	color: white;
	margin: 0.4rem auto 0.4rem;
	max-width: 20rem;
	font-weight: 500;
	font-size: 0.875rem;
	line-height: 2;
	text-align: center;
	@media screen and (min-width: 1000px) {
		margin-left: 0px;
		text-align: left;
		margin-right: 1rem;
	}
`,fe=e=>h.createElement(e,null),xe=[{name:"Facebook",icon:fe(E)},{name:"Instagram",icon:fe(w)},{name:"YouTube",icon:fe(b)},{name:"Twitter",icon:fe(v)},{name:"LinkedIn",icon:fe(y)}],ue=[{title:"Main",links:["Blog","FAQs","Support","About us"]},{title:"Details",links:["Login","Personal","Business","Team"]},{title:"Press",links:["Logos","Events","Stories","Office"]},{title:"Legal",links:["GDPR","Privacy Policy","Terms of Service","Disclaimer"]}];function we(){return h.createElement(N,{padding:"4rem 0 2rem 0"},h.createElement(ae,null,h.createElement(re,{justify:"space-between"},h.createElement(oe,{id:"footerLogo"},h.createElement(de,{to:"/"},h.createElement(ce,{src:"./Assets/portfolio.png"}),"MJJM's Portfolio"),h.createElement(he,null,"173 The Aloes Road Karenpark Akasia Pretoria North 0118"),h.createElement(q,{align:"center",margin:"auto  0 0 0",gap:"1rem"},xe.map(((e,t)=>h.createElement(ge,{key:t,href:"/",target:"_blank","aria-label":e.name},e.icon))))),ue.map(((e,t)=>h.createElement(le,{key:t},h.createElement(se,null,e.title),e.links.map(((e,t)=>h.createElement(me,{key:t,to:"/"},e))))))),h.createElement(pe,null,"MJJM © 2021")))}const be=m.div`
	display: flex;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
	flex-direction: ${({reverse:e})=>e?"row-reverse":"row"};
	justify-content: space-around;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
	}
`,ve=m(k.div)`
	margin-bottom: 15px;
	padding-right: 15px;
	padding-left: 15px;
	flex: 1;
	z-index: 10;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
		justify-content: center;
		align-items: center;
	}
`,ye=m.div`
	max-width: 540px;
	padding-top: 0;
	@media screen and (max-width: 768px) {
		padding-bottom: 65px;
		> h1,
		p {
			text-align: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	> img {
		width: 300px;
		margin-left: -3px;
	}
`,Ee=m(k.div)`
	display: flex;
	justify-content: 'flex-end';
	max-height: 700px;
	justify-content: center;
	position: relative;
`,ke=m(k.div)`
	font-size: 0.9rem;
	line-height: 16px;
	font-weight: 550;
	letter-spacing: 1.4px;
	margin-bottom: 1.3rem;
	color: #979797;
`,$e=m(k.img)`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	max-height: 700px;
	z-index: 1;
`,je=m(k.h2)`
	margin-bottom: 24px;
	font-size: 3rem;
	line-height: 1.1;
	font-weight: 600;
	color: ${({inverse:e})=>e?"#0c4577":"white"};
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`,ze=m(k.p)`
	max-width: 440px;
	margin-bottom: 35px;
	line-height: 24px;
	color: ${({inverse:e})=>e?"#6a6a6a":"white"};
`,Se=({primary:e,topLine:t,headline:i,description:n,buttonLabel:a,img:r,alt:o,inverse:l,reverse:s})=>{const m={opacity:0,y:30},d=$(),{ref:p,inView:g}=j({threshold:.2});return c.exports.useEffect((()=>{g&&d.start({opacity:1,y:0})}),[g,d]),h.createElement(N,{inverse:l,ref:p},h.createElement(U,null,h.createElement(be,{reverse:s},h.createElement(ve,null,h.createElement(ye,null,h.createElement(ke,{initial:m,transition:{delay:.3,duration:.6},animate:d},t.text),h.createElement(je,{initial:m,transition:{delay:.5,duration:.6},animate:d,inverse:l},i),h.createElement(ze,{initial:m,transition:{delay:.7,duration:.6},animate:d,inverse:l},n))),h.createElement(ve,{initial:m,transition:{delay:.5,duration:.6},animate:d},h.createElement(Ee,null,h.createElement($e,{src:r,alt:o,whileHover:{rotate:2,scale:1.02},transition:{duration:.5}}))))))},Te=m.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
`,Ae=m.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
`,Le=m.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`,Pe=m(k.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #f3f3f3;
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 20px;
`,Ce=m.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;
	padding: 30px;
`,He=m.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`,Me=m.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;
	@media screen and (max-width: 768px) {
		display: none;
	}
`,We=e=>h.createElement(e,{size:"3rem",color:"#0f0f0f"}),Ie=[{name:"C++",description:"knowledgeable in c++ programming and object orieted programming ",icon:We(P),imgClass:"one"},{name:"Javascript",description:"Web development and UI design experience",icon:We(z),imgClass:"two"},{name:"Linux",description:"Experienced in Linux file and directory managemnt and virtual machine linux operations",icon:We(S),imgClass:"three"},{name:"Business Analysis",description:"Technical analysis of system requirements and technological involvement in bussiness requirements",icon:We(T),imgClass:"four"},{name:"Team Player",description:"Work well with others and willing to assit in any team effort",icon:We(A),imgClass:"five"},{name:"SQL",description:"Experienced in sql documentation and database management even with SQL schema ",icon:We(L),imgClass:"six"}],Oe=()=>{const e={y:40,opacity:0},t={y:0,opacity:1};return h.createElement(N,{smPadding:"50px 10px",position:"relative",inverse:!0,id:"about"},h.createElement(U,null,h.createElement(Ae,null,h.createElement(Te,null,"What I Have To Offer")),h.createElement(Le,null,Ie.map(((i,n)=>h.createElement(Pe,{initial:e,animate:t,transition:{duration:.5+.1*n},key:n},h.createElement(Ce,{className:i.imgClass},i.icon),h.createElement(He,null,i.name),h.createElement(Me,null,i.description)))))))},Je=[{title:"Hoerskool Akasia",description:"Natinal senior certificate 2015",image:"./Assets/Hoërskool_Akasia.jpg"},{title:"Tshwane University of Technology (TUT) ",description:"National Diploma Information Technology: Software Development 2021",image:"./Assets/Tshwane_University_of_Technology_logo.svg"},{title:"Shape.AI",description:"Web development Basics (HTML,CSS,JS) 2021 ",image:"./Assets/shape ai.jpg"},{title:"Hockey Champions",description:"Winner of High school Hockey League in 2013/2014 and 2014/2015",image:"./Assets/hockey.jpg"},{title:"Jukskei",description:"Recieved 3rd in the district in the year 2013",image:"./Assets/jukskei-game_.jpg"}],De={arrows:!1,slidesToShow:3,focusOnselect:!1,accessability:!1,responsive:[{breakpoint:1280,settings:{slidesToShow:2}},{breakpoint:900,settings:{slidesToShow:1}}]},Ue=m.img`
	width: 100%;
	height: 300px;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	vertical-align: middle;
`,Be=m.div`
	width: 90%;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	outline: none;
	height: 430px;
	@media screen and (min-width: 440px) {
		border: 1px solid #bebebe;
	}
`,_e=m(q)`
	& svg {
		margin: 0 1rem;
		cursor: pointer;
	}
	& svg:hover {
		opacity: 0.7;
		transition: opacity 0.2s ease-in;
	}
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`,Fe=m(C)`
	width: 100%;
	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}
	.slick-list {
		overflow: hidden;
	}
`;m.button`
	background-color: #1d609c;
	font-size: 1.3rem;
	padding: 5px 10px;
	color: #fff;
	cursor: pointer;
	width: 100%;
	font-weight: 600;
	margin: auto 0 0 0;
	border: none;
	border-radius: 0 0 10px 10px;
	&:hover {
		background-color: #112f4a;
		transition: background-color 0.2s ease-in;
	}
`;const Ne=()=>{const[e,n]=c.exports.useState(null);return h.createElement(N,{margin:"auto",maxWidth:"1280px",padding:"50px 70px",inverse:!0},h.createElement(q,{justify:"space-between",margin:"1rem",wrap:"wrap"},h.createElement(_,{width:"auto",inverse:!0},"Achievements"),h.createElement(_e,null,h.createElement(f.Provider,{value:{size:"3rem",color:"#1d609c"}},h.createElement(H,{onClick:null==e?void 0:e.slickPrev}),h.createElement(M,{onClick:null==e?void 0:e.slickNext})))),h.createElement(Fe,(a=l({},De),t(a,i({ref:n}))),Je.map(((e,t)=>h.createElement(Be,{key:t},h.createElement(Ue,{src:e.image}),h.createElement(F,{size:"1.1rem",margin:"0.4rem 0 0",weight:"bold"},e.title),h.createElement(F,{size:"0.9rem",margin:"0.7rem",color:"#4f4f4f"},e.description))))));var a},qe=m.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`,Re=m.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`,Ve=m.p`
	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #fff;
`;m.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`,m(V)`
	color: black;

	&:before {
		background: #fff;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;const Qe=()=>h.createElement(qe,{inverse:!0,id:"more"},h.createElement(Re,{src:"./Assets/Clearwater.mp4",autoPlay:!0,muted:!0}),h.createElement(U,null,h.createElement(B,null,"Welcome to Mojalefa JJ Moja's porfolio"),h.createElement(Ve,null,"All information and details within your finger tips reach"))),Ge={reverse:!0,inverse:!0,topLine:{text:"Started in 2009"},headline:"My jorney with Technolgy startes in dawn of social media ",description:"Since my first interaction with a computer in my old primary schools PC class",buttonLabel:"Find More",imgStart:"start",img:"./Assets/route-start.svg",start:"true"},Ke={reverse:!1,inverse:!1,topLine:{text:"Designed & Developed"},headline:"Enrolled in Tshwane University of Tshwane (TUT) for Software development",description:"Through my lessons we developed a system and plenty coding and designing including object oriented",buttonLabel:"View Project",linkTo:"/more",imgStart:"start",img:"./Assets/learning.svg",start:"true"},Ye={reverse:!0,inverse:!0,topLine:{text:"Diverse knowledge in other languages"},headline:"The more you Know the better ",description:"Apart from University , more knowledge was gained through AWS courses and also Shape AI for web development",buttonLabel:"View Project",linkTo:"/download",imgStart:"",img:"./Assets/knowledge.svg",start:"true"};function Xe(){return h.createElement(h.Fragment,null,h.createElement(Qe,null),";",h.createElement(Oe,null),h.createElement(Se,l({},Ge)),h.createElement(Se,l({},Ke)),h.createElement(Se,l({},Ye)),h.createElement(Ne,null))}function Ze(){return h.createElement(W,null,h.createElement(D,null),h.createElement(ne,null),h.createElement(I,null,h.createElement(O,{path:"/",element:h.createElement(Xe,null)})),h.createElement(we,null))}J.render(h.createElement(h.StrictMode,null,h.createElement(Ze,null)),document.getElementById("root"));
