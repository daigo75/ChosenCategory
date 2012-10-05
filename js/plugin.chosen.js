// Make Category selectors utilize Chosen
jQuery(document).ready(function() {

	$('.Category select').each(function() {
		
		// Trim the trailing spaces of all options
		// and make sure only clean spaces are used
		$(this).find('option').each(function() {
			$text = $.trim($(this).text());
			$(this).contents().replaceWith($text.replace(/(\u00a0)/g,' '));
		});
		
		// Turn option[disabled] into an optgroup header
		// and sort options into newly created optgroup
		$(this).find('option[disabled]').each(function() {
			$label = $(this).text();
			$options = $(this).nextUntil('option[disabled]');
			$optionsHtml = $('<option />').append($($options)).html();
			$(this).replaceWith($('<optgroup label="'+$label+'">'+$optionsHtml+'</optgroup>'));
		});
		
		$(this).chosen();
		
	});
	
});