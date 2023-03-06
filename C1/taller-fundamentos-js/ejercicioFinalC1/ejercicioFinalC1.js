main();

function api() {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        { id: 1, value: 'Opción 1', disabled: false },
        { id: 2, value: 'Opción 2', disabled: false },
        { id: 3, value: 'Opción 3', disabled: false },
        { id: 4, value: 'Opción 4', disabled: false }
      ]
      resolve(data);
    }, 1000);
  });

  return myPromise;
}

function onClickLiElement(element, item) {
  const { value, disabled } = item;
  let msg;
  msg = (!disabled) ? "¿Seguro que quieres deshabilitar esta etiqueta?" : "¿Seguro que quieres habilitar esta etiqueta?";
  const elección = confirm(msg);
  if (elección && !disabled) {
    element.textContent = `${value}/disabled`;
    item.disabled = true;
  } else {
    element.textContent = `${value}/recently enabled`;
    item.disabled = false;
  }
}

function append(data) {
  const unorderedList = document.getElementById("unordered-list");
  const nodes = data.map(item => {
    const li = document.createElement('li');
    li.textContent = item.value;
    li.addEventListener("click", () => onClickLiElement(li, item));
    return li;
  });
  unorderedList.append(...nodes);
}

async function main() {
  const data = await api();
  append(data);
}