/* Definicion Léxica */
%lex

%options case-insensitive
%x string 

%%

/* Espacios en Blanco */
[ \r\t]+           {}
\n                 {}
(\/\/).*            {}
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] {}

//simbolos
";"                return 'PCOMA';
"("                return 'PAIZQ';
")"                return 'PADER';
"."                return "PUNTO";
":"                return "DOSPUNTOS";
","                return "COMA";
"["                return "CORIZQ";
"]"                return "CORDER";
"{"                return "LLAVEIZQ";
"}"                return "LLAVEDER";
"=="               return "IGUALIGUAL";
"<="               return "MENORIGUAL";
">="               return "MAYORIGUAL";
"++"               return "INCREMENTO";
"--"               return "DECREMENTO";
"="                return "IGUAL";

//palabras reservadas
"print"            return "RPRINT"; 
"true"             return "RTRUE";
"false"            return "RFALSE";
"if"               return "RIF";
"else"             return "RELSE";
"while"            return "RWHILE";
"main"             return "RMAIN";
"for"              return "RFOR";
"do"               return "RDO";
"toLower"          return "RTOLOWER";
"toUpper"          return "RTOUPPER";
"round"            return "RROUND";
"truncate"         return "RTRUNCATE";
"length"           return "RLENGTH";
"typeof"           return "RTYPEOF";
"toString"         return "RTOSTRING";
"return"           return "RRETURN";
"continue"         return "RCONTINUE";
"break"            return "RBREAK";

//tipos de variables
"int"              return "RINT";
"double"           return "RDOUBLE";
"char"             return "RCHAR";
"string"           return "RSTRING";
"boolean"          return "RBOOLEAN";

//tipo funcion
"void"              return "RVOID";

//aritmeticos
"+"                return "MAS";
"-"                return "MENOS";
"*"                return "POR";
"/"                return "DIVISION";
"^"                return "POTENCIA";
"%"                return "MODULO";

//relacionales

"!="               return "DIFERENTE";
"<"                return "MENORQUE";
">"                return "MAYORQUE";


//Logicos
"&&"               return "AND";
"||"               return "OR";
"!"                return "NOT";



