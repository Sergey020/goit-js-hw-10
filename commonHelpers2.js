import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const n=document.querySelector(".form");function m(t){t.preventDefault();const s=t.target,e=Number(s.elements.delay.value),l=s.elements.state.value;new Promise((o,r)=>{setTimeout(()=>{l==="fulfilled"?o(console.log(`✅ Fulfilled promise in ${e}ms`)):r(console.log(`❌ Rejected promise in ${e}ms`))},e)}).then(o=>{i.show({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"#326101",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3})}).catch(o=>{i.show({message:`❌ Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF",transitionIn:"fadeln",timeout:4e3})}),n.reset()}n.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers2.js.map