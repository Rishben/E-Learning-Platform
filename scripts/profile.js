const enrolledCourses = [
    {
      title: "Introduction to JavaScript",
      progress: 50,
      completed: false,
      lessons: 10,
      completedLessons: 5,
    },
    {
      title: "Advanced CSS Techniques",
      progress: 70,
      completed: false,
      lessons: 15,
      completedLessons: 10,
    },
    {
      title: "React for Beginners",
      progress: 30,
      completed: false,
      lessons: 12,
      completedLessons: 4,
    },
    {
      title: "Node.js Crash Course",
      progress: 80,
      completed: true,
      lessons: 8,
      completedLessons: 8,
    },
  ];

  // Calculate overall progress
  const totalProgress = enrolledCourses.reduce((sum, course) => sum + course.progress, 0);
  const overallProgress = Math.round(totalProgress / enrolledCourses.length);

  // Update overall progress
  document.getElementById("overallProgress").textContent = `${overallProgress}%`;

  // Render enrolled courses
  const enrolledCoursesList = document.getElementById("enrolledCourses");
  enrolledCoursesList.innerHTML = enrolledCourses
    .map(
      (course) => `
      <div class="bg-gray-50 p-4 rounded-lg shadow-sm">
        <h4 class="text-xl font-semibold">${course.title}</h4>
        <div class="mt-2">
          <p class="text-gray-600">Progress: ${course.progress}%</p>
          <p class="text-gray-600">Lessons: ${course.completedLessons}/${course.lessons}</p>
          <p class="text-gray-600">Status: <span class="${course.completed ? "text-green-600" : "text-yellow-600"}">${course.completed ? "Completed" : "In Progress"}</span></p>
        </div>
      </div>
    `
    )
    .join("");