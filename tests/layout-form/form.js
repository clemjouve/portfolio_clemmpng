document.addEventListener('DOMContentLoaded', () => {
	// Prefer scoped selection inside .content-section when present
	const container = document.querySelector('.content-section') || document;
	const radios = container.querySelectorAll('input[type="radio"][name="custom-radio"]');
	const btn = container.querySelector('.button') || document.querySelector('.button');
	if (!btn || radios.length === 0) return;

	const updateButtonState = () => {
		const anyChecked = Array.from(radios).some(r => r.checked);
		btn.disabled = !anyChecked;
		btn.setAttribute('aria-disabled', String(!anyChecked));
		btn.classList.toggle('is-disabled', !anyChecked);
	};

	const handleButtonClick = () => {
		const anyChecked = Array.from(radios).some(r => r.checked);
		if (anyChecked) {
			window.location.href = 'etape-2.html';
		}
	};

	radios.forEach(r => r.addEventListener('change', updateButtonState));
	btn.addEventListener('click', handleButtonClick);

	// initial state
	updateButtonState();
});