export function render(arr, place, Component) {
  place.innerHTML = ''
  arr.forEach(item => {
    const card = Component(item);
    place.append(card);
  });
}
