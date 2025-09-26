
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenuBtn = document.getElementById('close-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });

        // Close mobile menu when clicking on links
        mobileMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                mobileMenu.classList.add('translate-x-full');
            }
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('bg-white/95');
                header.classList.remove('bg-white/90');
            } else {
                header.classList.add('bg-white/90');
                header.classList.remove('bg-white/95');
            }
        });

        // Back to top button
        const backToTopBtn = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                backToTopBtn.classList.add('opacity-0', 'invisible');
                backToTopBtn.classList.remove('opacity-100', 'visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Gallery Filter
        const galleryFilters = document.querySelectorAll('.gallery-filter');
        const galleryItems = document.querySelectorAll('.gallery-item');

        galleryFilters.forEach(filter => {
            filter.addEventListener('click', () => {
                // Remove active class from all filters
                galleryFilters.forEach(f => {
                    f.classList.remove('bg-blue-600', 'text-white');
                    f.classList.add('hover:bg-blue-100');
                });
                
                // Add active class to clicked filter
                filter.classList.add('bg-blue-600', 'text-white');
                filter.classList.remove('hover:bg-blue-100');

                const filterValue = filter.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                        item.classList.add('animate-fadeIn');
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Gallery Modal
        function openModal(src) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            modal.style.display = 'block';
            modalImg.src = src;
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.style.display = 'none';
        }

        // YouTube Slider
        let currentVideo = 0;
        const totalVideos = 3;

        function nextVideo() {
            currentVideo = (currentVideo + 1) % totalVideos;
            updateVideoSlider();
        }

        function prevVideo() {
            currentVideo = (currentVideo - 1 + totalVideos) % totalVideos;
            updateVideoSlider();
        }

        function goToVideo(index) {
            currentVideo = index;
            updateVideoSlider();
        }

        function updateVideoSlider() {
            const slider = document.getElementById('videoSlider');
            const dots = document.querySelectorAll('.video-dot');
            
            slider.style.transform = `translateX(-${currentVideo * 100}%)`;
            
            dots.forEach((dot, index) => {
                if (index === currentVideo) {
                    dot.classList.add('bg-white');
                    dot.classList.remove('bg-white/50');
                } else {
                    dot.classList.remove('bg-white');
                    dot.classList.add('bg-white/50');
                }
            });
        }

        // Auto-play video slider
        setInterval(nextVideo, 10000);

        // Modal Functions
        function openBeasiswaForm(type) {
            const modal = document.getElementById('beasiswaModal');
            modal.classList.remove('opacity-0', 'invisible');
            modal.querySelector('.bg-white').classList.remove('scale-95');
            modal.querySelector('.bg-white').classList.add('scale-100');
        }

        function closeBeasiswaModal() {
            const modal = document.getElementById('beasiswaModal');
            modal.classList.add('opacity-0', 'invisible');
            modal.querySelector('.bg-white').classList.add('scale-95');
            modal.querySelector('.bg-white').classList.remove('scale-100');
        }

        function openTahsinForm(type) {
            const modal = document.getElementById('tahsinModal');
            const kelasType = document.getElementById('kelasType');
            
            if (type === 'online') {
                kelasType.value = 'online';
            } else if (type === 'offline') {
                kelasType.value = 'offline';
            }
            
            modal.classList.remove('opacity-0', 'invisible');
            modal.querySelector('.bg-white').classList.remove('scale-95');
            modal.querySelector('.bg-white').classList.add('scale-100');
        }

        function closeTahsinModal() {
            const modal = document.getElementById('tahsinModal');
            modal.classList.add('opacity-0', 'invisible');
            modal.querySelector('.bg-white').classList.add('scale-95');
            modal.querySelector('.bg-white').classList.remove('scale-100');
        }

        let selectedDonationAmount = 0;

        function setDonationAmount(amount) {
            selectedDonationAmount = amount;
        }

        function openDonationForm(type) {
            const modal = document.getElementById('donationModal');
            const donationType = document.getElementById('donationType');
            const donationAmount = document.getElementById('donationAmount');
            
            donationType.value = type;
            if (selectedDonationAmount > 0) {
                donationAmount.value = selectedDonationAmount;
            }
            
            modal.classList.remove('opacity-0', 'invisible');
            modal.querySelector('.bg-white').classList.remove('scale-95');
            modal.querySelector('.bg-white').classList.add('scale-100');
        }

        function closeDonationModal() {
            const modal = document.getElementById('donationModal');
            modal.classList.add('opacity-0', 'invisible');
            modal.querySelector('.bg-white').classList.add('scale-95');
            modal.querySelector('.bg-white').classList.remove('scale-100');
        }

        function showSuccessModal(message) {
            const modal = document.getElementById('successModal');
            const messageEl = document.getElementById('successMessage');
            messageEl.textContent = message;
            
            modal.classList.remove('opacity-0', 'invisible');
            modal.querySelector('.bg-white').classList.remove('scale-95');
            modal.querySelector('.bg-white').classList.add('scale-100');
        }

        function closeSuccessModal() {
            const modal = document.getElementById('successModal');
            modal.classList.add('opacity-0', 'invisible');
            modal.querySelector('.bg-white').classList.add('scale-95');
            modal.querySelector('.bg-white').classList.remove('scale-100');
        }

        function showLoading() {
            const overlay = document.getElementById('loadingOverlay');
            overlay.classList.remove('opacity-0', 'invisible');
        }

        function hideLoading() {
            const overlay = document.getElementById('loadingOverlay');
            overlay.classList.add('opacity-0', 'invisible');
        }

        // Form Submissions
        function submitBeasiswaForm(event) {
            event.preventDefault();
            showLoading();
            
            // Simulate API call
            setTimeout(() => {
                hideLoading();
                closeBeasiswaModal();
                showSuccessModal('Pendaftaran beasiswa Anda telah berhasil dikirim. Tim kami akan menghubungi Anda dalam 1x24 jam.');
            }, 2000);
        }

        function submitTahsinForm(event) {
            event.preventDefault();
            showLoading();
            
            // Simulate API call
            setTimeout(() => {
                hideLoading();
                closeTahsinModal();
                showSuccessModal('Pendaftaran Tahsin & Tahfiz Anda telah berhasil. Kami akan mengirimkan informasi jadwal melalui WhatsApp.');
            }, 2000);
        }

        function submitDonationForm(event) {
            event.preventDefault();
            showLoading();
            
            // Simulate payment processing
            setTimeout(() => {
                hideLoading();
                closeDonationModal();
                showSuccessModal('Terima kasih atas donasi Anda. Kami akan mengirimkan konfirmasi pembayaran melalui email.');
            }, 3000);
        }

        function sendMessage(event) {
            event.preventDefault();
            showLoading();
            
            // Simulate message sending
            setTimeout(() => {
                hideLoading();
                showSuccessModal('Pesan Anda telah berhasil dikirim. Kami akan merespons dalam waktu 1x24 jam.');
                event.target.reset();
            }, 1500);
        }

        function subscribeNewsletter(event) {
            event.preventDefault();
            showLoading();
            
            // Simulate newsletter subscription
            setTimeout(() => {
                hideLoading();
                showSuccessModal('Terima kasih! Anda telah berhasil berlangganan newsletter kami.');
                event.target.reset();
            }, 1500);
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add active state to navigation links based on scroll position
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-link');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-blue-600');
                link.classList.add('text-gray-700');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('text-blue-600');
                    link.classList.remove('text-gray-700');
                }
            });
        });

        // Close modals when clicking outside
        document.addEventListener('click', (e) => {
            const modals = ['beasiswaModal', 'tahsinModal', 'donationModal', 'successModal'];
            modals.forEach(modalId => {
                const modal = document.getElementById(modalId);
                if (e.target === modal) {
                    if (modalId === 'beasiswaModal') closeBeasiswaModal();
                    else if (modalId === 'tahsinModal') closeTahsinModal();
                    else if (modalId === 'donationModal') closeDonationModal();
                    else if (modalId === 'successModal') closeSuccessModal();
                }
            });
        });

        // Format currency input
        document.getElementById('donationAmount').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            e.target.value = value;
        });

        // Add loading animation to buttons on click
        document.querySelectorAll('button[type="submit"]').forEach(button => {
            button.addEventListener('click', function() {
                this.classList.add('animate-pulse');
                setTimeout(() => {
                    this.classList.remove('animate-pulse');
                }, 2000);
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                }
            });
        }, observerOptions);

        // Observe all sections for animations
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Add custom CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .animate-fadeInUp {
                animation: fadeInUp 0.6s ease-out forwards;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .animate-fadeIn {
                animation: fadeIn 0.5s ease-in-out;
            }
            
            .nav-link::after {
                content: '';
                position: absolute;
                width: 0;
                height: 2px;
                bottom: -5px;
                left: 50%;
                background: linear-gradient(90deg, #3B82F6, #8B5CF6);
                transition: all 0.3s ease;
                transform: translateX(-50%);
            }
            
            .nav-link:hover::after,
            .nav-link.text-blue-600::after {
                width: 100%;
            }
        `;
        document.head.appendChild(style);

        console.log('Yayasan Sabilulhuda Website Loaded Successfully! 🚀');
