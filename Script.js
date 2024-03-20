$(document).ready(function() {
    //Variabel
    var searchInput = $('#searchInput');
    var searchBtn = $('#searchBtn');
    var resultsDiv = $('#results');

    //jQuery + DOM
    searchBtn.click(function() {
        //Blok kondisional
        if (searchInput.val().trim() !== '') {
            var searchTerm = searchInput.val();
            var url = 'https://www.omdbapi.com/?s=' + searchTerm + '&apikey=ad9bfb52';

            $.ajax({
                // AJAX
                url: url,
                method: 'GET',
                success: function(response) {
                    displayResults(response.Search);
                },
                error: function(error) {
                    console.log('Error:', error);
                }
            });
        } else {
            alert('Masukkan judul film untuk mencari.');
        }
    });

    //Fungsi
    function displayResults(results) {
        resultsDiv.empty();
        if (results && results.length > 0) {
            $.each(results, function(index, movie) {
                var posterSrc = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300';
                var movieHtml = '<div class="movie"><img src="' + posterSrc + '" alt="' + movie.Title + '"><p>' + movie.Title + '</p></div>';
                resultsDiv.append(movieHtml);
            });
        } else {
            resultsDiv.html('<p>Tidak ada hasil yang ditemukan</p>');
        }
    }
});
