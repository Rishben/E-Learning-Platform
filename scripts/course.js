const courses = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      lessons: 10,
      level: "Beginner",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 50,
      lessonsList: [
        { title: "Lesson 1: Basics of JavaScript", completed: true },
        { title: "Lesson 2: Functions and Scope", completed: false },
      ],
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      lessons: 15,
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 70,
      lessonsList: [
        { title: "Lesson 1: Flexbox and Grid", completed: true },
        { title: "Lesson 2: Animations", completed: false },
      ],
    },
    {
      id: 3,
      title: "React for Beginners",
      lessons: 15,
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 70,
      lessonsList: [
        { title: "Lesson 1: Flexbox and Grid", completed: true },
        { title: "Lesson 2: Animations", completed: false },
      ],
    },
    {
      id: 4,
      title: "Node.js Basics",
      lessons: 15,
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 70,
      lessonsList: [
        { title: "Lesson 1: Flexbox and Grid", completed: true },
        { title: "Lesson 2: Animations", completed: false },
      ],
    },
    {
      id: 5,
      title: "Express.js and More",
      lessons: 15,
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 70,
      lessonsList: [
        { title: "Lesson 1: Flexbox and Grid", completed: true },
        { title: "Lesson 2: Animations", completed: false },
      ],
    },
    {
      id: 6,
      title: "MongoDB Crash Course",
      lessons: 15,
      level: "Intermediate",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      progress: 70,
      lessonsList: [
        { title: "Lesson 1: Flexbox and Grid", completed: true },
        { title: "Lesson 2: Animations", completed: false },
      ],
    },
  ];

  // Get course ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = parseInt(urlParams.get("id"));

  // Find the course by ID
  const course = courses.find((c) => c.id === courseId);

  if (course) {
    document.getElementById("courseTitle").textContent = course.title;
    document.getElementById("courseVideo").src = course.videoUrl;
    document.getElementById("progressFill").style.width = `${course.progress}%`;

    const lessonsList = document.getElementById("lessonsList");
    lessonsList.innerHTML = course.lessonsList
      .map(
        (lesson) => `
        <div class="bg-white p-4 rounded-lg shadow-md">
          <h3 class="text-lg font-semibold">${lesson.title}</h3>
          <p class="text-gray-600">${lesson.completed ? "Completed" : "In Progress"}</p>
        </div>
      `
      )
      .join("");
  } else {
    document.getElementById("courseTitle").textContent = "Course Not Found";
  }