/**
 * Service Worker Configuration
 * 
 * Implements offline-first strategy with cache management.
 */
const CACHE_NAME = 'my-cache-v1';

/** 
 * List of assets to cache during installation 
 */
const listOfUrlsToCache = [
    '/',

    /* HTML PAGES */
    '/index.html', 
    '/index_cs.html',

    '/projects/caterpillar_game.html',
    '/projects/escape_game.html',
    '/projects/eshop.html',
    '/projects/food_chain.html',
    '/projects/hotel_management.html',
    '/projects/movie_library.html',
    '/projects/school_is.html',
    '/projects/vehicular_system.html',

    '/projects_cs/caterpillar_game_cs.html',
    '/projects_cs/escape_game_cs.html',
    '/projects_cs/eshop_cs.html',
    '/projects_cs/food_chain_cs.html',
    '/projects_cs/hotel_management_cs.html',
    '/projects_cs/movie_library_cs.html',
    '/projects_cs/school_is_cs.html',
    '/projects_cs/vehicular_system_cs.html',

    /* CSS FILES */
    '/css/components/edit-home-form.css',
    '/css/components/scrollbar.css',
    '/css/projects/project_styles.css',
    '/css/ui_for_mobile/ui.css',
    '/css/about_Section.css',
    '/css/contact_section.css',
    '/css/education_work_section.css',
    '/css/home_section.css',
    '/css/portfolio_section.css',
    '/css/skills_section.css',
    '/css/styles.css',

    /* JS FILES */
    '/js/downloadCV/download.js',
    '/js/homeSectionManager/edit-home-section.js',
    '/js/homeSectionManager/manager.js',
    'js/offlineStatus/registerSW.js',
    '/js/ui/background.js',
    '/js/ui/button-home.js',
    '/js/ui/dots.js',
    '/js/ui/portfolio.js',
    '/js/ui/scroll.js',
    '/js/ui/sectionDetector.js',
    '/js/ui/side-nav.js',
    '/js/ui/video.js',

    /* JSON FILE */
    '/json/home_section.json',

    /* DOCS FILE */
    '/docs/Minh_Thu_Tranova_cv.pdf',

    /* EXTERN RESOURCES */
    // 'https://kit.fontawesome.com/72da5dddc6.js',
    'https://code.jquery.com/jquery-3.7.1.min.js',

    /* IMAGES */
    '/images/menu-button.png',
    '/images/skill.png',
    '/images/cz.png',
    '/images/profile.jpg',
    '/images/back.png',
    '/images/game.png',
    '/images/shopping.png',
    '/images/cinema.png',
    '/images/Kotlin.png',
    '/images/caterpillar.png',
    '/images/C.png',
    '/images/C++.png',
    '/images/systems.png',
    '/images/Spring.png',
    '/images/PostgresSQL.png',
    '/images/food-chain.png',
    '/images/car.png',
    '/images/hotel.png',
    '/images/home.png',
    '/images/home-lavender.png',
    '/images/pen.png',
    '/images/technologies.png',
    '/images/target.png',
    '/images/game-elements.png',
    '/images/inventory.png',
    '/images/handcraft.png',
    '/images/controls.png',
    '/images/saving.png',
    '/images/video.png',
    '/images/group-users.png',
    '/images/star.png',
    '/images/data-processing.png',
    '/images/user.png',
    '/images/graduation.png',
    '/images/contact-mail.png',
    '/images/downloads.png',
    '/images/cv.png',
    '/images/edit.png',
    '/images/info.png',
    '/images/arrow-left.png',
    '/images/arrow-right.png',

    // /* VIDEOS */
    // '/video/EscapeGame.mp4',
    // '/videos/EscapeGame.webm'
];

/**
 * Install Event
 * Caches all specified assets during service worker installation.
 */
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => cache.addAll(listOfUrlsToCache))
        .catch((err) => console.error('Chyba při cachování: ', err))
    )
});

/**
 * Fetch Event
 * Implements cache-first strategy with network fallback
 */
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(e.request).then(
                    response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(e.request, responseToCache);
                            })
                        return response;
                    }
                );
            })
    );
});

/**
 * Activate Event
 * Cleans up old cache versions.
 */
self.addEventListener('active', (e) => {
    const cacheList = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then( (cacheNames) => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});