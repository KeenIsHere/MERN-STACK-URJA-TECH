document.addEventListener('DOMContentLoaded', function () {
        const imgBtn = document.getElementById('submit');
        const dogImg = document.getElementById('dog-image');

        async function getDogImage() {
            imgBtn.disabled = true;
            try {
                const response = await fetch('https://api.thedogapi.com/v1/images/search');

                console.log('Response status:', response.status);

                if (!response.ok) {
                    throw new Error(`Request failed with status `);
                }

                const data = await response.json();
                console.log('Fetched dog image:', data);
                dogImg.src = data[0].url;
                console.log(data[0]);
                dogImg.width = 400;
                dogImg.height = 400;

            } catch (error) {
                console.error('Error fetching dog image:', error);
                
            } finally {
                imgBtn.disabled = false;
            }
        }

        imgBtn.addEventListener('click', getDogImage);
        getDogImage();
        
        
        



        const imgCatBtn = document.getElementById('submit');
        const catImage = document.getElementById('cat-image');

        async function getCatImage() {
            imgCatBtn.disabled = true;
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
                imgCatBtn.disabled = false;
            }
        }

        imgCatBtn.addEventListener('click', getCatImage);
        getCatImage();



});