[a-zA-Z][a-zA-Z0-9_]*   return "ID";
[0-9]+("."[0-9]+)\b     return "DECIMAL";
[0-9]+\b                return "ENTERO";
\'((\\\')|[^\n\'])*\'   {yytext = yytext.substr(1,yyleng-2);return 'CARACTER';}
["]                     {cadena = ""; this.begin("string");}
<string>[^"\\]+         {cadena += yytext;}
<string>"\\\""           {cadena += "\"";}
<string>"\\n"           {cadena += "\n";}
<string>"\\t"           {cadena += "\t";}
<string>"\\\\"          {cadena += "\\";}
<string>"\\\'"          {cadena += "\'";}
<string>["]             {yytext=cadena; this.popState(); return 'CADENA';}

<<EOF>>                return "EOF";

. {console.error('Este es un error Léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yyloc.first_column);}
/lex


%{
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
    const {InWhile} = require("./Instructions/InsWhile");
    const {InsDoWhile} = require("./Instructions/InsDoWhile");
    const {InsMain} = require("./Instructions/Main");
    const {AsignarValor} = require("./Instructions/AsignarValor");
    const {Incremento} = require("./Expressions/Incremento");
    const {Decremento} = require("./Expressions/Decremento");
    const {ToLowerUpper} = require("./Expressions/ToLowerUpper");
    const {Round} = require("./Expressions/Round");
    const {Truncate} = require("./Expressions/Truncate");
    const {Length} = require("./Expressions/Length");
    const {TypeOf} = require("./Expressions/TypeOf");
    const {ToString} = require("./Expressions/ToString");
    const {EReturn} = require("./Expressions/EReturn");
    const {IContinue} = require("./Instructions/IContinue");
    const {IBreak} = require("./Instructions/IBreak");
    const {InsFor} = require("./Instructions/InsFor");
%}

//Precedencias
%left 'DECREMENTO' 'INCREMENTO'
%left 'POTENCIA'
%left 'OR'
%left 'AND'
%left 'DIFERENTE' 'MENORQUE' 'MAYORQUE' 'MENORIGUAL' 'MAYORIGUAL' 'IGUALIGUAL'
%left 'MAS' 'MENOS'
%left 'POR' 'DIVISION' 'MODULO'
%left 'CORIZQ' 'CORDER'
%right 'UMENOS' 'NOT'
%start INICIO


%%

INICIO 
    : INSTRUCCIONES EOF {return $1;}
;

INSTRUCCIONES
    : INSTRUCCIONES INSTRUCCION { $1.push($2); $$ = $1;} 
    | INSTRUCCION { $$ = [$1];}
;


INSTRUCCION
    : FUNCPRINT { $$ = $1; }
    | INSDECLARAR { $$ = $1; }
    | INSASIGNAR { $$ = $1; }
    | LLAMARFUNCION PCOMA { $$ = $1; }
    | GUARDARFUNCION { $$ = $1; }
    | INSTIF { $$ = $1; }
    | INSWHILE { $$ = $1; }
    | INSDOWHILE { $$ = $1; }
    | INSFOR { $$ = $1; }
    | INCREMENTODECREMENTO PCOMA { $$ = $1; }
    | RETORNO PCOMA { $$ = $1; }
    | RCONTINUE PCOMA { $$ = new IContinue(@1.first_line,@1.first_column); }
    | RBREAK PCOMA { $$ = new IBreak(@1.first_line,@1.first_column); }
    | RMAIN LLAMARFUNCION PCOMA{ $$ = new InsMain($2,@1.first_line,@1.first_column); }
    //| error PCOMA
    //{ console.error('Este es un error sintactico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yyloc.first_column);}
;

FUNCPRINT
    : RPRINT PAIZQ EXPRESION PADER PCOMA { $$ = new Print(@1.first_line,@1.first_column,$3);}
;

INSDECLARAR
    : TIPO ID PCOMA { $$ = new Declaration($2,$1,null,@1.first_line,@1.first_column); }
    | TIPO ID IGUAL EXPRESION PCOMA { $$ = new Declaration($2,$1,$4,@1.first_line,@1.first_column); }
;

INSASIGNAR
    : ID IGUAL EXPRESION PCOMA { $$ = new AsignarValor($1,$3,@1.first_line,@1.first_column); }
;

ASIGNARFOR
    : ID IGUAL EXPRESION { $$ = new AsignarValor($1,$3,@1.first_line,@1.first_column); }
;

GUARDARFUNCION
    : TIPO ID PAIZQ PADER INSSTATEMENT { $$ = new Funcion($1,$2,[],$5,@1.first_line,@1.first_column); }
    | TIPO ID PAIZQ PARAMETROS PADER INSSTATEMENT { $$ = new Funcion($1,$2,$4,$6,@1.first_line,@1.first_column); }
;

INSTIF
    :RIF PAIZQ EXPRESION PADER INSSTATEMENT INSTELSE {$$ = new InsIf($3,$5,$6,@1.first_line,@1.first_column);}
;

INSTELSE
    :RELSE INSSTATEMENT { $$ = $2; }
    |RELSE INSTIF   { $$ = $2; }
    |               { $$ = null;}
;

INSWHILE
    : RWHILE PAIZQ EXPRESION PADER INSSTATEMENT { $$ = new InWhile($3,$5,@1.first_line,@1.first_column); }
;

INSDOWHILE
    : RDO INSSTATEMENT RWHILE PAIZQ EXPRESION PADER PCOMA { $$ = new InsDoWhile($5,$2,@1.first_line,@1.first_column); }
;

INSFOR
    : RFOR PAIZQ INSDECLARAR EXPRESION PCOMA EXPRESION PADER INSSTATEMENT { $$ = new InsFor($3,$4,$6,$8,@1.first_line,@1.first_column); }
    | RFOR PAIZQ INSASIGNAR EXPRESION PCOMA EXPRESION PADER INSSTATEMENT { $$ = new InsFor($3,$4,$6,$8,@1.first_line,@1.first_column); }
    | RFOR PAIZQ INSDECLARAR EXPRESION PCOMA ASIGNARFOR PADER INSSTATEMENT { $$ = new InsFor($3,$4,$6,$8,@1.first_line,@1.first_column); }
    | RFOR PAIZQ INSASIGNAR EXPRESION PCOMA ASIGNARFOR PADER INSSTATEMENT { $$ = new InsFor($3,$4,$6,$8,@1.first_line,@1.first_column); }
;

RETORNO
    : RRETURN {$$ = new EReturn(null,@1.first_line,@1.first_column); }
    | RRETURN EXPRESION {$$ = new EReturn($2,@1.first_line,@1.first_column); }
;

INSSTATEMENT
    : LLAVEIZQ INSTRUCCIONES LLAVEDER   { $$ = new Statement($2,@1.first_line,@1.first_column); }
;

//Parametros
PARAMETROS
    : PARAMETROS COMA PARAMETRO { $1.push($3); $$ = $1;}
    | PARAMETRO                 { $$ = [$1];}
;

PARAMETRO
    : TIPO ID { $$ = new Parametros($1,$2,@1.first_line,@1.first_column); }
;

EXPRESION
    : PRIMITIVO  { $$ = $1; }
    | RELACIONAL       { $$ = $1; }
    | LOGICO       { $$ = $1; }
    | ACCEDERVARIABLE { $$ = $1; }
    |INCREMENTODECREMENTO { $$ = $1; }
    | ARITMETICA       { $$ = $1; }
    | LLAMARFUNCION { $$ = $1; }
    | TOLOWERUPPER     { $$ = $1; }
    | REDONDEO         { $$ = $1; }
    | TRUNCAR          { $$ = $1; }
    | ELENGTH          { $$ = $1; }
    | ETYPEOF          { $$ = $1; }
    | ETOSTRING        { $$ = $1; }
    |PAIZQ EXPRESION PADER { $$ = $2; }
    
;

LLAMARFUNCION
    : ID PAIZQ PADER { $$ = new LlamadaFuncion($1,[],@1.first_line,@1.first_column); }
    | ID PAIZQ ARGUMENTOS PADER { $$ = new LlamadaFuncion($1,$3,@1.first_line,@1.first_column); }
;


ARGUMENTOS
    : ARGUMENTOS COMA EXPRESION  { $1.push($3); $$ = $1;}
    | EXPRESION { $$ = [$1];}
;

//OPERACIONES ARITMETICAS
ARITMETICA
    : EXPRESION MAS EXPRESION   { $$ = new Aritmetica($1,$3,tipoAritmetica.SUMA,@1.first_line,@1.first_column); }
    | EXPRESION MENOS EXPRESION { $$ = new Aritmetica($1,$3,tipoAritmetica.RESTA,@1.first_line,@1.first_column); }
    | EXPRESION POR EXPRESION   { $$ = new Aritmetica($1,$3,tipoAritmetica.MULTIPLICACION,@1.first_line,@1.first_column); }
    | EXPRESION DIVISION EXPRESION  { $$ = new Aritmetica($1,$3,tipoAritmetica.DIVISION,@1.first_line,@1.first_column); }
    | EXPRESION POTENCIA EXPRESION  { $$ = new Aritmetica($1,$3,tipoAritmetica.POTENCIA,@1.first_line,@1.first_column); }
    | EXPRESION MODULO EXPRESION    { $$ = new Aritmetica($1,$3,tipoAritmetica.MODULO,@1.first_line,@1.first_column); }
    | MENOS EXPRESION %prec UMENOS  { $$ = new Aritmetica($2,$2,tipoAritmetica.MENOSUNARIO,@1.first_line,@1.first_column); }
;

RELACIONAL
    : EXPRESION IGUALIGUAL EXPRESION { $$ = new Relacional($1,$3,tipoRelacional.IGUALACION,@1.first_line,@1.first_column); }
    | EXPRESION DIFERENTE EXPRESION  { $$ = new Relacional($1,$3,tipoRelacional.DIFERENTE,@1.first_line,@1.first_column); }
    | EXPRESION MENORQUE EXPRESION   { $$ = new Relacional($1,$3,tipoRelacional.MENORQUE,@1.first_line,@1.first_column); }
    | EXPRESION MENORIGUAL EXPRESION { $$ = new Relacional($1,$3,tipoRelacional.MENORIGUAL,@1.first_line,@1.first_column); }
    | EXPRESION MAYORQUE EXPRESION   { $$ = new Relacional($1,$3,tipoRelacional.MAYORQUE,@1.first_line,@1.first_column); }
    | EXPRESION MAYORIGUAL EXPRESION { $$ = new Relacional($1,$3,tipoRelacional.MAYORIGUAL,@1.first_line,@1.first_column); }

;

LOGICO
    : EXPRESION AND EXPRESION { $$ = new Logica($1,$3,tipoLogico.AND,@1.first_line,@1.first_column); }
    | EXPRESION OR EXPRESION  { $$ = new Logica($1,$3,tipoLogico.OR,@1.first_line,@1.first_column); }
    | NOT EXPRESION %prec NOT { $$ = new Logica($2,$2,tipoLogico.NOT,@1.first_line,@1.first_column); }
;

ACCEDERVARIABLE
    :ID         {$$ = new Acceso($1,@1.first_line,@1.first_column);}
;

INCREMENTODECREMENTO
    : ID INCREMENTO {$$ = new Incremento($1,@1.first_line,@1.first_column); }
    | ID DECREMENTO {$$ = new Decremento($1,@1.first_line,@1.first_column); }
;

TOLOWERUPPER
    : RTOLOWER PAIZQ EXPRESION PADER {$$ = new ToLowerUpper(1,$3,@1.first_line,@1.first_column); }
    | RTOUPPER PAIZQ EXPRESION PADER {$$ = new ToLowerUpper(2,$3,@1.first_line,@1.first_column); }
;

REDONDEO
    : RROUND PAIZQ EXPRESION PADER {$$ = new Round($3,@1.first_line,@1.first_column); }
;

TRUNCAR
    : RTRUNCATE PAIZQ EXPRESION PADER {$$ = new Truncate($3,@1.first_line,@1.first_column); }
;

ELENGTH
    : RLENGTH PAIZQ EXPRESION PADER {$$ = new Length($3,@1.first_line,@1.first_column); }
;

ETYPEOF
    : RTYPEOF PAIZQ EXPRESION PADER {$$ = new TypeOf($3,@1.first_line,@1.first_column); }
;

ETOSTRING
    : RTOSTRING PAIZQ EXPRESION PADER {$$ = new ToString($3,@1.first_line,@1.first_column); }
;

PRIMITIVO
    : ENTERO    {$$ = new Primitivo(@1.first_line,@1.first_column,$1, tipo.INT);}
    | DECIMAL   {$$ = new Primitivo(@1.first_line,@1.first_column,$1, tipo.DOUBLE);}
    | CADENA    {$$ = new Primitivo(@1.first_line,@1.first_column,$1, tipo.STRING);}
    | CARACTER  {$$ = new Primitivo(@1.first_line,@1.first_column,$1, tipo.CHAR);}
    | RTRUE     {$$ = new Primitivo(@1.first_line,@1.first_column,$1, tipo.BOOLEAN);}
    | RFALSE    {$$ = new Primitivo(@1.first_line,@1.first_column,$1, tipo.BOOLEAN);}
;

TIPO
    : RINT      {$$ = tipo.INT;}
    | RDOUBLE   {$$ = tipo.DOUBLE;}
    | RCHAR     {$$ = tipo.CHAR;}
    | RSTRING   {$$ = tipo.STRING;}
    | RBOOLEAN  {$$ = tipo.BOOLEAN;}
    | RVOID     {$$ = tipo.VOID;}
;


