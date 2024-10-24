// // Function to toggle the filter sidebar
// document.getElementById('closeFilter').addEventListener('click', function() {
//     document.getElementById('filterSidebar').classList.toggle('closed');
// });

// // Apply filter logic
// function applyFilter() {
//     // Get selected faculty and subject values
//     const faculty = document.getElementById('facultyFilter').value;
//     const subject = document.getElementById('subjectFilter').value;
    
//     // Get all faculty cards
//     const facultyCards = document.querySelectorAll('.faculty');
    
//     // Loop through each faculty card and apply the filter
//     facultyCards.forEach(card => {
//         const cardFaculty = card.getAttribute('data-faculty');
//         const cardSubject = card.getAttribute('data-subject');
        
//         // If both filters are selected, match both
//         if ((faculty && cardFaculty !== faculty) || (subject && cardSubject !== subject)) {
//             card.style.display = 'none'; // Hide non-matching cards
//         } else {
//             card.style.display = 'block'; // Show matching cards
//         }
//     });
// }
