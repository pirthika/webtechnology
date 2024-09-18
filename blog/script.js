document.addEventListener('DOMContentLoaded', function() {

    const articles = document.querySelectorAll('.post');
    
    articles.forEach(function(article) {
     
        const readMoreLink = article.querySelector('.read-more');
        const paragraph = article.querySelector('p');

     
        const fullText = paragraph.innerHTML;
        const shortText = fullText.substring(0, 300) + '...';

    
        paragraph.innerHTML = shortText;

        let isExpanded = false;


        readMoreLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            if (isExpanded) {
                paragraph.innerHTML = shortText;
                readMoreLink.textContent = 'Read More';
            } else {
                paragraph.innerHTML = fullText;
                readMoreLink.textContent = 'Show Less';
            }
            
            isExpanded = !isExpanded;
        });
    });
});
