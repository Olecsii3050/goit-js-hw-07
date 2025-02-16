const categories = document.querySelectorAll('#categories .item');

console.log(`Nambers of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('h2').innerText;

  const items = category.querySelectorAll('ul > li');
  const itemCount = items.length;

  console.log(`Category: ${title}, Elements: ${itemCount}`);
});
