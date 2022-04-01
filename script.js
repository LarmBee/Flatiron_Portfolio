function validateForm(){
    let name = document.getElementById("submit").value;
    alert("Hello " + name + "I will get back to you as soon as possible")
}

function downloadFile(elmnt) {
    const link = elmnt
    const url = 'https://assets.ctfassets.net/cfexf643femz/8rnHaKLBl6L4t1LmuV0OG/03d7ee1d08119fce2a3f80b93b97ab05/Lagos_de_Torca_en_cifras.pdf'
  const options = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
    
   fetch(url, options)
    .then( response => {
      response.blob().then(blob => {
          let url = window.URL.createObjectURL(blob);
          let a = document.createElement('a');
          a.href = url;
          a.download = "file.pdf";
          a.click();
        });
      }); 
  }