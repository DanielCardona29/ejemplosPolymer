
class PokemonCard extends Polymer.Element {

    static get is() { return 'pokemon-card'; }
    static get properties() {
        return {
            name: {
                type: String,
                value: 'bulbasaur'
            },
            pokemon: {
                type: Object,
                value: {},
            },
            show: {
                type: Boolean,
                value: false
            },
            url: {
                type: String,
                value: 'https://pokeapi.co/api/v2/pokemon/1'
            }
        };

    }


    description() {
        this.show = !this.show;
    }
}

window.customElements.define(PokemonCard.is, PokemonCard);