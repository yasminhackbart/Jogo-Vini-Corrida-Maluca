class estadodojogo{
    
    constructor(){
        this.title = createElement('h1');
        this.result = createElement('h2');
        this.result1 = createElement('h2');
    }

    getState(){
        var bancodados = database.ref('gameState');
        bancodados.on("value",function(data){
            gameState = data.val()

        })
    }

    update(estado){
        database.ref('/').update({
            gameState:estado
        });
    }

    async start(){
        if (gameState == 0){
            Jogador = new player();

            var valor = await database.ref('playerCount').once("value");
            if (valor.exists()){
                 playerCount = valor.val();
                 Jogador.getCount();
               
            } else {
                playerCount = 0;
            }

            formulário = new form();
            formulário.display(playerCount);
        }

        car1 = createSprite(430,670);
        car1.addImage("car1",car1img);

        car2 = createSprite(670,670);
        car2.addImage("car2",car2img);

        car3 = createSprite(950,670);
        car3.addImage("car3",car3img);

        car4 = createSprite(1200,670);
        car4.addImage("car4",car4img);

        cars = [car1,car2,car3,car4];

    }

    play(){
        text("Começando...", 160,230) 
         formulário.hide();
         
         player.pegainf();
       
        if(jogadores !== undefined){
            image(ruaimg, 0, -displayHeight*4.2 ,displayWidth , displayHeight*5);
            
            
            //enumeracao
            var index = 0;
            var x=430;
            var y=670;

            for(var z in jogadores){
                index = index + 1;
                //console.log(cars)
               x = x + 200;
                y = displayHeight - jogadores[z].distancia;
                
                //console.log(cars[index-1].x)
                //for(var i=0;i<cars.length;i++){
                //
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                //}
                //console.log(index, jogadores.numeroJ);

                if (index === Jogador.numeroJ){
                    stroke(10);
                    fill("red");
                    ellipse(x,y,60,60);
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                  }

            }
            
             
        };
        
        if (keyDown("space") && Jogador.numeroJ !==null){
            Jogador.distancia += 10
            Jogador.update();
           // console.log(Jogador.distancia)
        }
        if(Jogador.distancia > 3700){
            gameState = 2;
            Jogador.rank +=1
            player.updateCarsAtEnd(Jogador.rank)
          }
         

         
    }
    end(){
        console.log("Game Ended");
        console.log(Jogador.rank);
        this.title.html("Ranking");
        this.title.position(displayWidth/2 - 600, displayHeight/2-100);
        for(var plr in jogadores){
            console.log("oi")
          textSize(15);
          this.result.html("O vencedor é:" + jogadores[plr].name)
          this.result.position(displayWidth/2 - 600, displayHeight/2)
        }
        
     
    
      }

}