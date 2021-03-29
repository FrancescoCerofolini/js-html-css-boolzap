var app = new Vue({
    el: '#root',
    data: {
    contattoCliccato: 0,
    utenteMsg:'',
    rispostaPc:'ok',
    cerca:'',


contacts: [
	{
		name: 'Giorgio',
		avatar: '_1',
		visible: true,
		messages: [
			{
				date: '24/03/2021 15:12:55',
				text: 'Hai portato a spasso il cane?',
				status: 'sent'
			},
			{
				date: '24/03/2021 15:23:00',
				text: 'Ricordati di dargli da mangiare',
				status: 'sent'
			},
			{
				date: '24/03/2021 16:54:22',
				text: 'Tutto fatto!',
				status: 'received'
			}
		],
	},
	{
		name: 'Luca',
		avatar: '_2',
		visible: true,
		messages: [
			{
				date: '25/03/2021 16:30:00',
				text: 'Ciao come stai?',
				status: 'sent'
			},
			{
				date: '25/03/2021 16:30:55',
				text: 'Bene grazie! Stasera ci vediamo?',
				status: 'received'
			},
			{
				date: '25/03/2021 16:35:00',
				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
				status: 'sent'
			}
		],
	},
	{
		name: 'Beppe',
		avatar: '_3',
		visible: true,
		messages: [
			{
				date: '26/03/2021 10:10:40',
				text: 'Che si va a funghi? Son scappi i prugnoli',
				status: 'received'
			},
			{
				date: '26/03/2021 10:20:10',
				text: 'Sicuro di non aver sbagliato chat?',
				status: 'sent'
			},
			{
				date: '26/03/2021 16:15:22',
				text: 'Ah scusa!',
				status: 'received'
			}
		],
	},
	{
		name: 'Chiara',
		avatar: '_4',
		visible: true,
		messages: [
			{
				date: '24/03/2021 15:30:55',
				text: 'Lo sai che ha aperto una nuova pizzeria?',
				status: 'sent'
			},
			{
				date: '24/03/2021 15:50:00',
				text: 'Si, ma preferirei andare al cinema',
				status: 'received'
			}
		],

	},
 ]
 },
 methods:{
 // funzione che mi gestisce l ultimo accesso del contatto
 ultimoAccesso: function(index){
   const messages = this.contacts[index].messages
   const lastIndex = messages.length -1
   const lastDate = messages[lastIndex].date
   return lastDate;
 },
 ultimoAccessoNoncliccato: function(index){
   const messages = this.contacts[index].messages
   const lastIndex = messages.length -1
   const lastDate = messages[lastIndex].date
   return lastDate;
 },


 // 1funzione che mi aggiorna il contatto cliccato
  cambiaContatto:function(index) {
    this.contattoCliccato = index;
    console.log(this.contattoCliccato);
  },
  // 2funzione che pusha all interno dell array un nuovo oggetto in questo caso una mia frase
  addMsg:function(){
    this.contacts[this.contattoCliccato].messages.push({date:'24/03/2021 15:30:55', text:this.utenteMsg, status:'sent'});
    // dopo ogni volta che scrivo qualcosa resetto
    this.utenteMsg='';

  // dopo un secondo qualcuno risponde(il pc ) sempre nella stessa funzione
  // NOTA IMPORTANTE se non avessi l arrow fun non avrebbe funzionato perche non leggeva l oggetto a casua degli scope . se avessi gestito con i let gli oggetti quindi inserire tutte le informazioni nei let avrei potuto gestire il set timeout senza l arrow fun
    setTimeout(()=>{
    this.contacts[this.contattoCliccato].messages.push({date:'24/03/2021 15:30:55', text:this.rispostaPc, status:'received'});

  },1000)


 },

 // 3funzione quando clicco sull imput cerca utente deve mostrarmi sono l utentecercato, e dove li cerca ? ovviamente nei contact.name e come li vede tutti ? li ciclo con un foreach

 inputSearch:function(){
  this.contacts.forEach((element) => {
    // assegno delle varibaili senno è troppo lungo il codice
    let utente = element.name.toLowerCase();
    let utenteCercato = this.cerca.toLowerCase();
    // se l utente che cerco nel l imput inizia con una lettera dell utente che ho in contacts me lo renderà visibile
    if (utente.startsWith(utenteCercato)) {
       element.visible = true;
       // altrimenti no
    }else {
      element.visible = false;
    }
  });


 }


}
});