console.log("Let's get this party started!");

const $search = $('#search');
const $div = $('#container');


function addGif(res){
    let results = res.data.length;
    if(results) {
        let index = Math.floor(Math.random() * results );
        let $newColumn = $('<div>');
        let $newGif = $('<img>', { src: res.data[index].images.original.url });

        $newColumn.append($newGif);
        $div.append($newGif);

    }
}









$('#form').on('submit', async function(e){
    e.preventDefault();
    let query = $search.val();
    $search.val('');

    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: {q: query, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', limit: 10}});
    addGif(res.data);
});

$('#remove').on('click', function(e){
    e.preventDefault();
    $div.empty() = '';
})