/*!
 * Vallenato 1.0
 * A Simple JQuery Accordion
 *
 * Designed by Switchroyale
 * 
 * Use Vallenato for whatever you want, enjoy!
 */

$(document).ready(function()
{
	//Add Inactive Class To All Accordion Headers
	$('.accordion-header').toggleClass('inactive-header');
	
	//Set The Accordion Content Width
	var contentwidth = $('.accordion-header').width();
	$('.accordion-content').css({'width' : contentwidth });
	
	//Open The First Accordion Section When Page Loads
	$('#accordion-container .accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('#accordion-container .accordion-content').first().css({'display': 'inline-block'}).slideDown(200).toggleClass('open-content');
	
	// The Accordion Effect
	$('#accordion-container .accordion-header').click(function () {
		if($(this).is('.inactive-header')) { 
			$('#accordion-container .active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle(200).toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle(200).css({'display': 'inline-block'}).toggleClass('open-content');
		}
		
		else { 
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle(200).css({'display': 'inline-block'}).toggleClass('open-content');
		}
	});
	
	//Accordion 2 code
	$('#accordion-container2 .accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
	$('#accordion-container2 .accordion-content').first().css({'display': 'inline-block'}).slideDown(200).toggleClass('open-content');
	
	$('#accordion-container2 .accordion-header').click(function () {
		if($(this).is('.inactive-header')) { 
			$('#accordion-container2 .active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle(200).toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle(200).css({'display': 'inline-block'}).toggleClass('open-content');
		}
		
		else { 
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle(200).css({'display': 'inline-block'}).toggleClass('open-content');
		}
	});
	
	return false;
});