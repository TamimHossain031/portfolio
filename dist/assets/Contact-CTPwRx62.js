import{j as e}from"./index-BFi8cy-A.js";import c from"./HeadOfData-BD5zTNDE.js";function i(){const r=async t=>{t.preventDefault();const a=new FormData(t.target);a.append("access_key","f2e485aa-6a28-47c8-8681-be705542e01b");const n=Object.fromEntries(a),o=JSON.stringify(n),s=await fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:o}).then(m=>m.json());s.success&&console.log("Success",s)};return e.jsxs("div",{className:"w-[100%]",children:[e.jsx(c,{head:"Contact"}),e.jsxs("form",{className:"max-w-[600px] h-[500px] border border-sky-400 mx-auto bg-white/30 dark:bg-[#22303c]/30 backdrop-blur-[10px] mt-5 p-5 flex flex-col gap-3 justify-center rounded-md",onSubmit:r,children:[e.jsxs("label",{htmlFor:"name",className:"text-left",children:[e.jsxs("p",{className:"text-left",children:["Name :"," "]}),e.jsx("input",{className:"bg-transparent border border-sky-400 rounded-md p-1",type:"text",id:"name",name:"name",required:!0})]}),e.jsxs("label",{htmlFor:"email",className:"text-left",children:[e.jsxs("p",{className:"text-left",children:["Email :"," "]}),e.jsx("input",{className:"bg-transparent border border-sky-400 rounded-md p-1",type:"email",id:"email",name:"email",required:!0})]}),e.jsx("label",{htmlFor:"comment",className:"text-left",children:"Comment :"}),e.jsx("textarea",{name:"comment",id:"comment",name:"message",className:"bg-transparent border border-sky-400 rounded-md p-1",rows:"6"}),e.jsx("button",{className:"border border-sky-400 py-1 rounded-full",children:"Submit"})]})]})}export{i as default};