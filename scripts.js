const price__coaching__monthly = document.getElementById('price__coaching__monthly')
const price__coaching__quarterly = document.getElementById('price__coaching__quarterly')
const price__coaching__halfyearly = document.getElementById('price__coaching__halfyearly')

const price__nutrition__monthly = document.getElementById('price__nutrition__monthly')
const price__nutrition__quarterly = document.getElementById('price__nutrition__quarterly')
const price__nutrition__halfyearly = document.getElementById('price__nutrition__halfyearly')

const price__all__monthly = document.getElementById('price__all__monthly')
const price__all__quarterly = document.getElementById('price__all__quarterly')
const price__all__halfyearly = document.getElementById('price__all__halfyearly')

const header__monthly = document.getElementById('monthly')
const header__quarterly = document.getElementById('quarterly')
const header__halfyearly = document.getElementById('half-yearly')

const package__coaching = document.getElementById('package__coaching')
const package__nutrition = document.getElementById('package__nutrition')
const package__all = document.getElementById('package__all')

const description__coaching = document.getElementById('description__coaching')
const description__nutrition = document.getElementById('description__nutrition')
const description__all = document.getElementById('description__all')

const prices__monthly = [price__coaching__monthly, price__nutrition__monthly, price__all__monthly]
const prices__quarterly = [price__coaching__quarterly, price__nutrition__quarterly, price__all__quarterly]
const prices__halfyearly  = [price__coaching__halfyearly , price__nutrition__halfyearly , price__all__halfyearly ]

const headers = [header__monthly, header__quarterly, header__halfyearly]
const packages = [package__coaching, package__nutrition, package__all]


headers.forEach(header => {
    header.addEventListener('click', () => {

		if(header.id == 'monthly'){
			prices__monthly.forEach(price => price.classList.add('service__price--active'))
			prices__quarterly.forEach(price => price.classList.remove('service__price--active'))
			prices__halfyearly.forEach(price => price.classList.remove('service__price--active'))

			header__monthly.classList.add('services__header__item--active')
			header__quarterly.classList.remove('services__header__item--active')
			header__halfyearly.classList.remove('services__header__item--active')
		}
		else if(header.id == 'quarterly'){
			prices__monthly.forEach(price => price.classList.remove('service__price--active'))
			prices__quarterly.forEach(price => price.classList.add('service__price--active'))
			prices__halfyearly.forEach(price => price.classList.remove('service__price--active'))

			header__monthly.classList.remove('services__header__item--active')
			header__quarterly.classList.add('services__header__item--active')
			header__halfyearly.classList.remove('services__header__item--active')
		}
		else{
			prices__monthly.forEach(price => price.classList.remove('service__price--active'))
			prices__quarterly.forEach(price => price.classList.remove('service__price--active'))
			prices__halfyearly.forEach(price => price.classList.add('service__price--active'))

			header__monthly.classList.remove('services__header__item--active')
			header__quarterly.classList.remove('services__header__item--active')
			header__halfyearly.classList.add('services__header__item--active')
		}
		
    });
});


packages.forEach(package => package.addEventListener('click', () => {

	if(package.id == 'package__coaching'){
		description__coaching.classList.add('services__body__sticky__item--active')
		description__nutrition.classList.remove('services__body__sticky__item--active')
		description__all.classList.remove('services__body__sticky__item--active')
	}
	else if(package.id == 'package__nutrition'){
		description__coaching.classList.remove('services__body__sticky__item--active')
		description__nutrition.classList.add('services__body__sticky__item--active')
		description__all.classList.remove('services__body__sticky__item--active')
	}
	else{
		description__coaching.classList.remove('services__body__sticky__item--active')
		description__nutrition.classList.remove('services__body__sticky__item--active')
		description__all.classList.add('services__body__sticky__item--active')
	}
}))


const faqs = document.querySelectorAll('.faq')

faqs.forEach( faq => faq.addEventListener('click', () => {
	faq.classList.toggle('faq--active')
}))









