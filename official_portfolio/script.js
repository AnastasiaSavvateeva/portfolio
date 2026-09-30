const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if(currentTheme === 'dark'){
	document.body.classList.add('dark-theme')
}
themeToggleBtn.addEventListener('click',
	function(){
		document.body.classList.toggle('dark-theme');
		let theme = 'ligth';
		if(document.body.classList.contains('dark-theme'))
		{
			theme = 'dark';
		}
		localStorage.setItem('theme', theme);
	});