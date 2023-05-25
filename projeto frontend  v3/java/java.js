let darkmode = document.querySelector('#darkmode');

darkmode.onclick = ()=>{
    // alert(" SEU DARKMODE FOI ATIVADO MEU LINDO ;)")

    if(darkmode.classList.contains('bx-moon')){
       // alert(" MODO ESCURO INATIVO ;C" )
        
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');
    }
}