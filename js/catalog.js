/* Baber Tyres Corporation — Catalog page logic (search, filters, modal) */

(function () {
  const grid = document.getElementById("product-grid");
  const emptyState = document.getElementById("empty-state");
  const resultsCount = document.getElementById("results-count");
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");
  const brandSelect = document.getElementById("filter-brand");
  const vehicleSelect = document.getElementById("filter-vehicle");
  const sizeSelect = document.getElementById("filter-size");
  const clearBtn = document.getElementById("clear-filters");

  if (!grid) return;

  /* Populate filter dropdowns from data */
  const brands = [...new Set(TYRES.map((t) => t.brand))].sort();
  const vehicleTypes = [...new Set(TYRES.map((t) => t.vehicleType))];
  const sizes = [...new Set(TYRES.map((t) => t.size))].sort();

  brands.forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    brandSelect.appendChild(opt);
  });
  vehicleTypes.forEach((v) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    vehicleSelect.appendChild(opt);
  });
  sizes.forEach((s) => {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    sizeSelect.appendChild(opt);
  });

  /* Read vehicleType from URL query (e.g. tyres.html?vehicleType=Car) */
  const params = new URLSearchParams(window.location.search);
  const urlVehicle = params.get("vehicleType");
  if (urlVehicle && vehicleTypes.includes(urlVehicle)) {
    vehicleSelect.value = urlVehicle;
  }

  function stockBadge(stock) {
    if (stock === "in") return '<span class="badge in-stock">In Stock</span>';
    if (stock === "limited") return '<span class="badge limited">Limited Stock</span>';
    return "";
  }

  function stockLabel(stock) {
    if (stock === "in") return "In Stock";
    if (stock === "limited") return "Limited Stock";
    return "Contact for Availability";
  }

  function renderCard(t) {
    const importBadge = t.imported ? '<span class="badge import">Direct Import</span>' : "";
    return `
      <div class="product-card reveal in" data-id="${t.id}">
        <div class="product-media">
          <img src="${t.image}" alt="${t.brand} ${t.size} tyre" loading="lazy">
          ${stockBadge(t.stock)}
          ${importBadge}
        </div>
        <div class="product-body">
          <span class="product-brand">${t.brand}</span>
          <span class="product-size">${t.size}</span>
          <span class="product-pattern">${t.pattern} &middot; ${t.vehicleType}</span>
          <div class="product-foot">
            <button class="btn btn-ghost-dark btn-sm view-detail" data-id="${t.id}">View Details</button>
            <a href="${waLinkForTyre(t)}" target="_blank" class="btn btn-whatsapp btn-sm">Enquire</a>
          </div>
        </div>
      </div>
    `;
  }

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const brand = brandSelect.value;
    const vehicle = vehicleSelect.value;
    const size = sizeSelect.value;

    const filtered = TYRES.filter((t) => {
      const matchesQuery =
        !q ||
        t.size.toLowerCase().includes(q) ||
        t.brand.toLowerCase().includes(q) ||
        t.pattern.toLowerCase().includes(q);
      const matchesBrand = !brand || t.brand === brand;
      const matchesVehicle = !vehicle || t.vehicleType === vehicle;
      const matchesSize = !size || t.size === size;
      return matchesQuery && matchesBrand && matchesVehicle && matchesSize;
    });

    if (filtered.length === 0) {
      grid.style.display = "none";
      emptyState.style.display = "block";
      resultsCount.textContent = "No tyres found";
    } else {
      grid.style.display = "grid";
      emptyState.style.display = "none";
      grid.innerHTML = filtered.map(renderCard).join("");
      resultsCount.textContent = `Showing ${filtered.length} of ${TYRES.length} tyres`;
    }
  }

  searchBtn.addEventListener("click", applyFilters);
  searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") applyFilters();
    else applyFilters();
  });
  brandSelect.addEventListener("change", applyFilters);
  vehicleSelect.addEventListener("change", applyFilters);
  sizeSelect.addEventListener("change", applyFilters);
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    brandSelect.value = "";
    vehicleSelect.value = "";
    sizeSelect.value = "";
    applyFilters();
  });

  /* Product detail modal */
  const overlay = document.getElementById("pd-overlay");
  const pdClose = document.getElementById("pd-close");

  function openDetail(id) {
    const t = TYRES.find((x) => x.id === id);
    if (!t) return;
    document.getElementById("pd-img").src = t.image;
    document.getElementById("pd-img").alt = `${t.brand} ${t.size} tyre`;
    document.getElementById("pd-brand").textContent = t.brand + (t.imported ? " · Direct Import" : "");
    document.getElementById("pd-size").textContent = t.size;
    document.getElementById("pd-pattern").textContent = t.pattern;
    document.getElementById("pd-vehicle").textContent = t.vehicleType;
    document.getElementById("pd-stock").textContent = stockLabel(t.stock);
    document.getElementById("pd-wa").href = waLinkForTyre(t);
    overlay.classList.add("open");
  }

  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".view-detail");
    if (btn) openDetail(btn.dataset.id);
  });
  pdClose.addEventListener("click", () => overlay.classList.remove("open"));
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("open");
  });

  applyFilters();
})();
