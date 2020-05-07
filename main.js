const panels = document.querySelectorAll('.panel')

function toggleOpen() {

    this.classList.toggle('open');
}
//propertyName is a string representing name of the transition
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));