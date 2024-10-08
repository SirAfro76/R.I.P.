function loadscript() {
    console.log('script.js loaded Successfully');
}
loadscript();

// DOM Content
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Content Loaded & Parsed Successfully');
});

// Service Worker Registration
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
            console.log("Service Worker Registered Successfully:", registration);
        })
        .catch((error) => {
            console.error(`Service worker registration failed: ${error}`);
        });
} else {
    console.log("Service worker is not supported.");
}


// Inches Overall                                        
const inches = document.getElementById('inc-diag-value');
const inc_value = document.getElementById('inc-diag');
const centre_text = document.getElementById('inc-diag-ct');

// Svg
const rect = document.getElementById('rect-outline');
rect_width = rect.getAttribute('width');
rect_height = rect.getAttribute('height');


// Functions 
function mod_inch() {
    const new_inc_val = parseFloat(inches.value);
    inc_value.textContent = ` ${new_inc_val}"`;
    centre_text.textContent = ` ${new_inc_val}"`;
}


mod_inch();
inches.addEventListener('input', mod_inch)

