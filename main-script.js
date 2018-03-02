var countOfPagesScrolled = 100;
var searchPhrase = ['seo', 'sem', 'hr manager', 'recruiter', 'headhunder', 'digital marketing', 'google analytics', 'internet marketer'];

function scrollDown(height, countOfPagesScrolled) {
    scroll(0, document.body.clientHeight);
    setTimeout(function() {
        if (height != document.body.clientHeight && countOfPagesScrolled > 0) {
            scrollDown(document.body.clientHeight, --countOfPagesScrolled);
        } else
            return sendRequest();
    }, 1500);
}

function sendRequest() {
    var contactsNum = 0;

	$.each($('.mn-person-info__occupation'), function() {
        $(this).each(function() {
			var currentElement = $(this);
			//console.dir(currentElement);
			
			var content = $.trim($(currentElement).text());
			//console.log('content' + ' = ' + content);
			
			var lowercaseContent = content.toLowerCase();
			//console.log('lowercaseContent' + ' = ' + lowercaseContent);
			
			var currentDOM = $(this);
			
			$.each(
				searchPhrase,
				function (index, currentDescription) {
					if (lowercaseContent.indexOf(currentDescription) !== -1) {
						console.log(lowercaseContent);
						
						console.log('found one match');
						
						console.log('--------------------------------------------------');
						
						var parent3UP = $(currentDOM).parent().parent().parent();
						//console.dir(parent3UP);
						
						// find child where attribute equals data-control-name
						var inviteButton = $(parent3UP).find("[data-control-name='" + 'invite' + "']");
						//console.dir(inviteButton);
						
						$(inviteButton).click();
						contactsNum++;
						
						return true;
					}
				}
			);
        });
    });
	
    console.log('Just added contacts: ' + contactsNum);
}

scrollDown(document.body.clientHeight, countOfPagesScrolled);
