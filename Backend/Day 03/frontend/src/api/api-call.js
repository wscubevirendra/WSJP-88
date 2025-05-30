async function getData() {
    const response = await fetch('http://localhost:5000/user/get-data');
    const data = await response.json();
    return data.user


}

export default getData;