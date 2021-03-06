function getMarvelData() {

    let dateOne = document.getElementById('dateFirst').value,
        dateTwo = document.getElementById('dateSecond').value;


    fetch('https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateRange=' + dateOne + '-01-01%2C' + dateTwo + '-01-02&characters=1009187&limit=100&apikey=cb6378a5a3f12f56c38a8325fbfa0dcb')
        .then(function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);

                    return;
                }


                // Examines the data in the response
                response.json().then(function(data) {
               

                    function createNode(element) {
                        // Creates whatever element you pass as parameters
                        return document.createElement(element);
                    }

                    function append(parent, element) {
                        // Appends the second parameter(element) to the first
                        return parent.appendChild(element);
                    }
                                  
                    // Add results to container in the end
                    let container = document.getElementById('result'),
                        marvelData = data.data.results


                        // Add animation to reveal data
                          container.classList.add("revealer");


                        // Map through the results and run code for each
                        return marvelData.map(function(marvel) {

                             // If results taking awhile...show loader
                            document.getElementById('icon').style.display = 'block';

                            // Create 3 elements
                            let div = createNode('div'),
                                img = createNode('img'),
                                par = createNode('p');

                            // Attach img and title of comic to elements  
                            img.src = marvel.thumbnail.path + '/standard_fantastic.jpg';
                            par.innerHTML = `${marvel.title}`;
                            div.classList.add("card");

                            append(div, img);
                            append(div, par);
                            append(container, div);
                        })

                           
                  
                    // Spit out results
                    output = marvelData;
 
                })
               
            })
        
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });

}

 

document.getElementById('getData').addEventListener('click', getMarvelData);
 