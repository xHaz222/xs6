function updateStatus() {
    const statusElement = document.querySelector('.status');
    const isOnline = new Date().getSeconds() % 2 === 0;
    if (isOnline) {
        statusElement.classList.remove('offline');
        statusElement.classList.add('online');
    } else {
        statusElement.classList.remove('online');
        statusElement.classList.add('offline');
    }
}

setInterval(updateStatus, 5000);
