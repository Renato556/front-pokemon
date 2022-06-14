<template>
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <form class="search" action="/pokemon">
            <input type="text" placeholder="Search about a pokemon using name or pokedex number" name="search">
            <button type="submit"><em class="fa fa-search"></em></button>
        </form>
        <figcaption class="instruction">Insira o nome ou numero do Pokemon em letras minúsculas</figcaption>
    </div>
</template>

<style>
.instruction{
    font-size: 25px;
    margin-bottom: 1em;
    color: white;
}
form.search input[type=text] {
  padding: 15px;
  font-size: 25px;
  border: 0;
  float: center;
  width: 45%;
  border-radius: 5px;
  background: #f1f1f1;
  filter: drop-shadow(0 0.5em 0.5rem rgba(0,0,0,0.3));
}
form.search button {
  float: center;
  width: 3%;
  padding: 10px;
  background: transparent;
  color: white;
  font-size: 30px;
  border: 0;
  cursor: pointer;
  color: black;
}
</style>