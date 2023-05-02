document.addEventListener('DOMContentLoaded', function () {
    const trashItems = document.querySelectorAll('img[draggable="true"]');
    const bins = document.querySelectorAll('.bin');

    trashItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
    });

    bins.forEach(bin => {
        bin.addEventListener('dragover', handleDragOver);
        bin.addEventListener('drop', handleDrop);
    });

    function handleDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
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
        }
    }
});
