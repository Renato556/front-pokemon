<template>
    <div>
        <input type="text" class="search-bar" placeholder="Search about a pokemon using name or pokedex number">
        <img class="search-button" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png" alt="">
        <figcaption class="instruction">Insira o nome ou numero do Pokemon em letras minúsculas</figcaption>
    </div>
</template>

<style>
.search-bar{
    width: 30em;
    height: 50px;
    font-size: 25px;
    border-radius: 5px;
    border: 0;
}
.instruction{
    font-size: 30px;
    align-content: flex-start;
}
.search-button{
    height: 20px;
    margin-left: 10px;
    cursor: pointer;
}
</style>