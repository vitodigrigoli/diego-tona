const initServices = (barba_document) => {
	console.log('initServices')
	const price__coaching__monthly = barba_document.querySelector('#price__coaching__monthly')
	const price__coaching__quarterly = barba_document.querySelector('#price__coaching__quarterly')
	const price__coaching__halfyearly = barba_document.querySelector('#price__coaching__halfyearly')
	
	const price__nutrition__monthly = barba_document.querySelector('#price__nutrition__monthly')
	const price__nutrition__quarterly = barba_document.querySelector('#price__nutrition__quarterly')
	const price__nutrition__halfyearly = barba_document.querySelector('#price__nutrition__halfyearly')
	
	const price__all__monthly = barba_document.querySelector('#price__all__monthly')
	const price__all__quarterly = barba_document.querySelector('#price__all__quarterly')
	const price__all__halfyearly = barba_document.querySelector('#price__all__halfyearly')
	
	const header__monthly = barba_document.querySelector('#monthly')
	const header__quarterly = barba_document.querySelector('#quarterly')
	const header__halfyearly = barba_document.querySelector('#half-yearly')

	
	const prices__monthly = [price__coaching__monthly, price__nutrition__monthly, price__all__monthly]
	const prices__quarterly = [price__coaching__quarterly, price__nutrition__quarterly, price__all__quarterly]
	const prices__halfyearly  = [price__coaching__halfyearly , price__nutrition__halfyearly , price__all__halfyearly ]
	
	const headers = [header__monthly, header__quarterly, header__halfyearly]
	const prices = [prices__monthly, prices__quarterly , prices__halfyearly ]
	
	if (headers[0]){
		headers.forEach(header => {
			header.addEventListener('click', event => servicesHandler(header, headers, prices));
		})
	}
	else{
		console.log('NULL')
	}

}

const servicesHandler = (header, headers, prices ) => {
	console.log('servicesHandler')

	const [header__monthly, header__quarterly, header__halfyearly] = headers;
	const [prices__monthly, prices__quarterly, prices__halfyearly] = prices;


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
}

const removeServicesEventListener = (barba_document) => {
	console.log('removeServicesEventListener')
	
	const header__monthly = barba_document.querySelector('#monthly')
	const header__quarterly = barba_document.querySelector('#quarterly')
	const header__halfyearly = barba_document.querySelector('#half-yearly')

	
	const headers = [header__monthly, header__quarterly, header__halfyearly]
	
	
	if (headers[0]){
		headers.forEach(header => {
			header.removeEventListener('click', servicesHandler);
		})
	}

}



const faqsHandler = faq => {
	console.log('faqsHandler')

	faq.classList.toggle('faq--active')
}

const initFaqs = (barba_document) => {
	
	console.log('initFaqs')

	const faqs = barba_document.querySelectorAll('.faq')

	if(faqs){
		
		faqs.forEach( faq => faq.addEventListener('click', event => faqsHandler(faq)))
	}

}

const removeFaqsEventListener = (barba_document) => {

	console.log('removeFaqsEventListener')

	const faqs = barba_document.querySelectorAll('.faq')

	if(faqs){
		
		faqs.forEach( faq => faq.removeEventListener('click', faqsHandler))
	}
} 



const navbar__button = document.querySelector('.navbar__button')
const navbar = document.querySelector('.navbar')

navbar__button.addEventListener('click', () =>{
	console.log('navbar__button')

	navbar__button.classList.toggle('navbar__button--active')
	navbar.classList.toggle('navbar--active')
})



const navbar__body__item = document.querySelectorAll('.navbar__body__item')

navbar__body__item.forEach(item => item.addEventListener('click', () => {
	navbar.classList.remove('navbar--active')
})) 

const navbar__header = document.querySelector('.navbar__header')
navbar__header.addEventListener('click', () => navbar.classList.remove('navbar--active'))


const buttonsHandler = () => {

	console.log('buttonsHandler')

	const buttons = document.querySelectorAll('.floating'); 
	let scrollPosition = window.scrollY + window.innerHeight;
	let totalHeight = document.body.offsetHeight;
	
	// Sostituisci '100' con il valore che rappresenta la distanza dal fondo pagina per attivare l'effetto
	
	if (totalHeight - scrollPosition < 100) { 
		buttons.forEach(function(button) {
		button.classList.add('floating--hidden');
		});
	} else {
		buttons.forEach(function(button) {
		button.classList.remove('floating--hidden');
		});
	}

}

const initButtons = () => {

	console.log('initButtons')
	window.addEventListener('scroll', buttonsHandler);
}



const initImageCompare = (barba_document) => {
	console.log('initImageCompare')
	const viewers = barba_document.querySelectorAll(".image-compare");

	if(viewers){

		const options = {
		
			// UI Theme Defaults
		  
			controlColor: "#FFFFFF",
			controlShadow: true,
			addCircle: true,
			addCircleBlur: true,
		  
			// Label Defaults
		  
			showLabels: true,
			labelOptions: {
			  before: 'Before',
			  after: 'After',
			  onHover: false
			},
		  
			// Smoothing
		  
			smoothing: true,
			smoothingAmount: 100,
		  
			// Other options
		  
			hoverStart: true,
			verticalMode: false,
			startingPoint: 50,
			fluidMode: true
		};
		  
		viewers.forEach((element) => {
		  new ImageCompare(element, options).mount();
		});
	}

}


const initVideo = (barba_document) =>{

	console.log('initVideo')

	let video = barba_document.querySelector('video');

		if (video) {
			video.play();
		}
}








function pageTransition() {

	let tl = gsap.timeline();

	tl.to('.transition', {
		duration: 1,
		scaleY: 1,
		transformOrigin: 'bottom',
		ease: 'power4.inOut'
	});

	tl.to('.transition', {
		duration: 1,
		scaleY: 0,
		transformOrigin: 'top',
		ease: 'power4.inOut',
		delay: 0.2
	});

}


function contentAnimation() {

	let tl = gsap.timeline();

	tl.to('.reveal__item', {
		scaleY: 0,
		transformOrigin: 'top',
		duration: 1,
		ease: 'power3.inOut',
		delay: 0.75
	});

}


function delay(n) {

	n = n || 0;

	return new Promise((done) => {
		setTimeout( () => {
			done();
		}, n)
	});
}



barba.init({

	sync: true,
	transitions: [
		{
			async leave(data) {
				console.log('leave')
				
				const done = this.async();
				pageTransition();
				await delay(1000);

				removeServicesEventListener(data.current.container)
				removeFaqsEventListener(data.current.container)
				
				done();
			},

			async enter(data) {
				console.log('enter')

				window.scrollTo(0, 0);

				contentAnimation();

				initVideo(data.next.container);
				initServices(data.next.container)
				initImageCompare(data.next.container)
				initFaqs(data.next.container)

			},

			async once(data) {
				console.log('once')

				pageTransition();
				await delay(1000);
				contentAnimation();

				initVideo(data.next.container);
				initServices(data.next.container);
				initImageCompare(data.next.container);
				initButtons()
				initFaqs(data.next.container)
			},


		},
	],
});
