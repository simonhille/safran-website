function handleInternalScroll(e) {
    e.preventDefault(); 

    const clickedElement = e.currentTarget;

    if ('ontouchstart' in window) {
        clickedElement.classList.add('clicked');
        setTimeout(() => {
            clickedElement.classList.remove('clicked');
        }, 400);
    }
    
    const targetId = e.currentTarget.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth' 
        });
    }
}

document.querySelectorAll('.no-url-change').forEach(link => {
    link.addEventListener('click', handleInternalScroll); 
});