let currentStep = 1;
        const totalSteps = 3;

        function updateProgress() {
            const progressFill = document.getElementById('progressFill');
            const progressPercentage = (currentStep / totalSteps) * 100;
            progressFill.style.width = progressPercentage + '%';

            // Update step indicators
            document.querySelectorAll('.step-indicator').forEach((indicator, index) => {
                const stepNumber = index + 1;
                indicator.classList.remove('active', 'completed');
                
                if (stepNumber < currentStep) {
                    indicator.classList.add('completed');
                } else if (stepNumber === currentStep) {
                    indicator.classList.add('active');
                }
            });
        }

        function showStep(step) {
            // Hide all steps
            document.querySelectorAll('.form-step').forEach(s => {
                s.classList.remove('active');
            });

            // Show current step
            document.getElementById(`step${step}`).classList.add('active');
            
            updateProgress();
        }

        function nextStep() {
            if (validateCurrentStep()) {
                if (currentStep < totalSteps) {
                    currentStep++;
                    showStep(currentStep);
                }
            }
        }

        function prevStep() {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
            }
        }

        function validateCurrentStep() {
            const currentStepElement = document.getElementById(`step${currentStep}`);
            const requiredInputs = currentStepElement.querySelectorAll('input[required]');
            
            let isValid = true;
            
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '#e2e8f0';
                }
            });

            // Special validation for step 2 (password confirmation)
            if (currentStep === 2) {
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                
                if (password !== confirmPassword) {
                    isValid = false;
                    document.getElementById('confirmPassword').style.borderColor = '#ef4444';
                    alert('Passwords do not match!');
                }
            }

            // Special validation for step 3 (plan selection and terms)
            if (currentStep === 3) {
                const planSelected = document.querySelector('input[name="plan"]:checked');
                const termsAccepted = document.getElementById('terms').checked;
                
                if (!planSelected) {
                    isValid = false;
                    alert('Please select a plan!');
                }
                
                if (!termsAccepted) {
                    isValid = false;
                    alert('Please accept the terms and conditions!');
                }
            }

            if (!isValid) {
                alert('Please fill in all required fields correctly.');
            }

            return isValid;
        }

        function selectPlan(planType) {
            // Remove selection from all plans
            document.querySelectorAll('.plan-option').forEach(option => {
                option.classList.remove('selected');
            });

            // Select clicked plan
            event.currentTarget.classList.add('selected');
            
            // Set radio button value
            const radioButton = event.currentTarget.querySelector('input[name="plan"]');
            radioButton.checked = true;
        }

        // Handle form submission
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateCurrentStep()) {
                // Simulate form submission
                setTimeout(() => {
                    document.getElementById('step3').classList.remove('active');
                    document.getElementById('success').classList.add('active');
                    
                    // Hide progress bar and step indicators
                    document.querySelector('.progress-container').style.display = 'none';
                }, 300);
            }
        });

        // Initialize
        updateProgress();