function formattedDate(d) {
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
}



// document.addEventListener('DOMContentLoaded', (event) => {
//     fetch('http://localhost:8888/.netlify/functions/get-posts-list')
//         .then(response => response.json())
//         .then(data => {
//             //console.log(data[0].title)
//             spinner = document.getElementById('spinner-animate')
//             post_list = document.getElementById('posts-list')
//             post_date_list = document.getElementById('posts-date-list')
//             pagenation = document.getElementById('pagenation')

//             data.map(x => {

//                 var div_card = document.createElement("div");
//                 var div_card_body = document.createElement("div");
//                 var h5_card_title = document.createElement("h5");
//                 var title_node = document.createTextNode(x.title);
//                 var p_card_desc = document.createElement("p");
//                 var p_node = document.createTextNode(x.description);
//                 var span_date = document.createElement("span");
//                 var span_node = document.createTextNode(formattedDate(new Date(x.createdAt.substr(0, 10))) + " - ");
//                 div_card.appendChild(div_card_body);

//                 span_date.appendChild(span_node);
//                 p_card_desc.appendChild(span_date)
//                 p_card_desc.appendChild(p_node);
//                 h5_card_title.appendChild(title_node);
//                 div_card_body.appendChild(h5_card_title);
//                 div_card_body.appendChild(p_card_desc);

//                 div_card.classList.add("card");
//                 div_card.classList.add("border-0");
//                 div_card.classList.add("mb-1");
//                 div_card.classList.add("mx-lg-4");
//                 div_card_body.classList.add("card-body");
//                 h5_card_title.classList.add("card-title");
//                 p_card_desc.classList.add("card-text");
//                 span_date.classList.add("text-muted");
//                 post_list.appendChild(div_card);

//             })
//             spinner.remove()
//             document.documentElement.scrollTop = 0;
//         })
//         .catch(e => console.log(e))

// })


function converttoHtml(str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body.innerHTML;
};

document.addEventListener('DOMContentLoaded', (event) => {
    const queryString = window.location.search.substr(6, window.location.search.length);
    console.log(queryString);
    fetch(`https://kind-hamilton-640e4e.netlify.app/api/get-pagenated-posts-list?page=${queryString}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data[0].title)
            spinner = document.getElementById('spinner-animate')
            post_list = document.getElementById('posts-list')
            post_date_list = document.getElementById('posts-date-list')
            pagenation = document.getElementById('pagenation')

            data.projects.map(x => {

                var div_card = document.createElement("div");
                var div_card_body = document.createElement("div");
                var h5_card_title = document.createElement("h5");
                var title_node = document.createTextNode(x.title);
                var p_card_desc = document.createElement("p");
                var p_node = document.createTextNode(x.description);
                var span_date = document.createElement("span");
                var span_node = document.createTextNode(formattedDate(new Date(x.createdAt.substr(0, 10))) + " - ");
                div_card.appendChild(div_card_body);

                span_date.appendChild(span_node);
                p_card_desc.appendChild(span_date)
                p_card_desc.appendChild(p_node);
                h5_card_title.appendChild(title_node);
                div_card_body.appendChild(h5_card_title);
                div_card_body.appendChild(p_card_desc);

                div_card.classList.add("card");
                div_card.classList.add("border-0");
                div_card.classList.add("mb-1");
                div_card.classList.add("mx-lg-4");
                div_card_body.classList.add("card-body");
                h5_card_title.classList.add("card-title");
                p_card_desc.classList.add("card-text");
                span_date.classList.add("text-muted");
                post_list.appendChild(div_card);

            })
            //console.log(pagenation)
            //console.log(converttoHtml(data.htmlPagenation))
            pagenation.innerHTML = converttoHtml(data.htmlPagenation).replace('\\', '');
            spinner.remove();
            document.documentElement.scrollTop = 0;
        })
        .catch(e => console.log(e))

})