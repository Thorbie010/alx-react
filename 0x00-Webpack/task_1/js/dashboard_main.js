const $ = require('jquery');
const _ = require('lodash');

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('Copyright - Holberton School');

// Define the updateCounter function
const updateCounter = _.debounce(() => {
    let count = parseInt($('#count').text().replace(' clicks on the button', ''), 10) || 0;
    count++;
    $('#count').text(`${count} clicks on the button`);
  }, 500, { leading: true, trailing: false });
  
  // Bind the debounce function to the click event on the button
  $('#startBtn').on('click', updateCounter);