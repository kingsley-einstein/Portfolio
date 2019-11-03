(() => {
  const mail = (data) => fetch('/mail/sendmail', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const mailingForm = document.querySelector('#mailing_form');
  const loader = document.querySelector('#loader');
  mailingForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    loader.classList.add('active');
    const data = {
      from: null,
      to: 'javaprodigy56@gmail.com, codeviking92@gmail.com',
      html: null,
      subject: null
    };
    const allInputs = document.querySelectorAll('input');
    const allTextAreas = document.querySelectorAll('textarea');
    allInputs.forEach((input) => {
      if (input.name) {
        data[input.name] = input.value;
      }
    });
    allTextAreas.forEach((textarea) => {
      if (textarea.name) {
        data[textarea.name] = textarea.value;
      }
    });
    const responseFromServer = await mail(data);
    const actualData = await responseFromServer.json();
    mailingForm.reset();
    if (actualData) {
      M.toast({
        html: 'Successfully sent mail'
      });
    } else {
      M.toast({
        html: 'An error occured'
      });
    }
    if (actualData || !actualData) {
      loader.classList.remove('active');
    }
    console.log(actualData);
  });
})();
