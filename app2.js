$(document).ready(function(){


var nextPage;

	function showResults(videos){
		var html = "";
		console.log(videos);
		$.each(videos.items, function(index, video){
			console.log(video);
			html = html + "<li><p>" + video.snippet.title + "<p><a target='_blank' href='https://www.youtube.com/watch?v=" + video.id.videoId + "'><img src='" + video.snippet.thumbnails.medium.url + "'/></a></p></li>";
		});
		$("#search-results ul").html(html);
	}

	function getResults(query){
		var request = {
				part: "snippet",
				key: "AIzaSyCX5Zh7ZtlaU2mvksDKQe5Z_njZ-zc7Mdo",
				q: query,
			};
			if (nextPage){
				request.pageToken = nextPage
			}
		$.ajax({
			url:"https://www.googleapis.com/youtube/v3/search",
			method: "GET",
			dataType: 'json',
			data: request
		}).done(function(results){
			nextPage = results.nextPageToken;
				showResults(results);
			})
		
	}

	$('#search-term').submit(function (event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getResults(searchTerm);
		$('.more').show();
	});

	$('.more').click(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getResults(searchTerm);
	})
})


