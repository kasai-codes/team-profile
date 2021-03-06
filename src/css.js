const style = `
.nav {
    background-color: grey;
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    margin-bottom: 50px;
    padding:25px;
}
html, body {
    max-width: 100% !important;
    overflow-x: hidden !important;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav {
    background-color: grey;
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: space-around;

    height: 20vh;
}

h1 {
    
    font-size: 8vw;
}

p {
   
    position: relative;
    left: 12px;
}

h2 {
   
    position: relative;
    font-size: 17px;
    left: 12px;
}

.member-card {
    width: 250px;
    margin-bottom: 5vh;
    background-color: rgb(240, 238, 238);
    box-shadow: 2px 5px 5px black;
    border-top-left-radius: 10px;
  
    
}

.card-container {

    top: 26vh;
    display: flex;
    flex-wrap:wrap;
    gap: 30px;

}

.card-top {
    background-color: pink;
    border: 2px solid pink;
    
    border-top-left-radius: 10px;
}


`

module.exports = style;