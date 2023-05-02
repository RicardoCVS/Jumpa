document.addEventListener('DOMContentLoaded', function () {
    const trashItems = document.querySelectorAll('img[draggable="true"]');
    const bins = document.querySelectorAll('.bin');
    const message = document.getElementById('message');
    let correctCount = 0;

    trashItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });

    bins.forEach(bin => {
        bin.addEventListener('dragover', handleDragOver);
        bin.addEventListener('drop', handleDrop);
    });

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.dataTransfer.setDragImage(e.target, e.target.width / 2, e.target.height / 2);
        e.dataTransfer.effectAllowed = 'move';
    }

    function handleDragEnd(e) {
        e.target.style.opacity = '1';
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
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
                message.innerHTML = '¡Bien hecho!';
            }
        }
    }
});
