function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      document.getElementById('time').textContent = timeString;
    }
    setInterval(updateTime, 1000);

function getDate() {
  const months = [    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'  ];

  const daysOfWeek = [    'dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'  ];

  const date = new Date();
  const day = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();

  const formattedDate = `${day.charAt(0).toUpperCase() + day.slice(1)} ${dayOfMonth} ${month.charAt(0).toUpperCase() + month.slice(1)}`;
  document.getElementById("date").textContent = formattedDate;
}

window.onload = function() {
  getDate();
};

document.addEventListener('keydown', function(event) {
      if (event.key) {
        const downDiv = document.getElementById('down');
        downDiv.parentNode.removeChild(downDiv);
        let login = document.getElementById('login');
        login.style.height = '100%';
      }
    });

