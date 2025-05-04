let icon = document.querySelector(".dropdown a"); // Selecting the correct icon element
let dropdown = document.querySelector(".dropdown-content"); // Selecting the dropdown content
icon.addEventListener("click", () => {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"; // Hide dropdown
        document.getElementById("arr").className = "fa-solid fa-arrow-down"; // Change icon back to down arrow
    } else {
        dropdown.style.display = "block"; // Show dropdown
        document.getElementById("arr").className = "fa-solid fa-arrow-up"; // Change icon to up arrow
    }
});

   let ic = document.querySelector("#menu-toggle"); 
   // Selecting the dropdown content
   let dd = document.querySelector(".innerview"); 

   ic.addEventListener("click", () => {
       if (dd.style.display === "block") {
           dd.style.display = "none"; // Hide dropdown
           ic.innerHTML = '<i class="fa fa-bars"></i>'; // Change icon back to bars
       } else {
           dd.style.display = "block"; // Show dropdown
           ic.innerHTML = '<i class="fa fa-arrow-up"></i>'; // Change icon to up arrow
       }
   });

    let i = document.querySelector("#larr"); 
    let d = document.querySelector(".innerview"); 
    i.addEventListener("click", () => {
        if (d.style.display === "block") 
            {
        d.style.display = "none";
        }
});

document.getElementById("a").addEventListener('click',function()
{
    window.location.href = 'settings.html';
});

document.getElementById("arrr").addEventListener('click',function()
{
    window.location.href = 'settings.html';
}); 
document.getElementById("ie").addEventListener('click',function()
{
    window.location.href = 'subhistory.html';
}); 
document.getElementById("hl").addEventListener('click',function()
{
    window.location.href = 'homelogs.html';
}); 
document.getElementById("aue").addEventListener('click',function()
{
    window.location.href = 'activeusers.html';
});
document.getElementById("dash").addEventListener('click',function()
{
    window.location.href = 'index.html';
});
