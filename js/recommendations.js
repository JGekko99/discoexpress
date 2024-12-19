// Dati di esempio per il catalogo
const records = [
    { title: "Album Classico 1", category: "classic", img: "assets/images/sample-record.jpg" },
    { title: "Rocking Hits", category: "rock", img: "assets/images/sample-record.jpg" },
    { title: "Smooth Jazz Tunes", category: "jazz", img: "assets/images/sample-record.jpg" },
    { title: "Indie Spirit", category: "indie", img: "assets/images/sample-record.jpg" },
    { title: "Altri Classici", category: "classic", img: "assets/images/sample-record.jpg" },
    { title: "Rock Legends", category: "rock", img: "assets/images/sample-record.jpg" },
];

document.addEventListener('DOMContentLoaded', function() {
    const catalogGrid = document.getElementById('catalog-grid');
    const recommendationsGrid = document.getElementById('recommendations-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Mostra tutti i dischi inizialmente
    displayRecords(records, catalogGrid);

    // Filtri
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            if (category === 'all') {
                displayRecords(records, catalogGrid);
            } else {
                const filtered = records.filter(r => r.category === category);
                displayRecords(filtered, catalogGrid);
            }
        });
    });

    // Raccomandazioni personalizzate (esempio semplice)
    const lastCategory = localStorage.getItem('preferredCategory') || 'classic';
    const recommended = records.filter(r => r.category === lastCategory);
    displayRecords(recommended, recommendationsGrid);

    // Dimostrazione: quando si clicca sul catalogo, salva una preferenza
    catalogGrid.addEventListener('click', () => {
        localStorage.setItem('preferredCategory', 'rock'); 
    });
});

function displayRecords(recordArray, container) {
    container.innerHTML = '';
    recordArray.forEach(record => {
        const card = document.createElement('article');
        card.className = 'record-card';
        card.innerHTML = `
            <img src="${record.img}" alt="${record.title}" />
            <h3>${record.title}</h3>
            <p>Categoria: ${record.category}</p>
        `;
        container.appendChild(card);
    });
}
