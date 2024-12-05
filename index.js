
// Animate .head and .subhead on page load
document.addEventListener('DOMContentLoaded', () => {
  // Animation for .head
  anime({
      targets: '.head',
      translateY: [150, 0],  // Slide in from above
      opacity: [0, 1],      // Fade-in effect
      duration: 1200,       // Animation duration
      easing: 'easeOutExpo' // Smooth easing
  });

  // Animation for .subhead
  anime({
        targets: '.subhead:not(span)',
        translateY: [-50, 0],  // Slide in from below
        opacity: [0, 1],      // Fade-in effect
        duration: 1200,       // Animation duration
        easing: 'easeOutExpo',
        delay: 300            // Start after .head animation
    });

    // Animate the span inside .subhead
    anime({
      targets: '.subhead .desnr',
      translateX: [100, 0], // Slide in from left
      opacity: [0, 1],       // Fade-in effect
      duration: 800,        // Animation duration
      easing: 'easeOutExpo', // Smooth easing
      delay: 800             // Start after .subhead animation
  });

  anime({
    targets: '.subhead .devn',
    translateX: [-100, 0], // Slide in from left
    opacity: [0, 1],       // Fade-in effect
    duration: 800,        // Animation duration
    easing: 'easeOutExpo', // Smooth easing
    delay: 800             // Start after .subhead animation
});

});

document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project'); // Select all project items

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const target = entry.target; // The observed element
          const id = target.dataset.id; // Unique ID for each project

          if (entry.isIntersecting) {
              // Trigger unique animation based on the project's ID
              switch (id) {
                  case "1":
                      anime({
                          targets: target,
                          translateX: [-100, 0], // Slide in from the left
                          opacity: [0, 1],
                          duration: 1300,
                          easing: 'easeOutExpo'
                      });
                      break;
                  case "2":
                      anime({
                        targets: target,
                        rotate: ['30deg', '0deg'],
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutExpo'
                      });
                      break;
                  case "3":
                      anime({
                        targets: target, 
                        rotate: ['-30deg', '0deg'],                      
                        opacity: [0, 1],
                        duration: 1000,
                        easing: 'easeOutExpo'
                      });
                      break;
                  case "4":
                      anime({
                        targets: target,
                        translateX: [100, 0], // Slide in from the left
                        opacity: [0, 1],
                        duration: 1300,
                        easing: 'easeOutExpo'
                      });
                      break;
              }
          } else {
              // Reverse animation on leave
              anime({
                  targets: target,
                  opacity: [1, 0],
                  translateX: 0, // Reset to default
                  translateY: 0, // Reset to default
                  scale: 1,      // Reset scale
                  duration: 500,
                  easing: 'easeInExpo'
              });
          }
      });
  }, { threshold: 0.1 }); // Trigger when 10% of the element is visible

  projects.forEach(project => observer.observe(project)); // Observe each project
});


document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});