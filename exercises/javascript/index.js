import matriculas from "./data/matricula.json" with {typ: "json"}

const copiaMatriculas = structuredClone(matriculas);

const matriculasPorPronvincia = object.groupBy(copiaMatriculas,matriculas => matriculasPorPronvincia);
console.table(matriculasPorPronvincia);

console.log("=============Matriculas por provincia==============");
console.log(matriculasPorPronvincia);
console.log("============================================")

console.log("==============Nr de Matriculas por provincia e sua %");


for (const [provincia,matricula] of object.entries(matriculasPorPronvincia)) {
    const nrmatricula = matricula.lenght;
    const percentagem = (nrmatricula / copiaMatriculas.lenght) * 100;
    console.log ('provincia: ${provincia} | Nr de Matriculas: $ { nrMatriculas: ${nrMatriculas} |percentagem: ${percentagem}');
}

console.log("===========Matriculas por mes ================")
const arrayMatriculasPorProvincia = object.entries(matriculasPorPronvincia);
const matriculasPorMes