function duna_filmes() {
    document.getElementById('duna_filmes').style.display="block";
    document.getElementById('pagina-inicial').style.display="none";
    document.getElementById('filmes').style.display="none";
    document.getElementById('livros').style.display="none";
    document.getElementById('dunaparte1').style.display="block";
    document.getElementById('duna1984_link').style.display="block";
    document.getElementById('dunaparte2').style.display="block";
}

function duna_paginainicial(){
    document.getElementById('duna_filmes').style.display="none";
    document.getElementById('pagina-inicial').style.display="block";
    document.getElementById('filmes').style.display="none";
    document.getElementById('livros').style.display="none";
    document.getElementById('dunaparte1').style.display="none";
    document.getElementById('duna1984_link').style.display="none";
    document.getElementById('dunaparte2').style.display="none";
    document.getElementById("duna1984").style.display="none";
}
function duna1984page(){
    document.getElementById("duna1984").style.display="block";
    document.getElementById("duna1984_link").style.display="none";
    document.getElementById('dunaparte1').style.display="none";
    document.getElementById("dunaparte2").style.display="none";
    document.getElementById("duna_filmes").style.display="none";

}