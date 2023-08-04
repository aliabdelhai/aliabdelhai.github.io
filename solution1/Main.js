
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
});


