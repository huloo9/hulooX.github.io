document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('container');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const loginBtn = document.getElementById('submitBtn');
    const registerBtn = document.getElementById('submitBtn2');
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

    loginBtn.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为
        const isFormValid = validateUsername() && validatePassword();
        if (isFormValid) {
            alert('表单验证通过，按确认跳转');
            window.location.href = 'showPage.html'; 
        }
    });

    registerBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
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
