 document.captureEvents(Event.MOUSEDOWN | Event.MOUSEUP | Event.CLICK);
        document.onmousedown = clickIE4;
        document.onmouseup = clickIE4;
        document.onclick = clickIE4;

        function clickIE4()
        {
            return false; 
        }