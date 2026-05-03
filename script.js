const entry =
document.getElementById("entryScreen");
const intro =
document.getElementById("intro");
const flash =
document.getElementById("flash");
const mainContent =
document.getElementById("mainContent");
const secretBtn =
document.getElementById("secretBin");
const secretMessage =
document.getElementById("secretMessage");
entry.addEventListener("click",() =>{
    entry.style.display= "none";
    flash.classList.add("active");
    intro.style.display="flex";

    setTimeout(()=>{
        intro.style.display="none";
        mainContent.style.display="flex";
    },3000);
});

function showSecret(){
    document.getElementById("secretMessage").style.display="block";
}