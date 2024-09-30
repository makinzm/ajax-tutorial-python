document.getElementById('fetchButton').addEventListener('click', function() {
    fetch('/super_super_date')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error response');
            }
            console.log('Response:', response);
            return response.json();
        })
        .then(data => {
            console.log('From server:', data);
            document.getElementById('result').innerHTML = data.oraora_time;
        })
        .catch(error => {
            document.getElementById('result').innerHTML = 'Error occurred';
            console.error('Error:', error);
        });
});

