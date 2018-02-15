document.getElementById('getData').addEventListener('click', getMarvelData);
document.getElementById('clearData').addEventListener('click', clearBoard);

function clearBoard() {
    document.getElementById("result").classList.add("hider")
}
 
  function getMarvelData(){
    
  let dateOne = document.getElementById('dateFirst').value,  
   dateTwo = document.getElementById('dateSecond').value;

  fetch('https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&noVariants=true&dateRange=' + dateOne + '-01-01%2C' + dateTwo +'-01-02&characters=1009187&limit=20&apikey=cb6378a5a3f12f56c38a8325fbfa0dcb')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examines the data in the response
      response.json().then(function(data) {

        function createNode(element) {
          return document.createElement(element); 
          // Creates whatever element you pass as parameters
        }

        function append(parent, element) {
          return parent.appendChild(element);
           // Appends the second parameter(element) to the first
        }

            let container = document.getElementById('result');

                let marvelTitle = data.data.results

                 // Map through the results and run code for each
                    return marvelTitle.map(function(marvel) { 
 
                  // Create 3 elements
                     let div = createNode('div'),
                     img = createNode('img'),
                     par = createNode('p');

                     par.classList.add("card");
 
                     img.src = marvel.thumbnail.path + '/standard_fantastic.jpg';
                 

                      append(div, img);
                      append(div, par);
                      append(container, div);
                    })

                output = marvelTitle

            
 
                     
 
            
           
    

       });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}