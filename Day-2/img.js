 document.addEventListener('DOMContentLoaded', function () {
        const imgBtn = document.getElementById('submit');
        const catImage = document.getElementById('cat-image');

        async function getCatImage() {
            imgBtn.disabled = true;
            try {
                const response = await fetch('https://api.thecatapi.com/v1/images/search');

                console.log('Response status:', response.status);

                if (!response.ok) {
                    throw new Error(`Request failed with status `);
                }

                const data = await response.json();
                console.log('Fetched cat image:', data);
                catImage.src = data[0].url;
                console.log(data[0]);
                catImage.width = 400;
                catImage.height = 400;

            } catch (error) {
                console.error('Error fetching cat image:', error);
                
            } finally {
                imgBtn.disabled = false;
            }
        }

        imgBtn.addEventListener('click', getCatImage);
        getCatImage();
    });