const shareButton = document.querySelector('.share-button');
const tooltip = document.querySelector('.tooltip')

shareButton.addEventListener('mouseover', ()=> {
    tooltip.style.visibility = "visible"
})

shareButton.addEventListener('mouseout', ()=> {
    tooltip.style.visibility = "hidden"
})