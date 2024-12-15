// ------ Numbers ---------
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters"); // Fix: Use querySelector to get the single element

// Variable that tracks if the counters have been activated
let activated = false;

// Add scroll event to the page
window.addEventListener("scroll", () => {
    // Get the position of the container and page scroll position
    const containerTop = container.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // If the page is scrolled to the container element and the counters are not activated
    if (containerTop < windowHeight - 200 && !activated) {
        // Select all counters
        counters.forEach(counter => {
            // Set counter values to zero
            counter.innerText = '0';

            // Set count variable to track the count
            let count = 0;

            // Updater count function
            function updateCount() {
                // Get counter target number to count to
                const target = parseInt(counter.dataset.count);
                // Set increment step for smoother animation
                const increment = Math.ceil(target / 100);

                // As long as the count is below the target number
                if (count < target) {
                    // Increment the count
                    count += increment;
                    // Make sure the count doesn't exceed the target
                    if (count > target) count = target;
                    // Set the counter text to the count
                    counter.innerText = count;
                    // Repeat this every 10 milliseconds
                    setTimeout(updateCount, 30);
                } else {
                    // Set the counter text to the target number
                    counter.innerText = target;
                }
            }
            // Run the function initially
            updateCount();
        });

        // Set activated to true after counters start counting
        activated = true;
    }

    // Reset counters if the page is scrolled up, or the container is out of view
    else if (containerTop > windowHeight + 200 && activated) {
        // Set all counters back to zero
        counters.forEach(counter => {
            counter.innerText = '0';
        });

        // Reset the activated flag so counters can re-trigger on scroll down
        activated = false;
    }
});
