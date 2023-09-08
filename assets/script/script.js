addEventListener('load', () => {    
    const getData = async () => {
        try {
            const data = await fetch('../../assets/data/data.json');
            return data.json();
        } catch (error) {
            console.error(`Ada error di ${error}`);
        }
    }

    const renderData = async (e) => {
        try {
            const results = await getData();
            const main = document.querySelector('main');
            let cards = ``;

            for (const result of results) {
                cards += `<div class="card ${result.title.toLowerCase()}">
                            <h3>${result.title}</h3>
                            <p>${result.subtitle}</p>
                            <div class="icon">
                                <img src="${result.iconPath}" alt="${result.title}">
                            </div>
                        </div>`;
            }
            
            main.innerHTML = cards;
        } catch (error) {
            console.error(`Ada error di ${error}`);
        }
    }

    renderData();
});