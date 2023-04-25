/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,9],$V1=[1,10],$V2=[1,12],$V3=[1,13],$V4=[1,14],$V5=[1,15],$V6=[1,16],$V7=[1,17],$V8=[1,18],$V9=[2,5,13,18,22,26,56,57,58,59,60],$Va=[1,39],$Vb=[1,40],$Vc=[1,38],$Vd=[1,32],$Ve=[1,33],$Vf=[1,34],$Vg=[1,35],$Vh=[1,36],$Vi=[1,37],$Vj=[1,57],$Vk=[1,58],$Vl=[1,59],$Vm=[1,60],$Vn=[1,61],$Vo=[1,62],$Vp=[1,49],$Vq=[1,50],$Vr=[1,51],$Vs=[1,52],$Vt=[1,53],$Vu=[1,54],$Vv=[1,55],$Vw=[1,56],$Vx=[12,16,27,35,36,37,38,39,40,41,42,43,44,45,46,47,48],$Vy=[16,27],$Vz=[1,91],$VA=[12,16,27,41,42,47,48],$VB=[12,16,27,41,42,43,44,45,46,47,48],$VC=[12,16,27,35,36,41,42,43,44,45,46,47,48],$VD=[12,16,27,35,36,37,38,40,41,42,43,44,45,46,47,48];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"INSTRUCCIONES":4,"EOF":5,"INSTRUCCION":6,"FUNCPRINT":7,"INSDECLARAR":8,"LLAMARFUNCION":9,"GUARDARFUNCION":10,"INSTIF":11,"PCOMA":12,"RPRINT":13,"PAIZQ":14,"EXPRESION":15,"PADER":16,"TIPO":17,"ID":18,"IGUAL":19,"INSSTATEMENT":20,"PARAMETROS":21,"RIF":22,"INSTELSE":23,"RELSE":24,"LLAVEIZQ":25,"LLAVEDER":26,"COMA":27,"PARAMETRO":28,"PRIMITIVO":29,"RELACIONAL":30,"LOGICO":31,"ACCEDERVARIABLE":32,"ARITMETICA":33,"ARGUMENTOS":34,"MAS":35,"MENOS":36,"POR":37,"DIVISION":38,"POTENCIA":39,"MODULO":40,"IGUALIGUAL":41,"DIFERENTE":42,"MENORQUE":43,"MENORIGUAL":44,"MAYORQUE":45,"MAYORIGUAL":46,"AND":47,"OR":48,"NOT":49,"ENTERO":50,"DECIMAL":51,"CADENA":52,"CARACTER":53,"RTRUE":54,"RFALSE":55,"RINT":56,"RDOUBLE":57,"RCHAR":58,"RSTRING":59,"RBOOLEAN":60,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",12:"PCOMA",13:"RPRINT",14:"PAIZQ",16:"PADER",18:"ID",19:"IGUAL",22:"RIF",24:"RELSE",25:"LLAVEIZQ",26:"LLAVEDER",27:"COMA",35:"MAS",36:"MENOS",37:"POR",38:"DIVISION",39:"POTENCIA",40:"MODULO",41:"IGUALIGUAL",42:"DIFERENTE",43:"MENORQUE",44:"MENORIGUAL",45:"MAYORQUE",46:"MAYORIGUAL",47:"AND",48:"OR",49:"NOT",50:"ENTERO",51:"DECIMAL",52:"CADENA",53:"CARACTER",54:"RTRUE",55:"RFALSE",56:"RINT",57:"RDOUBLE",58:"RCHAR",59:"RSTRING",60:"RBOOLEAN"},
productions_: [0,[3,2],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[6,1],[6,2],[7,5],[8,3],[8,5],[10,5],[10,6],[11,6],[23,2],[23,2],[23,0],[20,3],[21,3],[21,1],[28,2],[15,1],[15,1],[15,1],[15,1],[15,1],[9,4],[9,5],[34,3],[34,1],[33,3],[33,3],[33,3],[33,3],[33,3],[33,3],[33,2],[30,3],[30,3],[30,3],[30,3],[30,3],[30,3],[31,3],[31,3],[31,2],[32,1],[29,1],[29,1],[29,1],[29,1],[29,1],[29,1],[17,1],[17,1],[17,1],[17,1],[17,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
 $$[$0-1].push($$[$0]); this.$ = $$[$0-1];
break;
case 3: case 21: case 31:
 this.$ = [$$[$0]];
break;
case 4: case 5: case 6: case 7: case 8: case 16: case 17: case 23: case 24: case 25: case 26: case 27:
 this.$ = $$[$0]; 
break;
case 9:
 console.error('Este es un error sintactico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yyloc.first_column);
break;
case 10:
 this.$ = new Print(_$[$0-4].first_line,_$[$0-4].first_column,$$[$0-2]);
break;
case 11:
 this.$ = new Declaration($$[$0-1],$$[$0-2],null,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 12:
 this.$ = new Declaration($$[$0-3],$$[$0-4],$$[$0-1],_$[$0-4].first_line,_$[$0-4].first_column); 
break;
case 13:
 this.$ = new Funcion($$[$0-4],$$[$0-3],[],$$[$0],_$[$0-4].first_line,_$[$0-4].first_column); 
break;
case 14:
 this.$ = new Funcion($$[$0-5],$$[$0-4],$$[$0-2],$$[$0],_$[$0-5].first_line,_$[$0-5].first_column); 
break;
case 15:
this.$ = new InsIf($$[$0-3],$$[$0-1],$$[$0],_$[$0-5].first_line,_$[$0-5].first_column);
break;
case 18:
 this.$ = null;
break;
case 19:
 this.$ = new Statement($$[$0-1],_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 20: case 30:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2];
break;
case 22:
 this.$ = new Parametros($$[$0-1],$$[$0],_$[$0-1].first_line,_$[$0-1].first_column); 
break;
case 28:
 this.$ = new LlamadaFuncion($$[$0-3],[],_$[$0-3].first_line,_$[$0-3].first_column); 
break;
case 29:
 this.$ = new LlamadaFuncion($$[$0-4],$$[$0-2],_$[$0-4].first_line,_$[$0-4].first_column); 
break;
case 32:
 this.$ = new Aritmetica($$[$0-2],$$[$0],tipoAritmetica.SUMA,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 33:
 this.$ = new Aritmetica($$[$0-2],$$[$0],tipoAritmetica.RESTA,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 34:
 this.$ = new Aritmetica($$[$0-2],$$[$0],tipoAritmetica.MULTIPLICACION,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 35:
 this.$ = new Aritmetica($$[$0-2],$$[$0],tipoAritmetica.DIVISION,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 36:
 this.$ = new Aritmetica($$[$0-2],$$[$0],tipoAritmetica.POTENCIA,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 37:
 this.$ = new Aritmetica($$[$0-2],$$[$0],tipoAritmetica.MODULO,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 38:
 this.$ = new Aritmetica($$[$0],$$[$0],tipoAritmetica.MENOSUNARIO,_$[$0-1].first_line,_$[$0-1].first_column); 
break;
case 39:
 this.$ = new Relacional($$[$0-2],$$[$0],tipoRelacional.IGUALACION,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 40:
 this.$ = new Relacional($$[$0-2],$$[$0],tipoRelacional.DIFERENTE,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 41:
 this.$ = new Relacional($$[$0-2],$$[$0],tipoRelacional.MENORQUE,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 42:
 this.$ = new Relacional($$[$0-2],$$[$0],tipoRelacional.MENORIGUAL,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 43:
 this.$ = new Relacional($$[$0-2],$$[$0],tipoRelacional.MAYORQUE,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 44:
 this.$ = new Relacional($$[$0-2],$$[$0],tipoRelacional.MAYORIGUAL,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 45:
 this.$ = new Logica($$[$0-2],$$[$0],tipoLogico.AND,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 46:
 this.$ = new Logica($$[$0-2],$$[$0],tipoLogico.OR,_$[$0-2].first_line,_$[$0-2].first_column); 
break;
case 47:
 this.$ = new Logica($$[$0],$$[$0],tipoLogico.NOT,_$[$0-1].first_line,_$[$0-1].first_column); 
break;
case 48:
this.$ = new Acceso($$[$0],_$[$0].first_line,_$[$0].first_column);
break;
case 49:
this.$ = new Primitivo(_$[$0].first_line,_$[$0].first_column,$$[$0], tipo.INT);
break;
case 50:
this.$ = new Primitivo(_$[$0].first_line,_$[$0].first_column,$$[$0], tipo.DOUBLE);
break;
case 51:
this.$ = new Primitivo(_$[$0].first_line,_$[$0].first_column,$$[$0], tipo.STRING);
break;
case 52:
this.$ = new Primitivo(_$[$0].first_line,_$[$0].first_column,$$[$0], tipo.CHAR);
break;
case 53: case 54:
this.$ = new Primitivo(_$[$0].first_line,_$[$0].first_column,$$[$0], tipo.BOOLEAN);
break;
case 55:
this.$ = tipo.INT;
break;
case 56:
this.$ = tipo.DOUBLE;
break;
case 57:
this.$ = tipo.CHAR;
break;
case 58:
this.$ = tipo.STRING;
break;
case 59:
this.$ = tipo.BOOLEAN;
break;
}
},
table: [{2:$V0,3:1,4:2,6:3,7:4,8:5,9:6,10:7,11:8,13:$V1,17:11,18:$V2,22:$V3,56:$V4,57:$V5,58:$V6,59:$V7,60:$V8},{1:[3]},{2:$V0,5:[1,19],6:20,7:4,8:5,9:6,10:7,11:8,13:$V1,17:11,18:$V2,22:$V3,56:$V4,57:$V5,58:$V6,59:$V7,60:$V8},o($V9,[2,3]),o($V9,[2,4]),o($V9,[2,5]),o($V9,[2,6]),o($V9,[2,7]),o($V9,[2,8]),{12:[1,21]},{14:[1,22]},{18:[1,23]},{14:[1,24]},{14:[1,25]},{18:[2,55]},{18:[2,56]},{18:[2,57]},{18:[2,58]},{18:[2,59]},{1:[2,1]},o($V9,[2,2]),o($V9,[2,9]),{15:26,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{12:[1,41],14:[1,43],19:[1,42]},{15:46,16:[1,44],18:$Va,29:27,30:28,31:29,32:30,33:31,34:45,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:47,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{16:[1,48],35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw},o($Vx,[2,23]),o($Vx,[2,24]),o($Vx,[2,25]),o($Vx,[2,26]),o($Vx,[2,27]),o($Vx,[2,49]),o($Vx,[2,50]),o($Vx,[2,51]),o($Vx,[2,52]),o($Vx,[2,53]),o($Vx,[2,54]),{15:63,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},o($Vx,[2,48]),{15:64,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},o($V9,[2,11]),{15:65,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{16:[1,66],17:69,21:67,28:68,56:$V4,57:$V5,58:$V6,59:$V7,60:$V8},{12:[1,70]},{16:[1,71],27:[1,72]},o($Vy,[2,31],{35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw}),{16:[1,73],35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw},{12:[1,74]},{15:75,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:76,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:77,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:78,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:79,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:80,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:81,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:82,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:83,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:84,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:85,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:86,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:87,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{15:88,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},o($Vx,[2,47]),o($Vx,[2,38]),{12:[1,89],35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw},{20:90,25:$Vz},{16:[1,92],27:[1,93]},o($Vy,[2,21]),{18:[1,94]},o($V9,[2,28]),{12:[1,95]},{15:96,18:$Va,29:27,30:28,31:29,32:30,33:31,36:$Vb,49:$Vc,50:$Vd,51:$Ve,52:$Vf,53:$Vg,54:$Vh,55:$Vi},{20:97,25:$Vz},o($V9,[2,10]),o($VA,[2,39],{35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,43:$Vr,44:$Vs,45:$Vt,46:$Vu}),o($VA,[2,40],{35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,43:$Vr,44:$Vs,45:$Vt,46:$Vu}),o($VB,[2,41],{35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo}),o($VB,[2,42],{35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo}),o($VB,[2,43],{35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo}),o($VB,[2,44],{35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo}),o([12,16,27,47,48],[2,45],{35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu}),o([12,16,27,48],[2,46],{35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv}),o($VC,[2,32],{37:$Vl,38:$Vm,39:$Vn,40:$Vo}),o($VC,[2,33],{37:$Vl,38:$Vm,39:$Vn,40:$Vo}),o($VD,[2,34],{39:$Vn}),o($VD,[2,35],{39:$Vn}),o($Vx,[2,36]),o($VD,[2,37],{39:$Vn}),o($V9,[2,12]),o($V9,[2,13]),{2:$V0,4:98,6:3,7:4,8:5,9:6,10:7,11:8,13:$V1,17:11,18:$V2,22:$V3,56:$V4,57:$V5,58:$V6,59:$V7,60:$V8},{20:99,25:$Vz},{17:69,28:100,56:$V4,57:$V5,58:$V6,59:$V7,60:$V8},o($Vy,[2,22]),o($V9,[2,29]),o($Vy,[2,30],{35:$Vj,36:$Vk,37:$Vl,38:$Vm,39:$Vn,40:$Vo,41:$Vp,42:$Vq,43:$Vr,44:$Vs,45:$Vt,46:$Vu,47:$Vv,48:$Vw}),o($V9,[2,18],{23:101,24:[1,102]}),{2:$V0,6:20,7:4,8:5,9:6,10:7,11:8,13:$V1,17:11,18:$V2,22:$V3,26:[1,103],56:$V4,57:$V5,58:$V6,59:$V7,60:$V8},o($V9,[2,14]),o($Vy,[2,20]),o($V9,[2,15]),{11:105,20:104,22:$V3,25:$Vz},o([2,5,13,18,22,24,26,56,57,58,59,60],[2,19]),o($V9,[2,16]),o($V9,[2,17])],
defaultActions: {14:[2,55],15:[2,56],16:[2,57],17:[2,58],18:[2,59],19:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse (input) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack = [null], // semantic value stack
        lstack = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;

    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }

    function popStack (n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token;
        token = lexer.lex() || EOF;
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth;
            var errStr = '';

            // Return the rule stack depth where the nearest error rule can be found.
            // Return FALSE when no error recovery rule was found.
            function locateNearestErrorRecoveryRule(state) {
                var stack_probe = stack.length - 1;
                var depth = 0;

                // try to recover from error
                for(;;) {
                    // check for error recovery rule in this state
                    if ((TERROR.toString()) in table[state]) {
                        return depth;
                    }
                    if (state === 0 || stack_probe < 2) {
                        return false; // No suitable error recovery rule available.
                    }
                    stack_probe -= 2; // popStack(1): [symbol, action]
                    state = stack[stack_probe];
                    ++depth;
                }
            }

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol] || symbol)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol] || symbol)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== false)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === false) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth);

            preErrorSymbol = (symbol == TERROR ? null : symbol); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol);
                vstack.push(lexer.yytext);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext;
                    yylineno = lexer.yylineno;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = this.productions_[action[1]][1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range[0], lstack[lstack.length-1].range[1]];
                }
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push(this.productions_[action[1]][0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;
}};

    const {Print} = require("./Instructions/Print");
    const {Primitivo} = require("./Expressions/Primitivo");
    const {tipo} = require("./abstract/Return");
    const {Declaration} = require("./Instructions/Declaration");
    const {Acceso} = require("./Expressions/Acceso");
    const {Aritmetica} = require("./Expressions/Aritmetica");
    const {tipoAritmetica} = require("./utils/TipoAritmetica");
    const {Statement} = require("./Instructions/Statement");
    const {Funcion} = require("./Instructions/Funcion");
    const {Parametros} = require("./Expressions/Parametros");
    const {LlamadaFuncion} = require("./Expressions/LlamadaFuncion");
    const {Relacional} = require("./Expressions/Relacional");
    const {tipoRelacional} = require("./utils/TipoRelacional");
    const {Logica} = require("./Expressions/Logica");
    const {tipoLogico} = require("./utils/TipoLogico");
    const {InsIf} = require("./Instructions/InsIf");
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case_insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 12;
break;
case 1:return 14;
break;
case 2:return 16;
break;
case 3:return "PUNTO";
break;
case 4:return "DOSPUNTOS";
break;
case 5:return "COMA";
break;
case 6:return "CORIZQ";
break;
case 7:return "CORDER";
break;
case 8:return "LLAVEIZQ";
break;
case 9:return "LLAVEDER";
break;
case 10:return "IGUALIGUAL";
break;
case 11:return "MENORIGUAL";
break;
case 12:return "MAYORIGUAL";
break;
case 13:return "IGUAL";
break;
case 14:return "RPRINT"; 
break;
case 15:return "RTRUE";
break;
case 16:return "RFALSE";
break;
case 17:return "RIF";
break;
case 18:return "RELSE";
break;
case 19:return "RINT";
break;
case 20:return "RDOUBLE";
break;
case 21:return "RCHAR";
break;
case 22:return "RSTRING";
break;
case 23:return "RBOOLEAN";
break;
case 24:return "MAS";
break;
case 25:return "MENOS";
break;
case 26:return "POR";
break;
case 27:return "DIVISION";
break;
case 28:return "POTENCIA";
break;
case 29:return "MODULO";
break;
case 30:return "DIFERENTE";
break;
case 31:return "MENORQUE";
break;
case 32:return "MAYORQUE";
break;
case 33:return "AND";
break;
case 34:return "OR";
break;
case 35:return "NOT";
break;
case 36:
break;
case 37:
break;
case 38:
break;
case 39:
break;
case 40:return "ID";
break;
case 41:return "DECIMAL";
break;
case 42:return "ENTERO";
break;
case 43:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);return 53;
break;
case 44:cadena = ""; this.begin("string");
break;
case 45:cadena += yy_.yytext;
break;
case 46:cadena += "\"";
break;
case 47:cadena += "\n";
break;
case 48:cadena += "\t";
break;
case 49:cadena += "\\";
break;
case 50:cadena += "\'";
break;
case 51:yy_.yytext=cadena; this.popState(); return 52;
break;
case 52:return "EOF";
break;
case 53:console.error('Este es un error Léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yyloc.first_column);
break;
}
},
rules: [/^(?:;)/,/^(?:\()/,/^(?:\))/,/^(?:\.)/,/^(?::)/,/^(?:,)/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:==)/,/^(?:<=)/,/^(?:>=)/,/^(?:=)/,/^(?:print\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:int\b)/,/^(?:double\b)/,/^(?:char\b)/,/^(?:string\b)/,/^(?:boolean\b)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:\^)/,/^(?:%)/,/^(?:!=)/,/^(?:<)/,/^(?:>)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:[ \r\t]+)/,/^(?:\n)/,/^(?:(\/\/).*)/,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/,/^(?:[a-zA-Z][a-zA-Z0-9_]*)/,/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:[0-9]+\b)/,/^(?:'((\\')|[^\n\'])*')/,/^(?:["])/,/^(?:[^"\\]+)/,/^(?:\\")/,/^(?:\\n)/,/^(?:\\t)/,/^(?:\\\\)/,/^(?:\\\\')/,/^(?:["])/,/^(?:$)/,/^(?:.)/],
conditions: {"string":{"rules":[45,46,47,48,49,50,51],"inclusive":false},"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,52,53],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}