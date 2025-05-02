const menuIconEl = $('.menu-icon');
const sidebarEl = $('.sidebar');
const sidebarCloseEl = $('.sidebar__close-icon');

// Add and remove provided class names
function toggleClassName(el, className) {
    if (el.hasClass(className)) {
        el.removeClass(className);
    } else {
        el.addClass(className);
    }
}

// Open the side nav on click
menuIconEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
});

// Close the side nav on click
sidebarCloseEl.on('click', function() {
    toggleClassName(sidebarEl, 'active');
});