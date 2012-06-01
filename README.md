Marklet
=======

Easy to use and extend bookmarklets

The Bookmarklet
-----

Here's the basic bookmarklet code. The minified code itself was borrowed from Ben Alman's [jQuery Bookmarklet Generator](http://benalman.com/code/test/jquery-run-code-bookmarklet/)

	javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.7",function($,L){$.getScript('http://localhost:8080/bookmarklet.js');});

You'll need to change `http://localhost:8080/bookmarklet.js` to your appropriate bookmarklet code. If neccesary, you can change the `"1.7"` after `document` to a specific jQuery version, but this should rarely be neccsary. Other than that, your bookmarklet code should be ready to use jquery. 
