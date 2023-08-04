// Wait for document ready
$(document).ready(function() {

    // Smooth scrolling
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    // Handle product variation
    $('#pa_available-sizes').on('change', function() {
        // Get variation ID
        const variationId = $(this).find('option:selected').val();
        // Update hidden field
        $('.variation_id').val(variationId);

    });

    // Show "Added to cart" message
    function showAddedToCartMessage() {
        const message = $('<div>').text('Added to cart!');
        message.addClass('added-to-cart-message');

        // Insert the message inside the message container
        $('.added-to-cart-message-container').html(message);

        setTimeout(() => {
            // Remove the message after 2 seconds
            message.remove();
        }, 2000);
    }

    const addToCartButton = $('.single_add_to_cart_button');

    // Handle add to cart click
    addToCartButton.on('click', function(e) {
        e.preventDefault();
        showAddedToCartMessage();
    });

    // Handle clear selection click using event delegation
    $(document).on('click', '#clear-selection', function() {
        $('#pa_available-sizes').val('');
    });
});