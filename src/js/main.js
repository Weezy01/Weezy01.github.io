"use strict"
		   
// калькулятор
$(function(){
	$('#price').change(function(){
		var type = $('#SiteID').val();
		var design = $('#DesignID').val();
		var adaptive = $('#AdaptiveID').val();
		
		var total = Number(type) + Number(design) + Number(adaptive);
		var term = ''

		$('#priseID').text(total + ' руб');

		    if (total <= 3000) {
        term = '1 день'
    } else if (total <= 5000){
        term = '3 дня'
    } else if (total <= 10000){
        term = 'неделю'
    } else if(total <= 14000){
        term = '10 дней'};

		$('#termID').text(term)


	})
});


// менюшка

$('#men').on("click", function myFunction() {
    let x = document.getElementById('mylock');
	let y = document.getElementById('logoID');

    if (y.className === 'navbar-brand text-white col-md-5') {
        y.className = 'd-none';
    } else {
        y.className = 'navbar-brand text-white col-md-5';
    }

    if (x.className === 'navbar lock') {
        x.className = 'navbar menu-CI';
    } else {
        x.className = 'navbar lock';
    }
})
