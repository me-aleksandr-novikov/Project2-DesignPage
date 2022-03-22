const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'), 
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');


    function creatingCards(people){
        people.forEach(e => {
            const btn = menu.querySelector(e),
                  mark = wrapper.querySelectorAll(e);

                  btn.addEventListener('click', () => {
                    typeFilter(mark);
                });
            
        });

    }

    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated','fadeIn');
        });

        no.style.display = "none";
        no.classList.remove('animated','fadeIn');

        if(markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated','fadeIn');
            });
        }else{
            no.style.display = 'block';
            no.classList.add('animated','fadeIn');
        }
    };


    creatingCards(['.all', '.girl', '.lovers', '.chef', '.guy']);


    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });
    
    btnGranddad.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if(target && target.tagName == 'LI'){
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;