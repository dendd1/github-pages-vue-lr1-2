//Создаём Vue приложение
const app = Vue.createApp({
    data() {
        return {
            // Готовый присет заполнения формы
            institution: 'МГЧПУМ',
            faculty: 'ФРАТ',
            specialization: 'бухгалтер рассады',
            Year_ending: '2022',
            erPhone: '',
            erMail: '',
            profession: 'бухгалтер',
            city: 'Чайхона',
            photo: 'https://s00.yaplakal.com/pics/pics_original/5/9/2/14163295.jpg',
            surname: 'Духанов',
            name: 'Данила',
            patronymic: 'Иванович',
            phone: '9005553535',
            mail: 'test@mail.ru',
            bDate: '2022-11-22',
            education: 'Среднее',
            money: '7777',
            skills: 'умный; крутой; соленый; лунный; космический; стрессолётный;',
            about: 'Вспоминаю свой первый опыт выращивания рассады, это было и волнительно, и радостно одновременно: появилось новое увлекательное хобби – овощеводство. В первый же год вырастила хорошую рассаду томатов, перцев, баклажанов, лука-порея.\n' +
                'В статье собрала свои наблюдения как новичка, надеюсь, будет полезно почитать начинающим дачникам.',
        }
    },
    methods: {
        // Ф. валидации телефона, в случае неправильного ввода, выведет подсказку для правильного написания
        validatePhone() {
            this.erPhone = '';
            if (this.phone.length < 6 || this.phone.length > 10) {
                this.erPhone = 'Длина номера должна быть от 6 до 10 символов.';
            }
            if (/\D/.test(this.phone)) {
                this.erPhone += ' Номер должен сожержать только цифры.';
            }
        },
        validateMail(){
            this.erMail = '';
            if (!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.mail))) {
                this.erMail += 'Введите почту корректно. example@mail.ru';
            }

        }

    }
})


//Завершаем инициализацию приложения
const vm = app.mount('#app')