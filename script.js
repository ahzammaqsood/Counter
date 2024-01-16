let count = 0;

    function decrease() {
        if (count > 0) {
            count--;
            updateCounter();
        }
    }

    function reset() {
        count = 0;
        updateCounter();
    }

    function increase() {
        count++;
        updateCounter();
    }

    function updateCounter() {
        document.getElementById('counter').innerText = count;
    }