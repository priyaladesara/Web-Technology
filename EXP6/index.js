document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.stars i');
    const ratingText = document.getElementById('ratingText');
    const feedbackForm = document.getElementById('feedbackForm');
    const confirmation = document.getElementById('confirmation');
    const submittedRating = document.getElementById('submittedRating');
    const resetBtn = document.getElementById('resetBtn');
    const formCard = document.querySelector('.form-card');
    
    let currentRating = 0;
    
    // Rating text options
    const ratingTexts = [
        "Select a rating",
        "Poor",
        "Fair",
        "Good",
        "Very Good",
        "Excellent"
    ];
    
    // Star rating functionality
    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            highlightStars(rating);
            updateRatingText(rating);
        });
        
        star.addEventListener('mouseout', function() {
            highlightStars(currentRating);
            updateRatingText(currentRating);
        });
        
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            currentRating = rating;
            
            // Add clicked class to animate the selected star
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
            
            // Highlight the stars based on the current rating
            highlightStars(currentRating);
            updateRatingText(currentRating);
        });
    });
    
    // Helper function to highlight stars
    function highlightStars(rating) {
        stars.forEach(star => {
            const starRating = parseInt(star.getAttribute('data-rating'));
            
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    // Helper function to update rating text
    function updateRatingText(rating) {
        ratingText.textContent = ratingTexts[rating];
    }
    
    // Form submission
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const feedback = document.getElementById('feedback').value;
        
        if (name && feedback && currentRating > 0) {
            // In a real application, you would send this data to a server
            console.log('Feedback submitted:', {
                name,
                rating: currentRating,
                feedback
            });
            
            // Show confirmation with smooth transition
            formCard.style.opacity = '0';
            setTimeout(() => {
                formCard.style.display = 'none';
                confirmation.classList.remove('hidden');
                submittedRating.textContent = currentRating;
                
                // Animate confirmation in
                setTimeout(() => {
                    confirmation.style.opacity = '1';
                }, 50);
            }, 300);
        } else {
            let errorMessage = '';
            
            if (currentRating === 0) {
                errorMessage = 'Please select a rating';
                ratingText.style.color = '#FF3B30';
                
                // Shake stars to indicate error
                const starsContainer = document.querySelector('.stars');
                starsContainer.classList.add('shake');
                setTimeout(() => {
                    starsContainer.classList.remove('shake');
                }, 600);
            } else if (!name.trim()) {
                errorMessage = 'Please enter your name';
                document.getElementById('name').focus();
            } else {
                errorMessage = 'Please provide your feedback';
                document.getElementById('feedback').focus();
            }
            
            // Create a toast notification
            showToast(errorMessage);
        }
    });
    
    // Show toast notification
    function showToast(message) {
        // Remove any existing toast
        const existingToast = document.querySelector('.toast');
        if (existingToast) {
            document.body.removeChild(existingToast);
        }
        
        // Create new toast
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerText = message;
        
        // Add styles for toast
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '50%';
        toast.style.transform = 'translateX(-50%)';
        toast.style.backgroundColor = 'rgba(255, 59, 48, 0.9)';
        toast.style.color = 'white';
        toast.style.padding = '12px 20px';
        toast.style.borderRadius = '8px';
        toast.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        toast.style.zIndex = '1000';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        
        document.body.appendChild(toast);
        
        // Show toast
        setTimeout(() => {
            toast.style.opacity = '1';
        }, 10);
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    // Reset button
    resetBtn.addEventListener('click', function() {
        // Reset form
        feedbackForm.reset();
        currentRating = 0;
        highlightStars(0);
        updateRatingText(0);
        ratingText.style.color = ''; // Reset color
        
        // Show form again
        confirmation.style.opacity = '0';
        setTimeout(() => {
            confirmation.classList.add('hidden');
            formCard.style.display = '';
            setTimeout(() => {
                formCard.style.opacity = '1';
            }, 50);
        }, 300);
    });
    
    // Add shake animation to CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .shake {
            animation: shake 0.6s ease-in-out;
        }
    `;
    document.head.appendChild(style);
});