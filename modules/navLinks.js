export default function navFunction(e) {
  e.preventDefault();
  const sections = document.querySelectorAll('section');
  const linkTarget = e.target.href;
  sections.forEach((section) => {
    if (linkTarget.includes(section.id)) {
      section.classList.remove('d-none');
    } else {
      section.classList.add('d-none');
    }
  });
}
