//galeria.html

const imagenes = document.querySelectorAll('#galeria img');

imagenes.forEach(img => {
    console.log(img);
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.cursor = 'pointer';
        overlay.innerHTML = `<img src="${img.src}"style="max-width:90%; max-height:80%; border-radius:10px;">`;
        overlay.onclick = () => document.body.removeChild(overlay);
        document.body.appendChild(overlay);
    });
});