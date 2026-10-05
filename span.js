function openTab(id){
  ['pix','cartao','boleto'].forEach(i=>{
    document.getElementById(i).classList.add('hidden');
    document.getElementById('t-'+i).classList.remove('active');
  });
  document.getElementById(id).classList.remove('hidden');
  document.getElementById('t-'+id).classList.add('active');
}
function pagar(m){ alert('✅ '+m+' OK! ID: SPAN-'+Date.now()); }
function validarCartao(){
  let n=document.getElementById('num').value.replace(/\D/g,'');
  if(n.length!==16){alert('Cartão precisa 16 dígitos');return;}
  pagar('Cartão');
}
// máscaras
document.getElementById('num').addEventListener('input',function(){
  let v=this.value.replace(/\D/g,'').slice(0,16);
  v=v.replace(/(\d{4})(\d)/g,'$1 $2'); this.value=v;
});
document.getElementById('cpf').addEventListener('input',function(){
  let v=this.value.replace(/\D/g,'').slice(0,11);
  v=v.replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');
  this.value=v;
});