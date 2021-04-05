 const bob = document.querySelector('body');
 const inp = document.querySelector('input');


inp.addEventListener('change', ()=> {
    if (inp.checked) {
        localStorage.setItem('then', 'dark-theme')
        bob.classList.add('dark-theme');
        bob.classList.remove('light-theme');  
    } else {
        localStorage.setItem('then','light-theme')
        bob.classList.add('light-theme');
        bob.classList.remove('dark-theme');
        
    }
        
})
if (localStorage.getItem('then') === 'dark-theme') {
    bob.classList.add(localStorage.getItem('then'))
    inp.checked = true
    
    
}



  
