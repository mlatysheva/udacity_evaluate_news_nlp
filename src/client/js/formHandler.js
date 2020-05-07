function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    //Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    
postText('http://localhost:8080/text', { "text": formText})
getSentiment('http://localhost:8080/sentiment')

    // fetch('http://localhost:8081/addText')
    // .then(res => {
    //     return res.json()
    // })
    // .then(function(res) {
    //     console.log(res);
    //     document.getElementById('text').innerHTML = "Text: " + res.text
    //     document.getElementById('polarity').innerHTML = "Polarity: " + res.polarity
    //     document.getElementById('subjectivity').innerHTML = "Subjectivity: " + res.subjectivity
    //     document.getElementById('polarity_confidence').innerHTML = "Polarity ccnfidence: " + (res.polarity_confidence*100) + "%"
    //     document.getElementById('subjectivity_confidence').innerHTML = "Subjectivity ccnfidence: " + (res.subjectivity_confidence*100) + "%"
    // })
}

const postText = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    } catch (error) {
      console.log('error', error);
    }
  }

  const getSentiment = async (url = '') => {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    try {
      const userData = await response.json();
      //console.log(userData.sentiment);
      document.getElementById('polarity').innerHTML = `The sentiment of this text is: ${userData.polarity}`;
      document.getElementById('polarity_confidence').innerHTML = `Polarity confidence is: ${userData.polarity_confidence}`;
      document.getElementById('subjectivity').innerHTML = `Subjectivity is: ${userData.subjectivity}`;      
      document.getElementById('subjectivity_confidence').innerHTML = `Subjectivity confidence is: ${userData.subjectivity_confidence}`;
  
    } catch (error) {
      console.log('error', error);
    }
  }    
export { handleSubmit }
