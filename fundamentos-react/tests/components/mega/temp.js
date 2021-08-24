const INTERVALO_LIMITE_INFERIOR = 1;
const INTERVALO_LIMITE_SUPERIOR = 60;

const QUANTIDADE_SEQUENCIA = 6;

function gerarProximoNumero()
{
    return parseInt( Math.random() * ( INTERVALO_LIMITE_SUPERIOR - INTERVALO_LIMITE_INFERIOR + 1 ) ) + INTERVALO_LIMITE_INFERIOR;
}

function gerarSequenciaComMap( qtdSequencia )
{
    let novaSequencia = new Map();
    do {
        let novoNumero = gerarProximoNumero();
        novaSequencia.set( novoNumero , true );
        // console.log( novoNumero , novaSequencia.size , novaSequencia.size< TOTAL_SEQUENCIA );
    } while ( novaSequencia.size < qtdSequencia );
    // console.log( [...novaSequencia.keys()] );
}

function gerarSequenciaComSet( qtdSequencia )
{
    let novaSequencia = new Set();
    do {
        let novoNumero = gerarProximoNumero();
        novaSequencia.add( novoNumero );
        // console.log( novoNumero , novaSequencia.size , novaSequencia.size< TOTAL_SEQUENCIA );
    } while ( novaSequencia.size < qtdSequencia );
    // console.log( [...novaSequencia] );
}


function gerarSequenciaComArray( qtdSequencia )
{
    let novaSequencia = [];
    do {
        let novoNumero = gerarProximoNumero();
        if ( !novaSequencia.includes( novoNumero ) )
        {
            novaSequencia.push( novoNumero );
        }
        // console.log( novoNumero , novaSequencia.size , novaSequencia.size< TOTAL_SEQUENCIA );
    } while ( novaSequencia.length < qtdSequencia );
    // console.log( novaSequencia );
}
// gerarSequenciaComMap( 6 );
// gerarSequenciaComSet( 6 );
// gerarSequenciaComArray( 6 );
// for ( let i = 0; i++ < 10000000; ) { gerarSequenciaComMap( 6 ); }
// for ( let i = 0; i++ < 10000000; ) { gerarSequenciaComSet( 6 ); }
for ( let i = 0; i++ < 10000000; ) { gerarSequenciaComArray( 6 ); }
