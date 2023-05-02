document.addEventListener('DOMContentLoaded', function () {
    const trashItems = document.querySelectorAll('img[draggable="true"]');
    const bins = document.querySelectorAll('.bin');
    const message = document.getElementById('message');
    let correctCount = 0;

    trashItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
    });

    bins.forEach(bin => {
        bin.addEventListener('dragover', handleDragOver);
        bin.addEventListener('drop', handleDrop);
    });

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.dataTransfer.setDragImage(e.target, e.target.width / 2, e.target.height / 2);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        const itemId = e.dataTransfer.getData('text/plain');
        const item = document.getElementById(itemId);
        const binType = e.target.id.split('-')[0];

        if (itemId.includes(binType)) {
            e.target.appendChild(item);
            item.setAttribute('draggable', 'false');
            correctCount++;

            if (correctCount === trashItems.length) {
                showMessage('Bien hecho');
            }
        } else {
            showMessage('¡Te has equivocado!');
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
    }

    function showMessage(text) {
        message.textContent = text;
        message.classList.remove('hidden');
        setTimeout(() => {
            message.classList.add('hidden');
        }, 2000);
    }
});
