(function ($) {
	"use strict";

	// Essentially the main function, called when the dialog is ready. You'll need to change this to do what you wish.
	function init() {
		showMessageDialog("Zip Zoom Zop!");
		addDialogMessage("And another, for good measure!");
	}

	var dialog_style = {
		'font-size': '15px',
		'font-family': 'sans-serif',
		'background': "white",
		'border': "1px solid black",
		'padding': "10px",
		'min-width': '400px',
		'max-width': '600px',
		'top': '0',
		'right': '0',
		'position': 'fixed',
		'z-index': '100000'
	};

	// Hide the dialog
	function hideDialog() {
		$("#magicdialog").css('display', 'none');
	}

	// Create (or use) a dialog
	function showDialog() {
		var style, template,
			dialog = $("#magicdialog");

		for (var k in dialog_style) { 
			if ( dialog_style.hasOwnProperty(k) ) {
				style += k + ':' + dialog_style[k] + ';';
			}
		}

		template = "<div id='magicdialog' style='" + style + "'><div style='text-align: right'><a id='closemagicdialog' href='#'>[ close ]</a></div><div id='magiccontent' style='padding-top: 15px; line-height: 1.3em;'>Content Here</div></div>";

		if (dialog.length) {
			dialog.css('display', 'block');
			dialog.html($(template).html());
		} else {
			$('body').append(template);
		}
		$('#closemagicdialog').click(hideDialog);

		return $('#magiccontent');
	}

	// Show a simple message dialog
	function showMessageDialog(message) {
		var content = showDialog();
		content.html(message + "<br/>");
	}

	// Add a message to the dialog
	function addDialogMessage(message) {
		$('#magiccontent').append(message + "<br/>");
	}

	init();

})($);