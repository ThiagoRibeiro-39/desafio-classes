class SeusHerois{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;

    }

    atacar(){
        const ataques = {
            Mago: 'Magia',
            Guerreiro: 'Espada',
            Monge: 'Artes Marciais',
            Ninja: 'Shuriken',
            Bruxa: 'Magia',
        };
        
        let ataque = ataques[this.tipo] || 'um ataque desconhecido';
                
        //verifica se o nome é feminino
        if (this.nome.toLowerCase() === 'helena') {
            console.log(`A ${this.tipo} ${this.nome} atacou usando ${ataque}!`);
        } else {
            console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}!`);
      }

    }
}

   const herois = [
    new SeusHerois('Hermes' , 3500, 'Mago'),
    new SeusHerois('Helena', 1800,'Bruxa'),
    new SeusHerois('Makulelê', 325, 'Guerreiro'),
    new SeusHerois('Sidarta', 2300, 'Monge'),
    new SeusHerois('Bruce', 250, 'Ninja'),
   ];

   //função para escolher aleatóriamente um herói
   function escolherAleatoriamente(){
    const indiceAleatorio = Math.floor(Math.random() * herois.length);
    return herois[indiceAleatorio];
   }

   const heroiAleatorio = escolherAleatoriamente();
   heroiAleatorio.atacar();