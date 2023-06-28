//your JS code here. If required.
function setPreferences() {
      const fontSizeInput = document.getElementById('font-size');
      const fontColorInput = document.getElementById('font-color');

      // Get user preferences
      const fontSize = fontSizeInput.value;
      const fontColor = fontColorInput.value;

      // Set cookie with preferences
      document.cookie = `fontSize=${fontSize}; max-age=31536000`; // Expires in 1 year
      document.cookie = `fontColor=${fontColor}; max-age=31536000`; // Expires in 1 year

      // Apply preferences immediately
      applyPreferences();
    }

    // Function to apply preferences from cookies
    function applyPreferences() {
      const cookies = document.cookie.split(';');

      // Loop through cookies to find preferences
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        // Check if the cookie starts with 'fontSize='
        if (cookie.startsWith('fontSize=')) {
          const fontSize = cookie.substring('fontSize='.length);
          document.body.style.fontSize = fontSize + 'px';
        }

        // Check if the cookie starts with 'fontColor='
        if (cookie.startsWith('fontColor=')) {
          const fontColor = cookie.substring('fontColor='.length);
          document.body.style.color = fontColor;
        }
      }
    }

    // Apply preferences when the page loads
    window.addEventListener('load', applyPreferences);

    // Handle form submission
    const preferencesForm = document.getElementById('preferences-form');
    preferencesForm.addEventListener('submit', function(event) {
      event.preventDefault();
      setPreferences();
    });
