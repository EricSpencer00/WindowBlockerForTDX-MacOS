// ==UserScript==
// @name         Overlay TDX Popups as Modal
// @namespace    https://example.com
// @version      1.0
// @description  Overrides openWin to display content in a modal overlay and removes openWinHref onclick attributes on services.luc.edu pages.
// @match        https://services.luc.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Override openWin to display the URL in a modal overlay
    window.openWin = function(url, width, height, windowName) {
        // Create the overlay container
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        overlay.style.zIndex = '10000';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';

        // Create the modal container
        const modal = document.createElement('div');
        modal.style.position = 'relative';
        modal.style.width = width + 'px';
        modal.style.height = height + 'px';
        modal.style.backgroundColor = '#fff';
        modal.style.borderRadius = '5px';
        modal.style.overflow = 'hidden';
        modal.style.boxShadow = '0 2px 10px rgba(0,0,0,0.5)';

        // Create the iframe to load the content
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';

        // Create a close button for the modal
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.style.position = 'absolute';
        closeBtn.style.top = '10px';
        closeBtn.style.left = '50%';
        closeBtn.style.transform = 'translateX(-50%)';
        closeBtn.style.zIndex = '10001';
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });

        // Append the iframe and close button to the modal, then the modal to the overlay
        modal.appendChild(iframe);
        modal.appendChild(closeBtn);
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Return false to cancel the default behavior
        return false;
    };

    // Function to remove any onclick attributes that call openWinHref
    function removeOpenWinHref() {
        document.querySelectorAll('[onclick*="openWinHref"]').forEach(el => {
            el.removeAttribute('onclick');
        });
    }

    // Run removal immediately on page load
    removeOpenWinHref();

    // Use a MutationObserver to handle dynamically added elements
    const observer = new MutationObserver(removeOpenWinHref);
    observer.observe(document.body, { childList: true, subtree: true });
})();
