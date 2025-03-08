// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.section');
    const rulesPopup = document.querySelector('.rules-popup');
    const closeBtn = document.querySelector('.rules-popup .close-btn');

    // Smooth scroll og sektion-skift
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Skift sektion med fade-transition
            sections.forEach(section => {
                section.classList.remove('active');
                setTimeout(() => {
                    if (!section.classList.contains('active')) {
                        section.style.display = 'none';
                    }
                }, 500);
            });

            if (targetSection) {
                targetSection.style.display = 'block';
                setTimeout(() => {
                    targetSection.classList.add('active');
                }, 0);
            }

            // Specifik logik for "Regler"
            if (targetId === 'regler') {
                rulesPopup.classList.add('active'); // Åbn popup
            }
        });
    });

    // Vis "Start" som standard
    document.getElementById('om').classList.add('active');

    // Kopier IP-adresse
    const ipAddress = document.querySelector('.ip-address');
    if (ipAddress) {
        ipAddress.addEventListener('click', () => {
            const ipText = ipAddress.textContent;
            navigator.clipboard.writeText(ipText).then(() => {
                alert('IP-adressen er kopieret til udklipsholderen: ' + ipText);
            });
        });
    }

    // Simuler serverstatus opdatering
    let players = 25;
    const statusElement = document.querySelector('.status');
    const playersElement = document.querySelector('.players');
    function updateServerStatus() {
        const isOnline = Math.random() > 0.2;
        statusElement.textContent = isOnline ? 'Online' : 'Offline';
        statusElement.style.color = isOnline ? '#00b4d8' : '#ff4444';
        players = isOnline ? Math.floor(Math.random() * 100) : 0;
        playersElement.textContent = `${players}/100`;
    }
    updateServerStatus();
    setInterval(updateServerStatus, 5000);

    // Interaktiv spiller-tæller
    playersElement.addEventListener('click', () => {
        players = Math.floor(Math.random() * 100);
        playersElement.textContent = `${players}/100`;
        playersElement.style.transition = 'transform 0.3s';
        playersElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            playersElement.style.transform = 'scale(1)';
        }, 300);
    });

    // News Popup
    const newsPopup = document.querySelector('.news-popup');
    const newsCloseBtn = document.querySelector('.news-popup .close-btn');
    function showNewsPopup() {
        newsPopup.classList.add('active');
        setTimeout(() => {
            newsPopup.classList.remove('active');
        }, 10000);
    }
    showNewsPopup();
    setInterval(showNewsPopup, 30000);

    newsCloseBtn.addEventListener('click', () => {
        newsPopup.classList.remove('active');
    });

    // Rules Popup
    closeBtn.addEventListener('click', () => {
        rulesPopup.classList.remove('active');
    });

    // Initialiser partikler
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#00b4d8' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 1, direction: 'none', random: true }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
        }
    });
});
