document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    // Función para activar la pestaña
    function activateTab(tab) {
        // Desactivar todas las pestañas
        tabs.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Activar la pestaña seleccionada
        const tabContentId = tab.getAttribute('data-tab');
        const activeTabContent = document.getElementById(tabContentId);

        tab.classList.add('active');
        activeTabContent.classList.add('active');
    }

    // Establecer la primera pestaña como activa por defecto
    activateTab(tabs[0]);

    // Añadir evento click a cada pestaña
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            activateTab(tab);
        });
    });
});
