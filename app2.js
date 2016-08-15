$(document).ready(function(){

	function showResults(videos){
		var html = "";
		$.each(videos, function(index, video){
			console.log(video.snippet.title);
			console.log(video.snippet.thumbnails.medium.url);
			html = html + "<li><p>" + video.snippet.title + "<p><a target='_blank' href='https://www.youtube.com/watch?v=" + video.id.videoId + "'><img src='" + video.snippet.thumbnails.medium.url + "'/></a></p></li>";
		});
		$("#search-results ul").html(html);
	}

	function getResults(query){
		$.ajax({
		url:"https://www.googleapis.com/youtube/v3/search",
		method: "GET",
		dataType: 'json',
		data: {
			part: "snippet",
			key: "AIzaSyCX5Zh7ZtlaU2mvksDKQe5Z_njZ-zc7Mdo",
			q: searchTerm,
		}.done(function(){}
		showResults(query);
		});
	}

	
}

$('#search-form').submit(function (event){
	event.preventDefault;
	var searchTerm = $('#query').val();
	getResults(searchTerm);
});

})


