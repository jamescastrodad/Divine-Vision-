function toggleMode () {

    const body = document.body
    const button = document.querySelector('.toggle-button');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode'); 
        button.textContent = 'Light Mode';
 
    } else { 
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = 'Dark Mode';
    }
}