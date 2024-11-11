const fontPairs = [
    {
        heading: '"Signika Negative", sans-serif',
        subheading: '"Signika Negative", sans-serif',
        subtext: '"Libre Baskerville", serif'
    },
    {
        heading: '"Nourd Bold", sans-serif',
        subheading: '"Montserrat", sans-serif',
        subtext: '"Montserrat", sans-serif',
    },
    {
        heading: '"Poppins", sans-serif',
        subheading: '"Poppins", sans-serif',
        subtext: '"Soleil", sans-serif'
    }
];

let currentFontIndex = 0;

function changeFonts() {
    currentFontIndex = (currentFontIndex + 1) % fontPairs.length;
    
    const currentPair = fontPairs[currentFontIndex];
    
    const wrappers = document.querySelectorAll('.wrapper');
    
    wrappers.forEach(wrapper => {
        wrapper.querySelector('.heading').style.fontFamily = currentPair.heading;
        wrapper.querySelector('.subheading').style.fontFamily = currentPair.subheading;
        wrapper.querySelector('.subtext').style.fontFamily = currentPair.subtext;
    });
    
    document.getElementById('heading-font').textContent = currentPair.heading.replace(/["']/g, '');
    document.getElementById('subheading-font').textContent = currentPair.subheading.replace(/["']/g, '');
    document.getElementById('subtext-font').textContent = currentPair.subtext.replace(/["']/g, '');
}

document.getElementById('change-font-btn').addEventListener('click', changeFonts);
