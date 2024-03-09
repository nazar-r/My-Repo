const fetchProducts = async () => {
    try {
        const response = await fetch('api/product.JSON');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

const renderProducts = (products) => {
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = products.map(product => `
        <article class="product-card">
            <img class="product-card__image" src="${product.image}" alt="${product.title}" />
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">${product.description}</p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">Info</button>
                <button class="product-card__buttons-buy button button-card">Buy - ${product.price}</button>
            </div>
        </article>
    `).join('');
};

(async () => {
    try {
        const products = await fetchProducts();
        renderProducts(products);
    } catch (error) {
        console.error('Error rendering products:', error);
    }
})();