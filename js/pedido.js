const form=document.getElementById('orderForm');
const params=new URLSearchParams(location.search);const formatParam=params.get('formato');
if(formatParam){const f=document.getElementById('format');if(formatParam==='digital')f.value='Digital — PDF';if(formatParam==='fisico')f.value='Físico — impresso e encadernado'}
form?.addEventListener('submit',e=>{e.preventDefault();const v=id=>document.getElementById(id)?.value.trim()||'Não informado';const msg=[
'Olá, Académico Pro! Quero fazer um pedido.',
'',`Nome: ${v('name')}`,`WhatsApp: ${v('phone')}`,`Escola: ${v('school')}`,`Classe/Turma: ${v('classroom')}`,
'',`Serviço: ${v('service')}`,`Formato: ${v('format')}`,`Páginas/slides: ${v('pages')}`,`Prazo: ${v('deadline')}`,`Tema: ${v('topic')}`,
'',`Instruções/detalhes: ${v('instructions')}`,'','Aguardo o orçamento e prazo final.'].join('\n');
document.getElementById('success').style.display='block';window.open('https://wa.me/244955993656?text='+encodeURIComponent(msg),'_blank','noopener');});
