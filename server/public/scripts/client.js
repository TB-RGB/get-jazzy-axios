function onReady() {
  console.log("Hello from client.js");

  axios({
    method: "GET",
    url: "/artist",
  })
    .then(function (response) {
      // Code that will run on successful response
      // from the server.
      console.log(response);
      // quotesFromServer will be an Array of quotes
      let quotesFromServer = response.data;
      let contentDiv = document.getElementById("artistTableBody");
      for (let artist of quotesFromServer) {
        contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
      }
    })
    .catch(function (error) {
      // Code that will run on any errors from the server.
      console.log(error);
      alert("Something bad happened! Check the console for more details.");
    });

  // TODO Add Axios request for /songs and display on DOM

  axios({
    method: "GET",
    url: "/songs",
  })
    .then(function (response) {
      console.log(response);

      let songsFromServer = response.data;
      let songsDiv = document.getElementById("songTableBody");
      for (let song of songsFromServer) {
        songsDiv.innerHTML += `
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
                `;
      }
    })
    .catch(function (error) {
      console.log(error);
      alert("ERR MERR GERRD, ERRERR. LERK ERT CERNSERL");
    });
}

function addArtist(event) {
  event.preventDefault();

  let artistToAdd = {};
  artistToAdd.name = document.getElementById("artistNameInput").value;
  birthYear = document.getElementById("artistBirthInput").value;
  artistToAdd.born = Number(birthYear)
  deathYear = document.getElementById("artistDeathInput").value;
  artistToAdd.died = Number(deathYear)

  axios({
    method: "POST",
    url: "/artist",
    data: { artistToAdd },
  })
    .then((response) => {
        console.log(artistToAdd)

        let artistDiv = document.getElementById('artistTableBody')
        artistDiv.innerHTML += `
        <tr>
            <td>${artistToAdd.name}</td>
            <td>${artistToAdd.born}</td>
            <td>${artistToAdd.died}</td>
        </tr>
    `;
    })
    .catch((err) => {
        console.log(err)
        alert("ERR MERR GERRD, ERRERR. LERK ERT CERNSERL")
    })
}
onReady();
