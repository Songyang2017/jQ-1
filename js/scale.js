(function (doc, win) {
		        var docEle = doc.documentElement;
		       	var resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
		        var recalCulate = function () {
		            var width = docEle.clientWidth;
		            docEle.style.fontSize = 100 * (width / 640) + 'px';
		        };
		
		        recalCulate();
		
		        if (!doc.addEventListener) return;
		        win.addEventListener(resizeEvent, recalCulate, false);
		    })(document, window);



		    // docEle.style.fontSize = x * (width / 640) + 'px';  1rem=x/2 px

		    // http://pxtoem.com/