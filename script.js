document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search-input');
    var searchDropdown = document.getElementById('search-dropdown');
    var searchButton = document.getElementById('search-button');
    var containers = document.querySelectorAll('.image-wrapper');
    var filteredResults = document.getElementById('filtered-results');

    
    var storedQuery = localStorage.getItem('searchQuery');
    var storedFilter = localStorage.getItem('searchFilter');
    
    searchInput.value = storedQuery || '';
    searchDropdown.value = storedFilter || '';

    searchButton.addEventListener('click', function() {
      var query = searchInput.value;
      var filter = searchDropdown.value;
      var location = document.getElementById('search-dropdown').value.toLowerCase();
      
      if (query.trim() === '') {
        console.log('Search input is empty');
        return;
      }
      
      filterByLocation(location);
      search(query, filter);
    });
    function filterByLocation(location) {
      filteredResults.innerHTML = '';

      containers.forEach(function (container) {
          var containerLocation = container.querySelector('.heading').innerText.toLowerCase();
          if (containerLocation.includes(location)) {
              var clone = container.cloneNode(true);
              filteredResults.appendChild(clone);
          }
      });
  }
    
    searchInput.addEventListener('input', function() {
        var query = searchInput.value.toLowerCase();
        if (query === '') {
            filteredResults.innerHTML = '';
            return;
          }
      

        filteredResults.innerHTML = ''; 

        containers.forEach(function(container) {
          var heading = container.querySelector('.heading').innerText.toLowerCase();
          if (heading.includes(query)) {
            var clone = container.cloneNode(true);
            filteredResults.appendChild(clone);
          }
        });
      });

    function search(query, filter) {
      console.log("Query:", query);
      console.log("Filter:", filter);
      
      localStorage.setItem('searchQuery', query);
      localStorage.setItem('searchFilter', filter);
    }

    window.addEventListener('beforeunload', function() {
      localStorage.removeItem('searchQuery');
      localStorage.removeItem('searchFilter');
    });
  });



//   document.addEventListener('DOMContentLoaded', function() {
//     var searchInput = document.getElementById('search-input');

//     searchInput.addEventListener('input', function() {
//       var query = searchInput.value.toLowerCase();

//       containers.forEach(function(container) {
//         var layout = container.querySelector('.heading').innerText.toLowerCase();
//         var display = layout.includes(query) ? 'block' : 'none';
//         container.style.display = display;
//       });
//     });
//   });