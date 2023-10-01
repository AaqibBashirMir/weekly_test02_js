const container=document.querySelector(".container");
window.addEventListener("mousemove",(event)=>{
    container.innerHTML=`  <p>Mouse X Position(px)</p>  <div class="box">
    ${event.clientX}      
    </div>
 
    <p>Mouse y Position(px)</p>  <div class="box">
    ${event.clientY}        
    </div>
    `
    
})
