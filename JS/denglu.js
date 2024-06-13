document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('container');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const submitBtn = document.getElementById('submitBtn');
    const resetBtn = form.querySelector('button[type="reset"]');
    const timeContainer = document.getElementById('time');

    const validateUsername = () => {
        if (username.value.trim() === '') {
            usernameError.textContent = '用户名不能为空';
            return false;
        }
        usernameError.textContent = '';
        return true;
    };

    const validatePassword = () => {
        if (password.value.length < 6) {
            passwordError.textContent = '密码长度不能少于6位';
            return false;
        }
        passwordError.textContent = '';
        return true;
    };

    form.addEventListener('input', function(event) {
        const target = event.target;
        switch (target.id) {
            case 'username':
                validateUsername();
                break;
            case 'password':
                validatePassword();
                break;
        }
    });

    form.addEventListener('focusout', function(event) {
        const target = event.target;
        switch (target.id) {
            case 'username':
                validateUsername();
                break;
            case 'password':
                validatePassword();
                break;
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const isFormValid = validateUsername() && validatePassword();
        if (isFormValid) {
            alert('表单验证通过，即将跳转');
            window.location.href = 'showPage.html';
        }
    });

    resetBtn.addEventListener('click', function() {
        window.location.href = 'zhuce.html';
    });

    const updateTime = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const dateString = now.toLocaleDateString();
        timeContainer.textContent = `${dateString} ${timeString}`;
    };

    setInterval(updateTime, 1000);
    updateTime();
});
