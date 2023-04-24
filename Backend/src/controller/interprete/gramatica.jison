/* Definicion Léxica */
%lex

%options case_insensitive
%x string 

%%

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
"="                return "IGUAL";

//palabras reservadas
"print"            return "RPRINT"; 
"true"             return "RTRUE";
"false"            return "RFALSE";

//tipos de variables
"int"              return "RINT";
"double"           return "RDOUBLE";
"char"             return "RCHAR";
"string"           return "RSTRING";
"boolean"          return "RBOOLEAN";

//aritmeticos
"+"                return "MAS";
"-"                return "MENOS";
"*"                return "POR";
"/"                return "DIVISION";
"^"                return "POTENCIA";
"%"                return "MODULO";

/* Espacios en Blanco */
[ \r\t]+           {}
\n                 {}
(\/\/).*            {}
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] {}

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
%}

//Precedencias
%left 'MAS' 'MENOS'
%left 'POR' 'DIVISION' 'MODULO'
%left 'POTENCIA'
%right 'UMENOS'

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
    | error PCOMA
    { console.error('Este es un error sintactico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yyloc.first_column);}
;

FUNCPRINT
    : RPRINT PAIZQ EXPRESION PADER PCOMA { $$ = new Print(@1.first_line,@1.first_column,$3);}
;

INSDECLARAR
    : TIPO ID PCOMA { $$ = new Declaration($2,$1,null,@1.first_line,@1.first_column); }
    | TIPO ID IGUAL EXPRESION PCOMA { $$ = new Declaration($2,$1,$4,@1.first_line,@1.first_column); }
;

EXPRESION
    : PRIMITIVO  { $$ = $1; }
    | ACCEDERVARIABLE { $$ = $1; }
    | ARITMETICA       { $$ = $1; }
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


ACCEDERVARIABLE
    :ID         {$$ = new Acceso($1,@1.first_line,@1.first_column);}
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
;


