console.log('it working');
if(typeof jQuery!=='undefined'){
    console.log('jQuery Loaded');
}
else{
    console.log('not loaded yet');
}
let theme = localStorage.getItem('theme')

if (theme == null) {
	setTheme('light')
}else{
	setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function(){

		let mode = this.dataset.mode
		console.log('Option clicked', mode)
		setTheme(mode)
	})
}


function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}
	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}
	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}
	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)

}

$("#submit-btn").on("click", function() {
	name = document.getElementsByName("name")[0].value;
	console.log(document.getElementsByName("message")[0].value);
    $.ajax({
        url: "https://formspree.io/mbjzbqvo", 
        method: "POST",
        data: {name: name,subject: document.getElementsByName("subject")[0].value, email: document.getElementsByName("email")[0].value, message: document.getElementsByName("message")[0].value },
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});