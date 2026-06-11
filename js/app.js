body{
margin:0;
font-family:Arial;
background:#0d1117;
color:#e6edf3;
display:flex;
}

.sidebar{
width:240px;
background:#161b22;
height:100vh;
padding:20px;
}

.sidebar ul{
list-style:none;
padding:0;
}

.sidebar li{
padding:12px;
margin:5px 0;
background:#21262d;
border-radius:8px;
}

.main{
flex:1;
padding:25px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:15px;
}

.card,.result-card{
background:#161b22;
padding:15px;
border-radius:10px;
}

input,select{
width:100%;
padding:10px;
background:#21262d;
border:none;
color:white;
}

button{
padding:12px 20px;
background:#58a6ff;
border:none;
border-radius:8px;
margin:20px 0;
cursor:pointer;
}

.results{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:15px;
margin-top:20px;
}