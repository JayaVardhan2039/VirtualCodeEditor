function run(){
    let a=document.getElementById("mhtml").value;
    let x=document.getElementById("mcss").value;
    let m=document.getElementById("mjs").value;
    let b=document.getElementById("mainoutput");
    b.contentDocument.body.innerHTML=a+"<style>"+x+"</style>";
    b.contentWindow.eval(m);
}