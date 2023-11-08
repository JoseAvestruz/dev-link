//
function change(){
 const html = document.documentElement
 const alt = document.documentElement
 html.classList.toggle('light')

 const img = document.querySelector(' #profile img')

 if (html.classList.contains('light')) {
    img.setAttribute('src', "./assets/avatar-light.png");
   // alt.setAttribute('img',"Imagem joseAvestruz com óculos com amiga atraz dele")
 } else {
    img.setAttribute('src',"./assets/avatar-dark.png")
    //alt.setAttribute('img',"Foto avatar JoseAvestruz com um copo de café no espaço")
    
 }


 

}