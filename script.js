document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav-link');
    const contents = document.querySelectorAll('.content');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tab = this.dataset.tab;

            contents.forEach(content => {
                if (content.id === tab) {
                    content.classList.add('active');
                    setTimeout(() => {
                        content.style.opacity = '1';
                    }, 10);
                } else {
                    content.style.opacity = '0';
                    setTimeout(() => {
                        content.classList.remove('active');
                    }, 300);
                }
            });
        });
    });
});
