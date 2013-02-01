// Make Category selectors utilize Chosen
jQuery(document).ready(function() {
	$('.Category select').each(function() {
		// Trim the trailing spaces of all options
		// and make sure only clean spaces are used
		$(this).find('option').each(function() {
			var OptionItem = $(this);
			var Label = OptionItem.text();
			// Count the spaces before the Category Name. Each space represents one
			// level of nesting
			var Indent = Label.split(/[^\u00a0]/)[0].length;
			// Add a "Depth" class, to allow distinguishing nested elements
			OptionItem.addClass('Depth' + Indent);

			// Remove the now unneeded spaces from Category Names. This will ensure
			// that the Search function will work properly
			Label = $.trim(Label);
			OptionItem.contents().replaceWith(Label.replace(/^(\u00a0)/g,' '));
		});

		// Turn option[disabled] into an optgroup header
		// and sort options into newly created optgroup
		$(this).find('option[disabled]').each(function() {
			var HeaderCategory = $(this);
			var Label = HeaderCategory.text();
			// Retrieve all Options immediately after the Header Category. We stop at
			// the first disabled Option, because it is the next Header
			var Options = HeaderCategory.nextUntil('option[disabled]');
			var OptionsHtml = $('<option />').append($(Options)).html();
			HeaderCategory.replaceWith($('<optgroup label="' + Label + '">' + OptionsHtml + '</optgroup>'));
		});
		$(this).chosen();
	});
});
