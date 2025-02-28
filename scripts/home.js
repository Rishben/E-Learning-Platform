const courses = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      lessons: 10,
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 50,
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      lessons: 15,
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 70,
    },
    {
      id: 3,
      title: "React for Beginners",
      lessons: 12,
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 30,
    },
    {
      id: 4,
      title: "Node.js Basics",
      lessons: 8,
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 80,
    },
    {
      id: 5,
      title: "Express.js and More",
      lessons: 8,
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 10,
    },
    {
      id: 6,
      title: "MongoDB Crash Course",
      lessons: 8,
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 70,
    },
  ];
  
  const courseList = document.querySelector("#courseList .grid"); // Target the grid inside courseList
  
  function renderCourses(filter = "") {
    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(filter.toLowerCase())
    );
  
    courseList.innerHTML = filteredCourses
      .map(
        (course) => `
        <a href="course-detail.html?id=${course.id}" class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${course.title}</h3>
            <p class="text-gray-600">${course.level} | ${course.lessons} Lessons</p>
          </div>
        </a>
      `
      )
      .join("");
  }
  
  document.getElementById("searchInput").addEventListener("input", (e) => {
    renderCourses(e.target.value);
  });
  
  // Scroll to the course list section when the "Explore Courses" button is clicked
  document.getElementById("exploreButton").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById("courseList").scrollIntoView({ behavior: "smooth" });
  });
  
  renderCourses();