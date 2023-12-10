document.getElementById('login-form').addEventListener('submit', function(event){
    event.preventDefault();
    const UserName = document.getElementById('user-name').value;
    localStorage.setItem('name', UserName);
    
    window.location.href = 'main.html';
});