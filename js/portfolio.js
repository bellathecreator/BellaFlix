// FAZ EFEITO DE DIGITAÇÃO NA PÁGINA INICIAL DO PORTFÓLIO
const words=["DESENVOLVEDORA","UX DESIGNER","ESTUDANTE", "ANALISTA DE DADOS"];
let i=0,j=0,current="",del=false;
function type(){
  const el=document.getElementById("digitando");
  if(!el)return;
  if(!del&&j<=words[i].length){current=words[i].substring(0,j++);}
  else if(del&&j>0){current=words[i].substring(0,--j);}
  else if(!del&&j>words[i].length){del=true;setTimeout(type,900);return;}
  else if(del&&j===0){del=false;i=(i+1)%words.length;}
  el.textContent=current;
  setTimeout(type,del?80:120);
}
type();