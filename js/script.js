/*Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Evitare i doppioni nella lista delle mail*/

console.log('Vue ok', Vue);
console.log('Axios ok', axios);

Vue.config.devtools = true;

const app = new Vue({
    el: '#root',
    data: {
        emailList: [],
        randomEmail: '',

    },
    methods: {
        getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then( res => {
                // this.randomEmail = res.data.response;
                // console.log(this.randomEmail)
                // return this.randomEmail;
                console.log(res.data)
                this.emailList.push(res.data.response);
                console.log(this.emailList)
            })
        }
    },
    created() {
        for (let i = 0; i < 10;i++){
            // this.emailList.push(this.getRandomEmail())
            // console.log(this.emailList)
            this.getRandomEmail();
            
        }
        
    }
})