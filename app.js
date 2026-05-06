document.addEventListener('DOMContentLoaded', () => {
    const featuredGrid = document.getElementById('featured-products');
    const categoryGrid = document.getElementById('category-products');
    const productDetail = document.getElementById('product-detail-container');

    // Handle Home Page Featured Products
    if (featuredGrid) {
        const featured = products.slice(0, 4);
        featuredGrid.innerHTML = featured.map(p => renderProductCard(p)).join('');
    }

    // Handle Category Pages
    if (categoryGrid) {
        const path = window.location.pathname;
        let category = '';
        if (path.includes('face')) category = 'face';
        else if (path.includes('eye')) category = 'eye';
        else if (path.includes('lip')) category = 'lip';
        else if (path.includes('cheek')) category = 'cheek';
        else if (path.includes('tools')) category = 'tools';

        const filtered = category ? products.filter(p => p.category === category) : products;
        categoryGrid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
    }

    // Handle Product Detail Page
    if (productDetail) {
        const params = new URLSearchParams(window.location.search);
        const id = parseInt(params.get('id'));
        const product = products.find(p => p.id === id);

        if (product) {
            renderProductDetail(product);
        } else {
            productDetail.innerHTML = '<h2>產品未找到</h2>';
        }
    }
});

function renderProductCard(p) {
    return `
        <div class="product-card">
            <a href="product.html?id=${p.id}">
                <div class="product-image">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <h3>${p.name}</h3>
                <p class="price">${p.price}</p>
            </a>
        </div>
    `;
}

function renderProductDetail(p) {
    const container = document.getElementById('product-detail-container');
    container.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 4rem; align-items: center;">
            <div class="product-image" style="height: 500px; background: #f9f9f9;">
                <img src="${p.image}" alt="${p.name}" style="max-height: 100%; max-width: 100%;">
            </div>
            <div class="product-info">
                <p style="text-transform: uppercase; letter-spacing: 2px; color: #999; margin-bottom: 1rem;">${p.category.toUpperCase()}</p>
                <h1 style="font-size: 3rem; margin-bottom: 1rem;">${p.name}</h1>
                <p class="price" style="font-size: 1.5rem; margin-bottom: 2rem;">${p.price}</p>
                <p style="font-size: 1.1rem; color: #666; margin-bottom: 3rem;">${p.description}</p>
                <div style="display: flex; gap: 1rem;">
                    <button class="btn btn-gold" style="flex: 1;">加入購物車</button>
                    <button class="btn" style="flex: 1; border-color: #333; color: #333;">立即購買</button>
                </div>
            </div>
        </div>
    `;
}
