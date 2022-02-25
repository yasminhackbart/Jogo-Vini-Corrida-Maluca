class form{

    constructor(){
        this.botao = createButton("ok");
        this.name = createInput("Coloque um nome legal :)");
        this.msgespera = createElement('h2');
        this.titulo = createElement('h2');
        
        this.reset = createButton("REINICIAR");

    }

    hide(){
        this.botao.hide();
        this.name.hide();
        this.msgespera.hide();
    }


    display(){
        this.titulo.html("Corrida Maluca");
        this.titulo.position(displayWidth/2-150,5);

        this.name.position(displayWidth/2-150,300);

        this.botao.position(displayWidth/2-80,350);

        this.reset.position(100,50);

        
        this.botao.mousePressed(()=>{
            this.name.hide();
            this.botao.hide();

            Jogador.name = this.name.value();
            playerCount += 1;
            Jogador.numeroJ = playerCount;

            
            Jogador.update();
            Jogador.updateCount(playerCount);

            this.msgespera.html("Esperando todos os jogadores")
            this.msgespera.position(displayWidth/2-200,300);
        })

        this.reset.mousePressed(()=>{
            Jogador.updateCount(0);
            estados.update(0);
        })
    }
}