var pesquisa = "";

function abrirUrl() {
	pesquisa = document.getElementById("searchbox").value;
	if (!(pesquisa == "")) {
		window.open('https://www.youtube.com/user/MarceloSouzaF/search?query=' + pesquisa, '_blank');
	}
}