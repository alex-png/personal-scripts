(function removeHats() {
    'use strict';

    // Your code here...
    let hats = document.getElementsByClassName('party-hat')
    while (hats.length > 0 ){
        for (const h of hats) {
            h.remove()
        }
    }

})();