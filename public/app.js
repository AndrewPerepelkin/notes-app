async function remove(id) {
  await fetch(`/${id}`, {method: 'DELETE'})
}

async function edit(id, oldTitle) {
  const title = prompt('enter new title', oldTitle)
  if (title) {
    const content = {
      title,
      id
    }
    await fetch('/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(content)
    })
  }
  return title ? title : oldTitle
}

document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'remove') {
    remove(event.target.dataset.id)
    event.target.closest('li').remove()
  }
})

document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'edit') {
    const id = event.target.dataset.id
    const title = event.target.closest('li').firstChild.textContent.trim()
    edit(id, title).then((data) => event.target.closest('li').firstChild.textContent = data)
  }
})