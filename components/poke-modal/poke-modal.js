
class PokeModal extends Polymer.Element {

    static get is() { return 'poke-modal'; }
    static get properties() {
        return {

            isOpen: {
                type: Boolean,
                value: false,
                observer: 'isOpenObserver',
                notify: true
            },

            pokemonInfo: {
                type: Object,
                value: {}
            },
            principalInformation: {
                type: Array,
                value: [],
                computed: '_getInitilaInformation(pokemonInfo)'
            },
            abilitiesList: {
                type: Array,
                value: [],
                computed: '_getAbilitiesList(pokemonInfo)'
            },
            abilitiesWithDescriptions: {
                type: Array,
                value: [],
            }

        };
    }
    isOpenObserver(value) {
        if (value) this.$.modal.style.display = 'flex';
    }


    transformText(text) {
        return text.replace('_', ' ')
    }

    _getInitilaInformation(pokemon) {
        const infoList = [];

        for (const key in pokemon) {
            if (Object.hasOwnProperty.call(pokemon, key)) {
                const value = pokemon[key];

                // Validamos si es objeto
                if (typeof value === 'object') continue;
                if (key === 'location_area_encounters') continue;

                infoList.push({ key: this.transformText(key), value });
            }
        }
        return infoList.sort((a, b) => {
            if (a.key > b.key) {
                return 1;
            }
            if (a.key < b.key) {
                return -1;
            }
            return 0;
        });
    }

    _getAbilitiesList(pokemon) {
        const { abilities, name } = pokemon;

        if (!abilities) return [];

        //Filtro solo para obtener la informacion necesaria
        let abilitiesList = abilities.map((abiliti) => {
            const { ability } = abiliti;
            return ability;
        });

        return abilitiesList;

    }

    closeModal() {
        this.$.modal.style.display = 'none';
        this.isOpen = false;
    }

}

window.customElements.define(PokeModal.is, PokeModal);