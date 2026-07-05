/*
 * Eventos Umami — flujo dentro del portfolio de Diego Rago.
 *
 * Requiere el script de Umami ya incluido en el <head> (script.js con
 * data-website-id). Si Umami no cargó (adblocker, etc.) no hace nada
 * y no rompe el sitio.
 *
 * Eventos que mide:
 *   - proyecto_click ....... desde el home, qué proyecto abren
 *   - obra_vista ........... qué imagen/animación abren en el lightbox
 *   - video_play ........... reproducen un video (gameplay/trailer)
 *   - contacto_click ....... tocan Fiverr / Instagram / Email (el $$$)
 *   - galeria_recorrido .... cuántas obras distintas miró en la página
 *   - scroll_profundidad ... hasta dónde bajaron (25/50/75/100%)
 */
(function () {
    'use strict';

    var PAGE = location.pathname.replace(/\/$/, '').split('/').pop().replace('.html', '') || 'home';

    function track(name, data) {
        if (window.umami && typeof window.umami.track === 'function') {
            window.umami.track(name, data);
        }
    }

    // --- proyecto_click: desde el home hacia cada proyecto ---
    document.addEventListener('click', function (e) {
        var card = e.target.closest('a.project-card-home');
        if (!card) return;
        var proyecto = (card.getAttribute('href') || '').replace('.html', '');
        if (proyecto) track('proyecto_click', { proyecto: proyecto });
    });

    // --- obra_vista + recorrido: aperturas del lightbox ---
    var obrasVistas = new Set();
    document.addEventListener('click', function (e) {
        var item = e.target.closest('.gallery-item');
        if (!item) return;
        var obra = item.getAttribute('data-lightbox-alt') || item.getAttribute('data-lightbox-src') || 'sin-nombre';
        obrasVistas.add(obra);
        track('obra_vista', { obra: obra, proyecto: PAGE });
    });

    // --- video_play: una vez por video por visita ---
    document.querySelectorAll('video').forEach(function (video, i) {
        var reportado = false;
        video.addEventListener('play', function () {
            if (reportado) return;
            reportado = true;
            var nombre = (video.currentSrc || '').split('/').pop() || 'video-' + (i + 1);
            track('video_play', { video: nombre, proyecto: PAGE });
        });
    });

    // --- contacto_click: Fiverr / Instagram / Email ---
    document.addEventListener('click', function (e) {
        var link = e.target.closest('a.social-link, a[href^="mailto:"]');
        if (!link) return;
        var href = link.getAttribute('href') || '';
        var red = 'otro';
        if (href.indexOf('mailto:') === 0) red = 'email';
        else if (href.indexOf('instagram') !== -1) red = 'instagram';
        else if (href.indexOf('fiverr') !== -1) red = 'fiverr';
        track('contacto_click', { red: red, pagina: PAGE });
    });

    // --- scroll_profundidad: tramos 25/50/75/100, una vez cada uno ---
    var tramos = [25, 50, 75, 100];
    var enviados = {};
    var ticking = false;
    window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
            ticking = false;
            var max = document.documentElement.scrollHeight - window.innerHeight;
            if (max <= 0) return;
            var pct = Math.round((window.scrollY / max) * 100);
            tramos.forEach(function (t) {
                if (pct >= t && !enviados[t]) {
                    enviados[t] = true;
                    track('scroll_profundidad', { pagina: PAGE, tramo: t + '%' });
                }
            });
        });
    }, { passive: true });

    // --- galeria_recorrido: resumen al irse de la página ---
    var recorridoEnviado = false;
    document.addEventListener('visibilitychange', function () {
        if (document.visibilityState !== 'hidden' || recorridoEnviado) return;
        if (obrasVistas.size === 0) return;
        recorridoEnviado = true;
        track('galeria_recorrido', { proyecto: PAGE, obras_vistas: obrasVistas.size });
    });
})();
