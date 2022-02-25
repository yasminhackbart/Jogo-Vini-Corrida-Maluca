class player{

    constructor(){
         this.numeroJ = null;
         this.distancia = 0;
         this.name = null;
         this.rank = null;
        
      
       
    }

    getCount(){
        
        var bancodados = database.ref('playerCount');
        bancodados.on("value",(data)=>{
            playerCount = data.val();

        })

    }

    updateCount(contagem){

        database.ref('/').update({
            playerCount:contagem
        })
        
    }

    update(){
        var nomelugar = "Jogadores/Jogador" + this.numeroJ;
        database.ref(nomelugar).set({
            name:this.name,
            distancia:this.distancia
        });

        
        //console.log(nomelugar);
    }

    static pegainf(){
        var inf = database.ref('Jogadores');
        inf.on("value",(data)=>{
            jogadores=data.val();
        })
       // console.log(jogadores);
    }

    getCarsAtEnd(){
        database.ref('CarsAtEnd').on("value",(data)=>{
          this.rank = data.val();
        })
      }

      static updateCarsAtEnd(rank){
        database.ref('/').update({
          CarsAtEnd: rank
        })
      }


}