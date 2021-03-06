var grid = $('.meme-grid');

grid.masonry({
  itemSelector: '.meme',
  columnWidth: '.grid-sizer',
	transitionDuration: 0,
  gutter: 15
});

grid.imagesLoaded().progress(function() {
  grid.masonry('layout');
});

function attachToMemeItem(jqueryObj) {
	$(jqueryObj).click(function () {
		$(this).toggleClass('selected');

		var selectedMemes = $('.meme.selected');

		if (selectedMemes.length > 0) {
			$('.fab-continue').removeClass('disabled');
		} else {
			$('.fab-continue').addClass('disabled');
		}
	});
};

$(document).ready(function () {
	$('.meme').each(function () {
		attachToMemeItem(this);
	});

	$('.fab-continue').click(function () {
		var selectedMemes = $('.meme.selected');
		if (selectedMemes.length < 1) {
			alertify.alert('You did not select any memes!');
		} else {
			var data = [];

			selectedMemes.each(function () {
				var memeId = $(this).data('meme-id');
				data.push({'image_id': memeId});
			});


			$.ajax({
				  type: 'POST',
				  url: '/discover/save-meme',
				  data: JSON.stringify(data),
				  error: function (xhr, status, errorThrown) {
				  	// alert(errorThrown);
				  },
				  success: function () {	
						var selectedMemes = $('.meme.selected');		
						selectedMemes.each(function () {
							$(this).removeClass('selected');
						});					

						alertify.alert('You have added the selected memes to your profile.');
						$('.fab-continue').addClass('disabled');
				  },
				  dataType: 'text',
				  contentType: 'application/json'
				});
		}
	});
});
