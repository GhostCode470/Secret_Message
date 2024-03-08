const messageForm = document.getElementById('messageForm');
const message = document.getElementById('message');
const link = document.getElementById('link');
const url = document.getElementById('url');
const copyBtn = document.getElementById('copyBtn');

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const encodedMessage = btoa(message.value);
  url.value = `${window.location.origin}#${encodedMessage}`;
  link.style.display = 'block';
  form.style.display = 'none';
});

copyBtn.addEventListener('click', () => {
  url.select();
  document.execCommand('copy');
});

const params = new URLSearchParams(window.location.hash.slice(1));
if (params.has('message')) {
  const decodedMessage = atob(params.get('message'));
  message.value = decodedMessage;
  link.style.display = 'block';
  form.style.display = 'none';
}
