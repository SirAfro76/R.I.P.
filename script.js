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

// ██╗   ██╗ █████╗ ██████╗ ███████╗
// ██║   ██║██╔══██╗██╔══██╗██╔════╝
// ██║   ██║███████║██████╔╝███████╗
// ╚██╗ ██╔╝██╔══██║██╔══██╗╚════██║
//  ╚████╔╝ ██║  ██║██║  ██║███████║
//   ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝

// Inches Overall                                        
const inches = document.getElementById('inc-diag-display');
const inc_value = document.getElementById('inc-diag');

// Svg
const rect = document.getElementById('rect-outline');



// ███████╗██╗   ██╗███╗   ██╗ ██████╗███████╗
// ██╔════╝██║   ██║████╗  ██║██╔════╝██╔════╝
// █████╗  ██║   ██║██╔██╗ ██║██║     ███████╗
// ██╔══╝  ██║   ██║██║╚██╗██║██║     ╚════██║
// ██║     ╚██████╔╝██║ ╚████║╚██████╗███████║
// ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚══════╝

function mod_inch() {
    const new_inc_val = parseFloat(inches.value);
    inc_value.textContent = `${new_inc_val}`;
}
mod_inch();



// ███████╗██╗   ██╗███████╗███╗   ██╗████████╗███████╗
// ██╔════╝██║   ██║██╔════╝████╗  ██║╚══██╔══╝██╔════╝
// █████╗  ██║   ██║█████╗  ██╔██╗ ██║   ██║   ███████╗
// ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║╚██╗██║   ██║   ╚════██║
// ███████╗ ╚████╔╝ ███████╗██║ ╚████║   ██║   ███████║
// ╚══════╝  ╚═══╝  ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝


inches.addEventListener('input', mod_inch)