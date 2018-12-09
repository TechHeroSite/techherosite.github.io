var pesquisa = "";

function abrirUrl() {
	pesquisa = document.getElementById("searchbox").value;
	if (!(pesquisa == "")) {
		window.open('https://www.youtube.com/results?search_query=marcelosouzaf+' + pesquisa);
	}
}