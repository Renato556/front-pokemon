<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
        <img class="pokemon-image" :src="pokemon.image" alt="Pokemon não encontrado">
        <figcaption class="pokemon-name">{{ pokemon.name }}</figcaption>
        <div class="pokemon-data">
            <em class="pokemon-title">Base Experience/Experiência</em>
            <em class="pokemon-stats">{{ pokemon.xp }}</em>
            <br>
            <em class="pokemon-title">Height/Altura</em>  
            <em class="pokemon-stats">{{ pokemon.height }}</em>
            <br>
            <em class="pokemon-title">Weight/Peso</em>  
            <em class="pokemon-stats">{{ pokemon.weight }}</em>
        </div>
        <div>
            <em class="pokemon-stats-title">Pokemon Types/Tipo</em>
            <div class="types">
                <button class="type" :data-result-val="tipo.type.name" v-for="tipo in pokemon.types" :key="tipo.id">{{ tipo.type.name }}</button>
            </div>
        </div>
        <div>
            <em class="pokemon-stats-title">Abilities/Habilidades</em>
            <div class="types">
                <button class="ability" v-for="habilidade in pokemon.abilities" :key="habilidade.id">{{ habilidade.ability.name }}</button>
            </div>
        </div>
        <div @click="$emit('close-modal')">
            <button class="close">Close / Fechar</button>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['pokemon'],
    }
</script>

<style scoped>

button[data-result-val="normal"] { background-color: #a9a879; }
button[data-result-val="bug"] { background-color: #a8bb15; }
button[data-result-val="fighting"] { background-color: #bd3226; }
button[data-result-val="ghost"] { background-color: #715996; }
button[data-result-val="electric"] { background-color: #f6d230; }
button[data-result-val="flying"] { background-color: #a88ff3; }
button[data-result-val="steel"] { background-color: #b8b8d0; }
button[data-result-val="psychic"] { background-color: #f85888; }
button[data-result-val="poison"] { background-color: #9f3fa0; }
button[data-result-val="fire"] { background-color: #f07f2f; }
button[data-result-val="ice"] { background-color: #98d8d8; }
button[data-result-val="ground"] { background-color: #dec162; }
button[data-result-val="water"] { background-color: #6991e7; }
button[data-result-val="dragon"] { background-color: #6e39ed; }
button[data-result-val="rock"] { background-color: #b4a339; }
button[data-result-val="grass"] { background-color: #75ca4f; }
button[data-result-val="dark"] { background-color: #6f5848; }
button[data-result-val="fairy"] { background-color: #de94dc; }

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.modal {
  background-color: white;
  height: 550px;
  width: 500px;
  margin-top: 10%;
  border-radius: 10px;
}
.pokemon-image {
    margin-top: -13%;
    background: #ffcb37;
    font-size: 10px;
    border-radius: 50%;
    filter: drop-shadow(0 0.5em 0.5rem rgba(0,0,0,0.5));
}
.pokemon-title {
    font-weight: bold;
    font-style: normal;
}
.pokemon-data {
    margin-top: 5%;
    text-align: left;
    margin-left: 15%;
}
.pokemon-stats {
    float: right;
    margin-right: 17%;
    font-style: normal;
}
.type {
    background-color: #ff726f;
    min-width: 100px;
    height: 40px;
    color: white;
    font-size: 20px;
    border-radius: 25px;
    border: 0;
    text-transform: capitalize;
    margin-right: 20px;
    font-weight: bold;
    float: right;
}
.ability {
    background-color: white;
    min-width: 120px;
    height: 40px;
    color: #11771c;
    font-size: 20px;
    border-radius: 25px;
    border: solid 3px;
    border-color: #11771c;
    text-transform: capitalize;
    margin-right: 20px;
    font-weight: bold;
    float: left;
    margin-top: 3px;
}
.types {
    float: left;
    margin-left: 15%;
}
.close {
    background-color: #e2978c;
    width: 70%;
    height: 40px;
    color: white;
    font-size: 14px;
    border-radius: 5px;
    border: 0;
    margin-top: 30px;
    cursor: pointer;
    font-weight: bold;
    float: center;
}
.pokemon-stats-title {
    margin-top: 5%;
    margin-bottom: 2.5%;
    font-style: normal;
    color: black;
    text-transform: capitalize;
    font-size: 2em;
    float: left;
    margin-left: 15%;
}
</style>