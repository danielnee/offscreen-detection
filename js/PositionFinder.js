function PositionFinder() {
    
    var cSelf = this;
 
    this.FindObjectPosition = function(cObj) {
        // NOTES:
        // Calculating offsetTop, IE 5-7 does not count elements with position: relative as offsetParents, 
        // and moves on to the next offsetParent in the chain. offsetLeft is calculated correctly.
        
        var iCurLeft = 0;
        var iCurTop = 0;
        if (cObj.offsetParent) {
            do {
                iCurLeft += cObj.offsetLeft;
                iCurTop += cObj.offsetTop;
            } while (cObj = cObj.offsetParent);
        }
        return [iCurTop, iCurLeft];
    }
    
    function ComputeVisible(cObj, cCurWindow, iCurScrollLeft, iCurScrollTop) {
        var aPos = cSelf.FindObjectPosition(cObj[0]);
        var iYPos = aPos[0];
        var iXPos = aPos[1];
        var iHeightViewport = cCurWindow.height();
        var iWidthViewport = cCurWindow.width();
        var iObjHeight = cObj.height();
        var iObjWidth = cObj.width();
        
        var iVisibleWidth = 0;
        if (iXPos < 0) {
            iVisibleWidth = Math.max(iObjWidth + iXPos, 0);
        }
        else {
            var iXScrollOffset = iXPos - iCurScrollLeft;
            iVisibleWidth = Math.min(iObjWidth, Math.min(iObjWidth + iXScrollOffset, iWidthViewport - iXScrollOffset));
        }
        
        // Find the inital height visible
        var iVisibleHeight = 0;
        if (iYPos < 0) {
            iVisibleHeight = Math.max(iObjHeight + iYPos, 0);
        }
        else {
            var iYScrollOffset = iYPos - iCurScrollTop;
            iVisibleHeight = Math.min(iObjHeight, Math.min(iObjHeight + iYScrollOffset, iHeightViewport - iYScrollOffset));
        }
        
        // Handle offscreen cases
        if (iVisibleWidth < 0 || iVisibleHeight < 0) {
            return 0.0;
        }
        
        // Subtract the areas and compute the percentage
        var fTotalArea = iObjHeight * iObjWidth;
        if (fTotalArea <= 0) {
            // Element has a zero area
            return 0.0;
        }
        var fVisibleArea = iVisibleHeight * iVisibleWidth;
        return fVisibleArea / fTotalArea
    }
    
    this.ComputeInitiallyVisible = function(cObj, cCurWindow) {
        return ComputeVisible(cObj, cCurWindow, 0, 0)
    }
    
    this.ComputeCurrentlyVisible = function(cObj, cCurWindow) {
        return ComputeVisible(cObj, cCurWindow, cCurWindow.scrollLeft(), cCurWindow.scrollTop());
    }
}