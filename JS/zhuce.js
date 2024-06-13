document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('container');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
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

    const validatePhone = () => {
        const phonePattern = /^\d{11}$/;
        if (!phonePattern.test(phone.value)) {
            phoneError.textContent = '请输入有效的手机号';
            return false;
        }
        phoneError.textContent = '';
        return true;
    };

    const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = '请输入有效的邮箱地址';
            return false;
        }
        emailError.textContent = '';
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
            case 'phone':
                validatePhone();
                break;
            case 'email':
                validateEmail();
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
            case 'phone':
                validatePhone();
                break;
            case 'email':
                validateEmail();
                break;
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const isFormValid = validateUsername() && validatePassword() && validatePhone() && validateEmail();
        if (isFormValid) {
            alert('表单验证通过，按确认跳转');
            window.location.href = 'showPage.html';
        }
    });

    registerBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'index.html'; 
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
