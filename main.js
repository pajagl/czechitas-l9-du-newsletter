// tady je místo pro náš program

// Auto
const auto = document.querySelector('#auto');

const move = (event) => {
    const tlacitko = event.key;

    if(tlacitko === 'ArrowRight') {
        auto.style.transform = 'rotateY(0deg)';
        auto.style.animation = 'to-right 1s forwards';
    }

    if(tlacitko === 'ArrowLeft') {
        auto.style.transform = 'rotateY(180deg)';
        auto.style.animation = 'to-left 1s forwards';
    }
  
    //console.log(event);
    console.log('keydown');
    console.log(tlacitko);
}

window.addEventListener('keydown', move);

// Přihlášení 
const user = {
	email: 'bartolomej.rozumbrada@gmail.com',
	password: 'vimzenicnevim',
	name: 'Bartoloměj',
}

document.querySelector('#login-email').addEventListener('submit', (e) => {
	e.preventDefault()

	const napisEmail = document.querySelector('#email')
	const vlozHeslo = document.querySelector('#password')
	const container = document.querySelector('.container')
	const status = document.querySelector('#status')

	if (
		napisEmail.value === user.email &&
		vlozHeslo.value === user.password
	) {
		container.innerHTML = `<h1>Přihlášený uživatel: ${user.name}</h1>`
	} else {
		status.textContent = 'Neplatné přihlašovací údaje'
		vlozHeslo.value = ''
	}
})


// Newsletter
const formular = document.querySelector('form')

const odebirat = (event) => {
	event.preventDefault()
	const input = document.querySelector('input')
	const email = input.value
	formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

formular.addEventListener('submit', odebirat)

