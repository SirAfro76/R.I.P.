function loadscript() {
    console.log('script.js loaded');
}
loadscript();

document.addEventListener('DOMContentLoaded', function () {
    const incWidthSlider = document.getElementById('inc-width');
    const resWidthSlider = document.getElementById('res-width');
    const resHeightSlider = document.getElementById('res-height');
    const rect = document.querySelector('.rect-outline');
    const incValueDisplay = document.getElementById('inc-value');
    const resWidthDisplay = document.getElementById('res-width-value');
    const resHeightDisplay = document.getElementById('res-height-value');
    const totalPixelsDisplay = document.getElementById('total-pixels');
    const ppiDisplay = document.getElementById('ppi-value');
    const svg = document.getElementById('rectangle-svg');
    const resetButton = document.getElementById('reset-button');


    function updateDisplays() {
        const width = parseFloat(resWidthSlider.value);
        const height = parseFloat(resHeightSlider.value);
        const inches = parseInt(incWidthSlider.value);

        // Update rectangle size
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);

        // Update displays
        incValueDisplay.textContent = inches;
        resWidthDisplay.textContent = width;
        resHeightDisplay.textContent = height;

        // Calculate total pixels
        const totalPixels = width * height;
        totalPixelsDisplay.textContent = totalPixels;

        // Calculate PPI
        const ppi = (totalPixels / (inches * inches)).toFixed(2);
        ppiDisplay.textContent = ppi;

        // Scaling
        const aspectRatio = width / height;
        const maxWidth = window.innerWidth - 20;
        const maxHeight = window.innerHeight - 100; 

        // Calculate scale based on dimensions
        let scale = 1;
        if (width > maxWidth || height > maxHeight) {
            scale = Math.min(maxWidth / width, maxHeight / height);
        }

        // Set SVG attributes to apply scaling
        svg.setAttribute('width', width * scale);
        svg.setAttribute('height', height * scale);
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        
    }

    // Click and edit function 
    function click(element, slider, label) {
        element.addEventListener('click', () => {
            const currentValue = parseFloat(element.textContent);
            const newValue = prompt(`Enter new value for ${label}`, currentValue);
            if (newValue !== null) {
                const roundedValue = Math.round(newValue); 
                element.textContent = roundedValue;
                slider.value = roundedValue; 
                updateDisplays();
            }
        });
    }

    // Reset Button 
    resetButton.addEventListener('click', () => {
        
        incWidthSlider.value = 24;
        resWidthSlider.value = 1920;
        resHeightSlider.value = 1080;
        updateDisplays(); 
    });


    

    // Make the text clickable
    click(resWidthDisplay, resWidthSlider, 'Width');
    click(resHeightDisplay, resHeightSlider, 'Height');
    click(incValueDisplay, incWidthSlider, 'Inches');

    incWidthSlider.addEventListener('input', updateDisplays);
    resWidthSlider.addEventListener('input', updateDisplays);
    resHeightSlider.addEventListener('input', updateDisplays);

    updateDisplays();
});
