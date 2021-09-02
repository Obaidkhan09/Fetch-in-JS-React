async function getData(){
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    let data = await fetch(url);
    console.log('Response is ' ,data);
    let dataAgain = await data.json();
    console.log('Data is ' ,dataAgain);
}

async function postData(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
            //Here Fetch API will take 3 parameters as an input
            //1 is url, 2nd is body that data is being sent 3rd is header that allow you to perform action on http
    let data = await fetch(url, {
        method: 'POST',
        body:JSON.stringify({
            title: 'My info',
            body: 'Data',
            UserId: 001,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log('Post response ',data);
    console.log('Post Data is', data = await data.json())
}

getData();
postData();