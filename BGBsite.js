document.addEventListener('DOMContentLoaded', function () {
    const draggableIcon = document.querySelector('.draggable-icon');
    const draggableIconTwo = document.querySelector('.draggable-icon-two');
    const containers = document.querySelectorAll('.row-container > div');
    const headerContainer = document.querySelector('.header-container');
    const rectangleContainer = document.querySelector('.rectangle');
    const colors = [
        { background: '#141418', text: '#ffb39b' },
        { background: '#07c0c4 ', text: 'black' },
        { background: '#FFB39B', text: 'black' }
    ]
    const colorsHeader = [
        {background: '#141418'},
        {background: '#07c0c4'},
        {background: '#fab319'}
    ];

    // Function to make an element droppable
    function makeDroppable(element) {
        element.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        // Track the state for each element
        let state = 0;
        let isFlipped = false;

        element.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedData = e.dataTransfer.getData('text/plain');
            
            if (draggedData === 'icon') {
                let colorIndex = parseInt(element.dataset.colorIndex) || 0;
                element.style.backgroundColor = colors[colorIndex].background;
                element.style.color = colors[colorIndex].text;
                
                let headerIndex = parseInt(element.dataset.colorIndex) || 0;
                headerIndex = (colorIndex +1) % colors.length;
                element.dataset.recIndex = headerIndex;
               
                let recIndex = parseInt(element.dataset.colorIndex) || 0;
                recIndex = (colorIndex +1) % colors.length;
                element.dataset.recIndex = recIndex;

                let c1index = parseInt(element.dataset.colorIndex) || 0;
                c1index = (colorIndex +1) % colors.length;
                element.dataset.c1index = c1index;

                let c2index = parseInt(element.dataset.colorIndex) || 0;
                c2index = (colorIndex +1) % colors.length;
                element.dataset.c2index = c2index;
                
                let c3index = parseInt(element.dataset.colorIndex) || 0;
                c3index = (colorIndex+1) % colors.length;
                element.dataset.c3index = c3index;

                colorIndex = (colorIndex + 1) % colors.length;
                console.log(colorIndex)
                element.dataset.colorIndex = colorIndex;
                if (element.classList.contains('rectangle')){
                   if (recIndex === 1 && element.classList.contains('rectangle')){
                   const vanOne = element.querySelector('.car-one');
                   const vanTwo = element.querySelector('.car-two');
                   vanOne.style.display = 'none';
                   vanTwo.style.display = 'flex';
                } else if (recIndex === 2 && element.classList.contains('rectangle')){
                    const vanOne = element.querySelector('.car-one');
                    const vanTwo = element.querySelector('.car-two');
                    const noVan = element.querySelector('.no-car');
                    const recText = element.querySelector('.rectangle-text');
                    const lightningStrike = element.querySelector('.lightning-animation');
                    
                    lightningStrike.style.display = 'flex';
                    recText.style.display = 'flex';
                    vanOne.style.display = 'none';
                    vanTwo.style.display = 'none';
                    noVan.style.display = 'flex';
                } else {
                    const vanOne = element.querySelector('.car-one');
                    const vanTwo = element.querySelector('.car-two');
                    const noVan = element.querySelector('.no-car');
                    const recText = element.querySelector('.rectangle-text');
                    recText.style.display = 'none';
                    vanOne.style.display = 'flex';
                    vanTwo.style.display = 'none';
                    noVan.style.display = 'none';
                    vanOne.style.backgroundColor = '#141418';
                }
                }
                if (element.classList.contains('header-container')) {
                    // Additional code for header-container color change
                    element.style.backgroundColor = colorsHeader[colorIndex].background;
                    
                    const leftText = element.querySelector('.h1');
                    const modeText = element.querySelector('.btn-text');
                    const moonIcon = element.querySelector('.duoicon-moon-stars');
                    moonIcon.style.color = '#141418';
                    modeText.style.color = '#141418';
                    leftText.style.color = '#141418';
                   if(headerIndex === 0 && element.classList.contains('header-container')){
                    const leftText = element.querySelector('.h1');
                    const modeText = element.querySelector('.btn-text');
                    const moonIcon = element.querySelector('.duoicon-moon-stars');
                    moonIcon.style.color = '#ffb39b';
                    modeText.style.color = '#ffb39b';
                    leftText.style.color = '#ffb39b';
                   } else if (headerIndex === 2 && element.classList.contains('header-container')) {

                        const leftText = element.querySelector('.h1');
                    const modeText = element.querySelector('.btn-text');
                    const moonIcon = element.querySelector('.duoicon-moon-stars');
                    moonIcon.style.color = '#141418';
                    modeText.style.color = '#141418';
                    leftText.style.color = '#141418';
                   }
                }
                
                
                
    

                if (c1index === 1 && element.classList.contains('container-1')) {
                    const defaultImage = element.querySelector('.default-image');
                    const whiteImage = element.querySelector('.white-image');
                    const whiteText = element.querySelector('.induction-title');
                    const indText = element.querySelector('.induction-description');
                    
                    defaultImage.style.display = 'none';
                    whiteImage.style.display = 'block';
                    whiteText.style.color = '#ffb39b';
                    indText.style.color = '#ffb39b';
                } else if (c1index === 2 && element.classList.contains('container-1')){
                    const defaultImage = element.querySelector('.default-image');
                    const whiteImage = element.querySelector('.white-image');
                    const whiteText = element.querySelector('.induction-title');
                    const indText = element.querySelector('.induction-description');
                    const colorImage = element.querySelector('.color-image');
                    colorImage.style.display = 'flex';
                    defaultImage.style.display = 'none';
                    whiteImage.style.display = 'none';
                    whiteText.style.color = '#fabc19';
                    whiteText.style.textShadow = '1px 1px 0px #141418';
                    indText.style.color = '#fabc19';
                    indText.style.textShadow = '2px 2px 0px #141418';
                    indText.style.fontSize = '18px';
                }else if (c1index != 1 && element.classList.contains('container-1')) {
                    const defaultImage = element.querySelector('.default-image');
                    const whiteImage = element.querySelector('.white-image');
                    const whiteText = element.querySelector('.induction-title');
                    const indText = element.querySelector('.induction-description');
                    const colorImage = element.querySelector('.color-image');
                    colorImage.style.display = 'none';
                    defaultImage.style.display = 'block';
                    whiteImage.style.display = 'none';
                    whiteText.style.color = '#141418';
                    indText.style.color = '#141418';
                } 
                if (c2index === 1 && element.classList.contains('container-2')) {
                    const defaultDragon = element.querySelector('.default-dragon');
                    const whiteDragon = element.querySelector('.white-dragon');
                    const dndTitle = element.querySelector('.dnd-title');
                    const dndDescription = element.querySelector('.dnd-description');

                    defaultDragon.style.display = 'none';
                    whiteDragon.style.display = 'block';
                    dndTitle.style.color = '#f3f3f3';
                    dndDescription.style.color ='#f3f3f3';
                } else if (c2index === 2 && element.classList.contains('container-2')){
                    const defaultImage = element.querySelector('.default-dragon');
                    const whiteImage = element.querySelector('.white-dragon');
                    const whiteText = element.querySelector('.dnd-title');
                    const indText = element.querySelector('.dnd-description');
                    const colorImage = element.querySelector('.color-dragon');
                    colorImage.style.display = 'flex';
                    defaultImage.style.display = 'none';
                    whiteImage.style.display = 'none';
                    whiteText.style.color = '#fabc19';
                    whiteText.style.textShadow = '1px 1px 0px #141418';
                    indText.style.color = '#fabc19';
                    indText.style.textShadow = '2px 2px 0px #141418';
                    indText.style.fontSize = '18px';
                    
                }else if (c2index != 1 && element.classList.contains('container-2')){
                    const defaultDragon = element.querySelector('.default-dragon');
                    const whiteDragon = element.querySelector('.white-dragon');
                    const dndTitle = element.querySelector('.dnd-title');
                    const dndDescription = element.querySelector('.dnd-description');
                    const colorDragon = element.querySelector('.color-dragon');
                    colorDragon.style.display = 'none';
                    dndTitle.style.textShadow = '0px 0px 0px #141418';
                    defaultDragon.style.display = 'block';
                    whiteDragon.style.display = 'none';
                    dndTitle.style.color = '#141418';
                    dndDescription.style.color ='#141418';
                    dndDescription.style.textShadow = '0px 0px 0px #141418';
                    
                }
                if (c3index === 1 && element.classList.contains('container-3')) {
                    const defaultResume = element.querySelector('.default-resume');
                    const whiteResume = element.querySelector('.white-resume');
                    const resumeTitle = element.querySelector('.resume-title');
                    const resumeText = element.querySelector('.resume-description');
                    
                    defaultResume.style.display = 'none';
                    whiteResume.style.display = 'block';
                    resumeTitle.style.color = '#f3f3f3';
                    resumeText.style.color = '#f3f3f3';
                } else if (c3index != 1 && element.classList.contains('container-3')) {
                    const defaultResume = element.querySelector('.default-resume');
                    const whiteResume = element.querySelector('.white-resume');
                    const resumeTitle = element.querySelector('.resume-title');
                    const resumeText = element.querySelector('.resume-description');
                    
                    defaultResume.style.display = 'block';
                    whiteResume.style.display = 'none';
                    resumeTitle.style.color = '#141418';
                    resumeText.style.color = '#141418';
                } 
            } else if (draggedData === 'icon-two') {
                if (element.classList.contains('container-1')) {
                    // Toggle the flip state and apply the transformation
                    isFlipped = !isFlipped;
                    if (isFlipped) {
                        
                        element.style.transform = 'scaleX(-1)';
                        element.style.transition = 'transform 0.3s';
                        const clearIndTitle = element.querySelector('.induction-title');
                        const clearIndText = element.querySelector('.induction-description');
                        const revTarot = element.querySelector('.hidden-tarot-1');
                        revTarot.style.display = 'block';
                        const hideIndImg = element.querySelector('.image-container-induction');
                        const displayTarot = element.querySelector('.tarot-container');
                        const tarotText = element.querySelector('.tarot-text-1');
                        tarotText.style.display = 'flex';
                        displayTarot.style.display = 'flex';
                        displayTarot.style.margin = '10px';
                        hideIndImg.style.display = 'none';
                        clearIndText.style.display = 'none';
                        clearIndTitle.style.display = 'none';
                    } else {
                        element.style.transform = 'scaleX(1)';
                        element.style.transition = 'transform 0.3s';
                        const clearIndTitle = element.querySelector('.induction-title');
                        const clearIndText = element.querySelector('.induction-description');
                        const tarotText = element.querySelector('.tarot-text-1');
                        tarotText.style.display = 'none';
                        const revTarot = element.querySelector('.tarot-container');
                        revTarot.style.display = 'none';
                        const hideIndImg = element.querySelector('.image-container-induction');
                        hideIndImg.style.display = 'flex';

                        clearIndText.style.display = 'block';
                        clearIndTitle.style.display = 'block';
                    }
                }
                if (element.classList.contains('container-2')) {
                    // Toggle the flip state and apply the transformation
                    isFlipped = !isFlipped;
                    if (isFlipped) {
                        
                        element.style.transform = 'scaleX(-1)';
                        element.style.transition = 'transform 0.3s';
                        const clearDndTitle = element.querySelector('.dnd-title');
                        const clearDndText = element.querySelector('.dnd-description');
                        const revTarot = element.querySelector('.hidden-tarot-2');
                        revTarot.style.display = 'block';
                        const hideDndImg = element.querySelector('.image-container-dnd');
                        const displayTarot = element.querySelector('.tarot-container-2');
                        const tarotText = element.querySelector('.tarot-text-1');
                        tarotText.style.display = 'flex';
                        displayTarot.style.display = 'flex';
                        displayTarot.style.margin = '10px';
                        hideDndImg.style.display = 'none';
                        clearDndText.style.display = 'none';
                        clearDndTitle.style.display = 'none';
                    } else {
                        element.style.transform = 'scaleX(1)';
                        element.style.transition = 'transform 0.3s';
                        const clearDndTitle = element.querySelector('.dnd-title');
                        const clearDndText = element.querySelector('.dnd-description');
                        const tarotText = element.querySelector('.tarot-text-1');
                        tarotText.style.display = 'none';
                        const revTarot = element.querySelector('.tarot-container-2');
                        revTarot.style.display = 'none';
                        const hideDndImg = element.querySelector('.image-container-dnd');
                        hideDndImg.style.display = 'flex';

                        clearDndText.style.display = 'block';
                        clearDndTitle.style.display = 'block';
                    }
                }
            } else if (draggedData === 'color-drop') {
                // Handle color drop
                state = (state + 1) % colors.length;
                element.style.backgroundColor = colors[state].background;
                element.style.color = colors[state].text;
            }
        });
    }

    // Make both icons draggable
    draggableIcon.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'icon');
    });

    draggableIconTwo.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'icon-two');
    });

    // Make each container droppable
    containers.forEach((container) => {
        makeDroppable(container);
    });
    
    makeDroppable(headerContainer);
    makeDroppable(rectangleContainer)
});

//light/dark mode toggle

