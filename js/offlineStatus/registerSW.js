// /**
//  * Service Worker Registration
//  * 
//  * Registers a service worker to enable Progressive Web App capabilities:
//  * - Offline functionality
//  * - Asset caching
//  */
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker
//         .register('/serviceWorker.js')
//         .then( () => {
//             console.log('ServiceWorker registration successful');
//         }, (err) => {
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// } else {
//     console.warn('Service workers are not supported in this browser.');
// }