const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearBtn = document.getElementById('clear-btn');

searchBtn.addEventListener('click', function() {
	const query = 'inurl:www.tabnews.com.br ' + searchInput.value;
	const url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
	window.location.href = url;
});

clearBtn.addEventListener('click', function() {
  searchInput.value = '';
});

searchInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		searchBtn.click();
	}
});