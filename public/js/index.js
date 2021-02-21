
document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://kind-hamilton-640e4e.netlify.app/.netlify/functions/get-posts-list')
        .then(response => response.json())
        .then(data => {
            //console.log(data[0].title)
            spinner = document.getElementById('spinner-animate')
            post_list = document.getElementById('posts-list')
            data.map(x => {
                var div_card = document.createElement("div");
                var div_card_body = document.createElement("div");
                var h5_card_title = document.createElement("h5");
                var title_node = document.createTextNode(x.title);
                var p_card_desc = document.createElement("p");
                var p_node = document.createTextNode(x.description);
                p_card_desc.appendChild(p_node);
                h5_card_title.appendChild(title_node);
                div_card_body.appendChild(h5_card_title);
                div_card_body.appendChild(p_card_desc);
                div_card.appendChild(div_card_body);
                div_card.classList.add("card");
                div_card.classList.add("border-0");
                div_card.classList.add("mb-1");
                div_card.classList.add("mx-4");
                div_card_body.classList.add("card-body");
                h5_card_title.classList.add("card-title");
                p_card_desc.classList.add("card-text");
                post_list.appendChild(div_card);

            })
            spinner.remove()
            document.documentElement.scrollTop = 0;
        })
        .catch(e => console.log(e))

})