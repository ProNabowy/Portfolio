(e=>{let t=document.querySelector("#canvas"),s=t.getContext("2d"),i=[],a=[],n=0;t.width=window.innerWidth,t.height=window.innerHeight,window.addEventListener("resize",(function(){t.width=window.innerWidth,t.height=window.innerHeight}));let d={x:void 0,y:void 0};class l{constructor(e,t,s,i,a,l){this.x=d.x,this.y=d.y,this.size=25*Math.random(),this.color="hsl("+n+", 100% , 50% )",this.speedX=3*Math.random()-1.5,this.speedY=3*Math.random()-1.5}update(){this.x+=this.speedX,this.y+=this.speedY,this.size>.3&&(this.size-=.1)}darw(){s.beginPath(),s.save(),s.fillStyle=this.color,s.arc(this.x,this.y,this.size,0,2*Math.PI),s.fill(),s.restore()}}class o extends l{constructor(e,s,i,a,n,d){super(e,s,i,a,n,d),this.x=t.width/2,this.y=t.height/2,this.speedX=2*Math.random()-1,this.speedY=2*Math.random()-1}}let r=function(){for(let e=0;e<500;e++)a.push(new o)};!function(){for(let e=0;e<100;e++)i.push(new l)}(),function e(){s.fillStyle="rgba(0,0,0,.09)",s.fillRect(0,0,t.width,t.height),n+=2,function(){for(let e=0;e<i.length;e++)i[e].update(),i[e].darw(),i[e].size<=.3&&(i.splice(e,1),e--);for(let e=0;e<a.length;e++)a[e].update(),a[e].darw(),a[e].size<=.3&&(a.splice(e,1),e--)}(),requestAnimationFrame(e)}(),setInterval(r,8e3),r(),t.addEventListener("mousemove",(function(e){d.x=e.x,d.y=e.y;for(let e=0;e<5;e++)i.push(new l)}));let c=document.querySelector("form"),h=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,15}$/,u=document.querySelector("input[type=text]"),m=document.querySelector("input[type=email]");function v(){sessionStorage.setItem("name",u.value),sessionStorage.setItem("email",m.value)}c.addEventListener("submit",(e=>{m.value.match(h)&&phone.value.length>=7&&u.value.length>=5?(u.value="",m.value=""):e.preventDefault()})),u.addEventListener("input",v),m.addEventListener("input",v),window.addEventListener("load",(()=>{sessionStorage.getItem("email")&&sessionStorage.getItem("name")?(u.value=sessionStorage.getItem("name"),m.value=sessionStorage.getItem("email")):(u.addEventListener("input",v),m.addEventListener("input",v))}))})(),(e=>{const t=document.querySelector("header"),s=document.querySelector("header .fa-bars"),i=document.querySelector(".fa-x"),a=document.querySelector("header ul");function n(){window.innerWidth<=991?(t.classList.remove("pt-5"),t.classList.remove("pb-5"),i.classList.contains("active")?(a.classList.add("small-media"),a.classList.remove("hidden")):(s.classList.add("active"),s.classList.remove("hidden"),a.classList.add("hidden"))):(t.classList.add("pt-5"),t.classList.add("pb-5"),s.classList.add("hidden"),s.classList.remove("active"),i.classList.add("hidden"),i.classList.remove("active"),a.classList.remove("hidden"),a.classList.remove("small-media")),s.addEventListener("click",(e=>{t.style.cssText+="min-height: 65px; display: flex; align-items: center;",s.classList.add("hidden"),s.classList.remove("active"),i.classList.add("active"),a.classList.add("small-media"),a.classList.remove("hidden")})),i.addEventListener("click",(e=>{i.classList.add("hidden"),i.classList.remove("active"),s.classList.add("active"),a.classList.remove("small-media"),a.classList.add("hidden")})),d()}function d(){const e=document.querySelector("header ul li a"),t=document.querySelectorAll("header ul li a");window.innerWidth<=991?(a.classList.remove("justify-content-between"),e.style.cssText+="text-decoration: line-through !important;",t.forEach((e=>{e.classList.add("fs-2"),e.style.cssText+="width:fit-content;"}))):t.forEach((e=>{e.classList.remove("fs-2"),e.style.cssText+="width:100px"}))}n(),window.addEventListener("resize",(()=>{n()})),window.addEventListener("load",(()=>{n(),d()}))})();