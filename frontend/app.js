

$("form").on('submit', function(e) {
    var d = $('#f_textInput').val()
    
    e.preventDefault()
    fetch('http://localhost:8081', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "text": d })
    })
    .then(response => response.json())
    .then(response => { 
        console.log(JSON.stringify(response))
        $('#f_outputText').text(response.res)
        })
    })
