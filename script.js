document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('links-container');
    const footerSocials = document.getElementById('footer-socials');
    
    // Simulate a small delay for premium feel/loading effect
    setTimeout(() => {
        renderLinks();
        renderSocials();
    }, 600);

    function renderLinks() {
        container.innerHTML = ''; // Clear loader
        
        linkData.links.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.target = "_blank";
            linkElement.className = 'link-card';
            linkElement.style.animationDelay = `${index * 0.1}s`;
            
            linkElement.innerHTML = `
                <div class="link-content">
                    <div class="link-icon">
                        ${link.svg}
                    </div>
                    <span class="link-title">${link.title}</span>
                </div>
                <div class="chevron">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>
            `;
            
            container.appendChild(linkElement);
        });
    }

    function renderSocials() {
        if (!footerSocials) return;
        footerSocials.innerHTML = '';
        
        linkData.socials.forEach(social => {
            const a = document.createElement('a');
            a.href = social.url;
            a.ariaLabel = social.name;
            a.innerHTML = social.svg;
            footerSocials.appendChild(a);
        });
    }
});
