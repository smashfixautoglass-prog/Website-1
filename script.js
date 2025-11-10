// Simple front-end form handler
function handleForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value || '';
  const phone = document.getElementById('phone').value || '';
  const vehicle = document.getElementById('vehicle').value || '';
  const zip = document.getElementById('zip').value || '';
  const serviceType = document.getElementById('serviceType').value || '';
  const message = document.getElementById('message').value || '';

  // Build an email body using mailto as a fallback
  const subject = encodeURIComponent('SmashFix Quote Request from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nPhone: ' + phone + '\nVehicle: ' + vehicle + '\nZIP: ' + zip + '\nService: ' + serviceType + '\nMessage: ' + message);

  // Open user's email client as default action (replace info@smashfixautoglass.com in production)
  const mailto = 'mailto:info@smashfixautoglass.com?subject=' + subject + '&body=' + body;
  window.location.href = mailto;

  // Show a quick success message
  alert('Thanks! Your quote request will open in your email app. Or you can call (470) 546-0408 to book right away.');
  return false;
}
