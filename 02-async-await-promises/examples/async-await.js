async function fetchData() {
    try {
        const data = await fetch("https://api.example.com/data");
        const json = await data.json();
        console.log(json);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData();