
        // Dark Mode Toggl
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
       
        // Verifica preferência do usuário
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Modo Claro</span>';
        }
       
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
           
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Modo Claro</span>';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i><span>Modo Escuro</span>';
            }
        });
       
       
      