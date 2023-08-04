$(document).ready(function() {
      $.ajax({
        url: 'https://backend-api-integration.bioz.com/frontend_home_test_backend_api',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
          populateTable(data);
        },
        error: function() {
          console.error('Error fetching data from the backend.');
        }
      });


      $('#search-button').on('click', function() {
        const searchTerm = $("#search-input").val().toLowerCase();
        filterTable(searchTerm);
      });

      $('#clear-button').on('click', function() {
        $('#search-input').val('');
        filterTable('');
      });

      function populateTable(data) {
        const filterData = data.json_download
        $('#data-table-body').empty();
        for (let i = 0; i < filterData.length; i++) {
          const row = $('<tr>');
          row.append($('<td>').text(filterData[i].article_title));
          row.append($('<td>').text(filterData[i].authors.join(", ")));
          row.append($('<td>').text(filterData[i].catalog_number));
          row.append($('<td>').text(filterData[i].epoch_time));
          row.append($('<td>').text(filterData[i].journal));
          row.append($('<td>').text(filterData[i].long));
          row.append($('<td>').text(filterData[i].pmcid));
          row.append($('<td>').text(filterData[i].pmid));
          row.append($('<td>').text(filterData[i].product_name));

          $('#data-table-body').append(row);
        }
      }
      
      function filterTable(searchTerm) {
        const rows = $('#data-table-body tr');
        rows.each(function() {
          const article_title = $(this).find('td:eq(0)');
          const authors = $(this).find('td:eq(1)');
          const catalog_number = $(this).find('td:eq(2)');
          const epoch_time = $(this).find('td:eq(3)');
          const journal = $(this).find('td:eq(4)');
          const long = $(this).find('td:eq(5)');
          const pmcid = $(this).find('td:eq(6)');
          const pmid = $(this).find('td:eq(7)');
          const product_name = $(this).find('td:eq(8)');


          highlightText(article_title, searchTerm);
          highlightText(authors, searchTerm);
          highlightText(catalog_number, searchTerm);
          highlightText(epoch_time, searchTerm);
          highlightText(journal, searchTerm);
          highlightText(long, searchTerm);
          highlightText(pmcid, searchTerm);
          highlightText(pmid, searchTerm);
          highlightText(product_name, searchTerm);

          if (article_title.html().indexOf('<span') !== -1 || authors.html().indexOf('<span') !== -1 || catalog_number.html().indexOf('<span') !== -1 || epoch_time.html().indexOf('<span') !== -1 
                    || journal.html().indexOf('<span') !== -1 || long.html().indexOf('<span') !== -1 || pmcid.html().indexOf('<span') !== -1 || pmid.html().indexOf('<span') !== -1 || product_name.html().indexOf('<span') !== -1) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      }    
      
      function highlightText(cell, searchTerm) {
        const text = cell.text();
        const highlightedText = text.replace(new RegExp(searchTerm, 'gi'), (match) => `<span class="highlight">${match}</span>`);
        cell.html(highlightedText);
      }
      
});

