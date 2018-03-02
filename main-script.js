var countOfPagesScrolled = 10;
var searchPhrase = "Developer";

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
			console.dir(currentElement);
			
			var content = $.trim($(currentElement).text());
			console.log('content' + ' = ' + content);
			
			if (content.indexOf(searchPhrase) !== -1) {
				console.log('found one match');
				
				var parent3UP = $(this).parent().parent().parent();
				console.dir(parent3UP);
				
				// find child where attribute equals data-control-name
				var inviteButton = $(parent3UP).find("[data-control-name='" + 'invite' + "']");
				console.dir(inviteButton);
				
				$(inviteButton).click();
				contactsNum++;
			}
        });
    });
	
    console.log('Just added contacts: ' + contactsNum);
}

scrollDown(document.body.clientHeight, countOfPagesScrolled);

