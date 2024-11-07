document.getElementById('check-btn').addEventListener('click', function() {
            const input = document.getElementById('text-input').value;
            const resultElement = document.getElementById('result');


            if (!input.trim()) {
                alert("Please input a value");
                return;
            }

            function isPalindrome(text) {
                const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
                const reversedText = cleanedText.split('').reverse().join('');
                return cleanedText === reversedText;
            }

            if (isPalindrome(input)) {
                resultElement.textContent = `${input} is a palindrome`;
            } else {
                resultElement.textContent = `${input} is not a palindrome`;
            }
        });
