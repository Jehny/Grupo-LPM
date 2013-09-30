$(function(){

	//galeria
	$('.lpm-galeria > div').carouFredSel({
		scroll:{
			fx 			: 'crossfade',
			pauseOnHover: true
		},
		prev:{
	        button  	: ".lpm-galeria nav .ant"
    	},
    	next:{
        	button  	: ".lpm-galeria nav .prx"
    	}
	});

});