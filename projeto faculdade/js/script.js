const toast=document.getElementById('toast');const form=document.getElementById('contactForm');const feedback=document.getElementById('formFeedback');
function showToast(message){toast.textContent=message;toast.classList.add('show');toast.setAttribute('aria-hidden','false');setTimeout(()=>{toast.classList.remove('show');toast.setAttribute('aria-hidden','true')},3000)}
document.querySelectorAll('.action-button').forEach(button=>button.addEventListener('click',()=>showToast(`Interesse registrado em: ${button.dataset.action}`)));
form.addEventListener('submit',event=>{event.preventDefault();if(!form.checkValidity()){feedback.textContent='Preencha todos os campos corretamente.';return}feedback.textContent='Mensagem enviada com sucesso!';form.reset();showToast('Obrigado pelo contato!')});
